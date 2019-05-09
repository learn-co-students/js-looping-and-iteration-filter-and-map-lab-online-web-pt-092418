// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const drive = drivers.filter(function(driver) {return driver.revenue > revenue})
  return drive.map(function(d) {return d.name})
}

function exactMatch(drivers, object) {
  const v = Object.values(object)[0]
  const k = Object.keys(object)[0]
  return drivers.filter(function(driver) {return driver[k] === v})
}

function exactMatchToList(drivers, object){
  const v = Object.values(object)[0]
  const k = Object.keys(object)[0]
  const dr = drivers.filter(function(driver) {return driver[k] === v})
  return dr.map(function(d) {return d.name})
}
