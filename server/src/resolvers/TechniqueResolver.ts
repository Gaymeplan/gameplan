import { Technique } from '../entity/Technique';
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class TechniqueResolver {
    // create
    @Mutation(() => Boolean)
    async createTechnique(
        @Arg('name', () => String) name: string,
        @Arg('description', () => String) description: string
    ) {
        await Technique.create({ name, description }).save();
        return true;
    }

    // Update
    @Mutation(() => Boolean)
    async updateTechnique(
        @Arg('id', () => Int) id: number,
        @Arg('name', () => String) name?: string,
        @Arg('description', () => String) description?: string
    ) {
        await Technique.update({ id }, { name, description });
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

    @Query(() => Technique)
    getTechnique(@Arg('id', () => Int) id: number) {
        return Technique.findOne({ id });
    }
}
