import ICard from "../interfaces/card";

class CardClass {
    name;
    description;
    constructor(card:ICard){
        this.name = card.name;
        this.description = card.description;
    }

}

export default CardClass