import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, logout } from '../../redux/slices/auth';
import logoImg from '../../assets/logo_long.png';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    };

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
          <Link className={styles.logo} to="/">
            <img src={logoImg} width="300" height="auto" />
          </Link>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {isAuth ? (
              <>
                <Link to="/add-post">
                  <Button variant="contained">Создать QR-код памяти</Button>
                </Link>
                <Button onClick={onClickLogout} variant="contained" color="error">
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
          </ul>
          <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}
          </div>
        </div>
  );
};
