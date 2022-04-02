const { calculateTotal } = require('../calculate');

test('basic test', () => {
  expect(4).toBe(4);
});

test('calculateTotal sum', () => {
  const list = [
    {
      id: 456,
      name: 'Война и мир',
      count: 3,
      price: 400,
    },
    {
      id: 77,
      name: 'JavaScript',
      count: 1,
      price: 1300,
    },
  ];
  const result = calculateTotal(list);
  expect(result).toBe(2500);
});

// const t = function () {
//   return function (a, b) {
//     return a + b;
//   };
// };

// const te = t();

// console.log(t()(2, 8));
