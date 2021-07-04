import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class UserInput {
    @Field()
    userName: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field(() => Int)
    age: number;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, { nullable: true })
    userName?: string;

    @Field(() => String, { nullable: true })
    firstName?: string;

    @Field(() => String, { nullable: true })
    lastName?: string;

    @Field(() => Int, { nullable: true })
    age?: number;
}
