export interface INeedMedicine {
  medicineName: string;
  image: string;             // URL or base64 string
  postDate?: Date;           // optional, default to Date.now if not provided
  needDate: Date;
  contactNumber: string;
  requesterName: string;
  location: string;
  notes?: string;            // optional notes
  status?: "pending" | "fulfilled" | "cancelled";  // default: "pending"
  userId: string;            // user who posted the request
  createdAt?: Date;          // auto-managed timestamps
  updatedAt?: Date;
}
