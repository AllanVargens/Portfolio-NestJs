import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'image_url' })
  imageURL: string;

  @Column()
  description: string;

  @Column({ name: 'project_id' })
  projectId: number;
}
