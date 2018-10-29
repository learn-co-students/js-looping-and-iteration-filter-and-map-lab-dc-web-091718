
function driversWithRevenueOver(drivers, rev) {
  return drivers.filter(function (d) {
    return d.revenue > rev;
  });
}
function driverNamesWithRevenueOver(drivers, rev) {
  return drivers.filter(function (d) {
    return d.revenue > rev;
  }).map(function (d) {
    return d.name;
  });
}
function exactMatch(drivers, objt) {
  return drivers.filter(function (d) {
    for (const key in objt)
    return d[Object.keys(objt)[0]] === objt[Object.keys(objt)[0]] ;
  });
}
function exactMatchToList(drivers, objt) {
  return exactMatch(drivers, objt).map(function (d) {
    return d.name;
  });
}
