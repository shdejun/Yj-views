webpackJsonp([5],{

/***/ "SU/S":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("a7w1");

/***/ }),

/***/ "a7w1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-markdown-loader/lib/markdown-compiler.js?raw!./examples/docs/actionSheet.md
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var actionSheet = ({
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    handlerActionSheet: function handlerActionSheet() {
      this.show = true;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c221a9d4","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-markdown-loader/lib/markdown-compiler.js?raw!./examples/docs/actionSheet.md
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h3',[_vm._v("基本用法")]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('demo-block',[_c('div',{attrs:{"slot":"desc"},slot:"desc"},[_vm._v("基础用法\n通过v-model控制显示和隐藏 ActionSheet通过actions数组来定义展示的选项，数组的每一项是一个对象，对象属性见文档下方表格\n "),_c('div',{staticClass:"demon-block"},[_c('yj-button',{attrs:{"type":"primary"},nativeOn:{"click":function($event){return _vm.handlerActionSheet($event)}}},[_vm._v("弹出菜单")]),_vm._v(" "),_c('action-sheet',{model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}})],1)]),_c('div',{attrs:{"slot":"highlight"},slot:"highlight"},[_c('pre',{pre:true},[_c('code',{pre:true,attrs:{"v-pre":"","class":"language-html"}},[_vm._v("基础用法\n通过v-model控制显示和隐藏 ActionSheet通过actions数组来定义展示的选项，数组的每一项是一个对象，对象属性见文档下方表格\n "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("\"demon-block\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("yj-button")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("@click.native")]),_vm._v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("\"handlerActionSheet\"")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(">")]),_vm._v("弹出菜单"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("yj-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("action-sheet")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_vm._v("\"show\"")]),_vm._v(">")]),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("action-sheet")]),_vm._v(">")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{pre:true,attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n   data(){\n     "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v("{\n       "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("show")]),_vm._v(":"),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v("\n     }\n  },\n  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(":{\n    handlerActionSheet(){\n      "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".show = "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v("\n    }\n  }\n}\n")]),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n")])])])]),_vm._v(" "),_c('h3',[_vm._v("prop")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h3',[_vm._v("Event")]),_vm._v(" "),_vm._m(1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("参数")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("类型")]),_vm._v(" "),_c('th',[_vm._v("可选值")]),_vm._v(" "),_c('th',[_vm._v("默认值")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("type")]),_vm._v(" "),_c('td',[_vm._v("类型，可选值为 primary info warning danger")]),_vm._v(" "),_c('td',[_vm._v("String")]),_vm._v(" "),_c('td',[_vm._v("—")]),_vm._v(" "),_c('td',[_vm._v("default")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("事件名称")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("回调参数")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("onclick")]),_vm._v(" "),_c('td',[_vm._v("点击按钮时触发")]),_vm._v(" "),_c('td',[_vm._v("—")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var docs_actionSheet = (esExports);
// CONCATENATED MODULE: ./node_modules/vue-loader!./node_modules/vue-markdown-loader/lib/markdown-compiler.js?raw!./examples/docs/actionSheet.md
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  actionSheet,
  docs_actionSheet,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var markdown_compilerraw_examples_docs_actionSheet = __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=5.16af2ffaedcfbc58971f.js.map