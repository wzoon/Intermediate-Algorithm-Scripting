/*function sumAll(arr) {
    arr.sort((a,b) => a -b);
    let sum = 0;
    for(let i=arr[0];i<=arr[1];i++){
        sum  = sum + i; 
    }
    return sum;
  }
  
  console.log(sumAll([10, 5]));
  */
 function diffArray(arr1, arr2) {
    // Same, same; but different.
    return arr1
      .filter(elem => !arr2.includes(elem))
      .concat(
        arr2.filter(elem => !arr1.includes(elem))
      )
  }
  
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));