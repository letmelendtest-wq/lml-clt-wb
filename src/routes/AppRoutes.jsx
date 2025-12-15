import { Routes, Route } from "react-router-dom";

// Layouts
// import ProtectedRoute from "./ProtectedRoute";

// Pages
import Home from "../pages/home/Home";

// Auth
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import KYC from "../pages/auth/KYC";

// Items
import ItemList from "../pages/items/ItemList";
import ItemDetails from "../pages/items/ItemDetails";
import AddItem from "../pages/items/AddItem";

// Booking
import BookItem from "../pages/booking/BookItem";
import UserBookings from "../pages/booking/UserBookings";

// Store
import StoreDashboard from "../pages/store/StoreDashboard";
import AddStoreItem from "../pages/store/AddStoreItem";
import StoreOrders from "../pages/store/StoreOrders";

// Admin
import AdminDashboard from "../pages/admin/AdminDashboard";
import UsersManagement from "../pages/admin/UsersManagement";
import ListingsReview from "../pages/admin/ListingsReview";

// Complaints
import Complaints from "../pages/complaints/Complaints";
import AddComplaint from "../pages/complaints/AddComplaint";

// Error
import NotFound from "../pages/error/NotFound";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/kyc" element={<KYC />} />

      {/* Items */}
      <Route path="/items" element={<ItemList />} />
      <Route path="/items" element={<ItemDetails />} />
      <Route path="/items/add" element={<AddItem />} />

      {/* Booking */}
      <Route path="/booking/:id" element={<BookItem />} />
      <Route path="/my-bookings" element={<UserBookings />} />

      {/* Store */}
      <Route path="/store/dashboard" element={<StoreDashboard />} />
      <Route path="/store/AddItem" element={<AddStoreItem />} />
      <Route path="/store/orders" element={<StoreOrders />} />

      {/* Complaints */}
      <Route path="/complaints" element={<Complaints />} />
      <Route path="/complaints/add" element={<AddComplaint />} />
    
      {/* Admin */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<UsersManagement />} />
      <Route path="/admin/listings" element={<ListingsReview />} />
      <Route path="/admin/complaints" element={<Complaints />} />

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
// protected routes can be wrapped with ProtectedRoute component as needed
// e.g. <Route path="/store/dashboard" element={<ProtectedRoute><StoreDashboard /></ProtectedRoute>} />
// to enforce authentication on those routes.
// we need to implement ProtectedRoute component after completing auth context and login functionality.
// Without wrapping, all routes are publicly accessible.