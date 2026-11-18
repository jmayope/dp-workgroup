import * as mongoose from 'mongoose';

export const Menu = new mongoose.Schema({
  identifier: { type: String, },
  name: { type: String, required: true },
  icon: { type: String, },
  status: { type: Boolean, default: true },
  url: { type: String, },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'menus' },
});