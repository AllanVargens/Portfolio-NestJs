import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid") uuid: string;
  @Column()
  user_id: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  email: string;
}
