import { 
    Entity, 
    Index,  
    Column,
    ManyToOne
} from "typeorm";
import { Org, Resource } from "src/entities/index.ts";

export enum Status {
    Inactive = "inactive",
    Active = "active",
    Locked = "locked",
    Suspended = "suspended",
}

@Entity({ name: "org_projects", synchronize: true })
@Index(["name"], { unique: true })
export class OrgProject extends Resource {
    @Column({ unique: true, nullable: false })
    name!: string; 

    @Column({ type: "text", nullable: true })
    description?: string;

    @Column({ type: "enum", enum: Status, default: Status.Inactive})
    status!: Status;

    @ManyToOne(() => Org, (org) => org.projects, { eager: true })
    org!: Org;
}
