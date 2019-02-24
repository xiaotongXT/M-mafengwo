/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/module/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/control/id-login.js":
/*!********************************************!*\
  !*** ./src/javascript/control/id-login.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const regtelhtml=__webpack_require__(/*! ../view/id-login.html */ \"./src/javascript/view/id-login.html\");\r\n\r\nconst rander=()=>{\r\n    let template=Handlebars.compile(regtelhtml);\r\n    let html=template();\r\n    $('.input-box').html(html);\r\n}\r\n\r\n\r\nmodule.exports={\r\n    rander\r\n}\n\n//# sourceURL=webpack:///./src/javascript/control/id-login.js?");

/***/ }),

/***/ "./src/javascript/control/reg-tel.js":
/*!*******************************************!*\
  !*** ./src/javascript/control/reg-tel.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const regtelhtml=__webpack_require__(/*! ../view/reg-tel.html */ \"./src/javascript/view/reg-tel.html\");\r\nconst fillinmessage=__webpack_require__(/*! ../../javascript/view/fillin-message.html */ \"./src/javascript/view/fillin-message.html\");\r\nconst fillinempty=__webpack_require__(/*! ../view/fillin-empty.html */ \"./src/javascript/view/fillin-empty.html\");\r\nvar username;\r\nvar userpsd;\r\nvar verifycode;\r\nconst rander=()=>{\r\n    let template=Handlebars.compile(regtelhtml);\r\n    let html=template();\r\n    $('.input-box').html(html);\r\n    init();\r\n}\r\n\r\nfunction init(){\r\n    let dom=document.querySelector('#register');\r\n    dom.addEventListener('click',clickHandler);\r\n   \r\n}\r\n\r\nfunction clickHandler(e){\r\n    let reg=/^[1]\\d{10,10}/;\r\n    let tel=document.querySelector('.reg-tel').value;\r\n    if(!(reg.test(tel)&&tel.length===11)){\r\n        $('.hint-meaasge').html('账号不合法，请重新输入。');\r\n        $('.hint-meaasge').show();\r\n        $('.reg-tel').get(0).value='';\r\n    }else\r\n    if(reg.test(tel)&&tel.length===11){\r\n        let html = Handlebars.compile(fillinmessage)\r\n        $('#main').html(html);\r\n        verification();\r\n    }\r\n    \r\n}\r\n\r\nfunction verification(){\r\n    let btn=document.querySelector('.accomplish');\r\n    username=document.querySelector('.username')\r\n    userpsd=document.querySelector('.userpsd')\r\n    verifycode=document.querySelector('.verifycode')\r\n    btn.addEventListener('click',btnClick);\r\n}\r\nfunction btnClick(e){\r\n    if(username.value.trim().length===0||userpsd.value.trim().lengt===0||verifycode.value.trim().length===0){\r\n        let html = Handlebars.compile(fillinempty)\r\n        $('#main').html(html);\r\n        $('.hint-meaasge').show();\r\n        init();\r\n    }\r\n     \r\n}\r\n\r\n\r\n\r\nmodule.exports={\r\n    rander\r\n}\n\n//# sourceURL=webpack:///./src/javascript/control/reg-tel.js?");

/***/ }),

/***/ "./src/javascript/control/tel-login.js":
/*!*********************************************!*\
  !*** ./src/javascript/control/tel-login.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const telLoginhtml=__webpack_require__(/*! ../view/tel-login.html */ \"./src/javascript/view/tel-login.html\");\r\n\r\n\r\nconst rander=()=>{\r\n    let template=Handlebars.compile(telLoginhtml);\r\n    var html=template();\r\n    $('.input-box').html(html);\r\n}\r\n\r\n\r\n\r\nmodule.exports={\r\n    rander\r\n}\r\n\n\n//# sourceURL=webpack:///./src/javascript/control/tel-login.js?");

/***/ }),

/***/ "./src/javascript/module/login.js":
/*!****************************************!*\
  !*** ./src/javascript/module/login.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const loginControl=__webpack_require__(/*! ../router/index */ \"./src/javascript/router/index.js\");\r\n\r\nnew loginControl.Router();\n\n//# sourceURL=webpack:///./src/javascript/module/login.js?");

/***/ }),

/***/ "./src/javascript/router/index.js":
/*!****************************************!*\
  !*** ./src/javascript/router/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const router=__webpack_require__(/*! ./router */ \"./src/javascript/router/router.js\");\r\n\r\n//router\r\nclass Router{\r\n    constructor(initial){\r\n        this.router=router;\r\n        this.initial=initial;//默认路由\r\n        this.init();\r\n    }\r\n    init(){\r\n        this.hashChange();\r\n        this.refreshHandler();\r\n    }\r\n    refreshHandler(){\r\n        let url=(location.hash.slice(1));\r\n        if(url){\r\n            Router.addActive(url);\r\n            this.router[url]();\r\n        }\r\n    }\r\n    hashChange(){\r\n        window.addEventListener('hashchange',()=>{\r\n            let url=location.hash.slice(1);\r\n            if(url){\r\n                Router.addActive(url);\r\n                this.router[url]();\r\n            }\r\n        })\r\n    }\r\n    static addActive(path){\r\n        $('.signup-tab-item').removeClass('active');\r\n        $('.signup-tab-item').each((i,element) => {\r\n            if($(element).children().attr('class')===path){\r\n                $(element).addClass('active');\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n\r\n\r\nmodule.exports={\r\n    Router,\r\n}\n\n//# sourceURL=webpack:///./src/javascript/router/index.js?");

/***/ }),

/***/ "./src/javascript/router/router.js":
/*!*****************************************!*\
  !*** ./src/javascript/router/router.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const tellogin=__webpack_require__(/*! ../control/tel-login */ \"./src/javascript/control/tel-login.js\");\r\nconst regtel=__webpack_require__(/*! ../control/reg-tel */ \"./src/javascript/control/reg-tel.js\");\r\nconst idlogin=__webpack_require__(/*! ../control/id-login */ \"./src/javascript/control/id-login.js\");\r\n\r\nconst router={\r\n    'id-login':idlogin.rander,\r\n    'tel-login':tellogin.rander,\r\n    'reg-tel':regtel.rander\r\n}\r\n\r\n\r\nmodule.exports=router;\n\n//# sourceURL=webpack:///./src/javascript/router/router.js?");

/***/ }),

/***/ "./src/javascript/view/fillin-empty.html":
/*!***********************************************!*\
  !*** ./src/javascript/view/fillin-empty.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<section id=\\\"signup\\\">    <div class=\\\"signup-tab\\\">        <ul>            <li class=\\\"signup-tab-item active\\\"><a href=\\\"#id-login\\\" class=\\\"id-login\\\">普通登陆</a></li>            <li class=\\\"signup-tab-item\\\"><a href=\\\"#tel-login\\\" class=\\\"tel-login\\\">短信验证码登陆</a></li>        </ul>    </div>    <div class=\\\"input-box\\\">        <div class=\\\"hint-meaasge\\\">注册项不可为空，请重新注册</div>        <form action=\\\"\\\">            <div class=\\\"signup-txt\\\">                <input type=\\\"text\\\" placeholder=\\\"您的手机号\\\" class=\\\"reg-tel\\\">            </div>            <div class=\\\"signup-btn\\\">                <button class=\\\"login-btn\\\" id=\\\"register\\\">注册</button>                <button><a href=\\\"#id-login\\\" class=\\\"speediness\\\">登陆</a></button>            </div>        </form>    </div></section><section id=\\\"else-account\\\">    <div class=\\\"account-tit\\\">        <span>使用第三方账号登陆</span>    </div>    <div class=\\\"account-content\\\">        <div class=\\\"weibo\\\">            <a href=\\\"http://passport.mafengwo.cn/weibo\\\">                <i></i>                微博登陆            </a>        </div>        <div class=\\\"qq\\\">            <a href=\\\"http://passport.mafengwo.cn/qq\\\">                <i></i>                QQ登陆            </a>        </div>    </div></section>\"\n\n//# sourceURL=webpack:///./src/javascript/view/fillin-empty.html?");

/***/ }),

/***/ "./src/javascript/view/fillin-message.html":
/*!*************************************************!*\
  !*** ./src/javascript/view/fillin-message.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<section id=\\\"signup\\\">    <form action=\\\"\\\">        <div class=\\\"signup-txt\\\">            <input type=\\\"text\\\" placeholder=\\\"您的名字\\\" class=\\\"signup-tel username\\\">            <input type=\\\"text\\\" placeholder=\\\"您的密码\\\" class=\\\"signup-code userpsd\\\">            <div class=\\\"acquire-code\\\">                <input type=\\\"text\\\" placeholder=\\\"短信验证码\\\" class=\\\"signup-tel-code verifycode\\\">                <a href=\\\"javasccript:;\\\">免费获取验证码</a>            </div>        </div>        <div class=\\\"signup-btn\\\">            <button class=\\\"login-btn accomplish\\\">完成注册</button>        </div>    </form></section>\"\n\n//# sourceURL=webpack:///./src/javascript/view/fillin-message.html?");

/***/ }),

/***/ "./src/javascript/view/id-login.html":
/*!*******************************************!*\
  !*** ./src/javascript/view/id-login.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<form action=\\\"\\\">    <div class=\\\"signup-txt\\\">        <input type=\\\"text\\\" class=\\\"user-name\\\" placeholder=\\\"您的邮箱/手机号\\\">        <input type=\\\"password\\\" class=\\\"user-psd\\\" placeholder=\\\"您的密码\\\">    </div>    <div class=\\\"forget-psd\\\"><a href=\\\"##\\\">忘记密码？</a></div>    <div class=\\\"signup-btn\\\">        <button class=\\\"login-btn\\\">登陆</button>        <button><a href=\\\"#reg-tel\\\" class=\\\"speediness\\\">快速注册</a></button>    </div></form>\"\n\n//# sourceURL=webpack:///./src/javascript/view/id-login.html?");

/***/ }),

/***/ "./src/javascript/view/reg-tel.html":
/*!******************************************!*\
  !*** ./src/javascript/view/reg-tel.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<form action=\\\"\\\">    <div class=\\\"hint-meaasge\\\">账号不合法，请重新输入。</div>    <div class=\\\"signup-txt\\\">        <input type=\\\"text\\\" placeholder=\\\"您的手机号\\\" class=\\\"reg-tel\\\">    </div>    <div class=\\\"signup-btn\\\">        <button class=\\\"login-btn\\\" id=\\\"register\\\">注册</button>        <button><a href=\\\"#id-login\\\" class=\\\"speediness\\\">登陆</a></button>    </div></form>\"\n\n//# sourceURL=webpack:///./src/javascript/view/reg-tel.html?");

/***/ }),

/***/ "./src/javascript/view/tel-login.html":
/*!********************************************!*\
  !*** ./src/javascript/view/tel-login.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<form action=\\\"\\\">    <div class=\\\"signup-txt\\\">        <input type=\\\"text\\\" placeholder=\\\"您的手机号\\\" class=\\\"signup-tel\\\">        <input type=\\\"text\\\" placeholder=\\\"验证码\\\" class=\\\"signup-code\\\">        <div class=\\\"acquire-code\\\">            <input type=\\\"text\\\" placeholder=\\\"短信验证码\\\" class=\\\"signup-tel-code\\\">            <a href=\\\"javasccript:;\\\">免费获取验证码</a>        </div>    </div>    <div class=\\\"forget-psd\\\"><a href=\\\"##\\\">忘记密码？</a></div>    <div class=\\\"signup-btn\\\">        <button class=\\\"login-btn\\\">登陆</button>        <button><a href=\\\"#reg-tel\\\" class=\\\"speediness\\\">快速注册</a></button>    </div></form>\"\n\n//# sourceURL=webpack:///./src/javascript/view/tel-login.html?");

/***/ })

/******/ });