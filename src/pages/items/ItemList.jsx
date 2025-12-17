import { useState } from "react";
import UserLayout from "../../layouts/UserLayout";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// Import images
import cameraImg from "../../assets/camera equipment.png";
import consoleImg from "../../assets/gaming console.png";
import bikeImg from "../../assets/mountains bike.png";
import headphonesImg from "../../assets/headphones.png";
import watchImg from "../../assets/smart watch.png";
import backpackImg from "../../assets/backpack.png";
import householdImg from "../../assets/household lint.png";
import sinkImg from "../../assets/sink.png";
import chairImg from "../../assets/office chair.png";
import sportsImg from "../../assets/sports gear.png";
import lampImg from "../../assets/lamp set.png";

// Dummy items data
const itemsData = [
  {
    id: 1,
    title: "Canon DSLR Camera",
    category: "Electronics",
    dailyRate: "1,500",
    deposit: "15,000",
    status: "Available",
    image: cameraImg,
    description: "Professional DSLR camera with multiple lenses and accessories. Perfect for photography enthusiasts and professionals.",
    location: "DHA Phase 6, Karachi",
    owner: "Tech Store Karachi",
  },
  {
    id: 2,
    title: "Gaming Console",
    category: "Electronics",
    dailyRate: "1,200",
    deposit: "25,000",
    status: "Available",
    image: consoleImg,
    description: "Latest gaming console with wireless controllers and popular games included.",
    location: "Gulshan-e-Iqbal, Karachi",
    owner: "Gaming Hub",
  },
  {
    id: 3,
    title: "Mountain Bike",
    category: "Sports",
    dailyRate: "2,000",
    deposit: "20,000",
    status: "Available",
    image: bikeImg,
    description: "High-quality mountain bike suitable for all terrains. Includes helmet and safety gear.",
    location: "Clifton, Karachi",
    owner: "Sports Rental Co.",
  },
  {
    id: 4,
    title: "Professional Headphones",
    category: "Electronics",
    dailyRate: "800",
    deposit: "8,000",
    status: "Available",
    image: headphonesImg,
    description: "Studio-grade headphones with noise cancellation. Perfect for music production.",
    location: "Johar Town, Lahore",
    owner: "Audio Pro",
  },
  {
    id: 5,
    title: "Smart Watch",
    category: "Electronics",
    dailyRate: "600",
    deposit: "12,000",
    status: "Available",
    image: watchImg,
    description: "Latest smartwatch with fitness tracking, GPS, and health monitoring features.",
    location: "Model Town, Lahore",
    owner: "Tech Gadgets",
  },
  {
    id: 6,
    title: "Travel Backpack",
    category: "Travel",
    dailyRate: "300",
    deposit: "3,000",
    status: "Available",
    image: backpackImg,
    description: "Large capacity travel backpack with multiple compartments and weather protection.",
    location: "Saddar, Karachi",
    owner: "Travel Gear Store",
  },
];

export default function ItemList() {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = itemsData.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (filterCategory === "All" || item.category === filterCategory)
    );
  });

  return (
    <UserLayout>
      <Typography variant="h4" fontWeight={700} mb={4} color="primary.main">
        All Available Items
      </Typography>

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
        </Stack>
      </Card>

      <Grid container spacing={4}>
        {filteredItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              {/* Item Image */}
              <CardMedia
                component="img"
                height="180"
                image={item.image || "/placeholder.png"} // fallback placeholder
                alt={item.title}
                sx={{ objectFit: "cover" }}
              />

              {/* Item Details */}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  gutterBottom
                  noWrap
                  title={item.title}
                >
                  {item.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" noWrap>
                  {item.category || "Uncategorized"}
                </Typography>

                <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
                  <Chip
                    label={`PKR ${item.dailyRate}/day`}
                    size="small"
                    color="primary"
                  />
                  <Chip
                    label={item.status}
                    size="small"
                    color="success"
                  />
                </Stack>

                <Stack direction="row" alignItems="center" mt={1}>
                  <LocationOnIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                  <Typography variant="caption" color="text.secondary" noWrap>
                    {item.location}
                  </Typography>
                </Stack>
              </CardContent>

              {/* Action Button */}
              <Box sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => setSelectedItem(item)}
                  sx={{ borderRadius: 1 }}
                >
                  View Details
                </Button>
              </Box>
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
              <Typography variant="h5" fontWeight={600}>
                {selectedItem.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                by {selectedItem.owner}
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
                      height: 300,
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
                      <Chip label={selectedItem.category} size="small" />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Daily Rental Rate
                      </Typography>
                      <Typography variant="h6" color="primary.main" fontWeight={600}>
                        PKR {selectedItem.dailyRate}/day
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Security Deposit
                      </Typography>
                      <Typography variant="h6">
                        PKR {selectedItem.deposit}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Availability
                      </Typography>
                      <Chip
                        label={selectedItem.status}
                        color="success"
                        size="small"
                      />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Pickup Location
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <LocationOnIcon sx={{ fontSize: 16 }} />
                        <Typography>{selectedItem.location}</Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle2" color="text.secondary" mb={1}>
                    Description
                  </Typography>
                  <Typography>{selectedItem.description}</Typography>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setSelectedItem(null)}>Close</Button>
              <Button variant="contained" color="primary">
                Book Now
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </UserLayout>
  );
}
