!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),m=Object.prototype.toString,s=Math.max,v=Math.min,y=function(){return d.Date.now()};function g(e,t,n){var r,i,a,u,f,c,l=0,d=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError(o);function S(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function j(e){return l=e,f=setTimeout(O,t),d?S(e):u}function w(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-l>=a}function O(){var e=y();if(w(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-c);return m?v(n,a-(e-l)):n}(e))}function h(e){return f=void 0,g&&r?S(e):(r=i=void 0,u)}function x(){var e=y(),n=w(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(m)return f=setTimeout(O,t),S(c)}return void 0===f&&(f=setTimeout(O,t)),u}return t=b(t)||0,p(n)&&(d=!!n.leading,a=(m="maxWait"in n)?s(b(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},x.flush=function(){return void 0===f?u:h(y())},x}function p(t){var o=void 0===t?"undefined":e(n)(t);return!!t&&("object"==o||"function"==o)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(p(t)){var o="function"==typeof t.valueOf?t.valueOf():t;t=p(o)?o+"":o}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var c=a.test(t);return c||u.test(t)?f(t.slice(2),c?2:8):i.test(t)?NaN:+t}var S=e((function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})}))((function(){var e={email:document.querySelector('input[name="email"]').value,message:document.querySelector('textarea[name="message"]').value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);document.querySelector(".feedback-form").addEventListener("input",(function(){S()})),document.querySelector(".feedback-form").addEventListener("submit",(function(e){e.preventDefault(),console.log("Form submitted");var t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&console.log("Form data:",t),localStorage.removeItem("feedback-form-state"),document.querySelector('input[name="email"]').value="",document.querySelector('textarea[name="message"]').value=""})),window.addEventListener("load",(function(){var e;(e=JSON.parse(localStorage.getItem("feedback-form-state")))&&(document.querySelector('input[name="email"]').value=e.email,document.querySelector('textarea[name="message"]').value=e.message)}))}();
//# sourceMappingURL=03-feedback.278a3117.js.map