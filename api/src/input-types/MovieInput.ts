import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class MovieInput {
    @Field()
    title: string;

    @Field(() => Int)
    minutes: number;
}

@InputType()
export class MovieUpdateInput {
    @Field(() => String, { nullable: true })
    title?: string;

    @Field(() => Int, { nullable: true })
    minutes?: number;
}
