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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/api/api.js":
/*!***********************************!*\
  !*** ./src/javascript/api/api.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const api={\r\n\trequest ({url, data, methods}) {\r\n        return $.ajax(\r\n\t\t\t{\r\n\t\t\t\turl:url,\r\n\t\t\t\tmethods:\"get\",\r\n\t\t\t\tdata:{},\r\n\t\t\t\tsuccess:(res)=>{\r\n\t\t\t\t\treturn res;\r\n\t\t\t\t\t\r\n\t\t\t\t},\r\n\t\t\t\terror:(err)=>{\r\n\t\t\t\t\treturn('请求出错');\r\n\t\t\t\t\t\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t)\r\n\t\t},\r\n}\r\n\r\nmodule.exports=api;\n\n//# sourceURL=webpack:///./src/javascript/api/api.js?");

/***/ }),

/***/ "./src/javascript/control/add-data.js":
/*!********************************************!*\
  !*** ./src/javascript/control/add-data.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const api=__webpack_require__(/*! ../api/api.js */ \"./src/javascript/api/api.js\")\r\n\r\n\r\nconst ToobtainData=()=>{\r\n    return api.request({url:'/hahaha?category=get_info_flow_list&page=1'})\r\n}\r\nconst bannerimg=()=>{\r\n    return api.request({url:' http://localhost:5001/bannerimg'})\r\n}\r\n\r\n\r\nmodule.exports= {\r\n    ToobtainData,bannerimg\r\n}\r\n\n\n//# sourceURL=webpack:///./src/javascript/control/add-data.js?");

/***/ }),

/***/ "./src/javascript/control/app-control.js":
/*!***********************************************!*\
  !*** ./src/javascript/control/app-control.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const indexControl=__webpack_require__(/*! ./app-index-control */ \"./src/javascript/control/app-index-control.js\");\r\nconst searchPage=__webpack_require__(/*! ../module/searchpage */ \"./src/javascript/module/searchpage.js\");\r\n\r\nconst rander=()=>{\r\n    indexControl.rander();\r\n    indexControl.banner();\r\n    searchPage.rander();\r\n}\r\n\r\nmodule.exports={rander}\n\n//# sourceURL=webpack:///./src/javascript/control/app-control.js?");

/***/ }),

/***/ "./src/javascript/control/app-index-control.js":
/*!*****************************************************!*\
  !*** ./src/javascript/control/app-index-control.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const data=__webpack_require__(/*! ./add-data */ \"./src/javascript/control/add-data.js\");\r\nconst appMain=__webpack_require__(/*! ../view/main.html */ \"./src/javascript/view/main.html\");\r\nconst bannerhtml=__webpack_require__(/*! ../view/banner.html */ \"./src/javascript/view/banner.html\");\r\n\r\n//加载数据列表\r\nconst rander=async()=>{\r\n\tlet list=await data.ToobtainData();\r\n\tlet newlist=JSON.parse(list).data.list;\r\n\tlet maintemplate = Handlebars.compile(appMain);\r\n\t$('#app .app-main-content').append(maintemplate({ films: newlist }));\r\n\t$('#app .app-main-content').children().eq(0).find('.content-title img').attr('src','https://n1-q.mafengwo.net/s9/M00/FB/0C/wKgBs1diFRKAMMptAAAIpExA3RM367.png');\r\n\r\n}\r\n\r\n//加载轮播图\r\nconst banner=async()=>{\r\n\tlet bannerimg=await data.bannerimg();\r\n\tlet bannertemplate = Handlebars.compile(bannerhtml);\r\n\t$('#app-banner .swiper-wrapper').append(bannertemplate({ banner: bannerimg.bannerimg }));\r\n\t//轮播图\r\n\tvar mySwiper = new Swiper('.swiper-container', {\r\n\tautoplay: 5000,//可选选项，自动滑动\r\n\tloop:true,//循环模式\r\n\tpagination: {\r\n\t\tel: '.swiper-pagination',\r\n\t}\r\n})\r\n}\r\n\r\n\r\nmodule.exports={rander,banner}\n\n//# sourceURL=webpack:///./src/javascript/control/app-index-control.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const allContrall=__webpack_require__(/*! ./control/app-control */ \"./src/javascript/control/app-control.js\");\r\nconst Scroll=__webpack_require__(/*! ./module/scroll */ \"./src/javascript/module/scroll.js\")\r\n\r\n\r\nallContrall.rander();\r\n\r\nlet scroll=new Scroll();\r\nscroll.init();\r\nwindow.addEventListener('hashchange',()=>{\r\n\tconsole.log(location.hash);\r\n\t\r\n})\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/module/scroll.js":
/*!*****************************************!*\
  !*** ./src/javascript/module/scroll.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const scrolldata=__webpack_require__(/*! ../control/app-index-control */ \"./src/javascript/control/app-index-control.js\");\r\n\r\n\r\nclass Scroll{\r\n    constructor(){\r\n        this.index=0;\r\n        this.backtop=document.querySelector('.backtop');\r\n        this.clientHeight=document.documentElement.clientHeight;\r\n    }\r\n    init(){\r\n        document.self=this;\r\n        document.addEventListener('scroll',this.scrollHandler);\r\n        this.backtop.addEventListener('click',this.clickHandler);\r\n    }\r\n    scrollHandler(e){\r\n        if(document.documentElement.scrollTop>800){\r\n            this.self.backtop.style.display='block';\r\n        }else{\r\n            this.self.backtop.style.display='none';\r\n        }\r\n        if(document.body.clientHeight-document.documentElement.scrollTop<this.self.clientHeight){\r\n            this.self.index++;\r\n            if(this.self.index>1){\r\n                this.self.index=0;\r\n                return;\r\n            }\r\n            scrolldata.rander();\r\n        }\r\n    }\r\n    clickHandler(e){   \r\n        Scroll.animations();\r\n    }\r\n    static animations(){\r\n        if(document.documentElement.scrollTop<10){\r\n            document.documentElement.scrollTop=0;\r\n            return;\r\n        }\r\n        if(document.documentElement.scrollTop>1000){\r\n            window.scrollBy(0,800-document.documentElement.scrollTop);\r\n        }\r\n        requestAnimationFrame(Scroll.animations);\r\n       window.scrollBy(0,-40);\r\n    }\r\n}\r\nmodule.exports=Scroll\n\n//# sourceURL=webpack:///./src/javascript/module/scroll.js?");

/***/ }),

/***/ "./src/javascript/module/searchpage.js":
/*!*********************************************!*\
  !*** ./src/javascript/module/searchpage.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const rander = () => {\r\n    $('.app-head-search').on('touchstart', () => {\r\n        $('#search-page').show();\r\n        $('html').css('overflow','hidden')\r\n        // $('#search-page').bind(\"touchmove\", function (e) {\r\n        //     e.preventDefault();\r\n        // });\r\n    })\r\n    $('.cancle-btn').click(() => {\r\n        $('#search-page').hide();\r\n        $('html').css('overflow','auto')\r\n    })\r\n}\r\n\r\nmodule.exports = {\r\n    rander\r\n};\n\n//# sourceURL=webpack:///./src/javascript/module/searchpage.js?");

/***/ }),

/***/ "./src/javascript/view/banner.html":
/*!*****************************************!*\
  !*** ./src/javascript/view/banner.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"{{#each banner}}<div class=\\\"swiper-slide\\\"><img src=\\\"{{img}}\\\" alt=\\\"\\\"></div>{{/each}}\"\n\n//# sourceURL=webpack:///./src/javascript/view/banner.html?");

/***/ }),

/***/ "./src/javascript/view/main.html":
/*!***************************************!*\
  !*** ./src/javascript/view/main.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"{{#each films}}<a href=\\\"##\\\">    <div class=\\\"content-title\\\">        <h1>{{data.title}}</h1>        <i class=\\\"content-title-tag\\\">            <img src=\\\"\\\" alt=\\\"\\\">        </i>    </div>    <div class=\\\"content-box\\\">        <div class=\\\"content-img\\\">            <img src=\\\"{{data.image}}\\\" alt=\\\"\\\">        </div>        <div class=\\\"content-txt\\\">            <div class=\\\"txt\\\">{{data.content}}</div>            <div class=\\\"message\\\">                <span class=\\\"num\\\">{{data_source.pv}}浏览</span>                <div>                    <i>{{data_source.user.name}}</i>                    <img src=\\\"https://n3-q.mafengwo.net/s11/M00/6B/AC/wKgBEFpDJDKAP6keAABRMNmmQGE14.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90\\\"                        alt=\\\"\\\">                </div>            </div>        </div>    </div></a>{{/each}}\"\n\n//# sourceURL=webpack:///./src/javascript/view/main.html?");

/***/ })

/******/ });