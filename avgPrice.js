const flotte = [
  {
    id: 1,
    marque: "Toyota",
    modele: "Yaris",
    cat: "citadine",
    prix_jour: 35,
    km: 42000,
    note: 4.2,
    disponible: true,
  },
  {
    id: 2,
    marque: "Toyota",
    modele: "Corolla",
    cat: "berline",
    prix_jour: 55,
    km: 28000,
    note: 4.6,
    disponible: true,
  },
  {
    id: 3,
    marque: "Renault",
    modele: "Clio",
    cat: "citadine",
    prix_jour: 30,
    km: 75000,
    note: 3.8,
    disponible: false,
  },
  {
    id: 4,
    marque: "Renault",
    modele: "Megane",
    cat: "berline",
    prix_jour: 50,
    km: 15000,
    note: 4.8,
    disponible: true,
  },
  {
    id: 5,
    marque: "Peugeot",
    modele: "208",
    cat: "citadine",
    prix_jour: 32,
    km: 60000,
    note: 4.0,
    disponible: true,
  },
  {
    id: 6,
    marque: "Peugeot",
    modele: "3008",
    cat: "SUV",
    prix_jour: 80,
    km: 22000,
    note: 4.7,
    disponible: false,
  },
  {
    id: 7,
    marque: "BMW",
    modele: "Serie 3",
    cat: "berline",
    prix_jour: 110,
    km: 8000,
    note: 4.9,
    disponible: false,
  },
  {
    id: 8,
    marque: "BMW",
    modele: "X3",
    cat: "SUV",
    prix_jour: 130,
    km: 5000,
    note: 4.8,
    disponible: false,
  },
  {
    id: 9,
    marque: "Ford",
    modele: "Kuga",
    cat: "SUV",
    prix_jour: 75,
    km: 38000,
    note: 4.3,
    disponible: true,
  },
  {
    id: 10,
    marque: "Ford",
    modele: "Fiesta",
    cat: "citadine",
    prix_jour: 28,
    km: 90000,
    note: 3.6,
    disponible: true,
  },
  {
    id: 11,
    marque: "Tesla",
    modele: "Model 3",
    cat: "berline",
    prix_jour: 95,
    km: 12000,
    note: 4.9,
    disponible: true,
  },
  {
    id: 12,
    marque: "Tesla",
    modele: "Model Y",
    cat: "SUV",
    prix_jour: 115,
    km: 6000,
    note: 5.0,
    disponible: true,
  },
  {
    id: 13,
    marque: "Volkswagen",
    modele: "Golf",
    cat: "berline",
    prix_jour: 58,
    km: 45000,
    note: 4.1,
    disponible: false,
  },
  {
    id: 14,
    marque: "Volkswagen",
    modele: "Tiguan",
    cat: "SUV",
    prix_jour: 88,
    km: 19000,
    note: 4.5,
    disponible: true,
  },
  {
    id: 15,
    marque: "Hyundai",
    modele: "Tucson",
    cat: "SUV",
    prix_jour: 70,
    km: 31000,
    note: 4.4,
    disponible: true,
  },
];

function avgPriceByCategory(obj) {
  let result = {};

  for (let i = 0; i < obj.length; i++) {
    const cat = obj[i].cat;
    const price = obj[i].prix_jour;
    if (!result[cat]) {
      result[cat] = { price: 0, total: 0 };
    }
    result[cat].price += price;
    result[cat].total++;
  }

  const moyenne = {};
  for (let cat in result) {
    moyenne[cat] = result[cat].price / result[cat].total;
  }

  return moyenne;
}

function availableCars(obj) {
  let result = [];

  for (let i = 0; i < obj.length; i++) {
    if (obj[i].disponible === true && obj[i].note >= 4.0) {
      result.push({
        ...obj[i],
        prix_promo: obj[i].prix_jour * 0.9,
      });
    }
  }

  return result;
}

function topThreeCars(obj) {
  for (let i = 0; i < obj.length - 1; i++) {
    for (let o = i + 1; o < obj.length; o++) {
      if (obj[i].note <= obj[o].note) {
        const temp = obj[i].note;
        obj[i].note = obj[o].note;
        obj[o].note = temp;
      }
    }
  }

  let result = obj.slice(0, 3);
  return result;
}

function groupsBy(obj) {
  let result = {};

  for (let i = 0; i < obj.length; i++) {
    let marque = obj[i].marque;

    if (!result[marque]) {
      result[marque] = [];
    }
    result[marque].push(obj[i]);
  }
  return result;
}

function destructingAndFilter(cars) {
  let result = [];

  for (const { id, marque, modele, km } of cars) {
    if (km < 50000) {
      result.push({
        id,
        marque,
        modele,
        km,
      });
    }
  }
  return result;
}

function groupCategories(obj) {
  let result = [];

  const suvs = obj.filter((car) => car.cat === 'SUV');

  const groupByBrand = {};

  for (let suv of suvs)
  {
    const brand = suv.marque;
    if(!groupByBrand[brand]){
        groupByBrand[brand] = [];
    }

    groupByBrand[brand].push(suv)
  }

  for(let brand in groupByBrand)
  {
    const cheapestSuv = getCheapest(groupByBrand[brand]);
    result.push(cheapestSuv);

  }

return result;
}

function getCheapest(obj)
{
    return obj.reduce((acc, current) => {
        return current.prix_jour < acc.prix_jour ? current : acc;
    })
}
console.log(groupCategories(flotte));
