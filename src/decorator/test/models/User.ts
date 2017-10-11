function column(name: string, table: string) {
    return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log("g(): called");
    };
}

export class User {
    // tslint:disable-next-line:variable-name
    private _id: number;
    get id(): number {
        return this._id;
    }
}
