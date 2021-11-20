const facturas = [
  {
    numero: 1,
    nombreDelCliente: "Juan",
    fecha: new Date(),
    items: [
      {
        idProduct: 1,
        precio: 200,
        cantidad: 3,
      },
      {
        idProduct: 2,
        precio: 200,
        cantidad: 2,
      },
      {
        idProduct: 3,
        precio: 200,
        cantidad: 2,
      },
    ],
  },
  {
    numero: 2,
    nombreDelCliente: "Pablo",
    fecha: new Date(),
    items: [
      {
        idProduct: 1,
        precio: 234,
        cantidad: 2,
      },
      {
        idProduct: 2,
        precio: 234,
        cantidad: 2,
      },
    ],
  },
];
function createContador() {
  let x = 0;
  return function () {
    x++;
    console.log(x);
  };
}
const contar = createContador();
contar();
contar();
contar();
function createGame() {
  let secret = 5;
  return (e) => {
    if (e > secret) {
      return console.log("Muy alto!");
    } else if (e < secret) {
      return console.log("Muy bajo!");
    } else {
      return console.log("Lo adivinaste, felicitaciones!");
    }
  };
}
const guess = createGame();
guess(2);
guess(4);
guess(5);
