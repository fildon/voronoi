!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);document.addEventListener("DOMContentLoaded",function(){(new i.default).start()},!1)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=function(){function t(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.foci=[]}return t.prototype.start=function(){this.canvas.height=window.innerHeight,this.canvas.width=window.innerWidth,this.generateFoci(),this.drawFoci()},t.prototype.generateFoci=function(){for(var t=this.canvas.height*this.canvas.width,e=Math.floor(t/1e5),n=0;n<e;n++)this.generateFocus()},t.prototype.generateFocus=function(){this.foci.push(new i.default(this.canvas))},t.prototype.drawFoci=function(){this.clearCanvas(),this.foci.forEach(function(t){t.draw()})},t.prototype.clearCanvas=function(){},t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){this.x=window.innerWidth*Math.random(),this.y=window.innerHeight*Math.random(),this.canvas=t,this.ctx=this.canvas.getContext("2d")}return t.prototype.draw=function(){this.ctx.beginPath(),this.ctx.arc(this.x,this.y,5,0,2*Math.PI),this.ctx.fill()},t}();e.default=i}]);