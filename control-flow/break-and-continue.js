let i = 0;
while (i <= 10) {
  if (i === 5) break;
  console.log(i);
  i++;
}


let y = 0;
while (y <= 10) {
  if (y % 2 === 0) {
    y++;
    continue;
  }
  console.log(y);
  y++;
}
