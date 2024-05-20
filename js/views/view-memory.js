import { Observer } from "../patterns/observer.js";

export class ViewMemory extends Observer
{
    #controllerMemory;

    constructor(controllerMemory)
    {
        super();

        this.#controllerMemory = controllerMemory;
        this.#controllerMemory.addObserver(this);
    }

    displayCard(){
        const card = document.createElement("div");
        card.classList.add("card");
        document.querySelector("cards").appendChild(card);
        txt = document.createElement("p");
        txt.innerText = "0x1F91C" //this.#controllerMemory.card.value;
        card.appendChild(txt);
    }

    notify()
    {
        displayCard();
    }
}