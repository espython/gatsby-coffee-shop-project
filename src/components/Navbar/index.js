import React, { Component } from 'react'
import { Link } from 'gatsby'

import { FaShoppingCart } from 'react-icons/fa'
import logo from '../../images/cofee_mix.svg'

class Navbar extends Component {
  /**
   *  state managment
   */
  state = {
    navbarOpen: false,
    css: 'collapse navbar-collapse',
    links: [
      { id: 0, bath: '/', text: 'home' },
      { id: 1, bath: '/about', text: 'about' },
    ],
  }

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: 'collapse navbar-collapse' })
      : this.setState({
          navbarOpen: true,
          css: this.state.css.concat(' show'),
        })
  }

  render() {
    const { css, links, navbarOpen } = this.state
    return (
      <nav className="navbar bg-light navbar-light navbar-expand-sm">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={css}>
          <ul className="navbar-nav mx-auto">
            {links.map(link => (
              <li key={link.id} className="nav-item">
                <Link to={link.bath} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            ))}
            <li className="nav-item ml-sm-5">
              <FaShoppingCart className="cart-icon" />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
