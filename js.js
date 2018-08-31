let arr = {
    names: ['arr','barrr','zarr','farr'],
    ages: [2,3,45,6,2,1]

}

let sortfun = function(field){
  return (a,b) => a[field] > b[field] ? 1 : -1

}

console.log(arr.sort(sortfun('names')))