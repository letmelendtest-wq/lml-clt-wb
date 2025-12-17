import { useState } from "react";
import { Box, IconButton, useTheme, useMediaQuery, Fab } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdminSidebar from "../components/layout/AdminSidebar";

export default function AdminLayout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const sidebarWidth = 260;

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", position: "relative" }}>
      {/* Floating Menu Button - Only show when sidebar is closed */}
      {!sidebarOpen && (
        <Fab
          color="primary"
          onClick={toggleSidebar}
          sx={{
            position: "fixed",
            top: "75vh",
            left: 20,
            zIndex: 1300,
            boxShadow: 3,
          }}
        >
          <MenuIcon />
        </Fab>
      )}

      {/* Sidebar */}
      <AdminSidebar 
        open={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        onToggle={toggleSidebar}
      />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          bgcolor: "background.default",
          transition: "margin-left 0.3s ease-in-out",
          marginLeft: isMobile ? 0 : sidebarOpen ? `${sidebarWidth}px` : "0px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Content */}
        <Box
          sx={{
            flexGrow: 1,
            p: { xs: 2, md: 3 },
            pt: { xs: 10, md: 3 }, // Extra top padding on mobile for FAB
          }}
        >
          {children}
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            mt: "auto",
            p: 2,
            bgcolor: "background.paper",
            borderTop: 1,
            borderColor: "divider",
            textAlign: "center",
          }}
        >
          © 2025 Let Me Lend - Admin Panel. All Rights Reserved.
        </Box>
      </Box>
    </Box>
  );
}