
function calculateQuad(a, b, c) {
  
  // discriminant
  const disc = Math.pow(b, 2) - (4 * a * c)
  
  // quadratic formula
  // 2 responses
  const res1 = ((b * -1) + Math.sqrt(disc)) / (2 * a);
  const res2 = ((b * -1) - Math.sqrt(disc)) / (2 * a);
  
  return [res1, res2];
  
}

