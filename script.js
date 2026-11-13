const menuItems = [
  { id: 'gujarati-thali', vendor: 'Maa Annapurna Kitchen', name: 'Classic Gujarati Thali', cuisine: 'Gujarati', diet: 'Veg', price: 180, description: 'Soft rotli, seasonal shaak, dal, rice, farsan and a little something sweet.' },
  { id: 'punjabi-thali', vendor: 'Amritsari Rasoi', name: 'Punjabi Comfort Thali', cuisine: 'Punjabi', diet: 'Veg', price: 210, description: 'Slow-cooked dal makhani, paneer, buttery roti and fragrant jeera rice.' },
  { id: 'chicken-curry', vendor: 'Spice Route Home Kitchen', name: 'Homestyle Chicken Curry', cuisine: 'North Indian', diet: 'Non-Veg', price: 260, description: 'Tender chicken simmered in a warming onion-tomato masala, with rice and roti.' },
  { id: 'rajasthani-thali', vendor: 'Thar Taste Kitchen', name: 'Rajasthani Royal Thali', cuisine: 'Rajasthani', diet: 'Veg', price: 230, description: 'Dal baati, gatte ki sabzi, fresh rotis and a spoonful of churma.' },
  { id: 'south-meals', vendor: 'Lakshmi Amma’s Kitchen', name: 'South Indian Meals', cuisine: 'South Indian', diet: 'Veg', price: 170, description: 'Rice, sambar, rasam, two vegetable sides, pickle and crisp papad.' },
  { id: 'fish-meal', vendor: 'Coastal Curry House', name: 'Kerala Fish Curry Meal', cuisine: 'Kerala', diet: 'Non-Veg', price: 290, description: 'Tangy coconut fish curry with steamed rice, thoran and house-made pickle.' },
  { id: 'paneer-meal', vendor: 'The Masala Dabba', name: 'Paneer Tikka Meal Box', cuisine: 'Punjabi', diet: 'Veg', price: 220, description: 'Charred paneer tikka, mint chutney, pulao and soft tandoori roti.' },
  { id: 'egg-curry', vendor: 'Nani’s Lunchbox', name: 'Egg Curry & Rice', cuisine: 'Bengali', diet: 'Non-Veg', price: 195, description: 'Two eggs in a gently spiced curry, served with rice and seasonal greens.' },
  { id: 'mini-thali', vendor: 'Maa Annapurna Kitchen', name: 'Everyday Mini Thali', cuisine: 'Gujarati', diet: 'Veg', price: 145, description: 'A lighter homestyle plate with two rotis, sabzi, dal and rice.' }
];

const testimonials = [
  { name: 'Ananya Shah', date: '12 Jun 2026', rating: 5, quote: 'The Gujarati thali tastes exactly like Sunday lunch at my mum’s. Fresh, balanced and right on time.' },
  { name: 'Rohan Mehta', date: '08 Jun 2026', rating: 5, quote: 'Finally, a proper home-cooked meal during a busy work week. The portions are generous too.' },
  { name: 'Priya Nair', date: '03 Jun 2026', rating: 4, quote: 'I love that I can try something from a different local kitchen every day. The South Indian meals are lovely.' },
  { name: 'Kabir Sethi', date: '29 May 2026', rating: 5, quote: 'Easy to order, carefully packed, and it still arrives warm. This has made my weekdays much better.' },
  { name: 'Meera Joshi', date: '24 May 2026', rating: 5, quote: 'The food feels thoughtful, not mass-produced. I’ve already recommended Home Tiffin to my neighbours.' },
  { name: 'Arjun Rao', date: '17 May 2026', rating: 4, quote: 'Great variety and the delivery updates are genuinely useful. The Rajasthani thali is a favourite.' }
];

const initialCartItems = [
  { id: 'gujarati-thali', quantity: 1 },
  { id: 'south-meals', quantity: 1 }
];

const exploreLinks = [
  { title: 'Browse Menu', description: 'Discover today’s tiffins', icon: 'utensils', href: 'menu.html' },
  { title: 'My Cart', description: 'Review items & checkout', icon: 'bag', href: 'cart.html' },
  { title: 'Order History', description: 'All your past orders', icon: 'receipt', href: 'orders.html' },
  { title: 'Track Order', description: 'Live delivery status', icon: 'truck', href: 'track.html' },
  { title: 'Reviews', description: 'What customers say', icon: 'star', href: '#reviews' },
  { title: 'Our Locations', description: 'Cities we deliver to', icon: 'pin', href: 'contact.html' }
];

const iconPaths = {
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  utensils: '<path d="M3 3v7a3 3 0 0 0 6 0V3M6 3v18M18 3v18m0-18c-3 3-3 8 0 10"/>',
  bag: '<path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/>',
  receipt: '<path d="M5 3h14v18l-3-2-4 2-4-2-3 2zM8 8h8M8 12h8M8 16h4"/>',
  truck: '<path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7.5" cy="18" r="1.5"/><circle cx="18" cy="18" r="1.5"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"/>',
  pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M5 7l1 14h12l1-14M9 7V4h6v3"/>',
  chat: '<path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 9 9 0 0 1-4-.9L4 20l1.2-3.2A7.1 7.1 0 0 1 4 12c0-4.4 3.6-8 8-8s8 3.1 8 7.5Z"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/>',
  phone: '<path d="M6 3h4l2 5-3 2a15 15 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2C10 20 4 14 4 5a2 2 0 0 1 2-2Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  sparkles: '<path d="m12 3 1.5 6.5L20 11l-6.5 1.5L12 19l-1.5-6.5L4 11l6.5-1.5zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  facebook: '<path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.5A25 25 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v8z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r=".8" fill="currentColor" stroke="none"/>',
  twitter: '<path d="M22 5.9a8 8 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.8 12 12 0 0 1-8.7-4.4 4.2 4.2 0 0 0 1.3 5.6 4 4 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.3 4.3 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 18.7a11.8 11.8 0 0 0 6.4 1.9c7.7 0 12-6.4 12-12v-.5A8.5 8.5 0 0 0 22 5.9Z"/>'
};

function icon(name, className = '') {
  return `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.sparkles}</svg>`;
}

function getCart() {
  try {
    const saved = JSON.parse(localStorage.getItem('home-tiffin-cart'));
    if (Array.isArray(saved)) return saved.filter((entry) => menuItems.some((item) => item.id === entry.id) && Number.isInteger(entry.quantity) && entry.quantity > 0);
  } catch (error) {
    console.info('Starting a fresh demo cart.');
  }
  return initialCartItems.map((entry) => ({ ...entry }));
}

let cartItems = getCart();

function saveCart() {
  try { localStorage.setItem('home-tiffin-cart', JSON.stringify(cartItems)); } catch (error) { /* Cart still works for this visit. */ }
  updateCartBadge();
}

function cartCount() {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-count');
  if (badge) {
    badge.textContent = cartCount();
    badge.parentElement.setAttribute('aria-label', `Cart, ${cartCount()} items`);
  }
}

function renderHeader() {
  const target = document.getElementById('site-header');
  if (!target) return;
  const page = document.body.dataset.page;
  const links = [
    ['Home', 'index.html', 'home'], ['Menu', 'menu.html', 'menu'], ['Cart', 'cart.html', 'cart'],
    ['Orders', 'orders.html', 'orders'], ['Track', 'track.html', 'track'], ['Reviews', 'index.html#reviews', 'reviews'],
    ['Profile', 'auth.html', 'auth'], ['About', 'index.html#about', 'about'], ['Contact', 'contact.html', 'contact']
  ];
  const active = page === 'cart' ? 'cart' : page;
  target.innerHTML = `
    <div class="nav-inner">
      <a class="brand" href="index.html" aria-label="Home Tiffin home">
        <span class="brand__mark" aria-hidden="true">ht</span>
        <span class="brand__copy"><strong>Home Tiffin</strong><small>Daily Tiffin Service</small></span>
      </a>
      <nav aria-label="Main navigation"><ul class="nav-links" id="primary-nav">${links.map(([label, href, key]) => `<li><a href="${href}"${key === active ? ' aria-current="page"' : ''}>${label}</a></li>`).join('')}</ul></nav>
      <div class="nav-actions">
        <a class="cart-link" href="cart.html" aria-label="Cart, ${cartCount()} items">${icon('bag')}<span class="cart-count">${cartCount()}</span></a>
        <a class="login-link" href="auth.html"><span>${icon('user')}</span>Login</a>
      </div>
      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-controls="primary-nav" aria-expanded="false">${icon('menu')}</button>
    </div>`;
  const toggle = target.querySelector('.menu-toggle');
  const nav = target.querySelector('.nav-links');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    toggle.innerHTML = icon(open ? 'close' : 'menu');
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      toggle.innerHTML = icon('menu');
    }
  });
}

function renderFooter() {
  const target = document.getElementById('site-footer');
  if (!target) return;
  target.innerHTML = `
    <div class="footer-main">
      <section class="footer-column" id="about">
        <a class="brand footer-brand" href="index.html"><span class="brand__mark" aria-hidden="true">ht</span><span class="brand__copy"><strong>Home Tiffin</strong><small>Daily Tiffin Service</small></span></a>
        <p class="footer-about">Fresh, nourishing tiffins from the home kitchens of India, delivered with a little extra care.</p>
        <p class="footer-cuisines">Gujarati · Punjabi · Rajasthani · South Indian</p>
      </section>
      <section class="footer-column"><h2>Contact</h2><div class="footer-contact">
        <a href="tel:+911800123456"><i>${icon('phone')}</i>+91 1800 123 456</a>
        <a href="mailto:hello@hometiffin.in"><i>${icon('mail')}</i>hello@hometiffin.in</a>
        <span><i>${icon('pin')}</i>Daily home delivery</span>
      </div></section>
      <section class="footer-column"><h2>Quick links</h2><nav class="footer-links" aria-label="Footer links">
        <a href="menu.html">Browse Menu</a><a href="orders.html">My Orders</a><a href="index.html#reviews">Reviews</a><a href="contact.html">Locations</a><a href="index.html#about">About</a><a href="contact.html">Contact</a>
      </nav></section>
      <section class="footer-column"><h2>For Providers</h2><nav class="footer-links"><a href="contact.html">Become a Provider</a><a href="auth.html">Provider Login</a></nav>
        <div class="social-links" aria-label="Social media"><a href="https://www.facebook.com/" aria-label="Facebook">${icon('facebook')}</a><a href="https://www.instagram.com/" aria-label="Instagram">${icon('instagram')}</a><a href="https://twitter.com/" aria-label="Twitter">${icon('twitter')}</a></div>
      </section>
    </div>
    <div class="footer-bottom"><span>© 2026 Home Tiffin. All rights reserved.</span><span>Fresh · Hygienic · Home-cooked Daily</span></div>`;
}

function renderHome() {
  document.querySelectorAll('[data-icon]').forEach((target) => {
    target.innerHTML = icon(target.dataset.icon);
  });
  const explore = document.getElementById('explore-grid');
  if (explore) explore.innerHTML = exploreLinks.map((entry) => `<a class="explore-card" href="${entry.href}"><span class="explore-card__icon">${icon(entry.icon)}</span><h3>${entry.title}</h3><p>${entry.description}</p></a>`).join('');
  const reviews = document.getElementById('testimonial-grid');
  if (reviews) reviews.innerHTML = testimonials.map((review) => `<article class="testimonial-card"><div class="stars" aria-label="${review.rating} out of 5 stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div><blockquote>“${review.quote}”</blockquote><div class="testimonial-card__byline"><strong>${review.name}</strong><span>${review.date}</span></div></article>`).join('');

  const cuisineText = document.getElementById('cuisine-text');
  if (cuisineText) {
    const cuisines = ['Authentic Gujarati Meals', 'Authentic Punjabi Meals', 'Authentic Rajasthani Meals', 'Authentic South Indian Meals'];
    let index = 0;
    window.setInterval(() => {
      cuisineText.classList.add('is-changing');
      window.setTimeout(() => {
        index = (index + 1) % cuisines.length;
        cuisineText.textContent = cuisines[index];
        cuisineText.classList.remove('is-changing');
      }, 240);
    }, 2000);
  }
}

const money = (amount) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function getOrders() {
  try {
    const orders = JSON.parse(localStorage.getItem('orders'));
    return Array.isArray(orders) ? orders : [];
  } catch (error) {
    console.error('Unable to read saved orders.', error);
    return [];
  }
}

function renderOrders() {
  const list = document.getElementById('orders-list');
  if (!list) return;

  const orders = getOrders().filter((order) => order && typeof order === 'object' && !Array.isArray(order));
  if (!orders.length) {
    list.innerHTML = '<div class="empty-cart"><strong>No orders yet</strong>Browse the menu to find your next home-cooked meal.<br><a class="button button--primary" href="menu.html">Browse menu</a></div>';
    return;
  }

  const statuses = ['Placed', 'Preparing', 'Out for delivery', 'Delivered'];
  list.innerHTML = orders.map((order) => {
    const status = statuses.includes(order.status) ? order.status : 'Placed';
    const statusClass = status.toLowerCase().replace(/\s+/g, '-');
    const items = Array.isArray(order.items) ? order.items : [];
    const itemList = items
      .filter((item) => item && typeof item.name === 'string' && Number.isInteger(item.quantity) && item.quantity > 0)
      .map((item) => `${escapeHtml(item.name)} × ${item.quantity}`)
      .join(', ');
    const deliveryDate = order.deliveryDate ? new Date(`${order.deliveryDate}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Not specified';

    return `<article class="cart-item order-card">
      <div class="cart-item__info">
        <p>Order ${escapeHtml(order.id || '—')} · Delivery: ${escapeHtml(deliveryDate)}</p>
        <h2>${escapeHtml(order.kitchen || 'Home kitchen')}</h2>
        <p class="order-card__items">${itemList || 'Order details unavailable'}</p>
        <strong>${money(Number(order.total) || 0)}</strong>
      </div>
      <div class="order-card__actions">
        <span class="order-status order-status--${statusClass}">${status}</span>
        <a class="button button--outline button--small" href="track.html">Track</a>
      </div>
    </article>`;
  }).join('');
}

function renderMenu() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;
  const count = document.getElementById('menu-count');
  if (count) count.textContent = `${menuItems.length} meals from local kitchens`;
  grid.innerHTML = menuItems.map((item) => `<article class="menu-card">
    <div class="menu-card__top"><span class="vendor-name">${item.vendor} · ${item.cuisine}</span><span class="diet-badge diet-badge--${item.diet === 'Veg' ? 'veg' : 'nonveg'}">${item.diet}</span></div>
    <h2>${item.name}</h2>
    <div class="menu-card__rating"><span class="stars" aria-hidden="true">☆☆☆☆☆</span><small>No reviews yet</small></div>
    <p class="menu-card__description">${item.description}</p>
    <div class="menu-card__bottom"><strong class="menu-price">${money(item.price)}</strong><div class="menu-card__actions">
      <a class="button button--outline button--small" href="index.html#reviews">${icon('chat')} Reviews</a>
      <button class="button button--primary button--small" type="button" data-add-item="${item.id}">${icon('plus')} Add</button>
    </div></div>
  </article>`).join('');
  grid.addEventListener('click', (event) => {
    const button = event.target.closest('[data-add-item]');
    if (!button) return;
    const id = button.dataset.addItem;
    const entry = cartItems.find((cartItem) => cartItem.id === id);
    if (entry) entry.quantity += 1;
    else cartItems.push({ id, quantity: 1 });
    saveCart();
    button.innerHTML = `${icon('plus')} Added`;
    button.classList.add('is-added');
    window.setTimeout(() => {
      button.innerHTML = `${icon('plus')} Add`;
      button.classList.remove('is-added');
    }, 900);
  });
}

function renderCart() {
  const list = document.getElementById('cart-items');
  const summary = document.getElementById('order-summary');
  if (!list || !summary) return;
  const message = document.getElementById('cart-message');
  const orderLines = cartItems.map((cartItem) => ({ ...cartItem, item: menuItems.find((item) => item.id === cartItem.id) })).filter((entry) => entry.item);
  const subtotal = orderLines.reduce((total, entry) => total + entry.item.price * entry.quantity, 0);
  list.innerHTML = orderLines.length ? orderLines.map(({ item, quantity }) => `<article class="cart-item">
    <div class="cart-item__info"><p>${item.vendor}</p><h2>${item.name}</h2><strong>${money(item.price)} each</strong></div>
    <div class="cart-item__controls"><div class="quantity-control"><button type="button" aria-label="Decrease ${item.name} quantity" data-cart-action="decrease" data-item-id="${item.id}">${icon('minus')}</button><output aria-label="Quantity">${quantity}</output><button type="button" aria-label="Increase ${item.name} quantity" data-cart-action="increase" data-item-id="${item.id}">${icon('plus')}</button></div><button class="icon-button" type="button" aria-label="Remove ${item.name}" data-cart-action="remove" data-item-id="${item.id}">${icon('trash')}</button></div>
  </article>`).join('') : `<div class="empty-cart"><strong>Your cart is ready for something delicious.</strong>Pick a home-cooked meal to get started.<br><a class="text-link" href="menu.html">Browse today's menu →</a></div>`;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateValue = `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}`;
  summary.innerHTML = `<h2>Order summary</h2>
    <label for="delivery-date">Delivery date</label><input id="delivery-date" type="date" value="${dateValue}" min="${new Date().toISOString().slice(0, 10)}">
    <div class="summary-divider"></div>
    <p class="summary-row"><span>Subtotal</span><strong>${money(subtotal)}</strong></p>
    <p class="summary-row"><span>Delivery</span><strong>Free</strong></p>
    <p class="summary-row summary-row--total"><span>Total</span><strong>${money(subtotal)}</strong></p>
    <div class="summary-divider"></div>
    <span class="payment-label">Payment method</span>
    <label class="payment-choice"><input type="radio" name="payment" value="cash" checked> Cash on Delivery</label>
    <label class="payment-choice"><input type="radio" name="payment" value="online"> Online (Demo)</label>
    <button class="button button--primary button--full" type="button" data-place-order ${orderLines.length ? '' : 'disabled'}>Place order ${icon('arrow')}</button>`;

  list.onclick = (event) => {
    const button = event.target.closest('[data-cart-action]');
    if (!button) return;
    const entry = cartItems.find((cartItem) => cartItem.id === button.dataset.itemId);
    if (!entry) return;
    if (button.dataset.cartAction === 'remove' || (button.dataset.cartAction === 'decrease' && entry.quantity === 1)) cartItems = cartItems.filter((cartItem) => cartItem.id !== entry.id);
    else if (button.dataset.cartAction === 'decrease') entry.quantity -= 1;
    else entry.quantity += 1;
    saveCart();
    renderCart();
  };
  summary.querySelector('[data-place-order]').addEventListener('click', () => {
    if (!cartItems.length) return;
    const orders = getOrders();
    const nextOrderNumber = orders.reduce((highest, order) => {
      const match = typeof order.id === 'string' && order.id.match(/^ORD(\d+)$/);
      return match ? Math.max(highest, Number(match[1])) : highest;
    }, 0) + 1;
    const orderId = `ORD${String(nextOrderNumber).padStart(3, '0')}`;
    const orderedItems = cartItems
      .map((cartItem) => {
        const item = menuItems.find((menuItem) => menuItem.id === cartItem.id);
        return item ? { name: item.name, quantity: cartItem.quantity, price: item.price, kitchen: item.vendor } : null;
      })
      .filter(Boolean);
    const deliveryDate = summary.querySelector('#delivery-date').value;
    const kitchen = [...new Set(orderedItems.map((item) => item.kitchen))].join(', ');
    const order = { id: orderId, items: orderedItems, total: subtotal, deliveryDate, kitchen, status: 'Placed' };
    try {
      localStorage.setItem('orders', JSON.stringify([...orders, order]));
    } catch (error) {
      console.error('Unable to save the order.', error);
      if (message) message.textContent = 'Your order could not be saved. Please try again.';
      return;
    }
    try {
      localStorage.setItem('home-tiffin-last-order', JSON.stringify({ id: orderId, stage: 0 }));
    } catch (error) {
      console.error('Unable to save the latest order for tracking.', error);
    }
    cartItems = [];
    saveCart();
    renderCart();
    if (message) message.textContent = `Order placed! Your demo order number is ${orderId}. Track it anytime.`;
    if (typeof module === 'undefined') window.location.href = 'orders.html';
  });
  if (message && !message.textContent.startsWith('Order placed!')) message.textContent = '';
}

let signupMode = false;

function renderAuth() {
  const card = document.getElementById('auth-card');
  if (!card) return;
  card.innerHTML = `<h1>${signupMode ? 'Create your account' : 'Welcome back'}</h1>
    <p class="auth-card__intro">${signupMode ? 'A fresh, home-cooked meal is just around the corner.' : 'Sign in to order fresh tiffins.'}</p>
    <form class="auth-form" id="auth-form">
      ${signupMode ? '<label for="auth-name">Name</label><input id="auth-name" name="name" placeholder="Your name" autocomplete="name" required>' : ''}
      <label for="auth-email">Email</label><input id="auth-email" name="email" type="email" placeholder="you@example.com" autocomplete="email" required>
      <label for="auth-password">Password</label><input id="auth-password" name="password" type="password" placeholder="Min 6 characters" minlength="6" autocomplete="${signupMode ? 'new-password' : 'current-password'}" required>
      ${signupMode ? '<label for="auth-confirm">Confirm password</label><input id="auth-confirm" name="confirmPassword" type="password" placeholder="Enter password again" minlength="6" autocomplete="new-password" required>' : ''}
      <button class="button button--primary button--full" type="submit">${signupMode ? 'Create account' : 'Sign in'} ${icon('arrow')}</button>
      <p class="form-message" id="auth-message" role="status" aria-live="polite"></p>
    </form>
    <p class="auth-switch">${signupMode ? 'Already have an account?' : 'New here?'} <button type="button" id="auth-toggle">${signupMode ? 'Sign in' : 'Create account'}</button></p>`;
  card.querySelector('#auth-toggle').addEventListener('click', () => {
    signupMode = !signupMode;
    renderAuth();
  });
  card.querySelector('#auth-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const password = form.elements.password.value;
    const confirm = form.elements.confirmPassword?.value;
    if (signupMode && password !== confirm) {
      card.querySelector('#auth-message').textContent = 'Those passwords do not match yet.';
      card.querySelector('#auth-message').style.color = 'var(--red)';
      return;
    }
    card.querySelector('#auth-message').textContent = signupMode ? 'Your demo account is ready. Welcome to Home Tiffin!' : 'You’re signed in for this demo. Happy browsing!';
  });
}

function renderTrackResult(orderId, stage) {
  const result = document.getElementById('tracking-result');
  if (!result) return;
  const labels = ['Order confirmed', 'Preparing', 'Out for delivery', 'Delivered'];
  const safeStage = Math.max(0, Math.min(stage, labels.length - 1));
  result.innerHTML = `<div class="tracking-result__meta"><strong>Order ${orderId}</strong><span class="muted">${labels[safeStage]}</span></div><div class="tracking-steps">${labels.map((label, index) => `<div class="tracking-step ${index < safeStage ? 'is-done' : ''} ${index === safeStage ? 'is-current' : ''}"><span class="tracking-step__dot">${index < safeStage ? '✓' : index + 1}</span><small>${label}</small></div>`).join('')}</div>`;
  result.classList.add('is-visible');
}

function initTrack() {
  const form = document.getElementById('track-form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const orderId = form.elements.orderNumber.value.trim().toUpperCase();
    const message = document.getElementById('track-message');
    if (!orderId) {
      message.textContent = 'Enter an order number to see its status.';
      return;
    }
    let stage = 2;
    try {
      const savedOrder = JSON.parse(localStorage.getItem('home-tiffin-last-order'));
      if (savedOrder && savedOrder.id === orderId) stage = savedOrder.stage;
    } catch (error) { /* Use the sample progress state. */ }
    message.textContent = '';
    renderTrackResult(orderId, stage);
  });
}

function initContact() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
    document.getElementById('contact-status').textContent = 'Thanks for reaching out. Your demo message is ready for our team!';
  });
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function init() {
  renderHeader();
  renderFooter();
  renderHome();
  renderMenu();
  renderCart();
  renderOrders();
  renderAuth();
  initTrack();
  initContact();
  initReveal();
}

init();

if (typeof module !== 'undefined') {
  module.exports = {
    menuItems,
    initialCartItems,
    icon,
    money,
    getCart,
    cartCount,
    renderHeader,
    renderCart,
    getOrders,
    renderOrders,
    renderAuth,
    renderTrackResult
  };
}