import * as mongoose from 'mongoose';

const jsonSchema = {
  text: { type: String, required: false },
};

export const CompanySchema = new mongoose.Schema(jsonSchema);
