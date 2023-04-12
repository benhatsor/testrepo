
/*
 * draggable
 *
 * to use, create a new instance: new Draggable(el, ?options) [options = { requiredMovement, eventHooks }]
 * and add listeners ('drag', 'swipe') with: instance.on(type, callback(event))
 */

class Draggable {
  
  constructor(el, currOptions = null) {
    
    this.el = el;
    
    this.options = {
      requiredMovement: 30, // to be counted as a swipe
      eventHooks: {
        drag: null,
        swipe: null
      }
    };
    
    // update options with selection
    
    if (currOptions) {
      
      Object.keys(this.options).forEach(option => {
        
        if (option in currOptions) {
          
          this.options[option] = currOptions[option];
          
        }
        
      });
      
    }
    
    
    this.addDragListeners();
    
  }
  
  
  on(event, callback) {
    
    this.options.eventHooks[event] = callback;
    
  }
  
  
  addDragListeners() {
      
    this.initialY = 0;
    this.offsetY = 0;
    
    this.direction = null;

    this.swiped = false;    
    this.click = false;
    
    this.el.addEventListener('touchstart', this.touchStart);
    this.el.addEventListener('touchmove', this.touchMove);
    this.el.addEventListener('touchend', this.touchEnd);
    
  }
  
  
  touchStart(e) {

    this.initialY = this.getCursorPos(e);

    this.swiped = false;
    this.click = true;

  }

  touchMove(e) {

    e.preventDefault();

    
    // get offset from initial pos
    
    const currentY = this.getCursorPos(e);
    
    this.offsetY = currentY - this.initialY;
    

    // get drag direction
    
    if (this.offsetY < 0) {
      
      this.direction = 'up';
      
    } else {
      
      this.direction = 'down';
      
    }
    
    
    // if not swiped yet
    if (!this.swiped) {
      
      const requiredMovement = this.options.requiredMovement;
      
      // check if the cursor was dragged
      // enough to be counted as a swipe
      this.swiped = (Math.abs(this.yOffset) > requiredMovement);
    
    }

    
    // dragging dosen't count as a click
    if (this.click) this.click = false;
    
    
    this.callEventHook('drag', {
      offset: this.offsetY,
      direction: this.direction,
      swiped: this.swiped
    });
    
    
    if (this.swiped) {
      
      this.callEventHook('swipe', {
        offset: this.offsetY,
        direction: this.direction
      });
      
    }

  }

  touchEnd(e) {
    
    // if clicked
    if (this.click) {
      
      // click target node
      e.target.click();
      this.click = false;
      
    }
    
    // reset values
    this.offsetY = 0;
    this.swiped = false;

  }
  
  
  getCursorPos(e) {
    
    if (e.type === 'touchstart') {
      
      return e.touches[0].clientY;
    
    } else {
      
      return e.clientY;
    
    }
    
  }
  
  callEventHook(type, data = null) {
    
    const hooks = this.options.eventHooks;
    
    if (type in hooks) hooks[type](data);
    
  }
  
}

