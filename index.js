// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let driverName;
  return drivers.map(function(driver) {
//debugger
    if (driver.revenue > revenue) {
      driverName = driver.name;
      return driverName;
    }
  });
}
