import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo';
import '../../styles/header.css';

export default function Header() {
    const [hasChanged, setHasChanged] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setHasChanged(true);
        setTimeout(() => {
            setHasChanged(false);
        }, 500);
    }, [location]);

    return (
        <header className="app_header">
            <div className='wrapper'>
                <Link to='/' className='logo'>
                    <Logo width={35} height={35}/>
                    <h1>Podcaster</h1>
                </Link>
                {hasChanged &&
                    <div class="spinner"></div>
                }
            </div>
        </header>
    );
}