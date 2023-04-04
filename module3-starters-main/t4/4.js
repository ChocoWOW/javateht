'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
for (let i = 0; i < students.length; i++) {
  const element = document.querySelector("#target");
  const a = document.createTextNode(students[i].name);
  const option = document.createElement('option')

  option.appendChild(a);
  element.appendChild(option)

  const poo = document.getElementsByTagName('option')[i];

  option.value = students[i].id;
}