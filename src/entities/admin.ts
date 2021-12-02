// import some of function from typeorm
import {
  Entity,
  Column,
  DeleteDateColumn,
  VersionColumn
} from "typeorm";

// import class User
import User from "./user";

// create Entity
@Entity()
// make class of Entity Admin that extends from User
class Admin extends User {
    @Column({ type: 'simple-array' })
    rolles: string[]

    @DeleteDateColumn()
    deleteAt: Date

    @VersionColumn()
    version: Date
}

export default Admin;