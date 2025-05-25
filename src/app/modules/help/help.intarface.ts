export interface IHelpRequest {
  image: string; // required image URL (e.g., patient photo or report)
  video?: string; // optional video URL (e.g., diagnosis, report explanation)
  patientName: string;
  disease: string;
  duration: string; // e.g., "3 months", "1 year"
  medicinesTaken: string[]; // list of medicine names
  report: string; // could be a report summary or a file link
  createdAt?: string;
  updatedAt?: string;
}