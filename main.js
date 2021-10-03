function typeNode(text) {

    let s = window.getSelection();
    let r0 = s.getRangeAt(0);

    //let rContainer = r0.endContainer;
    //let rOffset = r0.endOffset;

    const textEl = document.createTextNode(text);
    r0.insertNode(textEl);

    s.modify('move', 'forward', 'character');

    //s.setBaseAndExtent(rContainer, rOffset, rContainer, rOffset);

}




document.addEventListener('selectionchange', () => {
  
  const selPos = cd.getSelection();
  
  console.log(selPos.end - selPos.start);
  
});




//Check the the selection bug:
window.getSelection()
element.getBoundingClientRect()



function getSelectionHtml() {
    var html = "";
    let result = null;
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            //html = container.innerHTML;
            html = container;
            result  = container;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
//            html = document.selection.createRange().htmlText;
            html = document.selection.createRange();
        }
    }
    return result;
}



//Getting the number of rows selected:
var selection = window.getSelection();
var getRange = selection.getRangeAt(0); 
getRect = getRange.getBoundingClientRect();
let fontHeight = 22;
console.log('num of rows selected',getRect.Height/fondHeight);

//Or one liner:
document.addEventListener('selectionchange', () => { console.log( window.getSelection().getRangeAt(0).getBoundingClientRect().height/22 ) })


//Prevent selection jumping:
let lastNode=null
let lastNumberLines = 0
document.addEventListener('selectionchange', () => { 
let delta = (window.getSelection().getRangeAt(0).getBoundingClientRect().height/22 - lastNumberLines )
if( delta  > 2 )
{ 
  console.log( delta,lastNode.innerHTML  )   
  if(lastNode) window.getSelection().extend(lastNode , 0);
  
  
}else{
  lastNode = window.getSelection().focusNode;
  lastNumberLines  = window.getSelection().getRangeAt(0).getBoundingClientRect().height/22;
} 
})


document.addEventListener('mousedown', () => {
  console.log(getRangeFromPoint().getBoundingClientRect() );
}

function mouseDown() {
  console.log(caretRangeFromPoint().getBoundingClientRect() );
  
}




