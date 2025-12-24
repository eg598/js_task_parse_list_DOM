'use strict';

const ul = document.querySelector('ul');
const list = sortList(Array.from(document.querySelectorAll('li')));

function sortList(arr) {
  return arr.sort((item1, item2) => {
    const a = parseSalary(item1.dataset.salary);
    const b = parseSalary(item2.dataset.salary);

    return b - a;
  });
}

for (const item of list) {
  ul.insertAdjacentElement('beforeend', item);
}

function parseSalary(number) {
  let result = '';
  const arr = Array.from(number);
  const map = '1234567890';

  for (let i = 0; i < arr.length; i++) {
    if (map.includes(arr[i])) {
      result += arr[i];
    }
  }

  return Number.parseInt(result);
}
