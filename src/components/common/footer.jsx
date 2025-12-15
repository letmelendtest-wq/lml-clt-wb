import React from "react";
import { Box, Grid, Typography, Link, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#0B9BD7", color: "#fff", pt: 6, pb: 3 ,mt:5}}>
      <Grid container spacing={10} sx={{ px: { xs: 3, md: 10 } }}>
        {/* Brand & Contact */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Let Me Lend
          </Typography>

          <Stack spacing={1.2} sx={{ opacity: 0.9 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">Main Plaza, DHA Phase 6</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">+92 300 1234567</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <EmailIcon fontSize="small" />
              <Typography variant="body2">support@megamart.com</Typography>
            </Stack>
          </Stack>

          {/* App Icons */}
          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <AppleIcon />
              <Typography variant="body2">App Store</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <ShopIcon />
              <Typography variant="body2">Google Play</Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* Most Popular Categories */}
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Most Popular Categories
          </Typography>
          <Stack spacing={0.8} sx={{ opacity: 0.9 }}>
            {["Staples", "Beverages", "Personal Care", "Home Care", "Dairy & Eggs", "Fruits & Vegetables", "Bakery & Bread"].map(
              (item) => (
                <Link key={item} href="#" underline="none" color="inherit">
                  <Typography variant="body2">{item}</Typography>
                </Link>
              )
            )}
          </Stack>
        </Grid>

        {/* Customer Services */}
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Customer Services
          </Typography>
          <Stack spacing={0.8} sx={{ opacity: 0.9 }}>
            {["About Us", "Terms & Conditions", "Privacy Policy", "FAQs", "Return & Refund Policy"].map(
              (item) => (
                <Link key={item} href="#" underline="none" color="inherit">
                  <Typography variant="body2">{item}</Typography>
                </Link>
              )
            )}
          </Stack>
        </Grid>
      </Grid>

      {/* Bottom Bar */}
      <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.3)", mt: 4, pt: 2, textAlign: "center", opacity: 0.85 }}>
        <Typography variant="caption">
          © 2025 MegaMart. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
