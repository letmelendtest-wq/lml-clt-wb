import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Stack,
  Button,
  LinearProgress,
  Chip,
} from "@mui/material";
import AdminLayout from "../../layouts/AdminLayout";

import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChatIcon from "@mui/icons-material/Chat";
import BarChartIcon from "@mui/icons-material/BarChart";

/* ================= KPI CARD ================= */
const KpiCard = ({ title, value, link }) => (
  <Card sx={{ borderRadius: 2, cursor: "pointer" }} onClick={() => (window.location.href = link)}>
    <CardContent>
      <Typography fontSize={13} color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h5" fontWeight={700} mt={1}>
        {value}
      </Typography>
    </CardContent>
  </Card>
);

/* ================= MANAGEMENT CARD ================= */
const ManagementCard = ({
  icon,
  title,
  description,
  stats,
  button,
  link,
}) => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <Box
          sx={{
            width: 46,
            height: 46,
            bgcolor: "grey.100",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
          }}
        >
          {icon}
        </Box>
        <Typography fontWeight={600}>{title}</Typography>
      </Stack>

      <Typography fontSize={13} color="text.secondary" mb={2}>
        {description}
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap" mb={3}>
        {stats.map((s) => (
          <Chip
            key={s.label}
            label={`${s.value} ${s.label}`}
            size="small"
            variant="outlined"
          />
        ))}
      </Stack>

      <Button variant="contained" fullWidth href={link}>
        {button}
      </Button>
    </CardContent>
  </Card>
);

/* ================= DASHBOARD ================= */
export default function AdminDashboard() {
  return (
    <AdminLayout>
      <Box>
        {/* HEADER */}
        <Typography variant="h4" color="primary.main" fontWeight={700} mb={3}>
          Admin Dashboard
        </Typography>

        {/* ================= SUMMARY METRICS ================= */}
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} sm={6} md={2.4}>
            <KpiCard title="Total Users" value="1,245" link="/admin/users" />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <KpiCard title="Active Items" value="4,680" link="/admin/products" />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <KpiCard title="Active Bookings" value="1,120" link="/admin/bookings" />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <KpiCard title="Pending Complaints" value="96" link="/admin/complaints" />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <KpiCard title="Flagged Items" value="37" link="/admin/products?flagged=true" />
          </Grid>
        </Grid>

        {/* ================= ACTIVITY & COMPLAINT STATUS ================= */}
        <Grid container spacing={4} mb={4}>
          <Grid item xs={12} lg={8}>
            <Card>
              <CardContent>
                <Typography fontWeight={600} mb={2}>
                  Platform Activity Overview
                </Typography>
                <Typography fontSize={13} color="text.secondary" mb={3}>
                  User activity, bookings, uploads & chat interactions
                </Typography>

                <Box
                  sx={{
                    height: 220,
                    bgcolor: "grey.100",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 1,
                  }}
                >
                  <Typography color="text.secondary">
                    Activity Chart / Timeline
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Card>
              <CardContent>
                <Typography fontWeight={600} mb={2}>
                  Complaint Status
                </Typography>

                <Stack spacing={2}>
                  <Box>
                    <Typography fontSize={13}>Active</Typography>
                    <LinearProgress value={40} variant="determinate" />
                  </Box>
                  <Box>
                    <Typography fontSize={13}>In Process</Typography>
                    <LinearProgress value={55} variant="determinate" color="warning" />
                  </Box>
                  <Box>
                    <Typography fontSize={13}>Resolved</Typography>
                    <LinearProgress value={80} variant="determinate" color="success" />
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* ================= MANAGEMENT SHORTCUTS ================= */}
        <Grid container spacing={4} alignItems="stretch">
          {[
            {
              icon: <PeopleIcon />,
              title: "User Management",
              description: "View, block, or manage platform users and stores.",
              button: "Manage Users",
              link: "/admin/users",
              stats: [
                { label: "Users", value: 1245 },
                { label: "Stores", value: 312 },
              ],
            },
            {
              icon: <InventoryIcon />,
              title: "Item Moderation",
              description: "Monitor items, disable listings, and handle flagged content.",
              button: "Manage Items",
              link: "/admin/listings",
              stats: [
                { label: "Items", value: 4680 },
                { label: "Flagged", value: 37 },
              ],
            },
            {
              icon: <ReportProblemIcon />,
              title: "Complaint Handling",
              description: "Resolve, reject, or inquire borrower & lender disputes.",
              button: "View Complaints",
              link: "/admin/complaints",
              stats: [
                { label: "Pending", value: 42 },
                { label: "Resolved", value: 318 },
              ],
            },
            {
              icon: <ShoppingCartIcon />,
              title: "Transactions",
              description: "Monitor payments, refunds, and booking transactions.",
              button: "View Transactions",
              link: "/admin/transactions",
              stats: [
                { label: "Completed", value: 980 },
                { label: "Refunds", value: 24 },
              ],
            },
            {
              icon: <ChatIcon />,
              title: "Messaging Oversight",
              description: "View complaint-related chats in read-only mode.",
              button: "Open Chats",
              link: "/admin/chats",
              stats: [
                { label: "Active", value: 84 },
                { label: "Flagged", value: 7 },
              ],
            },
            {
              icon: <BarChartIcon />,
              title: "Reports & Analytics",
              description: "Analyze platform usage and download reports.",
              button: "View Reports",
              link: "/admin/reports",
              stats: [
                { label: "Top Stores", value: 10 },
                { label: "Top Items", value: 20 },
              ],
            },
          ].map((item) => (
            <Grid item xs={12} sm={6} lg={4} key={item.title}>
              <ManagementCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </AdminLayout>
  );
}