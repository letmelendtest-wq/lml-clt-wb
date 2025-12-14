import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  MenuItem,
} from "@mui/material";
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

  const submit = async () => {
    await apiPost(ENDPOINTS.ITEMS.CREATE, form);
    alert("Item added!");
  };

  return (
    <UserLayout>
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{ mb: 3, color: "primary.main" }}
        >
          Add New Item
        </Typography>

        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
              Item Details
            </Typography>

            <Grid container spacing={3}>
              {/* Item Title */}
              <Grid item xs={12} md={6}>
                <Input
                  fullWidth
                  label="Item Title"
                  placeholder="e.g. DSLR Camera"
                  value={form.title}
                  onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                  }
                />
              </Grid>

              {/* Category – FIXED WIDTH */}
              <Grid item xs={12} md={6}>
                <Input
                  fullWidth
                  select
                  label="Category"
                  value={form.category}
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

              
              <Grid item xs={12} md={4}>
                <Input
                  fullWidth
                  label="Condition"
                  placeholder="New / Like New / Used"
                  value={form.condition}
                  onChange={(e) =>
                    setForm({ ...form, condition: e.target.value })
                  }
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <Input
                  fullWidth
                  label="Daily Rental Rate (PKR)"
                  type="number"
                  value={form.dailyRate}
                  onChange={(e) =>
                    setForm({ ...form, dailyRate: e.target.value })
                  }
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <Input
                  fullWidth
                  label="Security Deposit (PKR)"
                  type="number"
                  value={form.deposit}
                  onChange={(e) =>
                    setForm({ ...form, deposit: e.target.value })
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Input
                  fullWidth
                  label="Pickup Location"
                  placeholder="City / Area"
                  value={form.location}
                  onChange={(e) =>
                    setForm({ ...form, location: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  fullWidth
                  label="Description"
                  placeholder="Describe the item, usage rules, etc."
                  multiline
                  rows={4}
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
              </Grid>

            </Grid>

            <Box sx={{ mt: 4, textAlign: "right" }}>
              <Button onClick={submit}>Add Item</Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </UserLayout>
  );
}
