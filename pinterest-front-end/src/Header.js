import React from 'react';
import './Header.css';
import PinterestIcon from '@material-ui/icons/Pinterest';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


function Header() {

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">
            <PinterestIcon className="pinterest__logo" style={{ fontSize: 28}}/>
        </div>
        <div className="header__home">
          <a href="/">
            Home
          </a>
        </div>
        <div className="header__today">
          <a href="/">
            Today
          </a>
        </div>
        <div className="header__following">
          <a href="/">
            Following
          </a>
        </div>
        <div className="header__input">
          <SearchIcon className="search"/>
          <form>
            <input type="text" placeholder="Search"/>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="header__right">
          <div className="notification">
            <NotificationsIcon style={{ fontSize: 30}}/>
          </div>
          <div className="message">
            <SmsRoundedIcon style={{ fontSize: 30 }}/>
          </div>
          <div className="avatar">
            <AccountCircleIcon style={{ fontSize: 30 }}/>
          </div>
          <div className="downArrrow">
            <KeyboardArrowDownIcon style={{ fontSize: 30 }}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
