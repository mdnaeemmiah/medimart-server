import { Schema, model, models } from 'mongoose';

const helpRequestSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: false,
    },
    patientName: {
      type: String,
      required: true,
      trim: true,
    },
    disease: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    medicinesTaken: {
      type: [String],
      required: true,
    },
    report: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt
  }
);

// Avoid model overwrite issue in development
const HelpRequest = models.HelpRequest || model('HelpRequest', helpRequestSchema);

export default HelpRequest;
