Array.from(document.querySelectorAll("[data-bg]")).forEach((function(i){var t=i.clientWidth,a=i.clientHeight,c=window.devicePixelRatio||1,o="w_".concat(100*Math.round(t*c/100),",h_").concat(100*Math.round(a*c/100),",c_fill,g_auto,f_auto"),e="".concat("https://res.cloudinary.com/filiio/image/fetch","/").concat(o,"/").concat(i.dataset.bg);i.style.backgroundImage="url('".concat(e,"')")})),window.lazySizesConfig=window.lazySizesConfig||{},window.lazySizesConfig.rias=window.lazySizesConfig.rias||{prefix:"https://res.cloudinary.com/".concat(cloudinary,"/image/fetch/c_fill,q_auto,f_auto,w_{width}/"),absUrl:!0},window.addEventListener("resize",(function(){window.matchMedia("(min-width: 960px)").matches&&(document.getElementById("click").checked=!1)}),!0);