import{r as f}from"./index-CEThVCg_.js";var p={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=f,_=Symbol.for("react.element"),b=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,g=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function c(o,e,n){var r,s={},t=null,a=null;n!==void 0&&(t=""+n),e.key!==void 0&&(t=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)v.call(e,r)&&!x.hasOwnProperty(r)&&(s[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:_,type:o,key:t,ref:a,props:s,_owner:g.current}}l.Fragment=b;l.jsx=c;l.jsxs=c;p.exports=l;var d=p.exports;const h=({label:o,backgroundColor:e="#236999",color:n,icon:r,iconPosition:s,mode:t="ghost",...a})=>{const i=!n&&t==="solid"?"#fff":n||"#236999",u=t==="bordered"?i:"hsla(0, 0%, 100%, 0)",m=t==="solid"?e:"hsla(0, 0%, 100%, 0)";return console.log(u),d.jsxs("button",{type:"button",className:`button button-${s} button-${t}`,style:{backgroundColor:m,color:i,borderColor:u},...a,children:[o,r&&d.jsx("span",{className:"material-symbols-outlined",children:r})]})};h.__docgenInfo={description:"",methods:[],displayName:"Button",props:{mode:{required:!1,tsType:{name:"union",raw:'"ghost" | "solid" | "bordered"',elements:[{name:"literal",value:'"ghost"'},{name:"literal",value:'"solid"'},{name:"literal",value:'"bordered"'}]},description:"",defaultValue:{value:'"ghost"',computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"#236999"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"close" | "separate"',elements:[{name:"literal",value:'"close"'},{name:"literal",value:'"separate"'}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{h as B,d as j};