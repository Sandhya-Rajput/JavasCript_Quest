function sortArrayInDescendingOrder(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] < array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  }
  const array = [1, 5, 3, 2, 4];
const sortedArray = sortArrayInDescendingOrder(array);
console.log(sortedArray); 