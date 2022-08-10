import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, logout } from '../../redux/slices/auth';
import './NavbarStyles.css';
import logoImg from '../../assets/logo_long.png';

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    };

    const onClickLogout = () => {
        if (window.confirm('Вы действительно хотите выйти?')) {
          dispatch(logout());
          window.localStorage.removeItem('token');
        }
      };

    window.addEventListener('scroll', changeColor);

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to='/'>
                <img src={logoImg} width="300" height="auto" />
            </Link>
            <div className={click ? 'nav-menu active' : 'nav-menu'}>
                {isAuth ? (
                    <>
                        <Link to="/add-post">
                            <Button variant="contained" color="secondary">Создать QR-код памяти</Button>
                        </Link>
                        <Button onClick={onClickLogout} variant="text" color="secondary">
                            Выйти
                        </Button>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <Button variant="text" color="secondary">Войти</Button>
                        </Link>
                        <Link to="/register">
                            <Button variant="contained" color="secondary">Создать аккаунт</Button>
                        </Link>
                    </>
                )}
            </div>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}

            </div>
        </div>
    )
};

export default Navbar;