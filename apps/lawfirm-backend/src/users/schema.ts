import { Document, Model, model } from 'mongoose';

const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  gender: String,
  phoneno: { type: Number, required: true },
  address: String,
  pincode: Number,
  email: { type: String, required: true },
  accepted_terms: Boolean,
  email_verified: Boolean,
});
const UserDB: Model<Document> = model<Document>('users', userSchema);
export { UserDB };
