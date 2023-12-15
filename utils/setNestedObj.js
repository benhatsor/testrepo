
function setNestedObjVal(object, path, value) {
  
  let ref = object;
  
  path.forEach((loc, index) => {
  
    if (index !== path.length - 1) {
      
      if (!(loc in ref)) {
        
        ref[loc] = {};
        
      }
      
      ref = ref[loc];
  
    } else {
  
      ref[loc] = value;
  
    }
  
  });
  
}




// test

var testObj = [
  'fdss',
  {
    content: ['ab',
      {
        content: ['bdf']
      }
    ]
  }
];

const testPath = [1, 'content', 1, 'content', 0];

setNestedObjVal(testObj, testPath, 'hello world!');
