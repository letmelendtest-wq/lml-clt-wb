import UserLayout from "../../layouts/UserLayout";
import useFetch from "../../hooks/useFetch";
import { ENDPOINTS } from "../../api/endpoints";
import Loader from "../../components/common/Loader";
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
} from "@mui/material";
import { Link } from "react-router-dom";

export default function ItemList() {
  const { data, loading } = useFetch(ENDPOINTS.ITEMS.ALL);

  if (loading) return <Loader />;

  return (
    <UserLayout>
      <Typography variant="h4" fontWeight={700} mb={4} color="primary.main">
        All Available Items
      </Typography>

      <Grid container spacing={4}>
        {data?.map((item) => (
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
                    label={item.unlimited ? "In Stock" : item.stock}
                    size="small"
                    color={item.unlimited ? "success" : "default"}
                  />
                </Stack>
              </CardContent>

              {/* Action Button */}
              <Box sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  fullWidth
                  component={Link}
                  to={`/items/${item.id}`}
                  sx={{ borderRadius: 1 }}
                >
                  View Details
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </UserLayout>
  );
}
