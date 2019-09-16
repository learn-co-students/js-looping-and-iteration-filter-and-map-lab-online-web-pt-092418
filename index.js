function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, obj) {
  const objKey = Object.keys(obj)[0]
  return drivers.filter(function(driver){
    if (driver[objKey] == obj[objKey]) {
      return driver
    }
  });
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map((driver)=>{
    return driver.name
    })
}
