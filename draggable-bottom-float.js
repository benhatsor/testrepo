
// on click  

bottomWrapper.addEventListener('click', (e) => {
  
  const clickedOnOptions = (e.target === liveButtonOptions);
  
  const isExpanded = bottomWrapper.classList.contains('expanded');
  
  // if bottom float is expanded
  if (isExpanded) {
  
    // if did not click on options button
    if (!clickedOnOptions) {
  
      e.preventDefault();
      e.stopPropagation();
  
      // retract bottom float
      bottomWrapper.classList.remove('expanded');
      
      // if live view is open, close it
      if (liveViewToggle) toggleLiveView(selectedFile);
  
    }
  
  } else { // if bottom float not expanded
    
    // if clicked the bottom float's swipe hitbox
    // but not the bottom float itself
    if (e.target === bottomWrapper) {
              
      // get caret range from point
      
      // disable bottom float hitbox
      bottomWrapper.style.pointerEvents = 'none';
      
      const pointX = e.changedTouches[0].clientX,
            pointY = e.changedTouches[0].clientY;
      
      const range = document.caretRangeFromPoint(pointX, pointY);
      
      bottomWrapper.style.pointerEvents = '';
      
      // if range exists
      if (range) {
        
        e.preventDefault();
        
        // select range
        
        const sel = window.getSelection();
        
        sel.setBaseAndExtent(range.startContainer, range.startOffset, range.endContainer, range.endOffset);
        
      }
      
    }
    
  }
  
});



// on swipe

draggableInstance.on('swipe', (e) => {
  
  const isMediaViewer = bottomWrapper.classList.contains('file-open');
  
  // if live view is in media viewer mode, return
  if (isMediaViewer) return;
  
  
  const isExpanded = bottomWrapper.classList.contains('expanded');
  
  if (e.direction == 'up') {
  
    // if swiped up and bottom float isn't expanded
    if (!isExpanded) {
      
      // expand bottom float
      bottomWrapper.classList.add('expanded');
  
      // if live view is closed, open it
      if (!liveViewToggle) toggleLiveView(selectedFile);
  
    }
  
  } else if (direction == 'down') {
  
    // if swiped down and bottom float is expanded
    if (isExpanded) {
      
      // retract bottom float
      bottomWrapper.classList.remove('expanded');
      
      // if live view is open, close it
      if (liveViewToggle) toggleLiveView(selectedFile);
      
    }
  
  }
  
}
  
