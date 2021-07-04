import { User } from '../entity/User';
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { UserInput, UserUpdateInput } from '../input-types/UserInput';

@Resolver()
export class UserResolver {
    @Query(() => [User])
    users() {
        return User.find();
    }
    @Query(() => User)
    user(@Arg('id', () => Int) id: number) {
        return User.findOne({ where: { id } });
    }

    @Mutation(() => Boolean)
    async createUser(@Arg('options', () => UserInput) options: UserInput) {
        User.insert(options);
        return true;
    }

    @Mutation(() => Boolean)
    async updateUser(
        @Arg('id', () => Int) id: number,
        @Arg('input', () => UserUpdateInput) input: UserUpdateInput
    ) {
        await User.update({ id }, input);
        return true;
    }

    @Mutation(() => Boolean)
    async deleteUser(@Arg('id', () => Int) id: number) {
        await User.delete({ id });
        return true;
    }
}
