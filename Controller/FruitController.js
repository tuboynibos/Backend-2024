// TODO 3: Import fruits dari data/fruits.js dan refactor variabel ke ES6 variable
const fruits = require("./data/fruits");

// TODO 4: Buat method index, refactor function ke ES6 Arrow Function, dan tampilkan data fruits
const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
};

// TODO 5: Buat method store, refactor function ke ES6 Arrow Function, dan tambahkan data baru ke array fruits
const store = (name) => {
    fruits.push(name);
    index(); // Menampilkan data setelah penambahan
};

// TODO 6: Buat method update, refactor function ke ES6 Arrow Function, dan perbarui data fruits
const update = (position, name) => {
    if (position >= 0 && position < fruits.length) {
        fruits[position] = name;
        index(); // Menampilkan data setelah pembaruan
    } else {
        console.log("Index tidak valid");
    }
};

// TODO 7: Buat method destroy, refactor function ke ES6 Arrow Function, dan hapus data fruits
const destroy = (position) => {
    if (position >= 0 && position < fruits.length) {
        fruits.splice(position, 1);
        index(); // Menampilkan data setelah penghapusan
    } else {
        console.log("Index tidak valid");
    }
};

// TODO 8: Export method index, store, update, dan destroy
module.exports = { index, store, update, destroy };
