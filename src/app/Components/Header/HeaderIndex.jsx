import React, { useState } from 'react';
import { HeaderStyles } from './styles';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import Avatarsrc from '../../Icons/Avatar.jpg';

const HeaderIndex = (props) => {
  const {handleMode , mode} = props ;
  const classes = HeaderStyles();

  const [toggleSearch, settoggleSearch] = React.useState(false)
  const [searchInput, setSearchInput]= useState('')

  const handleDarkMode = () => {
    if(mode)
    handleMode(false);
    else 
    handleMode(true)
  };
  const cleanSearch = () =>setSearchInput('')
  
  const onChange=(event)=>{
    setSearchInput(event.target.value)
  }
  React.useEffect(() => {
    if(toggleSearch)
    setTimeout(() => {
      if(toggleSearch)
      {
        settoggleSearch(false)
      }
    }, 10000);
  })

  return (
    <>
      <div className={classes.root}>
      <div className={classes.dynamicSearchfield}>
      {toggleSearch && 
        <TextField
        id="input-with-icon-textfield"
        placeholder='Search here ..'
        fullWidth
        size="small"
        margin="dense"
        onChange={onChange}
        value={searchInput}
        onBlur={cleanSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      }
      </div>
        <div className={classes.flexEndDiv}>
          <IconButton onClick={() => settoggleSearch(prev => !prev)}>
           {!toggleSearch ? <SearchIcon  className={classes.Icons}/> : <ClearIcon className={classes.Icons}/> } 
          </IconButton>

          <IconButton onClick={handleDarkMode}>
          {mode ? <WbSunnyOutlinedIcon className={classes.sun} /> : <DarkModeIcon className={classes.moon}/>}
          </IconButton>

          <IconButton>
            <Badge color="primary" badgeContent={10}>
              <NotificationsIcon className={classes.notificationIcon} />
            </Badge>
          </IconButton>

          <Avatar src={Avatarsrc} className={classes.headerAvatar} />
        </div>
      </div>
    </>
  );
};

export default HeaderIndex;
