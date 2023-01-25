import { 
    Entity,
    Index,
    Column,
    OneToMany,
} from "typeorm";

export enum Status {
    Inactive = "inactive",
    Active = "active",
    Locked = "locked",
    Suspended = "suspended",
}

@Entity({ name: "orgs", synchronize: true })
@Index(["name"], { unique: true })
export class Org extends Resource {
    @Column({ unique: true, nullable: false })
    name!: string; 

    @Column({ type: "text", nullable: true })
    description?: string;

    @Column({ type: "enum", enum: Status, default: Status.Inactive })
    status!: Status;

    @OneToMany(() => OrgProject, (project) => project.org, { eager: true })
    projects?: OrgProject[]
}
