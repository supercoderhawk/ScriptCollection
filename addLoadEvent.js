//将函数添加到onload函数
function addLoadEvent(func){
  var oldOnload = window.onload;
  if(typeof oldOnload != 'function'){
    window.onload = func();
  } else {
    window.onload = function(){
      oldOnload();
      func();
    }
  }
}
