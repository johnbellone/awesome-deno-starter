import { DataSource } from "typeorm";
import { User } from "src/entities/index.ts";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "mydb.sql",
    entities: [User]
})

AppDataSource.initialize().then(async () => {
    console.log("Inserting a new users into the database...");
    const user = new User();
    await AppDataSource.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users);

}).catch(error => console.log(error));
