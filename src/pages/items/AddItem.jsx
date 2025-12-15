import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  MenuItem,
  InputAdornment,
  Divider,
  Switch,
  FormControlLabel,
} from "@mui/material";
import {
  Category,
  Description,
  Inventory2,
  LocationOn,
} from "@mui/icons-material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import VideoLibrary from "@mui/icons-material/VideoLibrary";
import UserLayout from "../../layouts/UserLayout";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { apiPost } from "../../api/apiClient";
import { ENDPOINTS } from "../../api/endpoints";

const categories = [
  "Electronics",
  "Tools",
  "Books",
  "Sports Equipment",
  "Fashion & Accessories",
  "Home Appliances",
];

export default function AddItem() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    condition: "",
    dailyRate: "",
    deposit: "",
    location: "",
    stock: "In Stock",
    unlimited: true,
  });

  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleVideoChange = (e) => {
    setVideos([...e.target.files]);
  };

  const submit = async () => {
    const data = new FormData();
    Object.keys(form).forEach((k) => data.append(k, form[k]));
    images.forEach((img) => data.append("images", img));
    videos.forEach((vid) => data.append("videos", vid));

    await apiPost(ENDPOINTS.ITEMS.CREATE, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("Item published!");
  };

  return (
    <UserLayout>
      {/* Header */}
      <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" fontWeight={700} color={"primary.main"}>
          Add New Product
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="outlined">Save Draft</Button>
          <Button onClick={submit}>Publish Product</Button>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {/* LEFT COLUMN */}
        <Grid item xs={12} md={8}>
          {/* Basic Details */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography fontWeight={600} mb={2}>
                Basic Details
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Input
                fullWidth
                label="Product Name"
                placeholder="iPhone 15"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />

              <Box mt={3}>
                <Input
                  fullWidth
                  multiline
                  rows={4}
                  label="Product Description"
                  placeholder="Describe your product..."
                  value={form.description}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Description />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
              </Box>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography fontWeight={600} mb={2}>
                Pricing
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Input
                    label="Rental Price (PKR)"
                    type="number"
                    value={form.dailyRate}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CurrencyRupeeIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) =>
                      setForm({ ...form, dailyRate: e.target.value })
                    }
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Input
                    label="Security Deposit (PKR)"
                    type="number"
                    value={form.deposit}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CurrencyRupeeIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) =>
                      setForm({ ...form, deposit: e.target.value })
                    }
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Inventory */}
          <Card>
            <CardContent>
              <Typography fontWeight={600} mb={2}>
                Inventory
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <FormControlLabel
                control={
                  <Switch
                    checked={form.unlimited}
                    onChange={(e) =>
                      setForm({ ...form, unlimited: e.target.checked })
                    }
                  />
                }
                label="Unlimited Stock"
              />

              <Input
                fullWidth
                label="Stock Status"
                value={form.stock}
                disabled={form.unlimited}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid item xs={12} md={4}>
          {/* Product Image */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography fontWeight={600} mb={2}>
                Upload Product Image
              </Typography>

              <Button
                fullWidth
                variant="outlined"
                component="label"
                startIcon={<PhotoCamera />}
              >
                Browse Images
                <input
                  hidden
                  multiple
                  accept="image/*"
                  type="file"
                  onChange={handleImageChange}
                />
              </Button>

              <Box sx={{ display: "flex", gap: 2, mt: 2, flexWrap: "wrap" }}>
                {images.map((img, i) => (
                  <Box
                    key={i}
                    component="img"
                    src={URL.createObjectURL(img)}
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 1,
                      objectFit: "cover",
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* Category */}
          <Card>
            <CardContent>
              <Typography fontWeight={600} mb={2}>
                Categories
              </Typography>

              <Input
                select
                fullWidth
                label="Product Category"
                value={form.category}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Category />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </Input>

              <Box mt={3}>
                <Input
                  fullWidth
                  label="Pickup Location"
                  value={form.location}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOn />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) =>
                    setForm({ ...form, location: e.target.value })
                  }
                />
              </Box>

              <Box mt={3}>
                <Button
                  fullWidth
                  variant="outlined"
                  component="label"
                  startIcon={<VideoLibrary />}
                >
                  Upload Videos
                  <input
                    hidden
                    multiple
                    accept="video/*"
                    type="file"
                    onChange={handleVideoChange}
                  />
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </UserLayout>
  );
}
