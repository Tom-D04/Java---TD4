import { Card } from './Card.js';

export class Memory {
    #cards;
    constructor() {
        this.#cards = [];
    }

    newGame(pairsNumber){
        for (let i = 0; i < pairsNumber; i++){
            let value = 0x1F90C + i;
            const card = new Card(value.toString(16));
            this.#cards.splice(Math.floor(Math.random() * this.#cards.length), 0, card);
            this.#cards.splice(Math.floor(Math.random() * this.#cards.length), 0, card);
            value++;
        }  
    }

    getCard(index) {
        return this.#cards[index];
    }

    getCardsNumber(){
        return this.#cards.length;
    }

    toData(){
        return {
            cards: this.#cards.map(card => card.toData())
        };
    }   
}