import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    nullable: true,
    default: 'anything about the owner of the project',
  })
  description: string;

  @Column({ name: 'project_url', nullable: true })
  projectUrl: string;

  @Column({ name: 'github_url', nullable: true })
  githubUrl: string;

  @Column({ name: 'project_image', nullable: true })
  projectImage: string;

  @Column({ name: 'project_video', nullable: true })
  projectVideo: string;

  @Column('simple-array', { name: 'tags_back' })
  tagsBack: string[];

  @Column({ name: 'backend_about', nullable: true })
  backendAbout: string;

  @Column('simple-array', { name: 'tags_front' })
  tagsFront: string[];

  @Column({ name: 'front_about', nullable: true })
  frontendAbout: string;

  @Column({ name: 'user_id' })
  userId: string;
}
