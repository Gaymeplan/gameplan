import { Field, Int, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import Position from './Position';

@ObjectType()
@Entity()
export default class Gameplan extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field(() => [Position], { nullable: true })
    @OneToMany(() => Position, (position: Position) => position.gameplan, {
        eager: true,
        onDelete: 'CASCADE',
    })
    positions: Position[];
}
