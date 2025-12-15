import { useState } from "react";
import UserLayout from "../../layouts/UserLayout";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  MobileStepper,
  Paper,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";

/* ================= HERO SLIDER ================= */
const sliderData = [
  {
    tag: "Best Deal on Lending",
    title: "SMART LENDING.",
    subtitle: "UP TO 80% SAVINGS",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    tag: "Trusted Community",
    title: "KYC VERIFIED.",
    subtitle: "SAFE & SECURE",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
  {
    tag: "Earn from Idle Items",
    title: "LEND & EARN.",
    subtitle: "FAST & RELIABLE",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f",
  },
];

/* ================= CATEGORIES ================= */
const categories = [
  { title: "Electronics", icon: "📱" },
  { title: "Tools", icon: "🛠️" },
  { title: "Books", icon: "📚" },
  { title: "Furniture", icon: "🪑" },
  { title: "Sports", icon: "🏏" },
  { title: "Accessories", icon: "⌚" },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <UserLayout>
      {/* ================= HERO BANNER ================= */}
      <Paper
        elevation={0}
        sx={{
          height: 360,
          borderRadius: 3,
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${sliderData[activeStep].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(15,23,42,0.85) 40%, rgba(15,23,42,0.2))",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            px: 6,
          }}
        >
          <Box sx={{ maxWidth: 420 }}>
            <Typography variant="caption" sx={{ opacity: 0.8 }}>
              {sliderData[activeStep].tag}
            </Typography>

            <Typography variant="h4" fontWeight={800} mt={1}>
              {sliderData[activeStep].title}
            </Typography>

            <Typography fontWeight={600} sx={{ mt: 1 }}>
              {sliderData[activeStep].subtitle}
            </Typography>

            <Button
              variant="contained"
              sx={{ mt: 3, borderRadius: 3 }}
            >
              Explore Items
            </Button>
          </Box>
        </Box>

        {/* Arrows */}
        <IconButton
          onClick={() => setActiveStep((p) => Math.max(p - 1, 0))}
          sx={{ position: "absolute", left: 10, top: "50%", color: "#fff" }}
        >
          <KeyboardArrowLeft />
        </IconButton>

        <IconButton
          onClick={() =>
            setActiveStep((p) => Math.min(p + 1, sliderData.length - 1))
          }
          sx={{ position: "absolute", right: 10, top: "50%", color: "#fff" }}
        >
          <KeyboardArrowRight />
        </IconButton>

        <MobileStepper
          variant="dots"
          steps={sliderData.length}
          position="static"
          activeStep={activeStep}
          sx={{
            position: "absolute",
            bottom: 10,
            width: "100%",
            background: "transparent",
          }}
        />
      </Paper>

      {/* ================= BEST DEALS ================= */}
      <Box sx={{ mt: 7 }}>
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography fontWeight={600}>
            Grab the best deal on Lending
          </Typography>
          <Typography color="primary">View All →</Typography>
        </Box>

        <Grid container spacing={6}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Grid item xs={6} sm={4} md={2.4} key={i}>
              <Card sx={{ borderRadius: 2 }}>
                <Box sx={{ height: 140, bgcolor: "#f1f5f9" }} />
                <CardContent>
                  <Typography fontWeight={600}>
                    Camera Equipment
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Save PKR 2,000
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ================= TOP CATEGORIES ================= */}
      <Box sx={{ mt: 8 }}>
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Typography fontWeight={600}>
            Shop From Top Categories
          </Typography>
          <Typography color="primary">View All →</Typography>
        </Box>

        <Grid container spacing={4}>
          {categories.map((cat, i) => (
            <Grid item xs={4} sm={2} key={i}>
              <Box textAlign="center">
                <Avatar
                  sx={{
                    width: 72,
                    height: 72,
                    bgcolor: "#f8fafc",
                    color: "#0ea5e9",
                    fontSize: 26,
                    mx: 5,
                  }}
                >
                  {cat.icon}
                </Avatar>
                <Typography sx={{ mt: 1.5 }} fontWeight={500}>
                  {cat.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* ================= DAILY ESSENTIALS ================= */}
      <Box sx={{ mt: 9 }}>
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography fontWeight={600}>
            Daily Essentials
          </Typography>
          <Typography color="primary">View All →</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            pb: 1,
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card
              key={i}
              sx={{
                minWidth: 200,
                borderRadius: 2,
                flexShrink: 0,
              }}
            >
              <Box sx={{ height: 120, bgcolor: "#f1f5f9" }} />
              <CardContent>
                <Typography fontWeight={600}>
                  Household Item
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Up to 60% off
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </UserLayout>
  );
}
