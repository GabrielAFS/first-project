import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PersonDocument = HydratedDocument<Person>;

@Schema()
export class Person {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
