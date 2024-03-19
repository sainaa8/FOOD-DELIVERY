import { Model, model, Schema, models } from "mongoose";

export type CategoryModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  foodId: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
};

const CategorySchema = new Schema<CategoryModelType>({
  name: {
    type: String,
    required: true,
  },
  foodId: {
    type: [Schema.Types.ObjectId],
    ref: "Foods",
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

export const CategoryModel: Model<CategoryModelType> =
  models["Category"] || model("Category", CategorySchema);
