import { v4 } from "uuid";
import bracelet1 from "./../img/bracelet1.JPEG";
import bracelet2 from "./../img/bracelet2.JPEG";
import necklace1 from "./../img/necklace1.JPEG";
import ring1 from "./../img/ring1.JPEG";


let mainJewelryList = [
    {
        category: "Bracelet",
        name: "Blue Duckey",
        desc: "Blue and green glass beads with decorative ducks",
        price: 12,
        photo: bracelet1,
        altTag: "cute bracelet blue and green bracelet with cute ducks",
        quantity: 11,
        id: v4()
    },
    {
        category: "Bracelet",
        name: "Pastel Egg",
        desc: "Frosted pastel colored gladd",
        price: 10,
        photo: bracelet2,
        altTag: "bracelet with frosted oblong beads",
        quantity: 5,
        id: v4()
    },
    {
        category: "Necklace",
        name: "Blue Heart",
        desc: "Blue heart shaped pendant on silver chain",
        price: 10,
        photo: necklace1,
        altTag: "silver chain with blue heart pendant",
        quantity: 5,
        id: v4()
    },
    {
        category: "Ring",
        name: "Heart Gem",
        desc: "Silver ring with heart shaped gem",
        price: 20,
        photo: ring1,
        altTag: "pretty ring",
        quantity: 5,
        id: v4()
    },

]

export default mainJewelryList;