import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const DropdownMenu = ({ title, items }) => {
    return (
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown nav-item">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{title}</a>
            <ul className="dropdown-menu depth_0">
                {items.map((item, index) => (
                    <li key={index} className="menu-item nav-item">
                        <NavLink to={item.path} className="dropdown-item">{item.title}</NavLink>
                    </li>
                ))}
            </ul>
        </li>
    );
}

const NavigationMenu = () => {
    const location = useLocation();

    const menuItems = [
        { id: 21, title: 'Inicio', path: '/' },
        { id: 22, title: 'Nosotros', path: '/about' },
        { id: 23, title: 'Proyecto', path: '/project' },
        { id: 28, title: 'Contacto', path: '/contact' }
    ];

    useEffect(() => {
        window.scrollTo(0, 0); // Move the window to the top when the location changes
    }, [location]);

    return (
        <ul id="menu-main-menu" className="navbar-nav ms-lg-auto align-items-center">
            {menuItems.map(item => (
                item.dropdown ? (
                    <DropdownMenu key={item.id} title={item.title} items={item.subItems} />
                ) : (
                    <li key={item.id} className={`menu-item menu-item-type-post_type menu-item-object-page nav-item ${location.pathname === item.path ? 'current-menu-item page_item current_page_item' : ''}`}>
                        <NavLink to={item.path} className={`nav-link`}>{item.title}</NavLink>
                    </li>
                )
            ))}
        </ul>
    );
}

export default NavigationMenu;

