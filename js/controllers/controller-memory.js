import { Card } from "../models/Card.js";
//import { Memory } from "../models/memory.js";
import { Notifier } from "../patterns/notifier.js";

export class ControllerMemory extends Notifier
{
    #card;
    constructor()
    {
        super();
    }
    get card(){
        return this.#card;
    }
    createCard(){
        let value = Math.floor(Math.random() * 0xF3 + 0x1F90C);
        value = "0x" + value.toString(16);
        console.log(value);
        this.#card = new Card(value);
    }
}