export class User {
    private _id: number;
    private _userName: string;
    private _email: string;
    private _mobile: string;
    private _password: string;
    private _displayName: string;
    private _createTime: Date;
    private _updateTime: Date;
    private _deleted: number;

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get userName(): string {
        return this._userName;
    }

    public set userName(value: string) {
        this._userName = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get mobile(): string {
        return this._mobile;
    }

    public set mobile(value: string) {
        this._mobile = value;
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }

    public get displayName(): string {
        return this._displayName;
    }

    public set displayName(value: string) {
        this._displayName = value;
    }

    public get createTime(): Date {
        return this._createTime;
    }

    public set createTime(value: Date) {
        this._createTime = value;
    }

    public get updateTime(): Date {
        return this._updateTime;
    }

    public set updateTime(value: Date) {
        this._updateTime = value;
    }

    public get deleted(): number {
        return this._deleted;
    }

    public set deleted(value: number) {
        this._deleted = value;
    }
}
