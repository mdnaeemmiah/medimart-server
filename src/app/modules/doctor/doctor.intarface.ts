export interface IDoctor {
  name: string;
  image: string;      // URL or path to doctor's image
  hospital: string;
  date: string;       // Format: YYYY-MM-DD or similar
  time: string;       // Format: HH:mm or "10:00 AM"
  day: string;        // Example: "Monday", "Tuesday", etc.
}