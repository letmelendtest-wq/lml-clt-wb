import { Box, Typography, Divider } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

export default function TopHeader() {
  return (
    <>
      <Box
        sx={{
          height: 36,
          px: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#f8fafc",
          fontSize: 13,
        }}
      >
        {/* Left Text */}
        <Typography variant="caption" color="text.secondary">
          Welcome to Let Me Lend!
        </Typography>

        {/* Right Links */}
        <Box display="flex" alignItems="center" gap={3}>
          <Box display="flex" alignItems="center" gap={0.5}>
            <LocalShippingOutlinedIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption">
              Deliver to 423651
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={0.5}>
            <LocalMallOutlinedIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption">
              Track your order
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={0.5}>
            <LocalOfferOutlinedIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption">
              All Offers
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider />
    </>
  );
}
