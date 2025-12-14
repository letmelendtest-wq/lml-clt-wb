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
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

/**
 * Dummy background images (replace later with API or CDN images)
 * Using public URLs to keep API-ready structure
 */
const sliderData = [
  {
    title: "Secure Peer-to-Peer Lending",
    description:
      "Let Me Lend connects verified users across Pakistan to lend and borrow items safely with trust and transparency.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    title: "KYC Verified Community",
    description:
      "Only KYC-verified users can book, lend, or borrow items, ensuring a secure and reliable experience.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
  {
    title: "Easy Booking & Returns",
    description:
      "Browse items, book instantly, chat with lenders, and return items smoothly with reviews after completion.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c44367f",
  },
];

const categories = [
  { title: "Electronics", description: "Cameras, laptops, speakers & more" },
  { title: "Tools", description: "Drills, cutters, repair tools" },
  { title: "Books", description: "Academic & non-academic books" },
  { title: "Sports Equipment", description: "Bats, rackets, fitness gear" },
  { title: "Fashion & Accessories", description: "Watches, bags, outfits" },
  { title: "Home Appliances", description: "Kitchen & household items" },
];

export default function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = sliderData.length;

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <UserLayout>
      {/* Header */}

      {/* Slider Section with Background Image */}
      <Paper
        elevation={0}
        sx={{
          height: 400,
          borderRadius: 2,
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
            backgroundColor: "rgba(0,0,0,0.55)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 3,
          }}
        >
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{ color: theme.palette.common.white }}
          >
            {sliderData[activeStep].title}
          </Typography>
          <Typography
            sx={{
              mt: 1,
              maxWidth: 600,
              color: theme.palette.grey[200],
            }}
          >
            {sliderData[activeStep].description}
          </Typography>
        </Box>

        {/* Stepper */}
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "transparent",
          }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{ color: theme.palette.common.white }}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ color: theme.palette.common.white }}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </Paper>

      {/* Categories Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
          Browse Categories
        </Typography>

        <Grid container spacing={3}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {category.title}
                  </Typography>
                  <Typography sx={{ mt: 1 }}>
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </UserLayout>
  );
}
