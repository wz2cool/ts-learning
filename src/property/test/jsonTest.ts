import * as util from "util";
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

    public static getName<T>(obj: (o: T) => boolean | number | string): string {
        console.log(obj.toString());
        return null;
    }

    public static createObject<T>(o: T | { new(): T }): T {
        if (typeof o === "function") {
            return new o();
        } else {
            const v = o.constructor as { new(): T };
            return new v();
        }
    }
}
