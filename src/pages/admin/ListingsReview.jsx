import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import {
  Box,
  Typography,
  Card,
  Grid,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import bikeImg from "../../assets/mountains bike.png";
import cameraImg from "../../assets/camera equipment.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import VisibilityIcon from "@mui/icons-material/Visibility";

/* ================= MOCK DATA (API later) ================= */
const listings = [
  {
    id: 1,
    title: "Canon DSLR Camera",
    category: "Electronics",
    owner: "User",
    price: "PKR 1,500 / day",
    status: "Pending",
    image: cameraImg,
  },
  {
    id: 2,
    title: "Mountain Bike",
    category: "Sports",
    owner: "Store",
    price: "PKR 2,000 / day",
    status: "Pending",
    image: bikeImg,
  },
];

export default function ListingsReview() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <AdminLayout>
      <Box>
        {/* ================= HEADER ================= */}
        <Box mb={3}>
          <Typography variant="h5" fontWeight={700}>
            Listings Review
          </Typography>
          <Typography color="text.secondary">
            Review and approve items listed by users and stores
          </Typography>
        </Box>

        {/* ================= LISTINGS GRID ================= */}
        <Grid container spacing={3}>
          {listings.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={item.image}
                  alt={item.title}
                />

                <CardContent>
                  <Typography fontWeight={600}>{item.title}</Typography>

                  <Stack direction="row" spacing={1} mt={1}>
                    <Chip label={item.category} size="small" />
                    <Chip
                      label={item.owner}
                      size="small"
                      color={item.owner === "Store" ? "secondary" : "primary"}
                    />
                  </Stack>

                  <Typography mt={1} fontWeight={500}>
                    {item.price}
                  </Typography>

                  <Chip
                    label={item.status}
                    color="warning"
                    size="small"
                    sx={{ mt: 1 }}
                  />

                  <Stack direction="row" spacing={1} mt={2}>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<VisibilityIcon />}
                      onClick={() => setSelectedItem(item)}
                    >
                      View
                    </Button>

                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      startIcon={<CheckCircleIcon />}
                    >
                      Approve
                    </Button>

                    <Button
                      size="small"
                      variant="contained"
                      color="error"
                      startIcon={<CancelIcon />}
                    >
                      Reject
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* ================= VIEW DETAILS MODAL ================= */}
        <Dialog
          open={Boolean(selectedItem)}
          onClose={() => setSelectedItem(null)}
          maxWidth="sm"
          fullWidth
        >
          {selectedItem && (
            <>
              <DialogTitle>Listing Details</DialogTitle>
              <DialogContent dividers>
                <Typography fontWeight={600}>
                  {selectedItem.title}
                </Typography>
                <Typography mt={1}>
                  Category: {selectedItem.category}
                </Typography>
                <Typography>
                  Owner Type: {selectedItem.owner}
                </Typography>
                <Typography>
                  Price: {selectedItem.price}
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setSelectedItem(null)}>Close</Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Box>
    </AdminLayout>
  );
}