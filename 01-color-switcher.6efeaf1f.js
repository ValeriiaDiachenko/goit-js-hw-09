const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.body};let e=null;function o(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}function a(){t.start.disabled=!t.start.disabled,t.stop.disabled=!t.stop.disabled}t.start.addEventListener("click",(function(){e=setInterval(o,1e3),a()})),t.stop.addEventListener("click",(function(){clearInterval(e),a()}));
//# sourceMappingURL=01-color-switcher.6efeaf1f.js.map
