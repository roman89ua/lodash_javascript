const _ = require('lodash');

//
// function multiple (a, b){
//     return a*b;
// }
// console.log(multiple(2,3));
//
//
// function double(num) {
//     return multiple(num, 2);
// }
// function partial(func, ...fixed){
//     return function (...args){
//         return func.apply(this, fixed.concat(args));
//     }
// }

// function partial(func){
//     const fixed = _.tail(_.toArray(arguments))
//     return function (){
//         return func.apply(this, _.concat(fixed, arguments));
//     }
// }
// const double = partial(multiple, 2);
// console.log(double(21));
//****************************************************
// function divide(a, b) {
//     return a / b;
// }
// // const half = _.partialRight(divide, 2); //first way to use parsial from lodash
// const half = _.partial(divide, _, 2);
// console.log(half(10));

//******************************************************

// const curriedDivide = _.curry(divide);
// console.log(curriedDivide(10, 2));
// console.log(curriedDivide(10)(2));


//**************************************

// const notFlatArray = [1, 2, 3, [4, [5]]];
// console.log(_.sum(notFlatArray));
// const sumFlat = _.flow([_.concat, _.flattenDeep, _.sum]);
// console.log(sumFlat(notFlatArray));

