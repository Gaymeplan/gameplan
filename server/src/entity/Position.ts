import { Field, InputType, Int, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import Gameplan from './Gameplan';

@ObjectType()
@Entity()
export default class Position extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    description: string;

    @Field()
    @Column()
    attribute: string;

    @Field()
    @Column()
    gameplanId: number;

    @ManyToOne(() => Gameplan, (gameplan: Gameplan) => gameplan.positions)
    gameplan: Gameplan;
}

@InputType()
export class PositionInput extends BaseEntity {
    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    attribute: string;

    @Field({ nullable: true })
    gameplanId?: number;
}
