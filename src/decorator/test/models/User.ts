function column(name: string, table: string) {
    return (target, propertyKey: string) => {
        console.log("g(): called");
    };
}

export class User {

    @column("id", "user")
    public id: number;
    public userName: string;
    public email: string;
    public mobile: string;
    public password: string;
    public displayName: string;
    public createTime: Date;
    public updateTime: Date;
    public deleted: number;



}
