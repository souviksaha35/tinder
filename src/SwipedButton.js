import React from 'react';
import './SwipedButton.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';


export default function SwipedButton() {
  return (
    <div className="swipedButton">
        <IconButton className="swipedButton__repeat">
            <ReplayIcon fontSize="large"/>
        </IconButton>
        <IconButton className="swipedButton__left">
            <CloseIcon fontSize="large"/>
        </IconButton>
        <IconButton className="swipedButton__star">
            <StarRateIcon fontSize="large"/>
        </IconButton>
        <IconButton className="swipedButton__right">
            <FavoriteIcon fontSize="large"/>
        </IconButton>
        <IconButton className="swipedButton__lightening">
            <FlashOnIcon fontSize="large"/>
        </IconButton>
    </div>
  );
}
