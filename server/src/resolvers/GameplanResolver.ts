import { Gameplan } from '../entity/Gameplan';
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';

@Resolver()
export class GameplanResolver {
    // create
    @Mutation(() => Boolean)
    async createGameplan(@Arg('name', () => String) name: string) {
        await Gameplan.create({ name }).save();
        return true;
    }

    // Update
    @Mutation(() => Boolean)
    async updateGameplan(
        @Arg('id', () => Int) id: number,
        @Arg('name', () => String) name?: string
    ) {
        await Gameplan.update({ id }, { name });
        return true;
    }

    // Delete
    @Mutation(() => Boolean)
    deleteGameplan(@Arg('id', () => Int) id: number) {
        Gameplan.delete({ id });
        return true;
    }

    @Query(() => [Gameplan])
    gameplans() {
        return Gameplan.find();
    }

    @Query(() => Gameplan)
    getGameplan(@Arg('id', () => Int) id: number) {
        return Gameplan.findOne({ id });
    }
}
