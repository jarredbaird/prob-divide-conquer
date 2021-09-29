function countZeroes(arr) {
  // [1,1,1,0,0]
  if (!arr[0]) return arr.length;
  let leftIdx = 0;
  let rightIdx = arr.length;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((rightIdx - leftIdx) / 2);
    if (arr[middleIdx]) return 1;
  }
}

module.exports = countZeroes;
