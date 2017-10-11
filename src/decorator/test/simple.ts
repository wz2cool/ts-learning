function f() {
    console.log("f(): evaluated");
    return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log("f(): called");
    };
}

function g() {
    console.log("g(): evaluated");
    return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log("g(): called");
    };
}

function column(name: string, table: string) {
    console.log("g(): evaluated");
    return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log("g(): called");
    };
}

class C {
    private name: string;
    @column("name", "student")
    public getName(): string {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public Run(): void {

    }

    @f()
    @g()
    private method() {
        // test
    }


}
