
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
  
  row.forEach((column, colIndex) => {

    if (colIndex === (row.length - 1)) return;

    // age group
    if (colIndex === 0 && column !== '') {

      currGroup = column;
      
    }

    if (colIndex === 1 && column === '') {

      return;

    }

    // years
    if (colIndex === 1) {

      column = column.replaceAll('+', '');
      
      const [min, max] = column.split('-');

      out[currGroup] = {
        age: {
          min: min,
          max: max
        }
      };

    }

    // sed
    if (colIndex === 2) {

      out[currGroup].sed = column;

    }

    // active
    if (colIndex === 3) {

      out[currGroup].active = column;

    }
    
  });
  
});

