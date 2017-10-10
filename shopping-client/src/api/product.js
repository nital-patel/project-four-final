const dummyProducts = [
    {
        image: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/02/25/goods-img/1498125691181740179.jpg",
        description: "Lorem ipsum dolor sit amet, et pri iudico propriae accommodare. Mel quod saepe iisque ad, eu partiendo laboramus vituperatoribus sea, nihil virtute ea sea. Sed at denique signiferumque, te nibh dolores voluptatum cum. Nec ex solet reformidans. Pri ne debet accumsan, has ne tale tantas sapientem. Mei et munere nostro pertinax.\n" +
        "\n" +
        "Eligendi conceptam id pro, eum mutat mentitum singulis et. Te usu admodum signiferumque, case omnesque ullamcorper nam cu. Vero delicata an ius, per nostrud nominavi an. At sit stet graeco percipit, at sea intellegat posidonium, quod patrioque iracundia his ex.",
        id: 1,
        price: 200,
        name: "Item 1"
    },
    {
        image: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/02/25/goods-img/1498125691181740179.jpg",
        description: "Lorem ipsum dolor sit amet, et pri iudico propriae accommodare. Mel quod saepe iisque ad, eu partiendo laboramus vituperatoribus sea, nihil virtute ea sea. Sed at denique signiferumque, te nibh dolores voluptatum cum. Nec ex solet reformidans. Pri ne debet accumsan, has ne tale tantas sapientem. Mei et munere nostro pertinax.\n" +
        "\n" +
        "Eligendi conceptam id pro, eum mutat mentitum singulis et. Te usu admodum signiferumque, case omnesque ullamcorper nam cu. Vero delicata an ius, per nostrud nominavi an. At sit stet graeco percipit, at sea intellegat posidonium, quod patrioque iracundia his ex.",
        id: 2,
        price: 200,
        name: "item 2"
    },
    {
        image: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/02/25/goods-img/1498125691181740179.jpg",
        description: "Lorem ipsum dolor sit amet, et pri iudico propriae accommodare. Mel quod saepe iisque ad, eu partiendo laboramus vituperatoribus sea, nihil virtute ea sea. Sed at denique signiferumque, te nibh dolores voluptatum cum. Nec ex solet reformidans. Pri ne debet accumsan, has ne tale tantas sapientem. Mei et munere nostro pertinax.\n" +
        "\n" +
        "Eligendi conceptam id pro, eum mutat mentitum singulis et. Te usu admodum signiferumque, case omnesque ullamcorper nam cu. Vero delicata an ius, per nostrud nominavi an. At sit stet graeco percipit, at sea intellegat posidonium, quod patrioque iracundia his ex.",
        id: 3,
        price: 250,
        name: "item 3"
    }
];

const cart = [];

export default {
    getProducts() {
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve(dummyProducts);
            }, 10);
        });
    },
    getProduct(id){
        // Check if you have the product information in dummyProducts ?

        // If yes return that

        // Else make API call to fetch it and return it
    },
    addToCart(product) {
        // Check if product is in cart ?

        // If yes, increase the qty by 1

        // Else push product in cart & set qty to 1

    },
    getCart() {
        return cart;
    },
    checkOut(orderFormData) {
        // Make a call to checkout the cart
    }
};