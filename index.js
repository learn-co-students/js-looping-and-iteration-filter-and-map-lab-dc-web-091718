// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
     return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const filteredDrivers =  drivers.filter(function(driver){
    return driver.revenue > revenue
  })
  return filteredDrivers.map(function(driver) {
    return driver.name
  })
}

function exactMatch(drivers, object) {
  return drivers.filter(function(driver){
    for (const key in object) {
      return object[key] === driver[key]
    }
  })
}

function exactMatchToList(drivers, object) {
  const matches = exactMatch(drivers, object)
  return matches.map(function(driver) {
    return driver.name
  })
}
