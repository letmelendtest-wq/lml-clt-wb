import { useState } from "react";
import StoreLayout from "../../layouts/StoreLayout";
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
  TextField,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

// Import images
import cameraImg from "../../assets/camera equipment.png";
import consoleImg from "../../assets/gaming console.png";
import bikeImg from "../../assets/mountains bike.png";
import headphonesImg from "../../assets/headphones.png";
import watchImg from "../../assets/smart watch.png";
import backpackImg from "../../assets/backpack.png";

// Dummy inventory data
const inventoryData = [
  {
    id: 1,
    title: "Canon DSLR Camera",
    category: "Electronics",
    dailyRate: "1,500",
    deposit: "15,000",
    status: "Available",
    stock: "Unlimited",
    image: cameraImg,
    description: "Professional DSLR camera with multiple lenses and accessories.",
    location: "DHA Phase 6, Karachi",
  },
  {
    id: 2,
    title: "Gaming Console",
    category: "Electronics",
    dailyRate: "1,200",
    deposit: "25,000",
    status: "Rented",
    stock: "2 available",
    image: consoleImg,
    description: "Latest gaming console with wireless controllers and games.",
    location: "Gulshan-e-Iqbal, Karachi",
  },
  {
    id: 3,
    title: "Mountain Bike",
    category: "Sports",
    dailyRate: "2,000",
    deposit: "20,000",
    status: "Available",
    stock: "1 available",
    image: bikeImg,
    description: "High-quality mountain bike suitable for all terrains.",
    location: "Clifton, Karachi",
  },
  {
    id: 4,
    title: "Professional Headphones",
    category: "Electronics",
    dailyRate: "800",
    deposit: "8,000",
    status: "Available",
    stock: "Unlimited",
    image: headphonesImg,
    description: "Studio-grade headphones with noise cancellation.",
    location: "Johar Town, Lahore",
  },
  {
    id: 5,
    title: "Smart Watch",
    category: "Electronics",
    dailyRate: "600",
    deposit: "12,000",
    status: "Maintenance",
    stock: "1 available",
    image: watchImg,
    description: "Latest smartwatch with fitness tracking and GPS.",
    location: "Model Town, Lahore",
  },
  {
    id: 6,
    title: "Travel Backpack",
    category: "Travel",
    dailyRate: "300",
    deposit: "3,000",
    status: "Available",
    stock: "3 available",
    image: backpackImg,
    description: "Large capacity travel backpack with multiple compartments.",
    location: "Saddar, Karachi",
  },
];

export default function StoreInventory() {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = inventoryData.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (filterCategory === "All" || item.category === filterCategory) &&
      (filterStatus === "All" || item.status === filterStatus)
    );
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "success";
      case "Rented":
        return "primary";
      case "Maintenance":
        return "warning";
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
            Store Inventory
          </Typography>
          <Typography color="text.secondary">
            Manage all your store items and their availability
          </Typography>
        </Box>

        {/* Filter Bar */}
        <Card sx={{ p: 2, mb: 3 }}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              size="small"
              placeholder="Search items..."
              InputProps={{ startAdornment: <SearchIcon /> }}
              onChange={(e) => setSearch(e.target.value)}
            />

            <TextField
              size="small"
              select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="All">All Categories</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Sports">Sports</MenuItem>
              <MenuItem value="Travel">Travel</MenuItem>
            </TextField>

            <TextField
              size="small"
              select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              label="Status"
            >
              <MenuItem value="All">All Status</MenuItem>
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Rented">Rented</MenuItem>
              <MenuItem value="Maintenance">Maintenance</MenuItem>
            </TextField>
          </Stack>
        </Card>

        {/* Items Grid */}
        <Grid container spacing={3}>
          {filteredItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card sx={{ borderRadius: 3, overflow: "hidden", height: "100%" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={item.image}
                  alt={item.title}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography fontWeight={600} gutterBottom>
                    {item.title}
                  </Typography>

                  <Stack direction="row" spacing={1} mb={2}>
                    <Chip label={item.category} size="small" />
                    <Chip
                      label={item.status}
                      size="small"
                      color={getStatusColor(item.status)}
                    />
                  </Stack>

                  <Typography variant="body2" color="text.secondary" mb={1}>
                    Rental: PKR {item.dailyRate}/day
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    Deposit: PKR {item.deposit}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    Stock: {item.stock}
                  </Typography>

                  <Stack direction="row" spacing={1}>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => setSelectedItem(item)}
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton size="small" color="secondary">
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredItems.length === 0 && (
          <Box textAlign="center" py={4}>
            <Typography color="text.secondary">
              No items found matching your criteria
            </Typography>
          </Box>
        )}

        {/* Item Details Modal */}
        <Dialog
          open={Boolean(selectedItem)}
          onClose={() => setSelectedItem(null)}
          maxWidth="md"
          fullWidth
        >
          {selectedItem && (
            <>
              <DialogTitle>
                <Typography variant="h6" fontWeight={600}>
                  {selectedItem.title}
                </Typography>
              </DialogTitle>
              <DialogContent dividers>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Box
                      component="img"
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      sx={{
                        width: "100%",
                        height: 250,
                        objectFit: "cover",
                        borderRadius: 2,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={2}>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Category
                        </Typography>
                        <Typography>{selectedItem.category}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Daily Rate
                        </Typography>
                        <Typography>PKR {selectedItem.dailyRate}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Security Deposit
                        </Typography>
                        <Typography>PKR {selectedItem.deposit}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Stock
                        </Typography>
                        <Typography>{selectedItem.stock}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Status
                        </Typography>
                        <Chip
                          label={selectedItem.status}
                          color={getStatusColor(selectedItem.status)}
                          size="small"
                        />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          Location
                        </Typography>
                        <Typography>{selectedItem.location}</Typography>
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" color="text.secondary" mb={1}>
                      Description
                    </Typography>
                    <Typography>{selectedItem.description}</Typography>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setSelectedItem(null)}>Close</Button>
                <Button variant="contained" color="secondary">
                  Edit Item
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Box>
    </StoreLayout>
  );
}