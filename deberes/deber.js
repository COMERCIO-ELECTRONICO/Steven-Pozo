var json = {
    arreglos: {
      uno: [2, 4, 5, 8, 6, 9, 10],
      dos: [
        { valor: 1 },
        { valor: 4 },
        { valor: 2 },
        { valor: 24 },
        { valor: 100 },
        { valor: 23 },
        { valor: 45 },
        { valor: 23 },
      ],
    },
  };
  
  //1
  
  var valor1 = json.arreglos.uno.map((item, index, arreglos) => {
    return item * 2;
  });
  console.log("Arre * 2")
  console.log(valor1)
  
  var valor2 = json.arreglos.uno.filter((item, valor, arreglos) => {
    return item === 2 || item === 4 || item === 6 || item === 8 || item === 10
  });
  console.log("numeros Pares")
  console.log(valor2)
  
  //2
  
  var valor3 = json.arreglos.dos.filter((item, valor, arreglos) => {
      return item.valor === 1 || item.valor === 23 || item.valor === 45;
    });
    console.log(" numeros Impares")
    console.log(valor3)
  
  var valor4 = json.arreglos.dos.map((item, index, arreglos) => {
    return item.valor + 2;
  });
  console.log("Arre + 2");
  console.log(valor4);