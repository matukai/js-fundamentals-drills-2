/* #getAllUsernames
 *
 * Takes in an object and returns an array of all usernames.
 *
 * @param {Object}
 * @return {Array}
 */

var getAllUsernames = function (obj){
  //console.log(obj)
  var newArr = [];
  //console.log(obj.data.id[1].username);
  var users = obj.data.id;
  //console.log(users);
  for(var i in users){
    //console.log(users[i]);
    //console.log(users[i].username);
    newArr.push(users[i].username);
  }
  return newArr;
}

/* #hometownCity
 *
 * Takes in an array and returns a string of the users hometown city.
 *
 * @param {Array}
 * @return {String}
 */

var hometownCity = function (arr){
  
    //console.log(arr);
    for(var i = 0; i < arr.length; i++){
      return arr[i].hometown.state.montana.city
    }
  }

/* #usersCurrentState
 *
 * Takes 2 arguments 'data' and 'usernames' and returns a new object with the username as the key and the user's current state as the value.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */

var usersCurrentState = function (data,usernames){
  
  //console.log(data)
 
  //console.log(data[0])
 
  //console.log(data[0][0])
  
   //console.log(data[0][0].hometown.state);
   //console.log(usernames);
   //var hometown = data[0][0].hometown.state
   //console.log(hometown);
   //console.log(data);
   var obj = {};
   for(var i = 0; i < usernames.length; i++){
     //console.log(data[i][[1]])
     obj[usernames[i]] = data[i][1].currentLocation.state
   }
 
 
 
   return obj;
 }

/* #findAdmin
 *
 * Takes in an object and returns the username of the admin.
 *
 * @param {Object}
 * @return {String}
 */

var findAdmin = function (obj){
  //console.log(obj.data.id);

  var test = obj.data.id
  for(var key in test){
    //console.log(test[key].admin);
    if(test[key].admin === true){
      return test[key].username;
    }
  }
}

/* #addNewMovie
 *
 * Takes in 3 arguments 'data', 'id', 'newMovie'. Returns an array of movie titles.
 *
 * @param {Object}
 * @param {Number} id
 * @param {String} movie to add to array
 * @return {Array}
 */

var addNewMovie = function (obj, num, str){
  var array = obj.data.id[num].favoriteMovies;
  array.push(str);
  return array;
} 

/* #favoriteBooks
 *
 * Takes in an object and returns an array containing an object with the users favorite books with the author as the key and the title as the value.
 *
 * @param {Object}
 * @return {Array}
 */

var favoriteBooks = function (obj){
  
    //console.log(obj.data.id[1]);
    var lair = obj.data.id;
    //console.log(obj.data.id);
    var bookObj = {};
  
    for(var key in lair){
      //console.log(lair[key].favoriteBook.author);
      //console.log(lair[key].favoriteBook.title);
      bookObj[lair[key].favoriteBook.author] = lair[key].favoriteBook.title;
    }
    //console.log(bookObj);
    return [bookObj];
  }

/* #countTracks
 *
 * Takes in an object and returns the number amount of tracks offered.
 *
 * @param {Object}
 * @return {Number}
 */

var countTracks = function (obj){

  //console.log(obj);
  for(var key in obj){
    //console.log(obj[key].tracks);
    //Object.keys(myObj).length
    return Object.keys(obj[key].tracks).length;
  }
}

/* #fullTimeStatus
 *
 * Takes in 2 arguments 'data' and 'trackName' and changes the selected track full time status to true.
 *
 * @param {Object}
 * @param {String}
 * @return {Object}
 */

var fullTimeStatus = function (obj,str){
  for(var key in obj){
    if(key === str){
      obj[str][0].fullTime.offered = true;
      return obj[str][0].fullTime;
    } 
  }
}

/* #newTrack
 *
 * Takes in 3 arguments 'data', 'array', and 'string'. Returns an object with a new track with the 'string' as the key and the 'array' as the value.
 *
 * @param {Object}
 * @param {Array}
 * @param {String}
 * @return {Object}
 */

var newTrack = function (obj,arr,str){
  for(var i = 0; i < arr.length; i++){
    obj[str] = arr[i];
  }
  return obj;
}

/* #bigDataTrack
 *
 * Takes in 2 arguments 'data' and 'trackName' and changes the selected track full time status to true and doubles the amount of current students attending.
 *
 * @param {Object}
 * @param {String}
 * @return {Object }
 */

var bigDataTrack = function(data,trackName){

  //console.log(data.tracks.bigData);

  var temp = data.tracks[trackName][0].fullTime;
  temp.offered = true;
  //console.log(temp);
  //console.log(temp.currentStudents);
  temp.currentStudents = 10;
  //console.log(trackName)
  //console.log(temp);
  obj = {};
  obj[trackName] = temp;
  //console.log(obj);
  return obj;
}

/* #incrementAge
 *
 * Takes in 2 arguments 'value' and 'key' and returns key-value pairs in an object.
 *
 * @param {Object}
 * @param {String}
 * @return {Object}
 */

var incrementAge = function(value,key){
  //console.log(value);
  //console.log(key);
  var obj = {};

  for(var i = 0; i < value.length; i++){
    //console.log(key[i]);
    //console.log(value[i]);
    obj[key[i]]  = ( value[i] + 1) + " years old";
  }
  //console.log(obj);
  return obj;

}

/* #movieRatings
 *
 * Takes in 2 arguments 'key' and 'value' and returns key-value pairs in an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */

var movieRatings = function movieRatings (arr,value){
    var result = {};
  
    for (var i=0; i<arr.length; i++){
      for (var j=0; j<arr[i].length; j++){
          result[arr[i][j]] = value[j];
          }
        }
    return result;
}


/* #sumOfAllStudents
 *
 * Takes in an object and returns the sum of all currently enrolled students.
 *
 * @param {Object}
 * @return {Number}
 */
 
var sumOfAllStudents = function (obj){
  // find amount of students in x track fullTime
  //console.log(obj.javascript[0].fullTime.currentStudents);
  //find amount of students in x track partTime

  //add them together in sum

  //console.log(obj.javascript[1].partTime)
  //console.log(obj.cyberSecurity)
  //console.log(obj.bigData)
  //console.log(obj.enterprise)

  var count = 0;


  for(var i in obj){
    //console.log(i);
    //console.log(obj[i][0]);
    //console.log(obj[i][0].fullTime.currentStudents);


    var full = obj[i][0].fullTime.currentStudents;
    //console.log(full);
    count = count + full;

    var part = obj[i][1].partTime.currentStudents;
    //console.log(part);
    count = count + part;

  }
//console.log(count);
return count;
}

/* #mapLanguageToCreator
 *
 * Takes in 3 arguments 'data', 'createdBy', and 'year' and returns key-value pairs { name: language }.
 *
 * @param {Object} data
 * @param {Array} names
 * @param {Number} year
 * @return {Object}
 */

var mapLanguageToCreator = function (data,names,year){
  //console.log(data);
  var obj = {};
  for(var i in data){
    //console.log(i)
    if(data[i].yearCreated === year){
      obj[data[i].createdBy] = i;
    }
  }
  //console.log(obj);
  return obj;
}

/* #mapOccurrences
 *
 * Takes in an object and returns key-value pairs that count how many languages were created in given years { 2017: 1 }.
 *
 * @param {Object} data
 * @return {Object}
 */

var mapOccurrences = function (data){
  var obj = {};
  for(var i in data){
    let year = data[i].yearCreated;
    if(obj.hasOwnProperty(year)){
      obj[year]++;
    }else{
      obj[year] = 1;
    }
  }
  return obj;
}

/* #countLanguages
 *
 * Takes in an object and returns the number of languages in the dataset.
 *
 * @param {Object}
 * @return {Number}
 */

var countLanguages = function (obj){
  //console.log(obj);
  var size = Object.keys(obj).length;
  return size;
}

/* #phoneNumber
 *
 * Takes in a string and returns only the numbers in an array.
 *
 * @param {String} phone number
 * @return {Array}
 */

var phoneNumber = function (str){
  var arr = str.split('');


  var index1 = arr.indexOf('(');
  arr.splice(index1,1);
  var index2 = arr.indexOf(')');
  arr.splice(index2,1);
  var index3 = arr.indexOf(" ");
  arr.splice(index3,1);
  var index4 = arr.indexOf("-");
  arr.splice(index4,1);


  var newArr = [];
  for(var i = 0; i < arr.length; i++){
   var num = parseInt(arr[i]);
   newArr.push(num);
  }
  return newArr;
}

/* #phoneNumber
 *
 * Takes in an object and returns the names of the tracks offered reversed.
 *
 * @param {Object}
 * @return {Array}
 */

var reverseStrings = function (obj){

  //console.log(obj.devLeague.tracks);
  let temp = obj.devLeague.tracks;
  let arr = [];
  for(var i in temp){
    var splitString = i.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    arr.push(joinArray);
  }
  return arr;
}

/* #getAgeById
 *
 * Takes in an object and returns an array with the user's username and age.
 *
 * @param {Object}
 * @return {Array}
 */

var getAgeById = function (obj){
  
  let temp = obj.data.id;
  let userAges = [];

  for(var i in temp){
    let arr = [];
   // console.log(temp[i].username);
    arr.push(temp[i].username);
    //console.log(temp[i].age);
    arr.push(temp[i].age);
    userAges.push(arr);
  }
  //console.log(userAges);
  //return userAges;

  var user3Age = [];
  user3Age.push(temp[3].username);
  user3Age.push(temp[3].age);
  //console.log(user3Age);
  return user3Age;



}

/* #allTheStates
 *
 * Takes in an object and returns an array with all of the state names of where user's have lived.
 *
 * @param {Object}
 * @return {Array}
 */

var allTheStates = function (obj){
  let arr = [];
  
  for(var i = 0; i < obj.length; i++){
    //console.log(obj[i].citiesLived[0].hometown.state);
    let temp = obj[i].citiesLived[0].hometown.state;

    //console.log(obj[i].citiesLived[1].currentLocation.state);
    let temp2 = obj[i].citiesLived[1].currentLocation.state;
    //console.log(temp);
    //console.log(temp2);
    for(var j in temp){
      //console.log(j)
      arr.push(j);
    }
    for(var k in temp2){
      //console.log(k)
      arr.push(k);
    }
  }
  //console.log(arr);
  return arr;
}

/* #allTheMovies
 *
 * Takes in an object and returns an array of strings with all the names of each user's favorite movies.
 *
 * @param {Object}
 * @return {Array}
 */

var allTheMovies = function (obj){
  //console.log(obj);
  let arr = [];

  for(var i = 0; i < obj.length; i++){
    let temp1 = obj[i].favoriteMovies;
    //console.log(temp1);

    for(var j = 0; j < temp1.length; j++){
      //console.log(temp1[j]);
      arr.push(temp1[j]);
    }
  }
  //console.log(arr);
  return arr;
}

/* #addCoffeeFlavor
 *
 * Takes in an object and returns a new object with the name of the coffee as the key and the value as an array of flavors plus a new flavor added to each array.
 *
 * @param {Object}
 * @param {String} flavor
 * @return {Object}
 */

var addCoffeeFlavor = function (obj,str){

  //console.log(obj.kona.flavors);
  let update = {};

  for(var i in obj){
    //console.log(i);
    //console.log(obj[i].flavors);
    update[i] = obj[i].flavors
  }
  //console.log(update);
  for(var j in update){
    //console.log(update[j]);
    update[j].push(str);
  }
  //console.log(update);
  return update;
}

/* #avgCoffeePrice
 *
 * Takes in 2 arguments 'data' and 'number'. Returns the average price of coffee based on total/number.
 *
 * @param {Object}
 * @param {Number} number of coffee types
 * @return {Number}
 * 
 */

var avgCoffeePrice = function(obj,num){
  console.log(obj);
  console.log(num);
}

/* #updateBakedGoodsPrice
 *
 * Takes in 2 arguments 'data' and 'discountedPrice' and returns the data object with the new discountedPrice of all bakedGoods.
 *
 * @param {Object}
 * @param {Number} discountedPrice
 * @return {Number}
 * 
 */

var updateBakedGoodsPrice;

/* #costOfCoffeeOnOrder
 *
 * Takes in an object and returns the total cost of all coffee's on order.
 *
 * @param {Object}
 * @return {Number}
 * 
 */

var costOfCoffeeOnOrder;

/* #costOfCoffeeOnOrder
 *
 * Takes in an array and returns a new array with all the flavors of coffee displaying only once in the array.
 *
 * @param {Array}
 * @return {Array}
 * 
 */

var uniqueCoffeeFlavors;

/* #cheapestSandwich
 *
 * Takes in an object and returns a string with the price of the cheapest sandwich and the name of the sandwich. (eg. "$1 sandwichName")
 *
 * @param {Object}
 * @return {String}
 * 
 */

var cheapestSandwich;

/* #allcafeItems
 *
 * Takes in an object and returns key value pairs where the key is the category product (coffee, baked goods, etc) and the value is an array of strings. (eg. { category: ['']})
 *
 * @param {Object}
 * @return {String}
 * 
 */

var allcafeItems;

/* #halfOffSandwiches
 *
 * Takes in an 'array' and a 'number'. If the price of the item is greater than the 'number', return an object with the sandwich name as the key and the value as half the price of it's current price.
 *
 * @param {Array}
 * @return {Object}
 * 
 */

var halfOffSandwiches;

/* #getNoMeatSandwiches
 *
 * Takes in an array and returns an object of only sandwiches with no meat as an ingredient. The key is the name of the sandwich and the value is the price of the sandwich ( eg: { sandwich1: $5 } ).
 *
 * @param {Array}
 * @return {Object}
 * 
 */

var getNoMeatSandwiches;

/* #updateCoffeeInventory
 *
 * Takes in an object, array, and number. Should return a new object with the property 'inStock' and 'ordered', set the value to an object with key as the coffee name and the value as the new amount.
 *
 * @param {Array}
 * @param {Array} amtToRemoveFromStock,
 * @param {Number} maxStock
 * @return {Object}
 * 
 */

var updateCoffeeInventory;

/* #findCupOfCoffee
 *
 * Takes in an object and number. Returns a new object with the name of the coffee as the key and the value set to true if the cup of coffee cost less than or equal to number param.
 *
 * @param {Object} data
 * @param {Number} budget
 * @return {Object}
 * 
 */

var findCoffee;

/* #totalPopulation
 *
 * Takes in an object and returns the total sum of the all the places every user has lived.
 *
 * @param {Object} data
 * @return {Number} sum of population
 * 
 */

var totalPopulation;

/* #placesLived
 *
 * Takes in an object and returns a new object with 2 properties 'hometown' and 'currentLocation' and set the value to an object with the user's username as the key and the state as the value.
 * 
 * example:
 * { home: {person1: 'homeState'},
 * current: {person1: 'currState'}}
 *
 * @param {Object} data
 * @return {Object} user object containing their username, state of hometown and state of currentLocation
 * 
 */

var placesLived;

/* #addSchool
 *
 * Takes in 3 arguments 'data', 'newSchool', and 'tracks'. Returns the 'data' object with the 'newSchool' object added. Set 'tracks' value to an array of tracks offered.
 *
 * @param {Object} data
 * @return {Number} sum of population
 * 
 */

var addSchool;

/* #updateGitHubRank
 *
 * Takes in an object and a number. Returns a new object with a gitHubRank property set to an object with the rank of each language in the data object.
 *
 * @param {Object} dataObj
 * @return {Object}
 * 
 */

var updateGitHubRank;

/* #top3rankedLang
 *
 * Takes in an object. Returns a new object with the property 'topRankingLanguages' and the value set to an object of the name of the language as the key and the number rank as the value.
 *
 * @param {Object} dataObj
 * @return {Object}
 * 
 */

var top3rankedLang;

/* #removeIngredient
 *
 * Takes in an object and string. Returns a new object with the property 'availableBread' and the value set to an array of all available breads listed only once.
 *
 * @param {Object} dataObj
 * @param {String} removeIng
 * @return {Object}
 * 
 */

var removeIngredient;

/* #removeIngredient
 *
 * Takes in an object and returns a new object with the key as the name of the item and the value set to the price.
 *
 * @param {Object} dataObj
 * @return {Object}
 * 
 */

var getPrices;

/* #addName
 *
 * Takes in an object and array. Returns the object with each user's full name where the first element in the array belonging to the first user, second element belonging to the second user, etc...
 *
 * @param {Object} newObj
 * @param {Array} nameArray
 * @return {Object}
 * 
 */

var addName;

module.exports = {
  getAllUsernames: getAllUsernames,
  hometownCity: hometownCity,
  usersCurrentState: usersCurrentState,
  findAdmin: findAdmin,
  addNewMovie: addNewMovie,
  favoriteBooks: favoriteBooks,
  countTracks: countTracks,
  newTrack: newTrack,
  fullTimeStatus: fullTimeStatus,
  bigDataTrack: bigDataTrack,
  incrementAge: incrementAge,
  movieRatings: movieRatings,
  sumOfAllStudents: sumOfAllStudents,
  mapLanguageToCreator: mapLanguageToCreator,
  mapOccurrences: mapOccurrences,
  countLanguages: countLanguages,
  phoneNumber: phoneNumber,
  reverseStrings: reverseStrings,
  getAgeById: getAgeById,
  allTheStates: allTheStates,
  allTheMovies: allTheMovies,
  addCoffeeFlavor: addCoffeeFlavor,
  avgCoffeePrice: avgCoffeePrice,
  updateBakedGoodsPrice: null,
  costOfCoffeeOnOrder: null,
  uniqueCoffeeFlavors: null,
  cheapestSandwich: null,
  allcafeItems: null,
  halfOffSandwiches: null,
  getNoMeatSandwiches: null,
  updateCoffeeInventory: null,
  findCoffee: null,
  totalPopulation: null,
  placesLived: null,
  addSchool: null,
  updateGitHubRank: null,
  top3rankedLang: null,
  removeIngredient: null,
  getPrices: null,
  addName: null
};