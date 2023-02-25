import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WriteEventsModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    aggregateId: string;

    @Column('text')
    aggregateType:string;

    @Column('text')
    eventType:string;

    @Column('text')
    payload:string;

    @Column('numeric')
    version:number;


}
