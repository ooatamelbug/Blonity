// import some of function from typeorm
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

// import some of function from class-validator
import { Length, IsNotEmpty, IsEmail } from "class-validator";

// import some of function from bcryptjs
import { hashSync, compareSync, genSaltSync } from "bcryptjs";

// create Entity
@Entity()
// make class of Entity User that extends from BaseEntity
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

  @Column({ default: false })
  activate: boolean

  @CreateDateColumn()
  createdAt: Date
  
  @UpdateDateColumn()
  updatedAt: Date

  // create hashPassword function for encrypt password
  async hashPassword () {
    const salt = genSaltSync(12);
    this.password = hashSync(this.password, salt);
  }

  // create compareTwoPassword function for compare password
  async compareTwoPassword (unEncryptedPassword: string) {
    return compareSync(unEncryptedPassword, this.password);
  }
}

export default User;
