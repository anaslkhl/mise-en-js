function flatten(array) {
  let result = [];

  for (let ele of array) {
    if (Array.isArray(ele)) {
      result.push(...flatten(ele));
    } else {
      result.push(ele);
    }
  }
  return result;
}

console.log(flatten([1, [2, [3, [4]], 5]]));



