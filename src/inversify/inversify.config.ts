import { Container } from "inversify";
import { Katana, Ninja, Shuriken } from "./entities";
import { IThrowableWeapon, IWarrior, IWeapon } from "./interfaces";
import { TYPES } from "./types";

const myContainer = new Container();
myContainer.bind<IWarrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<IWeapon>(TYPES.Weapon).to(Katana);
myContainer.bind<IThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { myContainer };
