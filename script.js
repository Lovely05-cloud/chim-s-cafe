document.addEventListener('DOMContentLoaded', function() {

	// Category filtering
	const categoryBtns = document.querySelectorAll('.category-btn');
	const menuItems = document.querySelectorAll('.menu-item');

	categoryBtns.forEach(btn => {
		btn.addEventListener('click', function() {
			categoryBtns.forEach(b => b.classList.remove('active'));
			btn.classList.add('active');
			const category = btn.getAttribute('data-category');
			menuItems.forEach(item => {
				if (category === 'all' || item.getAttribute('data-category') === category) {
					item.style.display = '';
				} else {
					item.style.display = 'none';
				}
			});
		});
	});

	let cart = [];
	const cartBtn = document.getElementById('cart-btn');
	const cartModal = document.getElementById('cart-modal');
	const cartList = document.getElementById('cart-list');
	const cartCount = document.getElementById('cart-count');
	const cartEmpty = document.getElementById('cart-empty');
	const closeCart = document.getElementById('close-cart');
	const orderNowBtn = document.getElementById('order-now');

	function updateCartDisplay() {
		cartList.innerHTML = '';
		let totalCount = 0;
		let totalPrice = 0;
		const cartTotal = document.getElementById('cart-total');
		if (cart.length === 0) {
			cartEmpty.style.display = '';
			cartTotal.style.display = 'none';
		} else {
			cartEmpty.style.display = 'none';
			cartTotal.style.display = '';
			cart.forEach((item, idx) => {
				totalCount += item.qty;
				totalPrice += item.qty * item.price;
				const li = document.createElement('li');
				li.style.display = 'flex';
				li.style.justifyContent = 'space-between';
				li.style.alignItems = 'center';
				li.style.marginBottom = '0.5rem';
				li.innerHTML = `
					<span>
						${item.name} <span style="color:#8b5a2b;">₱${item.price}</span>
						<button class="qty-btn" data-idx="${idx}" data-action="less" style="margin:0 5px;background:#d4b483;border:none;border-radius:50%;width:25px;height:25px;cursor:pointer;font-weight:bold;">-</button>
						<span style="min-width:24px;display:inline-block;text-align:center;">${item.qty}</span>
						<button class="qty-btn" data-idx="${idx}" data-action="add" style="margin:0 5px;background:#d4b483;border:none;border-radius:50%;width:25px;height:25px;cursor:pointer;font-weight:bold;">+</button>
					</span>
					<button data-idx="${idx}" class="remove-btn" style="background:none;border:none;color:#8b5a2b;cursor:pointer;font-size:1.1rem;">🗑️</button>
				`;
				cartList.appendChild(li);
			});
			cartTotal.textContent = `Total: ₱${totalPrice}`;
		}
		cartCount.textContent = totalCount;
	}

	cartBtn.addEventListener('click', function() {
		cartModal.style.display = 'flex';
		updateCartDisplay();
	});
	closeCart.addEventListener('click', function() {
		cartModal.style.display = 'none';
	});
	cartModal.addEventListener('click', function(e) {
		if (e.target === cartModal) cartModal.style.display = 'none';
	});
	cartList.addEventListener('click', function(e) {
		// Only handle button clicks
		if (e.target.tagName !== 'BUTTON') return;
		// Remove item (only if remove-btn is clicked)
		if (e.target.classList.contains('remove-btn') && e.target.hasAttribute('data-idx')) {
			const idx = parseInt(e.target.getAttribute('data-idx'));
			cart.splice(idx, 1);
			updateCartDisplay();
			return;
		}
		// Quantity +/-
		if (e.target.classList.contains('qty-btn')) {
			const idx = parseInt(e.target.getAttribute('data-idx'));
			const action = e.target.getAttribute('data-action');
			if (action === 'add') {
				cart[idx].qty = (cart[idx].qty || 1) + 1;
			} else if (action === 'less') {
				if (cart[idx].qty > 1) {
					cart[idx].qty--;
				}
				// Do not remove item if qty is 1
			}
			updateCartDisplay();
		}
	});

	// Order Now button
	orderNowBtn.addEventListener('click', function() {
		if (cart.length === 0) {
			alert('Your cart is empty!');
			return;
		}
		// Show order details form
		document.getElementById('order-details-form').style.display = 'flex';
		orderNowBtn.style.display = 'none';
	});

	// Handle order details form submit
	const orderDetailsForm = document.getElementById('order-details-form');
	orderDetailsForm.addEventListener('submit', function(e) {
		e.preventDefault();
		// Validate fields (HTML5 required does this, but double check)
		const name = orderDetailsForm['order-name'].value.trim();
		const address = orderDetailsForm['order-address'].value.trim();
		const contact = orderDetailsForm['order-contact'].value.trim();
		if (!name || !address || !contact) {
			alert('Please fill in all order details.');
			return;
		}
		// Show order summary and confirmation
		let orderSummary = 'Order Summary:\n';
		let total = 0;
		cart.forEach(item => {
			orderSummary += `${item.name} x${item.qty} - ₱${item.price * item.qty}\n`;
			total += item.price * item.qty;
		});
		orderSummary += `Total: ₱${total}\n`;
		orderSummary += `Name: ${name}\nAddress: ${address}\nContact: ${contact}`;
		alert(orderSummary);
		document.getElementById('order-details-confirm').style.display = 'block';
		setTimeout(() => {
			document.getElementById('order-details-confirm').style.display = 'none';
			orderDetailsForm.reset();
			orderDetailsForm.style.display = 'none';
			orderNowBtn.style.display = 'block';
			cart = [];
			updateCartDisplay();
			cartModal.style.display = 'none';
		}, 2000);
	});
	cartBtn.addEventListener('click', function() {
		cartModal.style.display = 'flex';
		updateCartDisplay();
	});
	closeCart.addEventListener('click', function() {
		cartModal.style.display = 'none';
	});
	cartModal.addEventListener('click', function(e) {
		if (e.target === cartModal) cartModal.style.display = 'none';
	});
	// Removed duplicate cartList event listener

	// Add to Order button
	const addToCartBtns = document.querySelectorAll('.add-to-cart');
	addToCartBtns.forEach(btn => {
		btn.addEventListener('click', function() {
			const item = btn.closest('.item-details');
			const itemName = item.querySelector('.item-title').textContent;
			const itemPrice = parseInt(item.querySelector('.item-price').textContent);
			// Check if already in cart
			const found = cart.find(c => c.name === itemName && c.price === itemPrice);
			if (found) {
				found.qty++;
			} else {
				cart.push({ name: itemName, price: itemPrice, qty: 1 });
			}
			updateCartDisplay();
		});
	});
});
