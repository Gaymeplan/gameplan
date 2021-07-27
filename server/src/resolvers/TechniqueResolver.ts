import { Technique } from '../entity/Technique';
import {
    Arg,
    Field,
    InputType,
    Int,
    Mutation,
    Query,
    Resolver,
} from 'type-graphql';

@InputType()
class TechniqueInput {
    @Field()
    name: string;

    @Field()
    description: string;
}

@Resolver()
export class TechniqueResolver {
    // create
    @Mutation(() => Technique)
    async createTechnique(
        @Arg('options', () => TechniqueInput) options: TechniqueInput
    ) {
        const technique = await Technique.create(options).save();
        return technique;
    }

    // Update
    @Mutation(() => Boolean)
    async updateTechnique(
        @Arg('id', () => Int) id: number,
        @Arg('options', () => TechniqueInput) options: TechniqueInput
    ) {
        await Technique.update({ id }, options);
        return true;
    }

    // Delete
    @Mutation(() => Boolean)
    deleteTechnique(@Arg('id', () => Int) id: number) {
        Technique.delete({ id });
        return true;
    }

    @Query(() => [Technique])
    techniques() {
        return Technique.find();
    }
}
