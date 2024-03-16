import countryEmoji from 'country-emoji';

export function getFlagEmoji(countryName) {
  if (countryName == 'Remote') {
    return '🏠';
  }
  if (countryName == 'Worldwide') {
    return '🌍';
  }
  const flag = countryEmoji.flag(countryName);
  if (flag) {
    return flag;
  } else {
    return '';
  }
}

const sdgs = {
  1: {name: 'No Poverty', hex: '#E5243B'},
  2: {name: 'Zero Hunger', hex: '#DDA63A'},
  3: {name: 'Good Health and Well-Being', hex: '#4C9F38'},
  4: {name: 'Quality Education', hex: '#C5192D'},
  5: {name: 'Gender Equality', hex: '#FF3A21'},
  6: {name: 'Clean Water and Sanitation', hex: '#26BDE2'},
  7: {name: 'Affordable and Clean Energy', hex: '#FCC30B'},
  8: {name: 'Decent Work and Economic Growth', hex: '#A21942'},
  9: {name: 'Industry, Innovation and Infrastructure', hex: '#FD6925'},
  10: {name: 'Reduced Inequality', hex: '#DD1367'},
  11: {name: 'Sustainable Cities and Communities', hex: '#FD9D24'},
  12: {name: 'Responsible Consumption and Production', hex: '#BF8B2E'},
  13: {name: 'Climate Action', hex: '#3F7E44'},
  14: {name: 'Life Below Water', hex: '#0A97D9'},
  15: {name: 'Life on Land', hex: '#56C02B'},
  16: {name: 'Peace, Justice and Strong Institutions', hex: '#00689D'},
  17: {name: 'Partnerships for the Goals', hex: '#19486A'},
};

export function getSDGColor(goal) {
  return sdgs[goal].hex;
}

export function getSDGName(goal) {
  return sdgs[goal].name.toUpperCase();
}
