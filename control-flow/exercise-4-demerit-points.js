// Speed limit = 70
// 5 -> 1 point
// Match.floor(1.3)
// 12 point -> suspended

// console.log(checkSpeed(80));

// function checkSpeed(speed) {
//   let points = Math.floor((speed - 70) / 5);
//   let isSuspended = points >= 12;
//   if (isSuspended) return 'Suspended';
//   if (points < 1 || speed <= 70) return 'OK';
//   return 'Points: ' + points;
// }

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    console.log('OK');
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log('License suspended');
  else console.log('Points', points);
}
