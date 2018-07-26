module.exports  = function(name){
  return 'molo, ' + name;
};

//var msg = greet('Xola')

//console.log(msg)

var fromWhere = function(regNumber){
  if(regNumber.startsWith('CY')){
    return "Bellville"
  }
  if(regNumber.startsWith('CJ')){
    return "Paarl"
  }
  if(regNumber.startsWith('CA')){
    return "Cape Town"
  }
  else{
    return "Some other place!";
  }
};

var place = fromWhere('CY')

console.log(place);



module.exports = function(name){
    return 'Hello, ' + name;
}

