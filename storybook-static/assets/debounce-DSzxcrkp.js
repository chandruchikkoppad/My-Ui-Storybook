const c=(n,o)=>{let e=null;const t=function(...u){e&&clearTimeout(e),e=setTimeout(()=>{n.apply(this,u)},o)};return t.cancel=()=>{e&&clearTimeout(e),e=null},t};export{c as d};
