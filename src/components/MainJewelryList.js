import { v4 } from "uuid";
import bracelet1 from "./../img/bracelet1.JPEG";
import bracelet2 from "./../img/bracelet2.JPEG";
import necklace1 from "./../img/necklace1.JPEG";
import ring1 from "./../img/ring1.JPEG";
import necklace2 from "./../img/necklace2.JPEG";
import bracelet3 from "./../img/bracelet3.JPEG";
import bracelet4 from "./../img/bracelet4.JPEG";
import bracelet5 from "./../img/bracelet5.JPEG";
import bracelet6 from "./../img/bracelet6.JPEG";
import bracelet7 from "./../img/bracelet7.JPEG";
import bracelet8 from "./../img/bracelet8.JPEG";
import bracelet9 from "./../img/bracelet9.JPEG";


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
    {
        category: "Necklace",
        name: "Cool Necklace",
        desc: "This is the description for this cool jewelry item, wow, these stats are pretty dope. i want to make this pretty long so i can see how the styling takes over. So we will see how this works out, hope it looks good!",
        price: 20,
        photo: necklace2,
        altTag: "pretty ring",
        quantity: 5,
        id: v4()
    },
    {
        category: "Bracelet",
        name: "Cool Bracelet",
        desc: "This is the description for this cool jewelry item, wow, these stats are pretty dope. i want to make this pretty long so i can see how the styling takes over. So we will see how this works out, hope it looks good!",
        price: 20,
        photo: bracelet3,
        altTag: "pretty ring",
        quantity: 5,
        id: v4()
    },
    {
        category: "Bracelet",
        name: "Cool Bracelet",
        desc: "This is the description for this cool jewelry item, wow, these stats are pretty dope. i want to make this pretty long so i can see how the styling takes over. So we will see how this works out, hope it looks good!",
        price: 20,
        photo: bracelet4,
        altTag: "pretty ring",
        quantity: 5,
        id: v4()
    },
    {
        category: "Bracelet",
        name: "Cool Bracelet",
        desc: "This is the description for this cool jewelry item, wow, these stats are pretty dope. i want to make this pretty long so i can see how the styling takes over. So we will see how this works out, hope it looks good!",
        price: 20,
        photo: bracelet5,
        altTag: "pretty ring",
        quantity: 5,
        id: v4()
    },
    {
        category: "Bracelet",
        name: "Cool Bracelet",
        desc: "This is the description for this cool jewelry item, wow, these stats are pretty dope. i want to make this pretty long so i can see how the styling takes over. So we will see how this works out, hope it looks good!",
        price: 20,
        photo: bracelet6,
        altTag: "pretty ring",
        quantity: 5,
        id: v4()
    },
    {
        category: "Bracelet",
        name: "Cool Bracelet",
        desc: "This is the description for this cool jewelry item, wow, these stats are pretty dope. i want to make this pretty long so i can see how the styling takes over. So we will see how this works out, hope it looks good!",
        price: 20,
        photo: bracelet7,
        altTag: "pretty ring",
        quantity: 5,
        id: v4()
    },
    {
        category: "Bracelet",
        name: "Cool Bracelet",
        desc: "This is the description for this cool jewelry item, wow, these stats are pretty dope. i want to make this pretty long so i can see how the styling takes over. So we will see how this works out, hope it looks good!",
        price: 20,
        photo: bracelet8,
        altTag: "pretty ring",
        quantity: 5,
        id: v4()
    },
    {
        category: "Bracelet",
        name: "Cool Bracelet",
        desc: "This is the description for this cool jewelry item, wow, these stats are pretty dope. i want to make this pretty long so i can see how the styling takes over. So we will see how this works out, hope it looks good!",
        price: 20,
        photo: bracelet9,
        altTag: "pretty ring",
        quantity: 3,
        id: v4()
    },
]

export default mainJewelryList;