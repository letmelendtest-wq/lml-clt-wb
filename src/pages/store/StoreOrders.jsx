import { useState } from "react";
import StoreLayout from "../../layouts/StoreLayout";
import {
  Box,
  Typography,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  Stack,
  TextField,
  MenuItem,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// Dummy orders data
const ordersData = [
  {
    id: 1,
    customerName: "Ali Khan",
    customerEmail: "ali@gmail.com",
    itemName: "Canon DSLR Camera",
    rentalDays: 3,
    totalAmount: "PKR 4,500",
    status: "Active",
    startDate: "2025-01-15",
    endDate: "2025-01-18",
  },
  {
    id: 2,
    customerName: "Sara Ahmed",
    customerEmail: "sara@gmail.com",
    itemName: "Mountain Bike",
    rentalDays: 7,
    totalAmount: "PKR 14,000",
    status: "Completed",
    startDate: "2025-01-10",
    endDate: "2025-01-17",
  },
  {
    id: 3,
    customerName: "Usman Raza",
    customerEmail: "usman@gmail.com",
    itemName: "Gaming Console",
    rentalDays: 5,
    totalAmount: "PKR 7,500",
    status: "Pending",
    startDate: "2025-01-20",
    endDate: "2025-01-25",
  },
  {
    id: 4,
    customerName: "Fatima Ali",
    customerEmail: "fatima@gmail.com",
    itemName: "Professional Headphones",
    rentalDays: 2,
    totalAmount: "PKR 2,400",
    status: "Cancelled",
    startDate: "2025-01-12",
    endDate: "2025-01-14",
  },
];

export default function StoreOrders() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredOrders = ordersData.filter((order) => {
    return (
      order.customerName.toLowerCase().includes(search.toLowerCase()) &&
      (filterStatus === "All" || order.status === filterStatus)
    );
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "primary";
      case "Completed":
        return "success";
      case "Pending":
        return "warning";
      case "Cancelled":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <StoreLayout>
      <Box>
        {/* Header */}
        <Box mb={3}>
          <Typography variant="h5" fontWeight={700}>
            Store Orders
          </Typography>
          <Typography color="text.secondary">
            Manage all rental orders for your store items
          </Typography>
        </Box>

        {/* Filter Bar */}
        <Card sx={{ p: 2, mb: 3 }}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              size="small"
              placeholder="Search by customer name"
              InputProps={{ startAdornment: <SearchIcon /> }}
              onChange={(e) => setSearch(e.target.value)}
            />

            <TextField
              size="small"
              select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              label="Order Status"
            >
              <MenuItem value="All">All Orders</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Cancelled">Cancelled</MenuItem>
            </TextField>
          </Stack>
        </Card>

        {/* Orders Table */}
        <TableContainer component={Card}>
          <Table>
            <TableHead sx={{ bgcolor: "primary.main" }}>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Customer</TableCell>
                <TableCell sx={{ color: "white" }}>Item</TableCell>
                <TableCell sx={{ color: "white" }}>Duration</TableCell>
                <TableCell sx={{ color: "white" }}>Amount</TableCell>
                <TableCell sx={{ color: "white" }}>Status</TableCell>
                <TableCell sx={{ color: "white" }} align="right">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id} hover>
                  <TableCell>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar>{order.customerName[0]}</Avatar>
                      <Box>
                        <Typography fontWeight={600}>
                          {order.customerName}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {order.customerEmail}
                        </Typography>
                      </Box>
                    </Stack>
                  </TableCell>

                  <TableCell>
                    <Typography fontWeight={500}>
                      {order.itemName}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="body2">
                      {order.rentalDays} days
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {order.startDate} to {order.endDate}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography fontWeight={600}>
                      {order.totalAmount}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={order.status}
                      color={getStatusColor(order.status)}
                      size="small"
                    />
                  </TableCell>

                  <TableCell align="right">
                    <Stack direction="row" spacing={1}>
                      <Button size="small" variant="outlined">
                        View
                      </Button>
                      {order.status === "Pending" && (
                        <Button size="small" variant="contained" color="success">
                          Accept
                        </Button>
                      )}
                      {order.status === "Active" && (
                        <Button size="small" variant="contained" color="primary">
                          Complete
                        </Button>
                      )}
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}

              {filteredOrders.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No orders found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </StoreLayout>
  );
}
