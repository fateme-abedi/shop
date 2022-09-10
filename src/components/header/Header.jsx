import React, { useState } from 'react'
import styles from './Header.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart, FaTimes } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'

const cart = (
  <span className={styles.cart}>
    <Link to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
)

function Header(props) {
  const [showMenu, setShowMenu] = useState(false)

  const menuHandler = () => {
    setShowMenu(!showMenu)
  }

  const hideMenu = () => {
    setShowMenu(false)
  }

  const activeLinks = ({ isActive }) => (isActive ? `${styles.active}` : '')

  return (
    <header>
      <div className={styles.logo}>
        <h2>
          Iva<span>Shop.</span>
        </h2>
      </div>

      <nav
        className={showMenu ? `${styles['show-nav']}` : `${styles['hide-nav']}`}
      >
        <div
          className={
            showMenu
              ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}`
              : `${styles['nav-wrapper']}`
          }
        ></div>
        <ul onClick={hideMenu}>
          <li className={styles['logo-mobile']}>
            <div className={styles.logo}>
              <h2>
                Iva<span>Shop.</span>
              </h2>
            </div>
            <FaTimes size={20} onClick={hideMenu} />
          </li>
          <li>
            <NavLink to="/" className={activeLinks}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={activeLinks}>
              Contact Us
            </NavLink>
          </li>
        </ul>

        <div className={styles['header-right']} onClick={hideMenu}>
          <span className={styles.links}>
            <NavLink to="/login" className={activeLinks}>
              Login
            </NavLink>
            <NavLink to="/register" className={activeLinks}>
              Register
            </NavLink>
            <NavLink to="/order-history" className={activeLinks}>
              My Orders
            </NavLink>
          </span>
          {cart}
        </div>
      </nav>

      <div className={styles['menu-icon']}>
        {cart}
        <HiMenuAlt3 size={25} onClick={menuHandler} />
      </div>
    </header>
  )
}

export default Header
