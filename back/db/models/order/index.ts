import { Model, model, Schema, models } from "mongoose";

export type OrderModelType = {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  ordernumber: number;
  foods: [Schema.Types.ObjectId];
  totalPrice: string;
  process: string;
  createdAt: Date;
  updatedAt: Date;
  address: string;
  nemelt: string;
  amount: string;
};

const OrdreSchema = new Schema<OrderModelType>({
  userId: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  ordernumber: { type: Number, required: true },
  foods: { type: [Schema.Types.ObjectId], ref: "Foods", required: true },
  totalPrice: { type: String, required: true },
  process: { type: String, required: true },
  amount: { type: String, required: true },
  address: { type: String, required: true },
  nemelt: { type: String, required: true },

  createdAt: { type: Date, default: new Date() },
  updatedAt: Date,
});

export const OrderModel: Model<OrderModelType> =
  models["Orders"] || model("Orders", OrdreSchema);
