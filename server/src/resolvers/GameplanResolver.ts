import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import Gameplan from '../entity/Gameplan';
import Position, { PositionInput } from '../entity/Position';

@Resolver()
export class GameplanResolver {
    // create
    @Mutation(() => Boolean)
    async createGameplan(
        @Arg('name', () => String) name: string,
        @Arg('positions', () => [PositionInput]) positions: PositionInput[]
    ) {
        const gameplan = await Gameplan.create({ name }).save();
        console.log('GAMEPLAN ID', gameplan.id);
        console.log(positions);
        positions.forEach((position: PositionInput) => {
            position.gameplanId = gameplan.id;
            Position.create(position).save();
        });
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
    async deleteGameplan(@Arg('id', () => Int) id: number) {
        // have to use remove to cascade the deletions for related data :shrug:
        const gameplan = await Gameplan.findOne({ id });
        if (gameplan) {
            Gameplan.remove(gameplan);
        }
        return true;
    }

    @Query(() => [Gameplan])
    gameplans() {
        console.log('getting all gameplans');
        return Gameplan.find();
    }

    @Query(() => Gameplan)
    getGameplan(@Arg('id', () => Int) id: number) {
        let gameplan = Gameplan.findOne({ id });
        return gameplan;
    }
}
