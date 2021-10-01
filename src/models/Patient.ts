import { Document, model, Schema } from 'mongoose';

export interface IPatient extends Document {
  text: string;
}

const jsonSchema = {
  text: { type: String, required: false },
};

const PatientSchema = new Schema(jsonSchema);

const PatientModel = model('Patient', PatientSchema);

export default PatientModel;
