addScript(
document.querySelector('.live-frame').contentDocument, 
$0.innerHTML.replace('../build/three.module.js', 
'data:text/javascript;base64,' + 
encodeUnicode(encodeURIComponent(decodeUnicode(resp.content)))),
'', 'module')
