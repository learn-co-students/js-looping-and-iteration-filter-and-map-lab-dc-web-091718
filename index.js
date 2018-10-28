function driversWithRevenueOver (drivers, revenue) {
	return drivers.filter(function (driver) {
		return driver.revenue > revenue
	})
}

function driverNamesWithRevenueOver(drivers, revenue) {
	driversOver = driversWithRevenueOver(drivers, revenue);
	return driversOver.map(function (driver) {
		return driver.name
	})
}

function exactMatch(drivers, specs) {
	return drivers.filter(function (driver) {
		for (const spec in specs) {
			if (specs[spec] !== driver[spec]) {
				return false;
			}
		}
		return true;
	})
}

function exactMatchToList (drivers, specs) {
	matches = exactMatch(drivers, specs)
	return matches.map(function (driver) {
		return driver.name
	})
}