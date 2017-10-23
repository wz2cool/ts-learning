// file interfaces.ts

interface IWarrior {
    fight(): string;
    sneak(): string;
}

interface IWeapon {
    hit(): string;
}

interface IThrowableWeapon {
    throw(): string;
}

export { IWarrior, IWeapon, IThrowableWeapon };
