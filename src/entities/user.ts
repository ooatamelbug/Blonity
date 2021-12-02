import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { Length, IsNotEmpty, IsEmail } from "class-validator";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  @IsNotEmpty()
  @Length(8, 70)
  username: string;

  @Column({ type: "varchar", length: 100 })
  @IsNotEmpty()
  @Length(8, 70)
  password: string;

  @Column({ type: "varchar", length: 100 })
  @IsNotEmpty()
  @Length(3, 70)
  firstName: string;

  @Column({ type: "varchar", length: 100 })
  @IsNotEmpty()
  @Length(3, 70)
  lastName: string;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({ default: "avater.png" })
  image: string;

  @Column({ default: "wall.png" })
  imageWallPaper: string;

  @Column({ nullable: true })
  job: string;

  @CreateDateColumn()
  createdAt: Date
  
  @UpdateDateColumn()
  updatedAt: Date
}

export default User;
