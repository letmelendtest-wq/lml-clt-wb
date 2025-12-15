import { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { apiPost } from "../../api/apiClient";
import { ENDPOINTS } from "../../api/endpoints";
import { AuthContext } from "../../context/AuthContext";
import UserLayout from "../../layouts/UserLayout";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";


export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const { login } = useContext(AuthContext);

  // 🔹 Validation logic
  const validate = () => {
    const newErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      const res = await apiPost(ENDPOINTS.AUTH.LOGIN, form);
      login(res.data);
      alert("Login Successful");
    } catch (err) {
      console.error(err);
      alert("Invalid credentials");
    }
  };

  return (
    <UserLayout>
      <Box
        sx={{
          maxWidth: 500,
          mx: "auto",
          mt: 6,
          boxShadow: 3,
          borderRadius: 2,
          p: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 3, fontWeight: 700, color: "primary.main", textAlign: "center" }}
        >
          Login
        </Typography>

        <Box sx={{ width: "70%", pl: 10, mt: 3 }}>
          <Input
            label="Email"
            placeholder="abc@gmail.com"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />


          <br /><br />

          <Input
            label="Password"
            placeholder="At least 8 characters"
            type="password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />


          <br />

          {/* Remember Me & Forgot Password */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={form.rememberMe}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      rememberMe: e.target.checked,
                    })
                  }
                />
              }
              label="Remember me"
            />

            <Link
              component="button"
              underline="hover"
              sx={{ fontSize: 14 }}
            >
              Forgot password?
            </Link>
          </Box>

          <Button onClick={handleSubmit}>Login</Button>

          {/* Register Option */}
          <Typography sx={{ mt: 3, fontSize: 14, textAlign: "center" }}>
            Don’t have an account?{" "}
            <Link
              component={RouterLink}
              to="/register"
              underline="hover"
            >
              Register
            </Link>

          </Typography>
        </Box>
      </Box>
    </UserLayout>
  );
}
