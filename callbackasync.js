

async function pushAllChunksToAWS(chunks) {
  
  asyncForEach(chunks, (newChunk) => {
    
    await pushChunkToAWS(newChunk);
    
  });
  
}

function pushChunkToAWS(chunk) {
  
  return new Promise(resolve => {
  
    pushToAWS(chunk, resolve);
    
  });
  
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

