/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// friends[1] = 'qwerqrwr';
// friends[3] = 123123;

// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);

// console.log([1, 2, 3] === [1, 2, 3]);

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

/* const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

for (let i = 0; i < friends.length; i += 1) {
  friends[i] += `-${i}`;
}

// for (let friend of friends) {
//   console.log(friend);
// }

console.table(friends); */

/* 
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (const key of keys) {
      values.push(apartment[key]);
}
 */
/* 
function countProps(object) {
  // Change code below this line
  let propCount = 0;
  let keys = Object.keys(object);
  console.log(keys);
  const objLen = keys.length;
  console.log(objLen);
  propCount = objLen
/*   for (const key of keys) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    } 
  }

  return propCount;
  // Change code above this line
}
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

 */
/* 
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb)
}

console.table(hexColors);
 */

/* 
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function getProductPrice(productName) {

for (const product of products) {
  if (productName === product.name) {
    return (product.price);
  }
}
  return (null);
}
 
console.log(getAllPropValues("price"));

 */
/* 
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {

  let valueMas = [];
   
  for (const product of products) {
    console.log(product);
    if (product.hasOwnProperty(propName)) {
      console.log(product[propName]);
      valueMas.push(product[propName]);
    }
  }
  return valueMas;
}

console.log(getAllPropValues("price"));
 */


/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {

  for (const product of products) {
    console.log(product);
  if (productName === product.name) {
    console.log(product.name)
    return(product.price * product.quantity)
    }
}
  return (0);

}

console.log(calculateTotalPrice("Grip"));
 */


/* const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {...defaultSettings, ...overrideSettings};
 */




function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  
const itog = {category, priority, completed, ...data}
  return(itog);
  // Change code above this line
}

console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
