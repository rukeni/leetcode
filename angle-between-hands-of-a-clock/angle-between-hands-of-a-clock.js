/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    const perMinuteAngle = 6;
    const perHourAngle = 30;
    const minutesAngle = perMinuteAngle * minutes;
    const hourAngle = ((hour % 12) + (minutes / 60)) * perHourAngle;
    return Math.min(Math.abs(hourAngle - minutesAngle), 360 - Math.abs(hourAngle - minutesAngle));
};