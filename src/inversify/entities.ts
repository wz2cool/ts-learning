import { inject, injectable } from "inversify";
import "reflect-metadata";
import { IThrowableWeapon, IWarrior, IWeapon } from "./interfaces";
import { TYPES } from "./types";

@injectable()
class Katana implements IWeapon {
    public hit() {
        return "cut!";
    }
}

// tslint:disable-next-line:max-classes-per-file
@injectable()
class Shuriken implements IThrowableWeapon {
    public throw() {
        return "hit!";
    }
}

// tslint:disable-next-line:max-classes-per-file
@injectable()
class Ninja implements IWarrior {

    private _katana: IWeapon;
    private _shuriken: IThrowableWeapon;

    public constructor(
        @inject(TYPES.Weapon) katana: IWeapon,
        @inject(TYPES.ThrowableWeapon) shuriken: IThrowableWeapon,
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight() { return this._katana.hit(); }
    public sneak() { return this._shuriken.throw(); }

}

export { Ninja, Katana, Shuriken };
