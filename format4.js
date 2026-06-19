const order = {
  orderId: "ORD-01",
  items: ["LAPTOP", "MOUSE", "SCREEN"],
};

const productss = ["LAPTOP", "MOUSE", "KEYBOARD"];

function findUnknownProducts(order, products) {
  // votre code
  let result = [];
  for (let i = 0; i < order.items.length; i++) {
    if (!products.includes(order.items[i])) {
      result.push({ code: order.items[i], reason: "introvable" });
    }
  }
  console.log(result);
}
// findUnknownProducts(order, products);

const orderss = [
  {
    orderId: "ORD-01",
    client: "Sara",
    items: [
      { code: "P1", qty: 2 },
      { code: "P2", qty: 1 },
    ],
  },
  {
    orderId: "ORD-02",
    client: "Mehdi",
    items: [{ code: "P1", qty: 6 }],
  },
];

const products = [
  { code: "P1", name: "Laptop", stock: 5 },
  { code: "P2", name: "Mouse", stock: 10 },
];

function findItem(code, products) {
  let result;

  for (let i = 0; i < products.length; i++) {
    if (products[i].code === code) {
      return products[i];
    }
  }
}
function findInsufficientStockOrders(orders, products) {
  // votre code

  let result = [];
  for (let i = 0; i < orders.length; i++) {
    for (let x = 0; x < orders[i].items.length; x++) {
      let currentCode = products.find(
        (code) => code == orders[i].items[x].code,
      );
      let current = findItem(orders[i].items[x].code, products);
      if (current.stock < orders[i].items[x].qty) {
        result.push({
          orderId: orders[i].orderId,
          client: orders[i].client,
          reasons: [current.name + " Is insuffisant"],
        });
      }

      //   console.log("found item", current);
      //   console.log(orders[i].items[x].code);
      //   console.log(currentCode);
    }
  }
  return result;
}
// console.log(findInsufficientStockOrders(orders, products));

const ordersss = [
  {
    orderId: "ORD-01",
    client: "Sara",
    items: ["LAPTOP", "MOUSE"],
  },
  {
    orderId: "ORD-02",
    client: "Mehdi",
    items: ["PRINTER", "INK_BLACK"],
  },
];

const Products = [
  {
    code: "LAPTOP",
    name: "Laptop",
    requires: ["MOUSE"],
  },
  {
    code: "MOUSE",
    name: "Mouse",
    requires: [],
  },
  {
    code: "PRINTER",
    name: "Printer",
    requires: ["INK_BLACK", "PAPER"],
  },
  {
    code: "INK_BLACK",
    name: "Black Ink",
    requires: [],
  },
  {
    code: "PAPER",
    name: "Paper",
    requires: [],
  },
];

function findMissingDependencies(orders, products) {
  // votre code

  let result = [];
  for (let i = 0; i < orders.length; i++) {
    for (let x = 0; x < orders[i].items.length; x++) {
      let product = products.find((code) => code.code === orders[i].items[x]);
      //   console.log(product);

      product.requires.forEach((require) => {
        if (!orders[i].items.includes(require)) {
          result.push({
            orderId: orders[i].orderId,
            client: orders[i].client,
            reasons: [orders[i].items[x] + " nécessite Paper"],
          });
        }
      });
      //   console.log("order code ", orders[i].items[x]);
      //   console.log(currentReq);
    }
  }

  console.log(result);
}
// findMissingDependencies(orders, Products);

const oorders = [
  {
    orderId: "ORD-01",
    client: "Sara",
    items: ["LAPTOP", "MOUSE", "BAG"],
  },
  {
    orderId: "ORD-02",
    client: "Mehdi",
    items: ["PRINTER", "INK_BLACK"],
  },
  {
    orderId: "ORD-03",
    client: "Nora",
    items: ["CAMERA", "SD_64", "TRIPOD"],
  },
  {
    orderId: "ORD-04",
    client: "Yassine",
    items: ["CONSOLE", "GAME_PAD"],
  },
];

const productS = [
  {
    code: "LAPTOP",
    name: "Laptop",
    requires: ["MOUSE"],
    incompatibleWith: ["BAG"],
  },
  {
    code: "MOUSE",
    name: "Mouse",
    requires: [],
    incompatibleWith: [],
  },
  {
    code: "BAG",
    name: "Laptop Bag",
    requires: [],
    incompatibleWith: ["LAPTOP"],
  },
  {
    code: "PRINTER",
    name: "Printer",
    requires: ["INK_BLACK", "PAPER"],
    incompatibleWith: [],
  },
  {
    code: "INK_BLACK",
    name: "Black Ink",
    requires: [],
    incompatibleWith: [],
  },
  {
    code: "PAPER",
    name: "Paper",
    requires: [],
    incompatibleWith: [],
  },
  {
    code: "CAMERA",
    name: "Camera",
    requires: ["SD_64"],
    incompatibleWith: [],
  },
  {
    code: "SD_64",
    name: "SD Card 64GB",
    requires: [],
    incompatibleWith: [],
  },
  {
    code: "TRIPOD",
    name: "Tripod",
    requires: [],
    incompatibleWith: [],
  },
  {
    code: "CONSOLE",
    name: "Game Console",
    requires: ["GAME_PAD"],
    incompatibleWith: [],
  },
  {
    code: "GAME_PAD",
    name: "Game Controller",
    requires: [],
    incompatibleWith: ["CONSOLE"],
  },
];

function findBlockedOrders(orders, products) {
  // votre code

  let result = [];
  for (let i = 0; i < orders.length; i++) {
    let reason = [];
    for (let x = 0; x < orders[i].items.length; x++) {
      let product = products.find((prod) => prod.code === orders[i].items[x]);

      if (!product) {
        reason.push(orders[i].items[x] + "  n'existe pas");
        continue;
      }

      product.requires.forEach((require) => {
        if (!orders[i].items.includes(require)) {
          reason.push(orders[i].items[x] + " is necissite " + require);
        }
      });
      product.incompatibleWith.forEach((incompatible) => {
        if (orders[i].items.includes(incompatible)) {
          reason.push(
            orders[i].items[x] + " Incompatible avec " + incompatible,
          );
        }
      });
    }
    if (reason.length > 0) {
      result.push({
        orderId: orders[i].orderId,
        client: orders[i].client,
        reasons: reason,
      });
    }
  }
  console.log(result);
}
// findBlockedOrders(orders, productS);

const paths = [
  {
    learner: "Sara",
    level: 2,
    modules: ["HTML", "CSS", "JS"],
  },
  {
    learner: "Mehdi",
    level: 1,
    modules: ["REACT", "NODE"],
  },
  {
    learner: "Nora",
    level: 3,
    modules: ["DOCKER", "KUBERNETES"],
  },
  {
    learner: "Yassine",
    level: 2,
    modules: ["AWS", "AZURE"],
  },
];

const modules = [
  {
    code: "HTML",
    name: "HTML Basics",
    minLevel: 1,
    requires: [],
    incompatibleWith: [],
  },
  {
    code: "CSS",
    name: "CSS Basics",
    minLevel: 1,
    requires: ["HTML"],
    incompatibleWith: [],
  },
  {
    code: "JS",
    name: "JavaScript",
    minLevel: 2,
    requires: ["HTML", "CSS"],
    incompatibleWith: [],
  },
  {
    code: "REACT",
    name: "React",
    minLevel: 2,
    requires: ["JS"],
    incompatibleWith: [],
  },
  {
    code: "NODE",
    name: "Node.js",
    minLevel: 2,
    requires: ["JS"],
    incompatibleWith: [],
  },
  {
    code: "DOCKER",
    name: "Docker",
    minLevel: 2,
    requires: [],
    incompatibleWith: [],
  },
  {
    code: "KUBERNETES",
    name: "Kubernetes",
    minLevel: 3,
    requires: ["DOCKER"],
    incompatibleWith: [],
  },
  {
    code: "AWS",
    name: "AWS Cloud",
    minLevel: 2,
    requires: [],
    incompatibleWith: ["AZURE"],
  },
  {
    code: "AZURE",
    name: "Azure Cloud",
    minLevel: 2,
    requires: [],
    incompatibleWith: ["AWS"],
  },
];

function findImpossibleLearningPaths(paths, modules) {
  // votre code

  let result = [];
  for (let i = 0; i < paths.length; i++) {
    let reason = [];
    for (let x = 0; x < paths[i].modules.length; x++) {
      let module = modules.find((mod) => mod.code === paths[i].modules[x]);
      if (!module) {
        reason.push(paths[i].modules[x] + " introuvable ");
        continue;
      }
      module.requires.forEach((require) => {
        if (!paths[i].modules.includes(require)) {
            let name = modules.find((mod) => mod.code === require);
          reason.push(paths[i].modules[x] + " nécessite " + name.name);
        }
      });
      module.incompatibleWith.forEach((incompatible) => {
        if (paths[i].modules.includes(incompatible)) {
          reason.push(paths[i].modules[x] + " incompatible avec " + incompatible);
        }
      });
      if (paths[i].level < module.minLevel) {
        reason.push(" Niveau insuffisant pour " + module.name);
      }
    }
    if (reason.length > 0) {
      result.push({
        learner: paths[i].learner,
        reasons: reason,
      });
    }
  }
  console.log(result);
}
findImpossibleLearningPaths(paths, modules);
