/** product: calculate the product of an array of numbers. */

function product(nums) {
  //base case
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {

  if (words.length === 0) return 0;

  let maxLength = words[0].length;

  let l = longest(words.slice(1));
  //longest(["hi","hola"])

  if (l > maxLength) {
    return l;
  } else {
    return maxLength;
  }


}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  //base case
  if (str.length === 0) return "";

  return str[0] + everyOther(str.slice(2));


}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {

  //base case
  if (arr.length === 0) return false;

  return arr[0] === val || find(arr.slice(1), val);

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  if (str.length === 0 || str.length === 1) return true;

  return str[str.length - 1] === str[0] && isPalindrome(str.slice(1, -1));

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  console.log("str===", str);
  if (str.length <= 1) {
    return str;
  }
  else {
    return str.charAt(str.length - 1) + revString(str.slice(0, str.length - 1));

  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;

  if (arr[i] === val) return i;

  return findIndex(arr, val, i + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

// function gatherStrings(obj) {
//   const strings = []; // ["Lester", "Testowitz"]

//   for (let key in obj) {
//     const val = obj[key];
//     if (typeof val === "string") {
//       strings.push(val);
//     }
//     if (typeof val === "object") {
//       strings.push(...gatherStrings(val));
//     }
//   }

//   return strings;
// }

function gatherStrings(obj) {
  const strings = [];

  function _gatherStrings(_obj) {
    for (let key in _obj) {
      const val = _obj[key];
      if (typeof val === "string") {
        strings.push(val);
      }
      if (typeof val === "object") {
        _gatherStrings(val);
      }
    }
  }

  _gatherStrings(obj);
  return strings;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  const midIndex = Math.floor((right + left) / 2);

  if (arr.length === 0) {
    return false;
  }else if (left === right) {
    return arr[left] === val;
  } else if (arr[midIndex] === val) {
    return true;
  } else if (val > arr[midIndex]) {
    return binarySearch(arr, val, midIndex + 1, right);
  } else {
    return binarySearch(arr, val, left, midIndex - 1);
  }
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val, left = 0, right = arr.length - 1) {
  const midIndex = Math.floor((right + left) / 2);

  if (arr.length === 0) {
    return -1;
  }else if (left === right) {
    return arr[left] === val ? left : -1;
  } else if (arr[midIndex] === val) {
    return midIndex;
  } else if (val > arr[midIndex]) {
    return binarySearchIndex(arr, val, midIndex + 1, right);
  } else {
    return binarySearchIndex(arr, val, left, midIndex - 1);
  }
}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
