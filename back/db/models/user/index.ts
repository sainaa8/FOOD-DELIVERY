import { Model, model, Schema, models } from "mongoose";

export type UsermodelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  password: string;
  isUser?: boolean;
  number?: number;
};

const UserSchema = new Schema<UsermodelType>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isUser: {
    type: Boolean,
    default: false,
    required: false,
  },

  number: {
    type: Number,
    default: 0,
    required: true,
  },
});

UserSchema.index({ email: 1 }, { unique: true });

export const UserModel: Model<UsermodelType> =
  models["Users"] || model("Users", UserSchema);
