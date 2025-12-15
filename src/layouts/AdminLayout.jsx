import { Box } from "@mui/material";
import AdminSidebar from "../components/layout/Adminsidebar";

export default function AdminLayout({ children }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#F8FAFC",
          p: 3,
          overflow: "auto",
        }}
      >
        {children} {/* ✅ THIS IS CRITICAL */}
      </Box>
    </Box>
  );
}
