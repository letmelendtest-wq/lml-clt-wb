import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import AdminLayout from "../../layouts/AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <Box sx={{ p: 3 }}>
        {/* Page Title */}
        <Typography variant="h4" fontWeight={700} mb={1}>
          Admin Dashboard
        </Typography>
        <Typography color="text.secondary" mb={4}>
          System overview, user control & complaint handling
        </Typography>

        <Grid container spacing={4}>
          {/* USER MANAGEMENT CARD */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <PeopleIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="h6" fontWeight={600}>
                    User Management
                  </Typography>
                </Box>

                <Typography>Total Users: <b>120</b></Typography>
                <Typography>Active Users: <b>98</b></Typography>
                <Typography>Blocked Users: <b>22</b></Typography>

                <Button
                  variant="contained"
                  sx={{ mt: 3 }}
                  href="/admin/users"
                >
                  Manage Users
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* COMPLAINTS MANAGEMENT CARD */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <ReportProblemIcon color="error" sx={{ mr: 1 }} />
                  <Typography variant="h6" fontWeight={600}>
                    Complaints Management
                  </Typography>
                </Box>

                <Typography>Total Complaints: <b>45</b></Typography>
                <Typography>Pending Complaints: <b>17</b></Typography>
                <Typography>Resolved Complaints: <b>28</b></Typography>

                <Button
                  variant="contained"
                  color="error"
                  sx={{ mt: 3 }}
                  href="/admin/complaints"
                >
                  View Complaints
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </AdminLayout>
  );
}
