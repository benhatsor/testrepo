
/*
 * draggable
 *
 * to use, create a new instance: new Draggable(el, ?options) [options = { requiredMovement }]
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
    
    this.addElListener('touchstart', this.touchStart);
    this.addElListener('touchmove', this.touchMove);
    this.addElListener('touchend', this.touchEnd);
    
  }
  
  
  touchStart(e) {

    this.initialY = this.getCursorPos(e);

    this.swiped = false;

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
      this.swiped = (Math.abs(this.offsetY) >= requiredMovement);
    
      if (this.swiped) {
        
        this.callEventHook('swipe', {
          offset: this.offsetY,
          direction: this.direction
        });
        
      }
    
    }

    
    this.callEventHook('drag', {
      offset: this.offsetY,
      direction: this.direction,
      swiped: this.swiped
    });

  }

  touchEnd(e) {
    
    // reset values
    this.offsetY = 0;
    this.swiped = false;

  }
  
  
  getCursorPos(e) {
    
    if (e.type.startsWith('touch')) {
      
      return e.touches[0].clientY;
    
    } else {
      
      return e.clientY;
    
    }
    
  }
  
  callEventHook(type, data = null) {
    
    const hooks = this.options.eventHooks;
    
    if (type in hooks) hooks[type](data);
    
  }
  
  addElListener(type, callback) {
    
    this.el.addEventListener(type, callback.bind(this));
    
  }
  
}

