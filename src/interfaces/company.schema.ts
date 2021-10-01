import * as mongoose from 'mongoose';

const jsonSchema = {
  url: { type: String, required: false },

  body: { type: Object, required: false },

  method: { type: String, required: false },

  headers: { type: Object, required: false },

  timestamp: { type: String, required: false },
};

export const CompanySchema = new mongoose.Schema(jsonSchema);
