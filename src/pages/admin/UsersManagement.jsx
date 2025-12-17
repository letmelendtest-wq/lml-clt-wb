import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
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
  Avatar,
  IconButton,
  Stack,
  TextField,
  MenuItem,
} from "@mui/material";

import VerifiedIcon from "@mui/icons-material/Verified";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SearchIcon from "@mui/icons-material/Search";

/* ================= MOCK DATA (API later) ================= */
const usersData = [
  {
    id: 1,
    name: "Ali Khan",
    email: "ali@gmail.com",
    role: "User",
    kyc: "Verified",
    status: "Active",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    email: "sara@gmail.com",
    role: "Store",
    kyc: "Pending",
    status: "Active",
  },
  {
    id: 3,
    name: "Usman Raza",
    email: "usman@gmail.com",
    role: "User",
    kyc: "Verified",
    status: "Suspended",
  },
];

export default function UsersManagement() {
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("All");

  const filteredUsers = usersData.filter((user) => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterRole === "All" || user.role === filterRole)
    );
  });

  return (
    <AdminLayout>
      <Box>
        {/* ================= HEADER ================= */}
        <Box mb={3}>
          <Typography variant="h5" fontWeight={700}>
            User Management
          </Typography>
          <Typography color="text.secondary">
            Manage borrowers, lenders, and store accounts
          </Typography>
        </Box>

        {/* ================= FILTER BAR ================= */}
        <Card sx={{ p: 2, mb: 3 }}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              size="small"
              placeholder="Search by name"
              InputProps={{ startAdornment: <SearchIcon /> }}
              onChange={(e) => setSearch(e.target.value)}
            />

            <TextField
              size="small"
              select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              label="User Type"
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="User">Normal User</MenuItem>
              <MenuItem value="Store">Store User</MenuItem>
            </TextField>
          </Stack>
        </Card>

        {/* ================= USERS TABLE ================= */}
        <TableContainer component={Card}>
          <Table>
            <TableHead sx={{ bgcolor: "#F8FAFC" }}>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>KYC</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar>{user.name[0]}</Avatar>
                      <Typography fontWeight={600}>
                        {user.name}
                      </Typography>
                    </Stack>
                  </TableCell>

                  <TableCell>{user.email}</TableCell>

                  <TableCell>
                    <Chip
                      label={user.role}
                      color={user.role === "Store" ? "secondary" : "primary"}
                      size="small"
                    />
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={user.kyc}
                      color={user.kyc === "Verified" ? "success" : "warning"}
                      size="small"
                    />
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={user.status}
                      color={user.status === "Active" ? "success" : "error"}
                      size="small"
                    />
                  </TableCell>

                  <TableCell align="right">
                    <IconButton color="success">
                      <VerifiedIcon />
                    </IconButton>

                    <IconButton color="primary">
                      <CheckCircleIcon />
                    </IconButton>

                    <IconButton color="error">
                      <BlockIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

              {filteredUsers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No users found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </AdminLayout>
  );
}