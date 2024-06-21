import React, { useState } from 'react';
import * as STYLE from './styles/headerStyles';
import globalIcons from '../configs/globalIcons'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna'
  ];
  
  const ITEM_HEIGHT = 48;

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = anchorEl;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
      <>
        <STYLE.HeaderWrapper>
          <STYLE.Logo>EAI</STYLE.Logo>
          <STYLE.TopInfo>
            <STYLE.TopInfoList>
                <STYLE.TopInfoListImage src={globalIcons?.HeaderIcons?.searchIcon} alt="search" />
            </STYLE.TopInfoList>
            <STYLE.TopInfoList>
                <STYLE.TopInfoListImage src={globalIcons?.HeaderIcons?.bellIcon} alt="bell" />
            </STYLE.TopInfoList>
            <STYLE.TopInfoList>
                <STYLE.TopInfoListImage src={globalIcons?.HeaderIcons?.userIcon} alt="user" />
            </STYLE.TopInfoList>
            <STYLE.TopInfoList>
            <div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    selected={option === "Pyxis"}
                    onClick={handleClose}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
            </STYLE.TopInfoList>
          </STYLE.TopInfo>
        </STYLE.HeaderWrapper>
      </>
    );
}

export default Header;