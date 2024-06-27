import { ControllerMemory } from "../controllers/controller-memory.js";
import { ViewMemory } from "../views/view-memory.js";

export class ApplicationMemory
{
    #controllerMemory;
    #viewMemory;


    #initControllers()
    {
        this.#controllerMemory = new ControllerMemory();
    }

    #initViews()
    {
        this.#viewMemory = new ViewMemory(this.#controllerMemory);
    }

    constructor()
    {
        this.#initControllers();
        this.#initViews();
        this.#controllerMemory.newGame();
    }

}