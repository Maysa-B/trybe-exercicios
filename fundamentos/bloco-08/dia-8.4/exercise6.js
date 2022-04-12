const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const result = students.map((element, id) => {
    const media = grades[id].reduce((acc, current, id2, array) => {
      if (id2 === array.length-1) return (acc += current)/(id2 + 1);
      return acc += current;
    }, 0);

    return {name: element, average: media};
  })

  return result;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

console.log(studentAverage());