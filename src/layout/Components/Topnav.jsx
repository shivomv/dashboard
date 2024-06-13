import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';

const Topnav = ({ onCollapseToggle }) => {
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        const isCollapsed = localStorage.getItem('collapsed') === 'true';
        setCollapsed(isCollapsed);
        onCollapseToggle(isCollapsed);
    }, [onCollapseToggle]);

    const handleCollapseState = () => {
        const newState = !collapsed;
        setCollapsed(newState);
        localStorage.setItem('collapsed', newState.toString());
        onCollapseToggle(newState);
    };

    return (
        <div className='vw-100 bg-dark text-white' style={{ height: "3rem" }}>
            <div 
                className="topnav-left d-flex align-items-center justify-content-between"
                style={{ width: `${collapsed ? '90px' : '250px'}`, height: "100%" }}
            >
                <div 
                    style={{ width: `${collapsed ? '80px' : '200px'}`, height: "100%" }} 
                    className='logo-div bg-success d-flex align-items-center justify-content-center'
                >
                    <Link to="/" className='logo text-white fs-5'>
                        {collapsed ? <FontAwesomeIcon icon={faHome} /> : 'Dashboard'}
                    </Link>
                </div>
                <FontAwesomeIcon 
                   className={`c-pointer ${collapsed ? 'ms-3' : ''}`}
                    icon={faBars} 
                    onClick={handleCollapseState} 
                />
            </div>
        </div>
    );
};

export default Topnav;
