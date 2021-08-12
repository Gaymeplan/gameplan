import { Arg, Int, Mutation, Resolver } from 'type-graphql';
import Position from '../entity/Position';

@Resolver()
export class PositionResolver {
    // create
    @Mutation(() => Boolean)
    async createPosition(
        @Arg('name', () => String) name: string,
        @Arg('description', () => String) description: string,
        @Arg('attribute', () => String) attribute: string
    ) {
        await Position.create({ name, description, attribute }).save();
        return true;
    }

    // update
    @Mutation(() => Boolean)
    async updatePosition(
        @Arg('id', () => Int) id: number,
        @Arg('name', () => String) name: string,
        @Arg('description', () => String) description: string,
        @Arg('attribute', () => String) attribute: string
    ) {
        await Position.update({ id }, { name, description, attribute });
        return true;
    }

    // delete
    @Mutation(() => Boolean)
    async deletePosition(@Arg('id', () => Int) id: number) {
        Position.delete({ id });
        return true;
    }

    // DELETE ALL
    @Mutation(() => Boolean)
    deleteAllPositions() {
        Position.clear();
        return true;
    }
}
