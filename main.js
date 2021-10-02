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
    if (typeof window.getSelection != "undefined") {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var container = document.createElement("div");
            for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                container.appendChild(sel.getRangeAt(i).cloneContents());
            }
            //html = container.innerHTML;
            html = container;
        }
    } else if (typeof document.selection != "undefined") {
        if (document.selection.type == "Text") {
//            html = document.selection.createRange().htmlText;
            html = document.selection.createRange();
        }
    }
    return html;
}
