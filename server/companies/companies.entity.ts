import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity({ name: 'COMPANIES' })
export class Companies {
  @PrimaryGeneratedColumn('uuid')
  uuid: string | undefined;

  @Column({ type: 'text', nullable: true })
  name: string | undefined;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at: Date | undefined;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date | undefined;
}
