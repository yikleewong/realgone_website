import React from 'react'
import Logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom'
import '../Styles/Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Navbar() {


    return (
        <div className='navbar'>
            <div className="Leftside">
                <div className='menu'>
                    <Link to='/'> Home </Link>
                    <Link to='/Category'> Category </Link>
                    <Link to='/QnA'> QnA </Link>
                    <Link to='/Contact'> Contact </Link>
                </div>
                <div className='mobile-toggle'>
                    <MenuIcon/>
                </div>
                <div className='closeMenu'>
                    <ArrowBackIcon/>
                </div>
            </div>
            <div className="Middle">
                <Link to='/'><img src={Logo} alt="logo" /></Link>
            </div>
            <div className="Rightside">
                <div className='right-item'>
                    <div className='shopping cart'>
                        <Link to='/shopping-cart'>
                            <ShoppingBasketIcon color='primary'/>
                        </Link>
                        
                    </div>
                    <div className='member'>
                        <Link to='/member'>
                            <PersonIcon color='primary'/>
                        </Link>
                    </div>
                    <div className='search-box'>
                        <input className='search-txt' type='text' name='' placeholder='Search'/>
                        <a  className='search-btn' href='#'>
                            <SearchIcon/>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
