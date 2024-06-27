import { Memory } from "../models/Memory.js";
import { Notifier } from "../patterns/notifier.js";

export class ControllerMemory extends Notifier
{
    #memory;
    constructor(){
        super();
        this.#memory = new Memory();
    }
    get memory(){
        return this.#memory;
    }
    newGame(){
        this.#memory.newGame(10);
        this.notify();
        this.saveGame();
    }

    saveGame(){
        localStorage.setItem("memory", JSON.stringify(this.#memory.toData()));
    }
}