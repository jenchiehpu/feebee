// 1. filter

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(function (element, index, array) {
    return element.length > 6
});
console.log(result);



// old method


let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let length = words.length;
let filterArr = [];
for (let i = 0; i < length; i++) {
    if (words[i].length > 6) {
        filterArr.push(words[i]);
    }
}
console.log(filterArr);

// 2. some

let array = [1, 2, 3, 4, 5];
let result = array.some(function (element, index, array) {
return element % 2 === 0;
})
console.log(result);

// old method

let array = [1, 3, 5];
function someOldMethod(array) {
for (let i = 0; i < array.length; i++) {
if (array[i] % 2 === 0) {
return true;
}
}
return false;
}
console.log(someOldMethod(array));


// 3. every

let array1 = [1, 30, 39, 29, 10, 13];
let result = array1.every(function (element, index, array) {
return element < 40;
})
console.log(result);

// Arrow

let array1 = [1, 30, 39, 29, 10, 13];
let result = array1.every(element => element < 40);
console.log(result);

//old method

let array1 = [1, 30, 39, 41, 10, 13];
function everyOldMethod(array) {
for (let i = 0; i < array.length; i++) {
if (array[i] > 40) {
return false;
}
}
return true;
}
console.log(everyOldMethod(array1));


// 4. reduce
const array1 = [1, 2, 3, 4];
let result = array1.reduce(function (accumulator, currentValue, currentIndex, array) {
return accumulator + currentValue;

}, 0)
console.log(result);

// old method

const array1 = [1, 2, 3, 4];
function reduceOldMethod(array, accumulator) {
let sum = 0;
if (accumulator == null) {
accumulator = 0;
}
sum += accumulator;
for (let i = 0; i < array.length; i++) {
sum += array[i];
}
return sum;
}
console.log(reduceOldMethod(array1));

// 5. map
var array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
// const map1 = array1.map(function (element) {
return element * 2;
})
console.log(map1);

// old method

let array1 = [1, 4, 9, 16];
function mapOldMethod(array) {
let newArr = [];
for (let i = 0; i < array.length; i++) {
newArr.push(array[i] * 2);
}
return newArr;
}
console.log(mapOldMethod(array1));


// 6. forEach
let array1 = [2, 5, 9];
array1.forEach(function (element, index, array) {
console.log('array[' + index + '] = ' + element);
});
[2, 5, 9].forEach(function (element, index, array) {
console.log('array[' + index + '] = ' + element);
});
function logArrayElements(element, index, array) {
console.log('array[' + index + '] = ' + element);
}
[2, 5, 9].forEach(logArrayElements);

// old method

let array1 = [2, 5, 9];
function forEachOldMethod(array) {
for (let i = 0; i < array.length; i++) {
console.log("array[" + i + "] = " + array[i]);
}
}
forEachOldMethod(array1);

