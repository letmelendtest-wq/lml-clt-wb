import React, { useState, useMemo } from "react";
import UserLayout from "../../layouts/UserLayout";
import AdminLayout from "../../layouts/AdminLayout";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Select,
  MenuItem,
  Pagination,
  Stack,
} from "@mui/material";

// Dummy Data: 20 complaints
const DUMMY_COMPLAINTS = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Issue ${i + 1} with item`,
  item: `Item ${Math.ceil(Math.random() * 10)}`,
  user: `user${i + 1}@example.com`,
  status: i % 3 === 0 ? "Resolved" : i % 3 === 1 ? "Rejected" : "Active",
}));

const PAGE_SIZE = 10;

export default function Complaints() {
  const [complaints, setComplaints] = useState(DUMMY_COMPLAINTS);
  const [filterStatus, setFilterStatus] = useState("Active");
  const [page, setPage] = useState(1);

  // Filtered complaints based on status
  const filteredComplaints = useMemo(
    () => complaints.filter((c) => c.status === filterStatus),
    [complaints, filterStatus]
  );

  // Paginated complaints
  const paginatedComplaints = useMemo(() => {
    const startIndex = (page - 1) * PAGE_SIZE;
    return filteredComplaints.slice(startIndex, startIndex + PAGE_SIZE);
  }, [filteredComplaints, page]);

  // Handle complaint action updates
  const handleAction = (id, action) => {
    setComplaints((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: action === "resolve" ? "Resolved" : action === "reject" ? "Rejected" : c.status }
          : c
      )
    );
    console.log(`Action "${action}" performed on complaint ${id}`);
  };

  return (
    
    <AdminLayout>
      <UserLayout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" color="primary.main" gutterBottom > 
          Complaints Management
        </Typography>

        {/* Filters */}
        <Box sx={{ mb: 2, display: "flex", gap: 2, alignItems: "center" }}>
          <Typography>Status Filter:</Typography>
          <Select
            value={filterStatus}
            onChange={(e) => {
              setFilterStatus(e.target.value);
              setPage(1); // reset to first page on filter change
            }}
          >
            <MenuItem value="Active">Active Complaints</MenuItem>
            <MenuItem value="Resolved">Resolved Complaints</MenuItem>
            <MenuItem value="Rejected">Rejected Complaints</MenuItem>
          </Select>
        </Box>

        {/* Complaints Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: "primary.main" }}>
              <TableRow>
                <TableCell sx={{ color: "white" }}>ID</TableCell>
                <TableCell sx={{ color: "white" }}>Title / Reason</TableCell>
                <TableCell sx={{ color: "white" }}>Item</TableCell>
                <TableCell sx={{ color: "white" }}>Filed By</TableCell>
                <TableCell sx={{ color: "white" }}>Status</TableCell>
                <TableCell sx={{ color: "white" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedComplaints.map((complaint) => (
                <TableRow key={complaint.id}>
                  <TableCell>{complaint.id}</TableCell>
                  <TableCell>{complaint.title}</TableCell>
                  <TableCell>{complaint.item}</TableCell>
                  <TableCell>{complaint.user}</TableCell>
                  <TableCell>{complaint.status}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        disabled={complaint.status !== "Active"}
                        onClick={() => handleAction(complaint.id, "resolve")}
                      >
                        Resolve
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        disabled={complaint.status !== "Active"}
                        onClick={() => handleAction(complaint.id, "reject")}
                      >
                        Reject
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        disabled
                        onClick={() => console.log("Inquire clicked")}
                      >
                        Inquire
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
              {paginatedComplaints.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No complaints found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <Pagination
            count={Math.ceil(filteredComplaints.length / PAGE_SIZE)}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
          />
        </Box>
      </Box>
      </UserLayout>
    </AdminLayout>
    
  );
}
