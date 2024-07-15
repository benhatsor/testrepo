
// data = CSV file contents (text)

data = data.split('\n');

data.forEach((item, index) => {
  data[index] = item.trim().replaceAll(' ', '').replaceAll('\t', '').replaceAll('"', '');
});

