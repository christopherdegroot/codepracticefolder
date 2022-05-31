const repeatNumbers = function(data) {
  data.forEach((arr)=>{
    for (let i = 0; i < arr[1]; i++) {
      console.log(arr[0])
    }
  })
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));