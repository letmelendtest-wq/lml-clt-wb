import { useState } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import StoreLayout from "../../layouts/StoreLayout";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import ReportCard from "./reports/ReportCard";
import MonthlyReport from "./reports/MonthlyReport";
import OrdersReport from "./reports/OrdersReport";

export default function StoreDashboard() {
  const [data, setData] = useState({
    soldItems: "3,2423",
    totalCustomer: "1,202",
    totalEarning: "12000",
    itemAvailable: "45"
  });

  const [customerReportData, setCustomerReportData] = useState([
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ]);

  const [monthlyData, setMonthlyData] = useState([
    { month: "Oct 2024", Earning: 1200 },
    { month: "Nov 2024", Earning: 1800 },
    { month: "Dec 2024", Earning: 2500 },
    { month: "Jan 2025", Earning: 2100 },
    { month: "Feb 2025", Earning: 2300 },
    { month: "Mar 2025", Earning: 2800 },
  ]);

  const [orderData, setOrderData] = useState([
    { name: 'Completed', value: 374 },
    { name: 'Pending', value: 300 },
    { name: 'Cancelled', value: 300 },
    { name: 'Returned', value: 200 },
  ]);

  return (
    <StoreLayout>
      <Box>
        <Typography variant="h4" color="primary.main" fontWeight={700} mb={3}>
          Store Dashboard
        </Typography>
        <Typography color="text.secondary" mb={4}>
          View items, orders and statistics.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <ReportCard
              value={data.soldItems}
              label="Total Items Sold"
              icon={ShoppingCartIcon}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ReportCard
              value={data.totalCustomer}
              label="Total Customers"
              icon={PeopleIcon}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ReportCard
              value={`$${data.totalEarning.toLocaleString()}`}
              label="Total Earning"
              icon={AttachMoneyIcon}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <ReportCard
              value={data.itemAvailable}
              label="Items Available"
              icon={Inventory2Icon}
            />
          </Grid>

          <Grid item xs={12} lg={8}>
            <MonthlyReport data={monthlyData} />
          </Grid>

          <Grid item xs={12} lg={4}>
            <Card
              sx={{
                borderRadius: 4,
                p: 2,
                height: '100%',
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
              >
                <Typography variant="subtitle1" fontWeight={600}>
                  Orders Breakdown
                </Typography>
              </Box>

              <CardContent sx={{ p: 0 }}>
                <OrdersReport data={orderData} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </StoreLayout>
  );
}