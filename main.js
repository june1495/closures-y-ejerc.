const recipe = {
  name: "hola",
  ingredients: [
    { name: "Pan", quantity: 2 },
    { name: "Jamón", quantity: 1 },
    { name: "Queso", quantity: 1 },
  ],
};
// ejercicio 1
// console.log(recipe.ingredients[0].quantity);

for (let i = 0; i < recipe.ingredients.length; i++) {
  if (recipe.ingredients[i]) {
    console.log(
      `${recipe.ingredients[i].quantity} de ${recipe.ingredients[i].name}`
    );
  }
}
//ejercicio 2
const capitalizar = (str) => {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }
  return arr.join(" ");
};

// console.log(capitalizar("hola como estas?"));
//ejercicio 3
const lengthOfLastWord = (s) => {
  let arr = s.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      newArr.push(arr[i]);
    }
  }
  return newArr[newArr.length - 1].length;
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));
// Encontre esta otra forma de resolverlo que me pareció interesante
// Ya que  al pasarle el parametro Boolean al metodo filter, este eliminara los "" del array que se genera.
// ya que "" = false
const lastWord = function (s) {
  let str = s.split(" ").filter(Boolean);
  return str[str.length - 1].length;
};
console.log(lastWord("   fly me   to   the moon  "));
//ejercicio 4
const upper = (s) => {
  let e = s.split("");
  for (let i = 0; i < e.length; i++) {
    if (e[i].charCodeAt(0) <= 122 && e[i].charCodeAt(0) >= 97) {
      e[i] = String.fromCharCode(e[i].charCodeAt(0) - 32);
    }
  }

  return e.join("");
};
console.log(upper("hola como estaS?"));
//ejercicio 5
const reg1 = new RegExp("^#(?:[0-9a-f]{3}){1,2}$", "ig");
console.log(reg1.test("#2097f3"));

//ejercicio 6

const reg2 = new RegExp(
  "(0?[1-9]|[1|2][0-9]|3[0-1])/(0?[0-9]|1[0-2])/(d*)",
  "g"
);
console.log(reg2.test("20/11/2021"));

//ejercicio 7

const reg3 = new RegExp(
  "([a-zA-Z0-9-_]{1,20}@)[a-z]+.(com|co|net|org|us)",
  "g"
);
console.log(reg3.test("francomelgar4@gmail.com"));
