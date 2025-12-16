import { useState } from "react";
import UserLayout from "../../layouts/UserLayout";
import AdminLayout from "../../layouts/AdminLayout";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
  Stack,
  Alert,
} from "@mui/material";

const COMPLAINT_REASONS = [
  "Damaged Item",
  "Misleading Listing",
  "Late Return",
  "Uncooperative Store Owner",
  "Other",
];

// Dummy selectable data (API-ready)
const DUMMY_ITEMS = [
  { id: "item-1", name: "Canon EOS Camera" },
  { id: "item-2", name: "Gaming Laptop" },
];

const DUMMY_STORES = [
  { id: "store-1", name: "Tech Store Karachi" },
  { id: "store-2", name: "Electronics Hub Lahore" },
];

export default function AddComplaint() {
  const [complaintType, setComplaintType] = useState("Item");
  const [targetId, setTargetId] = useState("");
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [evidence, setEvidence] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleEvidenceChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(
      (file) =>
        file.size <= 5 * 1024 * 1024 &&
        (file.type.startsWith("image/") ||
          file.type === "application/pdf")
    );
    setEvidence(validFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      complaintType,
      targetId,
      reason,
      description,
      issueDate,
      evidence,
      status: "Active",
      createdAt: new Date().toISOString(),
    };

    console.log("Complaint Submitted (Dummy Payload):", payload);
    setSubmitted(true);
  };

  return (
    <AdminLayout>
      <UserLayout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" color="primary.main" gutterBottom>
          File a Complaint
        </Typography>

        <Paper sx={{ p: 3, maxWidth: 800 }}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Submit a complaint against an item or store. Once submitted, the
            complaint cannot be edited.
          </Typography>

          {submitted && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Complaint submitted successfully. Admins will review it shortly.
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              {/* Complaint Type */}
              <TextField
                select
                label="Complaint Type"
                value={complaintType}
                onChange={(e) => {
                  setComplaintType(e.target.value);
                  setTargetId("");
                }}
                required
              >
                <MenuItem value="Item">Item</MenuItem>
                <MenuItem value="Store">Store</MenuItem>
              </TextField>

              {/* Item / Store */}
              <TextField
                select
                label={complaintType === "Item" ? "Select Item" : "Select Store"}
                value={targetId}
                onChange={(e) => setTargetId(e.target.value)}
                required
              >
                {(complaintType === "Item"
                  ? DUMMY_ITEMS
                  : DUMMY_STORES
                ).map((target) => (
                  <MenuItem key={target.id} value={target.id}>
                    {target.name}
                  </MenuItem>
                ))}
              </TextField>

              {/* Reason */}
              <TextField
                select
                label="Complaint Reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              >
                {COMPLAINT_REASONS.map((r) => (
                  <MenuItem key={r} value={r}>
                    {r}
                  </MenuItem>
                ))}
              </TextField>

              {/* Description */}
              <TextField
                label="Detailed Description"
                multiline
                minRows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              {/* Issue Date */}
              <TextField
                label="Issue Occurrence Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                inputProps={{ max: today }}
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                required
              />

              {/* Evidence Upload */}
              <Button variant="outlined" component="label">
                Upload Evidence (Images / PDF)
                <input
                  hidden
                  type="file"
                  multiple
                  accept="image/*,application/pdf"
                  onChange={handleEvidenceChange}
                />
              </Button>

              {evidence.length > 0 && (
                <Typography variant="caption">
                  {evidence.length} file(s) selected — Max 5MB per file
                </Typography>
              )}

              {/* Submit */}
              <Button
                type="submit"
                variant="contained"
                disabled={submitted}
                sx={{ alignSelf: "flex-start" }}
              >
                Submit Complaint
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Box>
      </UserLayout>
    </AdminLayout>
  );
}
