import { Box } from "@mui/material";
import Navbar from "../components/layout/Navbar";
import TopHeader from "../components/common/header";
import Footer from "../components/common/footer";

export default function UserLayout({ children }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Top Header */}
      <TopHeader />
      
      {/* Main Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          px: { xs: 2, md: 4 },
          py: { xs: 2, md: 3 },
        }}
      >
        {children}
      </Box>
      
      {/* Footer */}
      <Footer />
    </Box>
  );
}