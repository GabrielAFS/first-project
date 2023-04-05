import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Person } from 'src/schemas/person.schema';

@Schema()
export class Owner extends Person {
  @Prop({ required: true })
  email: string;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
