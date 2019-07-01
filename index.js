// Code your solution here:
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

function exactMatch(drivers, driverObj) {
  return drivers.filter(function(driver) {
    return driver.revenue === driverObj.revenue || driver.name === driverObj.name;
  });
}

function exactMatchToList(drivers, driverObj) {
  return exactMatch(drivers, driverObj).map(function(driver) {
    return driver.name
  });
}
