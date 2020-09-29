const _ = require('lodash');
const cities = require('./data.json');

// const output = _(cities)
//     .filter(c => c.population > 20000000) //filter json by population
//     .countBy(c => c.country) // get cities by countries
//     .toPairs() //  value of first key is the first element of array and the second - the second one
//     .map(c => _.zipObject(['country', 'cities'], c)) // make object from array  with keys country and cities
//     .orderBy(c => c.cities, 'desc') //set order  by cities with revers using desc
//     .take(5) // use only 5 items of result
//     .value() //get only that cities that feet
//
// console.log(output);

//***********************************************************************************
// const arr = [2, 2, 1, 0]
// console.log(_.gte(3, ...arr))
// const greaterThan = _.curryRight(_.gte);
// const populationGreaterThan = num => _.conforms({population: greaterThan(num)});
// const zip = _.curry(_.zipObject);
// const out = _(cities)
//     .filter(populationGreaterThan(20000000))
//     .countBy('country')
//     .toPairs()
//     .map(zip(['country', 'cities']))
//     .orderBy('cities', 'desc')
//     .take(6)
//     .value()
// console.log(out)

//************************************************************************************
