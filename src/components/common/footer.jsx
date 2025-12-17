import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  Container,
  Divider,
  useTheme,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  const theme = useTheme();

  const categories = [
    "Electronics",
    "Tools & Equipment",
    "Books & Media",
    "Sports & Outdoors",
    "Home & Garden",
    "Fashion & Accessories",
  ];

  const services = [
    "About Us",
    "How It Works",
    "Terms & Conditions",
    "Privacy Policy",
    "FAQs",
    "Contact Us",
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.mode === "dark"
          ? "background.paper"
          : "#1E293B",
        color: theme.palette.mode === "dark" ? "text.primary" : "#fff",
        pt: 6,
        pb: 3,
        borderTop: 1,
        borderColor: theme.palette.mode === "dark" ? "divider" : "transparent",
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Brand & Contact */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              fontWeight={700}
              gutterBottom
              sx={{
                color: theme.palette.mode === "dark" ? "primary.main" : "#38BDF8",
              }}
            >
              Let Me Lend
            </Typography>

            <Typography variant="body2" sx={{ mb: 2, opacity: 0.85 }}>
              Share, Borrow, Save. Join our community to lend and borrow items
              securely.
            </Typography>

            <Stack spacing={1.2} sx={{ mb: 3 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnIcon fontSize="small" sx={{ opacity: 0.7 }} />
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                  Main Plaza, DHA Phase 6
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon fontSize="small" sx={{ opacity: 0.7 }} />
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                  +92 300 1234567
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon fontSize="small" sx={{ opacity: 0.7 }} />
                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                  support@letmelend.com
                </Typography>
              </Stack>
            </Stack>

            {/* Social Media Icons */}
            <Stack direction="row" spacing={1}>
              <IconButton
                size="small"
                sx={{
                  color: "inherit",
                  bgcolor: theme.palette.mode === "dark"
                    ? "primary.dark"
                    : "rgba(255, 255, 255, 0.1)",
                  "&:hover": {
                    bgcolor: theme.palette.mode === "dark"
                      ? "primary.main"
                      : "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: "inherit",
                  bgcolor: theme.palette.mode === "dark"
                    ? "primary.dark"
                    : "rgba(255, 255, 255, 0.1)",
                  "&:hover": {
                    bgcolor: theme.palette.mode === "dark"
                      ? "primary.main"
                      : "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: "inherit",
                  bgcolor: theme.palette.mode === "dark"
                    ? "primary.dark"
                    : "rgba(255, 255, 255, 0.1)",
                  "&:hover": {
                    bgcolor: theme.palette.mode === "dark"
                      ? "primary.main"
                      : "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: "inherit",
                  bgcolor: theme.palette.mode === "dark"
                    ? "primary.dark"
                    : "rgba(255, 255, 255, 0.1)",
                  "&:hover": {
                    bgcolor: theme.palette.mode === "dark"
                      ? "primary.main"
                      : "rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          {/* Categories */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Popular Categories
            </Typography>
            <Stack spacing={1} sx={{ mt: 2 }}>
              {categories.map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="hover"
                  color="inherit"
                  sx={{
                    opacity: 0.8,
                    transition: "all 0.2s",
                    "&:hover": {
                      opacity: 1,
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <Typography variant="body2">{item}</Typography>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Customer Services */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Customer Services
            </Typography>
            <Stack spacing={1} sx={{ mt: 2 }}>
              {services.map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="hover"
                  color="inherit"
                  sx={{
                    opacity: 0.8,
                    transition: "all 0.2s",
                    "&:hover": {
                      opacity: 1,
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <Typography variant="body2">{item}</Typography>
                </Link>
              ))}
            </Stack>

            {/* App Download */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="body2" fontWeight={600} gutterBottom>
                Download Our App
              </Typography>
              <Stack direction="row" spacing={1.5} sx={{ mt: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    bgcolor: theme.palette.mode === "dark"
                      ? "primary.dark"
                      : "rgba(255, 255, 255, 0.1)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    "&:hover": {
                      bgcolor: theme.palette.mode === "dark"
                        ? "primary.main"
                        : "rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  <AppleIcon fontSize="small" />
                  <Typography variant="caption">App Store</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    bgcolor: theme.palette.mode === "dark"
                      ? "primary.dark"
                      : "rgba(255, 255, 255, 0.1)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    "&:hover": {
                      bgcolor: theme.palette.mode === "dark"
                        ? "primary.main"
                        : "rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  <ShopIcon fontSize="small" />
                  <Typography variant="caption">Google Play</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Divider
          sx={{
            my: 3,
            borderColor: theme.palette.mode === "dark"
              ? "divider"
              : "rgba(255, 255, 255, 0.1)",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © 2025 Let Me Lend. All Rights Reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              sx={{ opacity: 0.7, "&:hover": { opacity: 1 } }}
            >
              <Typography variant="body2">Privacy</Typography>
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              sx={{ opacity: 0.7, "&:hover": { opacity: 1 } }}
            >
              <Typography variant="body2">Terms</Typography>
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              sx={{ opacity: 0.7, "&:hover": { opacity: 1 } }}
            >
              <Typography variant="body2">Sitemap</Typography>
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
