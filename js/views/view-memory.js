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

    displayCard(card){
        const cards = document.getElementsByClassName("cards")[0];
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = "<p>&#x" +  card.value.toString(16) + "</p>";
        cards.appendChild(div);
        //txt = document.createElement("p");
        //txt.innerText = "0x1F91C" //this.#controllerMemory.card.value;
        div.addEventListener("click", () => this.#controllerMemory.createCard());
    }

    displayCards(){
        let memory = this.#controllerMemory.memory
        let length = memory.getCardsNumber();
        for(let i=0;i < length;i++){
            this.displayCard(memory.getCard(i));
        }    
    }

    notify()
    {
        this.displayCards();
    }
}