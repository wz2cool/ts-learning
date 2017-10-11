import { User } from "../models/User";

export class JsonTest {

    public static run(): void {
        const user = new User();
        user.userName = "frank";
        user.displayName = "frank.wang";

        const json = JSON.stringify(user);
        console.log(json);
        this.getName<User>((u) => u.userName);
    }

    public static getName<T>(obj: (o: T) => any): string {
        console.log(obj.toString());
        return null;
    }

}
