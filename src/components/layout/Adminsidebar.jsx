import { NavLink } from "react-router-dom";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import InventoryIcon from "@mui/icons-material/Inventory";

const menu = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/admin/dashboard" },
  { text: "Users", icon: <PeopleIcon />, path: "/admin/users" },
  { text: "Products", icon: <InventoryIcon />, path: "/admin/listings" },
  { text: "Complaints", icon: <ReportProblemIcon />, path: "/admin/complaints" },
];

export default function AdminSidebar() {
  return (
    <Box sx={{ width: 260, bgcolor: "#0B9BD7",  }}>
      <List>
        {menu.map((item) => (
          <ListItemButton
            key={item.text}
            component={NavLink}
            to={item.path}
            sx={{
              color: "#fff",
              "&.active": {
                bgcolor: "#0284C7",
              },
              "&:hover": {
                bgcolor: "#0369A1",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#E5E7EB" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
