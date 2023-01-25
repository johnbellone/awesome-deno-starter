import { 
    Entity,
    Index,
    Column,
} from "typeorm";
import { Resource } from "src/entities/index.ts";

export enum Role {
    User = "user",
    Admin = "admin",
}

export enum Status {
    Inactive = "inactive",
    Active = "active",
    Locked = "locked",
    Suspended = "suspended",
}

@Entity({ name: "users", synchronize: true })
@Index(["username"], { unique: true })
@Index(["email"], { unique: true })
export class User extends Resource {
    @Column({ unique: true, nullable: false })
    username!: string; 

    @Column({ unique: true, nullable: false })
    email!: string;

    @Column({ type: "enum", enum: Status, default: Status.Inactive })
    status!: Status;

    @Column({ type: "enum", enum: Role, default: Role.User })
    role!: Role;

    @Column({ nullable: true })
    name?: string; 
}
