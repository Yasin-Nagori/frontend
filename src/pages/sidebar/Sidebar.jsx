import React, { useState } from 'react'
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreIcon from "@mui/icons-material/More";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Divider from "@mui/material/Divider";
import DoneIcon from "@mui/icons-material/Done";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomLink from './CustomLink';
import useLoggedInUser from '../../hooks/useLoggedInUser';
function Sidebar({handleLogout,user}) {

  const [anchorEl, setAnchorEl] = useState(null);
  const [loggedInUser] = useLoggedInUser();
    const openMenu = Boolean(anchorEl);
    
      const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        //console.log(e.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
  };

  const result = user[0].email.split("@")[0];

  
      const userProfile = loggedInUser?.profileImage
        ? loggedInUser?.profileImage
    : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
  
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <CustomLink to="/home/feed">
        <SidebarOptions active Icon={HomeIcon} text="Home" />
      </CustomLink>

      <CustomLink to="/home/explore">
        <SidebarOptions Icon={SearchIcon} text="Explore" />
      </CustomLink>

      <CustomLink to="/home/notification">
        <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
      </CustomLink>

      <CustomLink to="/home/messsages">
        <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
      </CustomLink>

      <CustomLink to="/home/bookmarks">
        <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
      </CustomLink>

      <CustomLink to="/home/lists">
        <SidebarOptions Icon={ListAltIcon} text="Lists" />
      </CustomLink>

      <CustomLink to="/home/profile">
        <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
      </CustomLink>

      <CustomLink to="/home/more">
        <SidebarOptions Icon={MoreIcon} text="More" />
      </CustomLink>

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>

      <div className="Profile__info">
        <Avatar src={userProfile} />
        <div className="user__info">
          <h4>{result}</h4>
          <h5>
            {loggedInUser[0]?.name
              ? loggedInUser[0]?.name
              : user && user[0]?.displayName}
          </h5>
        </div>

        <IconButton
          size="small"
          sx={{ ml: 2 }}
          aria-controls={openMenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClick={handleClose}
          onClose={handleClose}
        >
          <MenuItem
            className="Profile__info1"
            onClick={() => navigate("/home/profile")}
          >
            <Avatar
              src={
                "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              }
            />
            <div className="user__info subUser__info">
              <div>
                <h4>{loggedInUser[0]?.name}</h4>
              </div>
              <ListItemIcon className="done__icon" color="blue">
                <DoneIcon />
              </ListItemIcon>
            </div>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>Add an existing account</MenuItem>
          <MenuItem onClick={handleLogout}>
            Log out {loggedInUser[0]?.email}
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Sidebar