import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSessionInput {
    @Field()
    id: string;
    @Field()
    quantity: number;
}