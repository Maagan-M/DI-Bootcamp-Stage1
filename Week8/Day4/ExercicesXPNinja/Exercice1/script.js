const data = [
    { name: 'Butters', age: 3, type: 'dog' },
    { name: 'Cuty', age: 5, type: 'rabbit' },
    { name: 'Lizzy', age: 6, type: 'dog' },
    { name: 'Red', age: 1, type: 'cat' },
    { name: 'Joey', age: 3, type: 'dog' },
    { name: 'Rex', age: 10, type: 'dog' }
  ];
  
  let sumOfAgesLoop = 0;
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].type === 'dog') {
      sumOfAgesLoop += data[i].age * 7; 
    }
  }
  
  console.log("Sum of dogs' ages in human years (using loop):", sumOfAgesLoop);
  
  const sumOfAgesReduce = data.reduce((acc, current) => {
    if (current.type === 'dog') {
      return acc + (current.age * 7);
    } else {
      return acc;
    }
  }, 0);
  
  console.log("Sum of dogs' ages in human years (using reduce):", sumOfAgesReduce);
  