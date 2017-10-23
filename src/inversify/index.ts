import { Container } from "inversify";
import { Katana, Ninja, Shuriken } from "./entities";
import { IThrowableWeapon, IWarrior, IWeapon } from "./interfaces";
import { myContainer } from "./inversify.config";
import { TYPES } from "./types";

const ninja = myContainer.get<IWarrior>(TYPES.Warrior);
console.log(ninja);
