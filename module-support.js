//Special api for loading big code files from git (bigger than 1MB)
const resp = await axios.get('https://api.github.com/repos/KostaMalsev/three.js/git/blobs/ae2e54134ca8c69c812aa41252fd9bf84e82400b');

//Replace the relative path with base64 encoded module code.
addScript(
  document.querySelector('.live-frame').contentDocument, 
  $0.innerHTML.replace('../build/three.module.js', 
  'data:text/javascript;base64,' + 
  encodeUnicode(encodeURIComponent(decodeUnicode(resp.content)))),
  '', 'module')
