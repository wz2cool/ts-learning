export class ThrowError {
    public static async run(): Promise<void> {
        try {
            console.log("hello");
            for (let i = 0; i < 5; i++) {
                // await is converting Promise<number> into number
                const count = await this.delay(500, i);
                console.log(count);
            }

            console.log("World!");
        } catch (e) {
            console.log("get error success");
        }
    }

    private static delay(milliseconds: number, count: number): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("manual throw error"));
            }, milliseconds);
        });
    }
}
