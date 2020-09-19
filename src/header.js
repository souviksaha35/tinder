import React from 'react';
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from '@material-ui/icons/Forum';

export default function Header() {
  return (
    <div className="header">
        <IconButton>
            <PersonIcon fontSize="large" className="header_icon"/>
        </IconButton>

        <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="Tinder" className="header_logo"/>

        <IconButton>
            <ForumIcon fontSize="large" className="header_icon"/>
        </IconButton>
    </div>
  );
}