import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import './css/header.css'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import AddIcon from '@material-ui/icons/Add';
import FormIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { useStateValue } from '../Stateprovider';


function Header() {

  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="header">
      <div className="header-left">
        <img alt="facebook" src="https://www.pngarts.com/files/10/Facebook-Logo-PNG-Image-Background.png" />
        <div className="header_input">
          <SearchIcon />
          <input placeholder="search facebook " />
        </div>
      </div>
      <div className="header_center">
        <div className="header_option header_option_action">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option ">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header-right"></div>
      <div className="header_info">
        <Avatar src={user.photoURL} />
        <h4>{user.displayName}</h4>
      </div>
      <IconButton>
        <AddIcon />
      </IconButton>
      <IconButton>
        <FormIcon />
      </IconButton>
      <IconButton>
        <NotificationsActiveIcon />
      </IconButton>
      <IconButton>
        <ExpandMoreIcon />
      </IconButton>

    </div>
  );
}

export default Header
