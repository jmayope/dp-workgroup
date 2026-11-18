import * as mongoose from 'mongoose';

export const Profile = new mongoose.Schema({
  name: { type: String, required: true },
  shortName: { type: String, },
  description: { type: String },
  specialty: { type: mongoose.Schema.Types.ObjectId, ref: 'specialties' },
  status: { type: Boolean, default: true }
})