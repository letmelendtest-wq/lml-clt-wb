import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Stack,
  Button,
  Divider,
  LinearProgress,
} from "@mui/material";
import AdminLayout from "../../layouts/AdminLayout";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const KpiCard = ({ title, value, subtitle, trend, color }) => (
  <Card sx={{ borderRadius: 3 }}>
    <CardContent>
      <Typography color="text.secondary" fontSize={13}>
        {title}
      </Typography>

      <Typography variant="h5" fontWeight={700} mt={1}>
        {value}
      </Typography>

      <Stack direction="row" spacing={1} alignItems="center" mt={1}>
        <TrendingUpIcon fontSize="small" color={color} />
        <Typography fontSize={13} color={`${color}.main`}>
          {trend}
        </Typography>
      </Stack>

      <Button size="small" sx={{ mt: 2 }}>
        Details
      </Button>
    </CardContent>
  </Card>
);

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <Box sx={{ p: 3 }}>
        {/* HEADER */}
        <Typography variant="h4" fontWeight={700} mb={3} color={"primary.main"}>
          Dashboard
        </Typography>

        {/* KPI ROW */}
        <Grid container spacing={5} mb={4} p={3}>
          <Grid item xs={12} md={4} >
            <KpiCard
              title="Total Sales"
              value="$350K"
              trend="+10.4%"
              color="success"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <KpiCard
              title="Total Orders"
              value="10.7K"
              trend="+14.4%"
              color="success"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <KpiCard
              title="Pending & Canceled"
              value="603"
              trend="-14.4%"
              color="error"
            />
          </Grid>
        </Grid>

        {/* MAIN CONTENT */}
        <Grid container spacing={4}>
          {/* WEEKLY REPORT */}
          <Grid item xs={12} md={8} fullWidth>
            <Card sx={{ borderRadius: 3 ,p:4 ,width:400}}>
              <CardContent>
                <Typography fontWeight={600} mb={2}>
                  Report for this week
                </Typography>

                <Grid container spacing={3} mb={3}>
                  <Grid item xs={4}>
                    <Typography fontWeight={700}>52k</Typography>
                    <Typography fontSize={13} color="text.secondary">
                      Customers
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography fontWeight={700}>3.5k</Typography>
                    <Typography fontSize={13} color="text.secondary">
                      Products
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography fontWeight={700}>250k</Typography>
                    <Typography fontSize={13} color="text.secondary">
                      Revenue
                    </Typography>
                  </Grid>
                </Grid>

                {/* Chart Placeholder */}
                <Box
                  sx={{
                    height: 220,
                    borderRadius: 2,
                    bgcolor: "grey.100",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "text.secondary",
                  }}
                >
                  Weekly Sales Chart
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* RIGHT PANEL */}
          <Grid item xs={12} md={4} fullWidth>
            {/* USERS LIVE */}
            <Card sx={{ borderRadius: 3, mb: 4 ,p:4 ,width:400}}>
              <CardContent>
                <Typography fontWeight={600}>
                  Users in last 30 minutes
                </Typography>
                <Typography variant="h5" fontWeight={700} mt={1}>
                  21.5K
                </Typography>

                <Box mt={3}>
                  <LinearProgress
                    variant="determinate"
                    value={70}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
              </CardContent>
            </Card>

            {/* SALES BY COUNTRY */}
            <Card sx={{ borderRadius: 3, }}>
              <CardContent>
                <Typography fontWeight={600} mb={2}>
                  Sales by Country
                </Typography>

                {[
                  { country: "United States", value: "30k", percent: 80 },
                  { country: "Brazil", value: "30k", percent: 65 },
                  { country: "Australia", value: "25k", percent: 55 },
                ].map((item) => (
                  <Box key={item.country} mb={2}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      mb={0.5}
                    >
                      <Typography fontSize={14}>
                        {item.country}
                      </Typography>
                      <Typography fontSize={14} fontWeight={600}>
                        {item.value}
                      </Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={item.percent}
                      sx={{ height: 6, borderRadius: 3 }}
                    />
                  </Box>
                ))}

                <Button fullWidth sx={{ mt: 2 }}>
                  View Insight
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </AdminLayout>
  );
}
