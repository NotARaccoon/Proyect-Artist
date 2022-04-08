import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../Logo.png'
import styled from 'styled-components'
import { ButtonContainer } from './Button'

const Navbar = () => {
  return (
    <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
      <Link to={'/'}>
        <img src={logo} alt='store' className='navbar-brand'></img>
      </Link>
      <ul className='navbar-nav align-items-center'>
        <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>Products</Link>
        </li>
        <li className='nav-item ml-5'>
            <Link to='/Gallery' className='gallery-link'>Gallery</Link>
        </li>
      </ul>
      <Link to='/cart' className='ml-auto'>
        <ButtonContainer>
          <span className='mr-2'></span>
          <i className="fa-solid fa-cart-shopping fa-xl"></i>
        </ButtonContainer>
      </Link>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
    display:flex;
    justify-content:space-between;
    background: var(--lightOrange);
    .nav-link{
      color:var(--mainWhite) !important;
      font-size:1.1rem;
      text-transform: capitalize;
    }
    .gallery-link{
      color:var(--mainWhite) !important;
      font-size:1.1rem;
      text-transform: capitalize;
    }
`


export default Navbar