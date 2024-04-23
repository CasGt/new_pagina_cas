document.addEventListener('DOMContentLoaded', function () {
    const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

    if (isMobile) {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('hidden');
        });

        const navItems = document.querySelectorAll('.nav-links > ul > li');

        navItems.forEach(function (item) {
            const submenu = item.querySelector('.submenu');
            const moreSubmenu = item.querySelector('.more-submenu');

            if (submenu) {
                const subMenuToggle = item.querySelector('.dropdown-toggle');

                subMenuToggle.addEventListener('click', function (event) {
                    event.preventDefault();
                    submenu.classList.toggle('hidden');
                });
            }

            if (moreSubmenu) {
                const moreToggle = item.querySelector('.more-toggle');

                moreToggle.addEventListener('click', function (event) {
                    event.preventDefault();
                    moreSubmenu.classList.toggle('hidden');
                });
            }
        });
    } else {
        const navItems = document.querySelectorAll('.nav-links > ul > li');

        navItems.forEach(function (item) {
            const submenu = item.querySelector('.submenu');
            const moreSubmenu = item.querySelector('.more-submenu');

            if (submenu) {
                item.addEventListener('mouseenter', function () {
                    submenu.classList.remove('hidden');
                    submenu.style.zIndex = "1000"; // Asegurar que los submenús estén por encima de todo
                    if (moreSubmenu) {
                        moreSubmenu.classList.add('hidden');
                    }
                });

                item.addEventListener('mouseleave', function () {
                    submenu.classList.add('hidden');
                });
            }

            if (moreSubmenu) {
                item.addEventListener('mouseenter', function () {
                    moreSubmenu.classList.remove('hidden');
                    moreSubmenu.style.zIndex = "1000"; // Asegurar que los submenús estén por encima de todo
                    if (submenu) {
                        submenu.classList.add('hidden');
                    }
                });

                item.addEventListener('mouseleave', function () {
                    moreSubmenu.classList.add('hidden');
                });
            }
        });
    }
});
