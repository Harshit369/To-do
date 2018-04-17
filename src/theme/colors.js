const white = '#fff';
const black = '#000';

const neutral0 = '#8c8c8c';
const neutral = '#2d3142';

const green0 = '#caebe2';
const green = '#00db96';
const green2 = '#1a5d4b';

const red0 = '#ffa084';
const red = '#f33502';
const red2 = '#811d15';

const blue0 = '#6596ef';
const blue = '#2956b2';
const blue2 = '#190354';

export const normal = {
  green,
  red,
  textRegular: neutral,
  textLight: neutral0,
  white,
  black,
  dark: black,
  light: white,
  primary: green,
  warning: red,
  success: green,
  alert: red,
  appBackground: white,
  headerColor: black
}

export const dark = {
  ...normal,
  textRegular: white,
  primary: blue,
  success: blue,
  appBackground: black,
  headerColor: neutral
}

