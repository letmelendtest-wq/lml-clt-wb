import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import StorefrontIcon from "@mui/icons-material/Storefront";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/store/dashboard" },
  { text: "Add Item", icon: <AddCircleOutlineIcon />, path: "/store/AddItem" },
  { text: "Orders", icon: <ShoppingCartIcon />, path: "/store/orders" },
  { text: "Inventory", icon: <InventoryIcon />, path: "/items" },
];

function StoreSidebar({ open, onClose, onToggle }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sidebarContent = (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        bgcolor: theme.palette.mode === "dark" ? "background.paper" : "primary.main",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden", // Prevent scrolling
      }}
    >
      {/* Header with Close Button */}
      <Box
        sx={{
          p: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: theme.palette.mode === "dark" ? "primary.dark" : "primary.dark",
          flexShrink: 0, // Prevent shrinking
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <StorefrontIcon
            sx={{
              fontSize: 32,
              color: "white",
            }}
          />
          <Typography variant="h6" fontWeight={700} sx={{ color: "white" }}>
            Store Panel
          </Typography>
        </Box>
        
        {/* Close Button */}
        <IconButton
          onClick={onToggle}
          sx={{
            color: "white",
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.12)", flexShrink: 0 }} />

      {/* Navigation Menu */}
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        <List sx={{ py: 2 }}>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              component={NavLink}
              to={item.path}
              onClick={isMobile ? onClose : undefined}
              sx={{
                mx: 1,
                mb: 0.5,
                borderRadius: 2,
                color: theme.palette.mode === "dark" ? "text.primary" : "rgba(255, 255, 255, 0.9)",
                transition: "all 0.2s",
                "&.active": {
                  bgcolor: theme.palette.mode === "dark"
                    ? "primary.main"
                    : "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  fontWeight: 600,
                  "& .MuiListItemIcon-root": {
                    color: "white",
                  },
                },
                "&:hover": {
                  bgcolor: theme.palette.mode === "dark"
                    ? "primary.dark"
                    : "rgba(255, 255, 255, 0.15)",
                  transform: "translateX(4px)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: theme.palette.mode === "dark" ? "text.secondary" : "rgba(255, 255, 255, 0.8)",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: "0.95rem",
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          p: 2,
          borderTop: 1,
          borderColor: "rgba(255, 255, 255, 0.12)",
          flexShrink: 0, // Prevent shrinking
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: theme.palette.mode === "dark" ? "text.secondary" : "rgba(255, 255, 255, 0.7)",
            display: "block",
            textAlign: "center",
          }}
        >
          Store Dashboard v1.0
        </Typography>
      </Box>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 260,
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    );
  }

  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1200,
        transform: open ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      {sidebarContent}
    </Box>
  );
}

export default StoreSidebar;