let i = 0;
while ( (i % 2) == 0 ) {
  i++;
  if ( i == 10 ) break;
  while ((i % 2) == 1) {
    i++;
  }
}
alert(i);