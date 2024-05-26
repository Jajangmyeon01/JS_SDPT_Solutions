let foods = [
    {
        foodName : "Adobo",
        qty : 2,
        price : 40
    },
    {
        foodName : "Kaldereta",
        qty : 4,
        price : 50
    },
    {
        foodName : "Sisig",
        qty : 1,
        price : 80
    },
    {
        foodName : "Sinigang",
        qty : 5,
        price : 100
    }
];
for(i = 0; i < foods.length; i++){
        console.log(`Food : ${foods[i].foodName} \nPrice : ${foods[i].price} \nQuantity : ${foods[i].qty}`);
}
