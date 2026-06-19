const orders = [
    {
        orderId: "ORD-01",
        client: "Sara",
        items: ["LAPTOP", "MOUSE", "BAG"]
    },
    {
        orderId: "ORD-02",
        client: "Mehdi",
        items: ["PRINTER", "INK_BLACK"]
    },
    {
        orderId: "ORD-03",
        client: "Nora",
        items: ["CAMERA", "SD_64", "TRIPOD"]
    },
    {
        orderId: "ORD-04",
        client: "Yassine",
        items: ["CONSOLE", "GAME_PAD"]
    }
];

const products = [
    {
        code: "LAPTOP",
        name: "Laptop",
        requires: ["MOUSE"],
        incompatibleWith: ["BAG"]
    },
    {
        code: "MOUSE",
        name: "Mouse",
        requires: [],
        incompatibleWith: []
    },
    {
        code: "BAG",
        name: "Laptop Bag",
        requires: [],
        incompatibleWith: ["LAPTOP"]
    },
    {
        code: "PRINTER",
        name: "Printer",
        requires: ["INK_BLACK", "PAPER"],
        incompatibleWith: []
    },
    {
        code: "INK_BLACK",
        name: "Black Ink",
        requires: [],
        incompatibleWith: []
    },
    {
        code: "CAMERA",
        name: "Camera",
        requires: ["SD_64"],
        incompatibleWith: []
    },
    {
        code: "SD_64",
        name: "SD Card 64GB",
        requires: [],
        incompatibleWith: []
    },
    {
        code: "TRIPOD",
        name: "Tripod",
        requires: [],
        incompatibleWith: []
    },
    {
        code: "CONSOLE",
        name: "Game Console",
        requires: ["GAME_PAD"],
        incompatibleWith: []
    },
    {
        code: "GAME_PAD",
        name: "Game Controller",
        requires: [],
        incompatibleWith: ["CONSOLE"]
    }
];



function findBlockedOrders(orders, products) {
    let arr = [];
    orders.forEach(order => {
        let reason = [];
        order.items.forEach(item => {

            let product = products.find(prod => prod.code == item);

            if(!product){

                reason.push(`${item} product not found`);
                return;
            }

            product.requires.forEach(require => {

                if(!order.items.includes(require)){
                    reason.push(`${item} neccessite ${require}`);
                }
            })

            product.incompatibleWith.forEach(incompatible => {

                if(order.items.includes(incompatible)){
                    reason.push(`${item} incompatible ${product.name}`);
                }
            })
        })

        arr.push({
            orderId: order.orderId,
            client: order.client,
            reason
        });
        
    });

    return arr;

}

console.log(findBlockedOrders(orders, products));