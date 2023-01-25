import { 
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

export abstract class Resource {
    @PrimaryGeneratedColumn("uuid", { name: "id" })
    id!: string;

    @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
    createTime!: Date;

    @Column({ type: "timestamptz", onUpdate: "CURRENT_TIMESTAMP", nullable: true })
    updateTime!: Date;

    @Column({ type: "timestamptz", nullable: true })
    deleteTime!: Date;
}
