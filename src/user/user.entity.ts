import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn({ name: 'id', type: 'bigint' })
    id: number;
    
    @Column({ name: 'lastname', type: 'varchar', nullable: false })
    lastname: string;

    @Column({ name: 'firstname', type: 'varchar', nullable: false })
    firstname: string;

    @Column({ name: 'email', type: 'varchar', nullable: true })
    email: string;

    @Column({ name: 'username', type: 'varchar', nullable: false })
    username: string;

    @Column({ name: 'password', type: 'varchar', nullable: false, select: false })
    password: string;
}