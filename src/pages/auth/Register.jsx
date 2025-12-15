import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Typography,
  Alert,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import UserLayout from "../../layouts/UserLayout";
import { apiPost } from "../../api/apiClient";
import { ENDPOINTS } from "../../api/endpoints";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";


export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    cnic: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "Required";
    if (!form.lastName.trim()) newErrors.lastName = "Required";
    if (!/^\d{13}$/.test(form.cnic)) newErrors.cnic = "13 digits CNIC required";
    if (!form.dob) newErrors.dob = "Required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Invalid email";
    if (form.password.length < 8)
      newErrors.password = "Minimum 8 characters";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!form.agree) newErrors.agree = "You must agree to terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;

    await apiPost(ENDPOINTS.AUTH.REGISTER, {
      firstName: form.firstName,
      lastName: form.lastName,
      cnic: form.cnic,
      dob: form.dob,
      email: form.email,
      password: form.password,
    });

    setSuccess("Account created successfully!");
  };

  return (
    <UserLayout>
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          mt: 6,
          display: "flex",
          boxShadow: 3,
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        {/* LEFT INFO PANEL */}
        <Box
          sx={{
            width: "35%",
            bgcolor: "primary.main",
            color: "primary.contrastText",
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Information
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Create an account to lend and borrow items securely on Let Me Lend.
            KYC verification is required before sensitive actions.
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            component={RouterLink}
            to="/login"
          >
            Have an Account
          </Button>

        </Box>

        {/* RIGHT FORM PANEL */}
        <Box sx={{ width: "65%", p: 4. }}>
          <Typography variant="h4" sx={{ mb: 5, fontWeight: 700, color: "primary.main", textAlign: "center" }}>
            Register Form
          </Typography>


          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}

          <Box sx={{ display: "flex", gap: 2 }}>
            <Input
              placeholder="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <Input
              placeholder="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Box><br />
          <Input
            placeholder="CNIC (13 digits without dashes)"
            name="cnic"
            value={form.cnic}
            onChange={handleChange}
            error={!!errors.cnic}
            helperText={errors.cnic}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BadgeIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <br /><br />
          <Input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            error={!!errors.dob}
            helperText={errors.dob}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <br /><br />
          <Input
            placeholder="abc@gmail.com"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <br /><br />
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Input
              type="password"
              placeholder="At least 8 characters"
              name="password"
              value={form.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <FormControlLabel
            sx={{ mt: 2 }}
            control={
              <Checkbox
                checked={form.agree}
                name="agree"
                onChange={handleChange}
              />
            }
            label="I agree to the Terms and Conditions"
          />
          {errors.agree && (
            <Typography color="error" variant="caption">
              {errors.agree}
            </Typography>
          )}

          <Button fullWidth sx={{ mt: 3 }} onClick={submit}>
            Register
          </Button>
        </Box>
      </Box>
    </UserLayout>
  );
}
