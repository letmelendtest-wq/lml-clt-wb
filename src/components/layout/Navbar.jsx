import logo from "../../assets/logo.jpeg";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  InputBase
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ gap: 2 }}>

        {/* Left Menu Icon */}
         <Box
            component="img"
            src={logo} // <-- Replace with your logo path
            alt="Let Me Lend"
            sx={{ height: 40, width: "auto" }}
          />
        {/* Logo / Title */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "primary.main",
            fontWeight: "bold"
          }}
        >
          Let Me Lend
        </Typography>

        {/* Search Bar */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f1f1f1",
            borderRadius: 1,
            px: 2,
            py: 0.5,
            mx: 2
          }}
        >
          <SearchIcon sx={{ color: "gray", mr: 1 }} />
          <InputBase
            placeholder="Search items to borrow..."
            fullWidth
          />
        </Box>

        {/* Right Icons */}
        <IconButton component={Link} to="/login">
          <PersonOutlineIcon />
        </IconButton>

        <IconButton component={Link} to="/cart">
          <ShoppingCartOutlinedIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
