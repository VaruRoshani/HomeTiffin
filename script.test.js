const {
  menuItems, initialCartItems, icon, money,
  getCart, cartCount, renderHeader, renderCart, renderOrders, renderAuth, renderTrackResult
} = require('./script');

beforeEach(() => {
  localStorage.clear();
  document.body.innerHTML = '';
});

describe('money()', () => {
  test('rupee symbol ke saath format karta hai', () => {
    expect(money(180)).toContain('₹');
    expect(money(180)).toContain('180');
  });
  test('hazaar par comma lagata hai (Indian format)', () => {
    expect(money(1500)).toContain('1,500');
  });
});

describe('icon()', () => {
  test('known icon ka svg deta hai', () => {
    expect(icon('bag')).toContain('<svg');
  });
  test('unknown naam par default sparkles icon deta hai', () => {
    expect(icon('xyz')).toContain(icon('sparkles'));
  });
});

describe('menuItems data', () => {
  test('9 items hain', () => {
    expect(menuItems).toHaveLength(9);
  });
  test('har item ki price positive hai', () => {
    menuItems.forEach((item) => expect(item.price).toBeGreaterThan(0));
  });
  test('har item ki id unique hai', () => {
    const ids = menuItems.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
  test('diet sirf Veg ya Non-Veg hai', () => {
    menuItems.forEach((i) => expect(['Veg', 'Non-Veg']).toContain(i.diet));
  });
});

describe('getCart()', () => {
  test('localStorage khali ho to initial cart deta hai', () => {
    expect(getCart()).toEqual(initialCartItems);
  });
  test('saved valid cart wapas deta hai', () => {
    localStorage.setItem('home-tiffin-cart', JSON.stringify([{ id: 'mini-thali', quantity: 3 }]));
    expect(getCart()).toEqual([{ id: 'mini-thali', quantity: 3 }]);
  });
  test('galat id aur galat quantity hata deta hai', () => {
    localStorage.setItem('home-tiffin-cart', JSON.stringify([
      { id: 'fake-item', quantity: 1 },
      { id: 'mini-thali', quantity: 0 },
      { id: 'mini-thali', quantity: -2 },
      { id: 'egg-curry', quantity: 2 }
    ]));
    expect(getCart()).toEqual([{ id: 'egg-curry', quantity: 2 }]);
  });
  test('corrupt JSON par initial cart deta hai', () => {
    localStorage.setItem('home-tiffin-cart', '{bad json');
    expect(getCart()).toEqual(initialCartItems);
  });
});

describe('cartCount()', () => {
  test('shuru me initial cart ki total quantity deta hai', () => {
    expect(cartCount()).toBe(2);
  });
});

describe('renderHeader()', () => {
  beforeEach(() => {
    document.body.innerHTML = '<header id="site-header"></header>';
  });
  test('orders page highlights only Orders', () => {
    document.body.dataset.page = 'orders';
    renderHeader();
    expect(document.querySelector('[href="orders.html"][aria-current="page"]')).not.toBeNull();
    expect(document.querySelector('[href="cart.html"][aria-current="page"]')).toBeNull();
  });
  test('cart page highlights only Cart', () => {
    document.body.dataset.page = 'cart';
    renderHeader();
    expect(document.querySelector('[href="cart.html"][aria-current="page"]')).not.toBeNull();
    expect(document.querySelector('[href="orders.html"][aria-current="page"]')).toBeNull();
  });
});

describe('renderTrackResult()', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="tracking-result"></div>';
  });
  test('order id aur stage dikhata hai', () => {
    renderTrackResult('ORD001', 1);
    const box = document.getElementById('tracking-result');
    expect(box.textContent).toContain('Order ORD001');
    expect(box.textContent).toContain('Preparing');
    expect(box.classList.contains('is-visible')).toBe(true);
  });
  test('bahut bada stage ho to Delivered par ruk jata hai', () => {
    renderTrackResult('ORD001', 99);
    expect(document.getElementById('tracking-result').textContent).toContain('Delivered');
  });
  test('negative stage ho to Order confirmed dikhata hai', () => {
    renderTrackResult('ORD001', -5);
    expect(document.querySelector('.tracking-step.is-current small').textContent).toBe('Order confirmed');
  });
});

describe('renderCart()', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="cart-items"></div><div id="order-summary"></div><p id="cart-message"></p>';
  });
  test('cart ke items aur total dikhata hai (180 + 170 = 350)', () => {
    renderCart();
    expect(document.querySelectorAll('.cart-item')).toHaveLength(2);
    expect(document.querySelector('.summary-row--total').textContent).toContain('350');
  });
  test('+ button dabane par total badh jata hai', () => {
    renderCart();
    document.querySelector('[data-cart-action="increase"]').click();
    expect(document.querySelector('.summary-row--total').textContent).toContain('530');
  });
  test('Place order dabane par cart khali ho jata hai', () => {
    renderCart();
    document.querySelector('[data-place-order]').click();
    expect(document.querySelector('.empty-cart')).not.toBeNull();
    expect(document.getElementById('cart-message').textContent).toContain('ORD001');
    const [order] = JSON.parse(localStorage.getItem('orders'));
    expect(order).toMatchObject({
      id: 'ORD001',
      kitchen: 'Maa Annapurna Kitchen, Lakshmi Amma’s Kitchen',
      status: 'Placed'
    });
    expect(order.items.map(({ name }) => name)).toEqual(['Classic Gujarati Thali', 'South Indian Meals']);
    expect(order.total).toBe(order.items.reduce((total, item) => total + item.price * item.quantity, 0));
    expect(order.deliveryDate).toBeTruthy();
  });
});

describe('renderOrders()', () => {
  beforeEach(() => {
    document.body.innerHTML = '<section id="orders-list"></section>';
  });
  test('shows a browse-menu empty state when there are no orders', () => {
    renderOrders();
    expect(document.getElementById('orders-list').textContent).toContain('No orders yet');
    expect(document.querySelector('#orders-list a').getAttribute('href')).toBe('menu.html');
  });
  test('renders order details, status and tracking link', () => {
    localStorage.setItem('orders', JSON.stringify([{
      id: 'ORD001',
      kitchen: 'Maa Annapurna Kitchen',
      items: [{ name: 'Classic Gujarati Thali', quantity: 2 }],
      total: 360,
      deliveryDate: '2026-11-14',
      status: 'Preparing'
    }]));
    renderOrders();
    const order = document.querySelector('.order-card');
    expect(order.textContent).toContain('ORD001');
    expect(order.textContent).toContain('Maa Annapurna Kitchen');
    expect(order.textContent).toContain('Classic Gujarati Thali × 2');
    expect(order.textContent).toContain('₹360');
    expect(order.textContent).toContain('Preparing');
    expect(order.querySelector('a').getAttribute('href')).toBe('track.html');
  });
});

describe('renderAuth()', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="auth-card"></div>';
  });
  test('login mode me "Welcome back" dikhata hai', () => {
    renderAuth();
    expect(document.querySelector('h1').textContent).toBe('Welcome back');
  });
  test('toggle dabane par signup mode aur password mismatch error', () => {
    renderAuth();
    document.getElementById('auth-toggle').click();
    expect(document.querySelector('h1').textContent).toBe('Create your account');

    document.getElementById('auth-password').value = 'abcdef';
    document.getElementById('auth-confirm').value = 'abcxyz';
    document.getElementById('auth-form').dispatchEvent(new Event('submit', { cancelable: true }));
    expect(document.getElementById('auth-message').textContent).toContain('do not match');
  });
});