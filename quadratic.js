
function calculateQuad(a, b, c) {
  
  // discriminant
  const disc = Math.pow(b, 2) - (4 * a * c)
  
  if (disc < 0) return ['disc is negative']
  
  // quadratic formula
  // 2 responses
  const res1 = ((b * -1) + Math.sqrt(disc)) / (2 * a);
  const res2 = ((b * -1) - Math.sqrt(disc)) / (2 * a);
  
  return [res1, res2];
  
}

const res = calculateQuad(1, 3, 5);

document.body.innerText = res[0] + ',' + res[1];
