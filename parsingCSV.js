
// data = CSV file contents (text)
// data prep: in Excel, remove all thousands seperators from numbers.

data = data.split('\n');

data.forEach((item, index) => {
  data[index] = item.trim().replaceAll(' ', '').replaceAll('\t', '').replaceAll('"', '').split(',');
});



let out = {};

let currGroup;

data.forEach((row, rowIndex) => {

  if (rowIndex === 0) return;

  // if years column is empty, return
  if (row[1] === '') return;
  
  row.forEach((column, colIndex) => {

    if (colIndex === (row.length - 1)) return;

    // age group
    if (colIndex === 0 && column !== '') {

      currGroup = column.toLowerCase();

      if (currGroup === 'children') currGroup = 'child';
      if (currGroup === 'males') currGroup = 'male';
      if (currGroup === 'females') currGroup = 'female';
      
      out[currGroup] = [];
      
    }

    // years
    if (colIndex === 1) {

      column = column.replaceAll('+', '');
      
      let [min, max] = column.split('-');

      if (min) min = Number(min);
      if (max) max = Number(max);
      
      out[currGroup].push({
        age: {
          min: min,
          max: max
        },
        intake: {}
      });

    }

    
    const group = out[currGroup];
    const ageGroup = group[group.length - 1];
    
    // sed
    if (colIndex === 2) {

      ageGroup.intake.sed = Number(column);

    }

    // active
    if (colIndex === 3) {

      ageGroup.intake.active = Number(column);

    }
    
  });
  
});

console.log(out);

