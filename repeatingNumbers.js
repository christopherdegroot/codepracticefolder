const repeatNumbers = function(data) {
  let finalString = []
  for (const arr of data) {
    let pushString = []
    for (let i = 0; i < arr[1]; i++) {
      pushString.push(arr[0])
    }
    finalString.push(pushString.join(''))
  }
  return finalString.join(',')
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));