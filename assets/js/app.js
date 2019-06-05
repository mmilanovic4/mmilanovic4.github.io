function init() {
	const menuToggle = document.getElementById('menu-toggle');
	const sidebar = document.querySelector('aside');
	const sidebarMenuItems = document.querySelectorAll('aside nav ul li');

	// Menu toggle callback
	menuToggle.onclick = (e) => {
		if (sidebar.classList.contains('shown')) {
			sidebar.classList.remove('shown');
			menuToggle.innerText = '☰';
		} else {
			sidebar.classList.add('shown');
			menuToggle.innerText = 'X';
		}
	};

	// Sidebar navigation anchor callback
	sidebarMenuItems.forEach((sidebarMenuItem) => {
		sidebarMenuItem.onclick = (e) => {
			setActiveMenuItem(sidebarMenuItems, sidebarMenuItem);

			if (window.matchMedia('max-width: 800px')) {
				menuToggle.click();
			}
		};
	});
}

function setActiveMenuItem(menuItems, activeItem) {
	const target = activeItem.dataset.target;
	const targetElement = document.getElementById(target);

	targetElement.scrollIntoView();

	menuItems.forEach((menuItem) => {
		menuItem.classList.remove('active');
	});

	activeItem.classList.add('active');
}

window.onload = init;
