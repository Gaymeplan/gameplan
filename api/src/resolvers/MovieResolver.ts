import { Movie } from '../entity/Movie';
import { Resolver, Mutation, Arg, Query, Int } from 'type-graphql';
import { MovieInput, MovieUpdateInput } from '../input-types/MovieInput';

@Resolver()
export class MovieResolver {
    // CREATE
    @Mutation(() => Movie)
    async createMovie(@Arg('options', () => MovieInput) options: MovieInput) {
        const movie = await Movie.create(options).save();
        return movie;
    }

    // READ
    @Query(() => [Movie]) // Returns array of movies
    movies() {
        return Movie.find();
    }

    // UPDATE
    @Mutation(() => Boolean)
    async updateMovie(
        @Arg('id', () => Int) id: number,
        @Arg('input', () => MovieUpdateInput) input: MovieUpdateInput
    ) {
        await Movie.update({ id }, input);
        return true;
    }

    // DELETE
    @Mutation(() => Boolean)
    async deleteMovie(@Arg('id', () => Int) id: number) {
        await Movie.delete({ id });
        return true;
    }
}
