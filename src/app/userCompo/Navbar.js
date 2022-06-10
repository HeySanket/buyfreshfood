import * as React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIconList from "../jsonFile/MenuIconList";
import SwitchData from "../SwicherCompo/SwitchData";
import { NavLink } from "react-router-dom";
import MoreIcon from "@mui/icons-material/MoreVert";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";
import Calculator from "./Calculater/Calculator";
import { useSelector } from "react-redux";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  hoverColor: {
    "&:hover": {
      backgroundColor: "rgb(25 114 210 / 1)",
      color: "white",
      transition: ".9s ease",
    },
  },
  textStyle: {
    textDecoration: "none",
    color: "black",
  },
  paddingTopR: {
    paddingTop: "0",
  },
  hoverIcon: {
    "&:hover": {
      color: "white",
    },
  },
}));
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = ({ setLoginTrueApp }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [buy, setBuy] = React.useState([]);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  let history = useHistory();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const classes = useStyles();
  const [openCal, setOpenCal] = React.useState(false);
  const count = useSelector((state) => state.counter.value);
  const mobileMenuId = "primary-search-account-menu-mobile";
  const menuId = "primary-search-account-menu";
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const openCalculator = () => {
    setOpenCal(true);
  };
  const goToProfile = () => {
    history.push("/profile");
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const goToDashboard = () => {
    history.push("/dashboard");
  };
  const goToFeedBack = () => {
    history.push("/feedBack");
    console.log("feedBack");
    setAnchorEl(null);
    handleMobileMenuClose();
    handleMenuClose();
  };
  const payBill = () => {
    history.push("/payBill");
    console.log("feedBack");
    setAnchorEl(null);
    handleMobileMenuClose();
    handleMenuClose();
  };
  const logout = () => {
    console.log("opo");
    localStorage.removeItem("loginUserToken");
    history.push("/login");
    setLoginTrueApp(false);
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={goToProfile}>Profile</MenuItem>
      <MenuItem onClick={logout}>logout</MenuItem>
    </Menu>
  );
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={goToFeedBack}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge
            //  badgeContent={4}
            color="error"
          >
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={payBill}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={buy != null && buy.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  React.useEffect(() => {
    var Buy = JSON.parse(localStorage.getItem("Buy"));
    setBuy(Buy);
  }, [count]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />{" "}
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              size="large"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{ cursor: "pointer" }}
              onClick={goToDashboard}
            >
              Buy Fresh Food
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge
                  // badgeContent={4}
                  onClick={goToFeedBack}
                  color="error"
                >
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={payBill}
              >
                <Badge badgeContent={buy != null && buy.length} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List className={classes.paddingTopR}>
            {MenuIconList.filter((route) => route.isMenu).map((text, index) => (
              <NavLink
                className={`${classes.textStyle} ${classes.hoverIcon}`}
                key={index}
                to={text.path}
              >
                <ListItem className={classes.hoverColor}>
                  <ListItemIcon>{text.Icon}</ListItemIcon>
                  <ListItemText primary={text.name} />
                </ListItem>
              </NavLink>
            ))}
          </List>
          <span
            style={{
              position: "fixed",
              bottom: "20px",
              right: "30px",
              cursor: "pointer",
              color: "red",
            }}
            onClick={openCalculator}
          >
            <CalculateRoundedIcon style={{ fontSize: 50 }} />
          </span>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Typography paragraph>
            <Calculator openCal={openCal} setOpenCal={setOpenCal} />
            <SwitchData />
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
