import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'fas fa-home',
        link: '/',
        children: []
    },
    {
        id: 'email',
        label: 'Email',
        icon: 'fas fa-envelope',
        link: '',
        children: [
            { id: 'inbox', label: 'Inbox', link: '/email-inbox' },
            { id: 'read', label: 'Read Email', link: '/email-read' },
            { id: 'compose', label: 'Email Compose', link: '/email-compose' }
        ]
    },
    {
        id: 'uiElements',
        label: 'UI Elements',
        icon: 'fas fa-cube',
        link: '',
        children: [
            { id: 'alerts', label: 'Alerts', link: '/ui-alerts' },
            { id: 'buttons', label: 'Buttons', link: '/ui-buttons' },
            { id: 'badge', label: 'Badge', link: '/ui-badge' },
            // Add more submenu items here
        ]
    },
    // Add more top-level menu items here
];

const SideNav = ({ collapsed }) => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleClick = (id) => {
        setActiveMenu(activeMenu === id ? null : id);
    };

    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className={`sidenav ${collapsed ? 'collapsed' : ''} bg-success`} style={{ width: `${collapsed ? '60px' : '200px'}` }}>
            <div id="sidebar-menu" className="mm-active">
                <ul className="metismenu list-unstyled mm-show p-3 " id="side-menu">
                    {menuItems.map(item => (
                        <li key={item.id} className={`my-4 c-pointer ${activeMenu === item.id ? 'mm-active ' : ''}`}>
                            {item.children.length > 0 ? (
                                <a
                                    className="has-arrow waves-effect"
                                    onClick={() => handleClick(item.id)}
                                    onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}
                                >
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <span>
                                            <i className={`${item.icon} sidenav-icon ${collapsed ? 'collapsed-icon' : ''}`}></i>
                                            {!collapsed && <span className='ms-3'>{item.label}</span>}
                                        </span>
                                        {activeMenu === item.id
                                            ? (!collapsed && <i className='fas fa-minus'></i>)
                                            : (!collapsed && <i className='fas fa-plus'></i>)
                                        }
                                    </div>
                                    {showTooltip && collapsed && (
                                        <div className="tooltip" style={{ position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', padding: '5px', background: 'rgba(0, 0, 0, 0.8)', color: 'white', borderRadius: '3px' }}>
                                            {item.label}ddddddddddd
                                        </div>
                                    )}
                                </a>
                            ) : (
                                <Link to={item.link} className="waves-effect">
                                    <i className={`${item.icon} ${collapsed ? 'collapsed-icon' : ''}`}></i>
                                    {!collapsed && <span className='ms-3'>{item.label}</span>}
                                </Link>
                            )}

                            {activeMenu === item.id && !collapsed && (
                                <ul className="sub-menu mm-show ms-3">
                                    {item.children.map(child => (
                                        <li key={child.id}>
                                            <Link to={child.link}><i className={child.icon}></i>{child.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SideNav;
