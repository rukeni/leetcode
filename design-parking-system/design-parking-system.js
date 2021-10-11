/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.parking = [big, medium, small];
};

/** 
 * @param {number} carType
 * @return {boolean}
 */

ParkingSystem.prototype.addCar = function(carType) {
	const slot = this.parking[carType - 1];

	slot && (this.parking[carType - 1] -= 1);
	return slot > 0;
};