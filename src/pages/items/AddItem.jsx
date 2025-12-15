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
} from "@mui/material";
import {
  Category,
  Description,
  LocationOn,
  Inventory2,
  FactCheck,
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

    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });

    images.forEach((img) => data.append("images", img));
    videos.forEach((vid) => data.append("videos", vid));

    await apiPost(ENDPOINTS.ITEMS.CREATE, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("Item added!");
  };

  return (
    <UserLayout>
      <Box sx={{ maxWidth: 900, mx: "auto", mt: 2 }}>
        <Typography
          variant="h4"
          sx={{ mb: 2, fontWeight: 700, color: "primary.main" }}
        >
          Add New Item
        </Typography>

        <Typography color="text.secondary" mb={4}>
          List your item and start earning by lending it to others
        </Typography>

        <Card sx={{ borderRadius: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h6" fontWeight={600} mb={2}>
              Item Information
            </Typography>

            <Divider sx={{ mb: 4 }} />

            <Grid container spacing={4}>
              {/* Item Title */}
              <Grid item xs={12} md={6}>
                <Input
                  fullWidth
                  label="Item Title"
                  placeholder="e.g. Canon DSLR Camera"
                  value={form.title}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Inventory2 />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                  }
                />
              </Grid>

              {/* Category */}
              <Grid item xs={12} md={6}>
                <Input
                  fullWidth
                  select
                  label="Category"
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
              </Grid>

              {/* Condition */}
              <Grid item xs={12} md={4}>
                <Input
                  fullWidth
                  label="Condition"
                  placeholder="New / Like New / Used"
                  value={form.condition}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FactCheck />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) =>
                    setForm({ ...form, condition: e.target.value })
                  }
                />
              </Grid>

              {/* Daily Rate */}
              <Grid item xs={12} md={4}>
                <Input
                  fullWidth
                  label="Daily Rental Rate (PKR)"
                  placeholder="xxxxx"
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

              {/* Deposit */}
              <Grid item xs={12} md={4}>
                <Input
                  fullWidth
                  label="Security Deposit (PKR)"
                  placeholder="xxxxx"
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

              {/* Location */}
              <Grid item xs={12} md={6}>
                <Input
                  fullWidth
                  label="Pickup Location"
                  placeholder="City / Area"
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
              </Grid>

              {/* Images */}
              <Grid item xs={12}>
                <Typography fontWeight={600} mb={1}color="text.secondary">
                  Item Images
                </Typography>
                <Button variant="outlined" component="label" startIcon={<PhotoCamera />}>
                  Upload Images
                  <input hidden multiple accept="image/*" type="file" onChange={handleImageChange} />
                </Button>

                <Box sx={{ display: "flex", gap: 2, mt: 2, flexWrap: "wrap" }}>
                  {images.map((img, i) => (
                    <Box
                      key={i}
                      component="img"
                      src={URL.createObjectURL(img)}
                      sx={{ width: 100, height: 100, borderRadius: 1, objectFit: "cover" }}
                    />
                  ))}
                </Box>
              </Grid>

              {/* Videos */}
              <Grid item xs={12}>
                <Typography fontWeight={600} mb={1} color="text.secondary">
                  Item Videos (Optional)
                </Typography>
                <Button variant="outlined" component="label" startIcon={<VideoLibrary />}>
                  Upload Videos
                  <input hidden multiple accept="video/*" type="file" onChange={handleVideoChange} />
                </Button>
              </Grid>

              {/* Description */}
              <Grid item xs={12}>
                <Input
                  fullWidth
                  multiline
                  rows={4}
                  label="Item Description"
                  placeholder="Explain item condition, usage rules, delivery details..."
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
              </Grid>
            </Grid>

            <Box sx={{ mt: 5, textAlign: "right" }}>
              <Button size="large" onClick={submit}>
                Publish Item
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </UserLayout>
  );
}
