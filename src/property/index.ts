import { User } from "./models/User";
import { JsonTest } from "./test/jsonTest";

const user = new User();
user.userName = "frank";

const result = JsonTest.createObject<User>(user);

console.log(result);
