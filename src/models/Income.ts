import mongoose, { Document } from 'mongoose';

export interface IIncome extends Document {
  amount: number;
  description: string;
  date: Date;
  currency?: string;
  managementDepartment?: string;
  user: mongoose.Types.ObjectId;
}

const IncomeSchema = new mongoose.Schema<IIncome>({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  currency: { type: String },
  managementDepartment: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model<IIncome>('Income', IncomeSchema, 'income');
