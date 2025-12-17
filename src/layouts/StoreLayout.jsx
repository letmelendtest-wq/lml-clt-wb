import { useState } from "react";
import { Box, useTheme, useMediaQuery, Fab } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import StoreSidebar from "../components/layout/StoreSidebar";
import TopHeader from "../components/common/header";
import Footer from "../components/common/footer";

export default function StoreLayout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const sidebarWidth = 260;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Top Header - Full Width */}
      <TopHeader />

      <Box sx={{ display: "flex", flexGrow: 1, position: "relative" }}>
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
        <StoreSidebar 
          open={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
          onToggle={toggleSidebar}
        />

        {/* Main Content Area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            transition: "margin-left 0.3s ease-in-out",
            marginLeft: isMobile ? 0 : sidebarOpen ? `${sidebarWidth}px` : "0px",
            display: "flex",
            flexDirection: "column",
            minHeight: "calc(100vh - 36px)", // Subtract header height
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
        </Box>
      </Box>

      {/* Footer - Aligned with sidebar */}
      <Box
        sx={{
          transition: "margin-left 0.3s ease-in-out",
          marginLeft: isMobile ? 0 : sidebarOpen ? `${sidebarWidth}px` : "0px",
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
}