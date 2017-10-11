import { User } from "../models/User";

export class JsonTest {

    public static run(): void {
        const user = new User();
        user.userName = "frank";
        user.displayName = "frank.wang";

        const json = JSON.stringify(user);
        console.log(json);
    }
}
