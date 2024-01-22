import { prop, getModelForClass, modelOptions } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { timestamps: true } })
// The above command gives the table last updated dates to fields
export class Product {
  public_id!: string;

  @prop({ required: true })
  public name!: string;

  @prop({ required: true, unique: true })
  public slug!: string;

  @prop({ required: true })
  public image!: string;

  @prop({ required: true })
  public brand!: string;

  @prop({ required: true })
  public category!: string;

  @prop({ required: true })
  public description!: string;

  @prop({ required: true, default: 0 })
  public price!: number;

  @prop({ required: true, default: 0 })
  public countInStock!: number;

  @prop({ required: true, default: 0 })
  public rating!: number;

  @prop({ required: true, default: 0 })
  public numReviews!: number;
}

export const ProductModel = getModelForClass(Product);
