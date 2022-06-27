/**
 * Copyright 2009 Nicholas C. Zakas. All rights reserved.
 * MIT-Licensed
 * Uses a binary search algorithm to locate a value in the specified array.
 * @param {Array} items The array containing the item.
 * @param {variant} value The value to search for.
 * @return {int} The zero-based index of the value in the array or -1 if not found.
 */

function binarySearch(items, value) {
  // let box = "";
  let box = [];

  var startIndex = 0,
    stopIndex = items.length - 1,
    middle = Math.floor((stopIndex + startIndex) / 2);

  while (items[middle] != value && startIndex < stopIndex) {
    //adjust search area
    if (value < items[middle]) {
      stopIndex = middle - 1;
    } else if (value > items[middle]) {
      startIndex = middle + 1;
    }

    //recalculate middle
    middle = Math.floor((stopIndex + startIndex) / 2);
  }

  let resultIndex = items[middle] !== value ? -1 : middle;

  if (resultIndex > -1) {
    // box += items[middle];
    box.push(items[middle]);
  }

  // console.log("box", box);
  return box;
  //make sure it's the right value
  // return items[middle] != value ? -1 : middle;
}

//returns 69
// var index = binarySearch(movies, "BIKINI BORROWERS");
