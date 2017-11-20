// Code your solution in this file
function findMatching(drivers,name){
  return drivers.filter(function(driver){
    return driver.toLowerCase() === name.toLowerCase()
  });
}

function fuzzyMatch(drivers, name){
  return drivers.filter(function(driver){
    return name[0] === driver[0];
  });
}

function matchName (drivers, name){
  return drivers.filter(function (driver){
    return driver.name === name;
  });
<<<<<<< HEAD
}
=======
}
>>>>>>> cbaa154540ccc80c0237439a5cb9aab95a79cd85
