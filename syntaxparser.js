cd.on('caretmove', () => {
  
  var cursor = cd.dropper.cursor();
  
  if (cursor.in('punctuation')) {
    
    var prevElem = cursor.startContainer.parentElement.previousSibling;
    var text = '';
    
    if (prevElem.nodeValue) {
      text = prevElem.nodeValue;
    } else {
      text = prevElem.textContent;
    }
    
    
    
  }
  
})


// javascript

var syntax = [];
document.querySelectorAll('code').forEach(code => {
  
  var contents = code.innerText.includes('(') ? code.innerText.split('(')[0] : code.innerText;
  
  if (contents && !contents.includes('<')) syntax.push(contents);
  
});

var jsSyntax = ["concat","indexOf","join","lastIndexOf","pop","push","reverse","shift","slice","sort","splice","toString","unshift","valueOf","++","--","==","===","!=","!==",">=","&&","||",">>",">>>","function","alert","confirm","console.log","document.write","prompt","decodeURI","encodeURI","decodeURIComponent","encodeURI","encodeURIComponent","eval","isFinite","isNaN","Number","parseFloat","parseInt","for","while","do while","break","continue","if else","switch","\\'","\\\"","\\\\","\\b","\\f","\\n","\\r","\\t","\\v","charAt","charCodeAt","concat","fromCharCode","indexOf","lastIndexOf","match","replace","search","slice","split","substr","substring","toLowerCase","toUpperCase","valueOf","MAX_VALUE","MIN_VALUE","NaN","NEGATIVE_INFINITY","POSITIVE_INFINITY","toExponential","toFixed","toPrecision","toString","valueOf","LN2","LN10","LOG2E","LOG10E","SQRT1_2","SQRT2","abs","acos","asin","atan","atan2","ceil","cos","exp","floor","log","max","min","pow","random","round","sin","sqrt","tan","Date","getDate","getDay","getFullYear","getHours","getMilliseconds","getMinutes","getMonth","getSeconds","getTime","getUTCDate","parse","setDate","setFullYear","setHours","setMilliseconds","setMinutes","setMonth","setSeconds","setTime","setUTCDate","attributes","baseURI","childNodes","firstChild","lastChild","nextSibling","nodeName","nodeType","nodeValue","ownerDocument","parentNode","previousSibling","textContent","appendChild","cloneNode","compareDocumentPosition","getFeature","hasAttributes","hasChildNodes","insertBefore","isDefaultNamespace","isEqualNode","isSameNode","isSupported","lookupNamespaceURI","lookupPrefix","normalize","removeChild","replaceChild","getAttribute","getAttributeNS","getAttributeNode","getAttributeNodeNS","getElementsByTagName","getElementsByTagNameNS","hasAttribute","hasAttributeNS","removeAttribute","removeAttributeNS","removeAttributeNode","setAttribute","setAttributeNS","setAttributeNode","setAttributeNodeNS","closed","defaultStatus","document","frames","history","innerHeight","innerWidth","length","location","name","navigator","opener","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","screen","screenLeft","screenTop","screenX","screenLeft","screenY","screenTop","self","status","top","alert","blur","clearInterval","setInterval","clearTimeout","setTimeout","close","confirm","focus","moveBy","moveTo","open","print","prompt","resizeBy","resizeTo","scrollBy","scrollTo","setInterval","setTimeout","stop","availHeight","availWidth","colorDepth","height","pixelDepth","width","onclick","oncontextmenu","ondblclick","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseover","onmouseout","onmouseup","onkeydown","onkeypress","onkeyup","onabort","onbeforeunload","onerror","onhashchange","onload","onpagehide","onpageshow","onresize","onscroll","onunload","onblur","onchange","onfocus","onfocusin","onfocusout","oninput","oninvalid","onreset","onsearch","onselect","onsubmit","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","oncopy","oncut","onpaste","onabort","oncanplay","oncanplaythrough","ondurationchange","onended","onerror","onloadeddata","onloadedmetadata","onloadstart","onpause","onplay","onplaying","onprogress","onratechange","onseeked","onseeking","onstalled","onsuspend","ontimeupdate","onvolumechange","onwaiting","animationend","animationiteration","animationstart","transitionend","onmessage","onoffline","ononline","onpopstate","onshow","onstorage","ontoggle","onwheel","ontouchcancel","ontouchend","ontouchmove","ontouchstart","try","catch","throw","finally","name","message","EvalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"];

var regexArr = [];
jsSyntax.forEach(syntax => {
  regexArr.push(new RegExp('/' + syntax.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '/'));
});

for (let i = 0, len = regexArr.length; i < len; i++) {
  if (regexArr[i] === '\\' || regexArr[i] === '"') {
    regexArr = regexArr.substring(0, i) + '\\' + regexArr.substring(i++);
    len += 2;
  }
}

var stringRegexArr = console.log( '"' + regexArr + '"');

var stringRegexArr = `/\/concat\//,/\/indexOf\//,/\/join\//,/\/lastIndexOf\//,/\/pop\//,/\/push\//,/\/reverse\//,/\/shift\//,/\/slice\//,/\/sort\//,/\/splice\//,/\/toString\//,/\/unshift\//,/\/valueOf\//,/\/\+\+\//,/\/\-\-\//,/\/==\//,/\/===\//,/\/!=\//,/\/!==\//,/\/>=\//,/\/&&\//,/\/\|\|\//,/\/>>\//,/\/>>>\//,/\/function\//,/\/alert\//,/\/confirm\//,/\/console\.log\//,/\/document\.write\//,/\/prompt\//,/\/decodeURI\//,/\/encodeURI\//,/\/decodeURIComponent\//,/\/encodeURI\//,/\/encodeURIComponent\//,/\/eval\//,/\/isFinite\//,/\/isNaN\//,/\/Number\//,/\/parseFloat\//,/\/parseInt\//,/\/for\//,/\/while\//,/\/do while\//,/\/break\//,/\/continue\//,/\/if else\//,/\/switch\//,/\/\\'\//,/\/\\"\//,/\/\\\\\//,/\/\\b\//,/\/\\f\//,/\/\\n\//,/\/\\r\//,/\/\\t\//,/\/\\v\//,/\/charAt\//,/\/charCodeAt\//,/\/concat\//,/\/fromCharCode\//,/\/indexOf\//,/\/lastIndexOf\//,/\/match\//,/\/replace\//,/\/search\//,/\/slice\//,/\/split\//,/\/substr\//,/\/substring\//,/\/toLowerCase\//,/\/toUpperCase\//,/\/valueOf\//,/\/MAX_VALUE\//,/\/MIN_VALUE\//,/\/NaN\//,/\/NEGATIVE_INFINITY\//,/\/POSITIVE_INFINITY\//,/\/toExponential\//,/\/toFixed\//,/\/toPrecision\//,/\/toString\//,/\/valueOf\//,/\/LN2\//,/\/LN10\//,/\/LOG2E\//,/\/LOG10E\//,/\/SQRT1_2\//,/\/SQRT2\//,/\/abs\//,/\/acos\//,/\/asin\//,/\/atan\//,/\/atan2\//,/\/ceil\//,/\/cos\//,/\/exp\//,/\/floor\//,/\/log\//,/\/max\//,/\/min\//,/\/pow\//,/\/random\//,/\/round\//,/\/sin\//,/\/sqrt\//,/\/tan\//,/\/Date\//,/\/getDate\//,/\/getDay\//,/\/getFullYear\//,/\/getHours\//,/\/getMilliseconds\//,/\/getMinutes\//,/\/getMonth\//,/\/getSeconds\//,/\/getTime\//,/\/getUTCDate\//,/\/parse\//,/\/setDate\//,/\/setFullYear\//,/\/setHours\//,/\/setMilliseconds\//,/\/setMinutes\//,/\/setMonth\//,/\/setSeconds\//,/\/setTime\//,/\/setUTCDate\//,/\/attributes\//,/\/baseURI\//,/\/childNodes\//,/\/firstChild\//,/\/lastChild\//,/\/nextSibling\//,/\/nodeName\//,/\/nodeType\//,/\/nodeValue\//,/\/ownerDocument\//,/\/parentNode\//,/\/previousSibling\//,/\/textContent\//,/\/appendChild\//,/\/cloneNode\//,/\/compareDocumentPosition\//,/\/getFeature\//,/\/hasAttributes\//,/\/hasChildNodes\//,/\/insertBefore\//,/\/isDefaultNamespace\//,/\/isEqualNode\//,/\/isSameNode\//,/\/isSupported\//,/\/lookupNamespaceURI\//,/\/lookupPrefix\//,/\/normalize\//,/\/removeChild\//,/\/replaceChild\//,/\/getAttribute\//,/\/getAttributeNS\//,/\/getAttributeNode\//,/\/getAttributeNodeNS\//,/\/getElementsByTagName\//,/\/getElementsByTagNameNS\//,/\/hasAttribute\//,/\/hasAttributeNS\//,/\/removeAttribute\//,/\/removeAttributeNS\//,/\/removeAttributeNode\//,/\/setAttribute\//,/\/setAttributeNS\//,/\/setAttributeNode\//,/\/setAttributeNodeNS\//,/\/closed\//,/\/defaultStatus\//,/\/document\//,/\/frames\//,/\/history\//,/\/innerHeight\//,/\/innerWidth\//,/\/length\//,/\/location\//,/\/name\//,/\/navigator\//,/\/opener\//,/\/outerHeight\//,/\/outerWidth\//,/\/pageXOffset\//,/\/pageYOffset\//,/\/parent\//,/\/screen\//,/\/screenLeft\//,/\/screenTop\//,/\/screenX\//,/\/screenLeft\//,/\/screenY\//,/\/screenTop\//,/\/self\//,/\/status\//,/\/top\//,/\/alert\//,/\/blur\//,/\/clearInterval\//,/\/setInterval\//,/\/clearTimeout\//,/\/setTimeout\//,/\/close\//,/\/confirm\//,/\/focus\//,/\/moveBy\//,/\/moveTo\//,/\/open\//,/\/print\//,/\/prompt\//,/\/resizeBy\//,/\/resizeTo\//,/\/scrollBy\//,/\/scrollTo\//,/\/setInterval\//,/\/setTimeout\//,/\/stop\//,/\/availHeight\//,/\/availWidth\//,/\/colorDepth\//,/\/height\//,/\/pixelDepth\//,/\/width\//,/\/onclick\//,/\/oncontextmenu\//,/\/ondblclick\//,/\/onmousedown\//,/\/onmouseenter\//,/\/onmouseleave\//,/\/onmousemove\//,/\/onmouseover\//,/\/onmouseout\//,/\/onmouseup\//,/\/onkeydown\//,/\/onkeypress\//,/\/onkeyup\//,/\/onabort\//,/\/onbeforeunload\//,/\/onerror\//,/\/onhashchange\//,/\/onload\//,/\/onpagehide\//,/\/onpageshow\//,/\/onresize\//,/\/onscroll\//,/\/onunload\//,/\/onblur\//,/\/onchange\//,/\/onfocus\//,/\/onfocusin\//,/\/onfocusout\//,/\/oninput\//,/\/oninvalid\//,/\/onreset\//,/\/onsearch\//,/\/onselect\//,/\/onsubmit\//,/\/ondrag\//,/\/ondragend\//,/\/ondragenter\//,/\/ondragleave\//,/\/ondragover\//,/\/ondragstart\//,/\/ondrop\//,/\/oncopy\//,/\/oncut\//,/\/onpaste\//,/\/onabort\//,/\/oncanplay\//,/\/oncanplaythrough\//,/\/ondurationchange\//,/\/onended\//,/\/onerror\//,/\/onloadeddata\//,/\/onloadedmetadata\//,/\/onloadstart\//,/\/onpause\//,/\/onplay\//,/\/onplaying\//,/\/onprogress\//,/\/onratechange\//,/\/onseeked\//,/\/onseeking\//,/\/onstalled\//,/\/onsuspend\//,/\/ontimeupdate\//,/\/onvolumechange\//,/\/onwaiting\//,/\/animationend\//,/\/animationiteration\//,/\/animationstart\//,/\/transitionend\//,/\/onmessage\//,/\/onoffline\//,/\/ononline\//,/\/onpopstate\//,/\/onshow\//,/\/onstorage\//,/\/ontoggle\//,/\/onwheel\//,/\/ontouchcancel\//,/\/ontouchend\//,/\/ontouchmove\//,/\/ontouchstart\//,/\/try\//,/\/catch\//,/\/throw\//,/\/finally\//,/\/name\//,/\/message\//,/\/EvalError\//,/\/RangeError\//,/\/ReferenceError\//,/\/SyntaxError\//,/\/TypeError\//,/\/URIError\//`

regexArr = stringRegexArr.split(',');
