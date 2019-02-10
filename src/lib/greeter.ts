class Greet {
    username: string;

    constructor(username: string){
        this.username = username;
    }
    introduceMySelf(): string
    {
        return this.greeter(this.username);
    }
    private greeter(person: string = "default"): string
    {
        return "Hello, " + person;
    }
}

function greeterHello(person: string): string
{
    return "Hello, " + person;
}

export {
    Greet,
    greeterHello,
}
