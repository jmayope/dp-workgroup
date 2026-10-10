import * as mongoose from 'mongoose';

export const ProfileMenu = new mongoose.Schema({
  menu: { type: mongoose.Types.ObjectId, ref: 'menus' },
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' }
})