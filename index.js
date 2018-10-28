const driversWithRevenueOver = (obj, revenue) => {
  return obj.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

const driverNamesWithRevenueOver = (obj, revenue) => {
  return driversWithRevenueOver(obj, revenue).map( function (driver) {
    return driver.name;
  });
}

const exactMatch = (drivers, search) => {
  return drivers.filter(function (driver) {
    for (const key in search) {
      return driver[key] === search[key]
    }
  });
}

const exactMatchToList = (drivers, search) => {
  return exactMatch(drivers, search).map( function (driver) {
    return driver.name;
  });
}
