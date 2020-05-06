function init() {
	const menuToggle = document.getElementById('menu-toggle');
	const sidebar = document.querySelector('aside');
	const sidebarMenuItems = document.querySelectorAll('aside nav ul li');

	// Menu toggle callback
	menuToggle.addEventListener('click', (e) => {
		if (sidebar.classList.contains('shown')) {
			sidebar.classList.remove('shown');
			menuToggle.innerText = '☰';
		} else {
			sidebar.classList.add('shown');
			menuToggle.innerText = 'X';
		}
	});

	// Sidebar navigation anchor callback
	sidebarMenuItems.forEach((sidebarMenuItem) => {
		sidebarMenuItem.addEventListener('click', (e) => {
			setActiveMenuItem(sidebarMenuItems, sidebarMenuItem);

			if (window.matchMedia('max-width: 800px')) {
				menuToggle.click();
			}
		});

		sidebarMenuItem.addEventListener('keydown', (e) => {
			const { keyCode } = e;
			if ([13, 32].includes(keyCode)) {
				setActiveMenuItem(sidebarMenuItems, sidebarMenuItem);

				if (window.matchMedia('max-width: 800px')) {
					menuToggle.click();
				}
			}
		});
	});

	function setActiveMenuItem(menuItems, activeItem) {
		const target = activeItem.dataset.target;
		const targetElement = document.getElementById(target);
	
		targetElement.scrollIntoView();
	
		menuItems.forEach((menuItem) => {
			menuItem.classList.remove('active');
		});
	
		activeItem.classList.add('active');
	}

	// Scroll first section to view
	// If valid URL fragment is provided, scroll to appropriate section
	setTimeout(() => {
		const { hash } = window.location;
		const hashNormalized = hash.toLowerCase().replace(/\#/g, '');

		switch (hashNormalized) {
			case 'resume':
				setActiveMenuItem(sidebarMenuItems, sidebarMenuItems[1]);
				break;
			case 'contact':
				setActiveMenuItem(sidebarMenuItems, sidebarMenuItems[2]);
				break;
			default:
				setActiveMenuItem(sidebarMenuItems, sidebarMenuItems[0]);
		}
	}, 100);
}

window.onload = init;
