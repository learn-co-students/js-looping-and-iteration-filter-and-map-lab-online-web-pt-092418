// Code your solution here:
function driversWithRevenueOver(drivers, num) {
  newarray = drivers.filter(driver => driver.revenue >= num)
  return newarray
};
function driverNamesWithRevenueOver(drivers, num) {
  return drivers.filter(driver => driver.revenue >= num).map(driver => driver.name)
}

function exactMatch(drivers, driverobj) {
  return drivers.filter(driver => {
    return (driverobj.revenue && driverobj.revenue === driver.revenue)
      || (driverobj.name && driverobj.name === driver.name);    

});
  
};

function exactMatchToList(drivers, driverobj) {
   newarray  = drivers.filter(driver => {
    return (driverobj.revenue && driverobj.revenue === driver.revenue)
      || (driverobj.name && driverobj.name === driver.name)
  
  })
        .map(driver => driver.name);
  return newarray
  }