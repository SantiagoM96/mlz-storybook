import{j as e}from"./jsx-runtime-BZf_YgVj.js";import{B as y}from"./Button-DSSEmZFw.js";import"./index-CEThVCg_.js";const m=({title:u,content:h,labelButton:p,backgroundColor:a,icon:g,iconPosition:x})=>{let o,t;return a==="#fff"?(o="#0000000d",t="#236999"):(o="#ffffff33",t="#ffffff"),e.jsx(e.Fragment,{children:e.jsx("div",{style:{backgroundColor:a},className:"main-container",children:e.jsxs("div",{className:"card-container",style:{backgroundColor:o,color:t},children:[e.jsxs("div",{className:"card-text-container",children:[e.jsx("h3",{className:"card-title",children:u}),e.jsx("p",{className:`card-text ${t==="#ffffff"?"white":"black"}`,children:h})]}),e.jsx(y,{label:p,icon:g,iconPosition:x,color:t})]})})})};m.__docgenInfo={description:"",methods:[],displayName:"CardWithButton",props:{title:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"string"},description:""},backgroundColor:{required:!0,tsType:{name:"union",raw:'"#fff" | "#236999"',elements:[{name:"literal",value:'"#fff"'},{name:"literal",value:'"#236999"'}]},description:""},labelButton:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""}}};const v={title:"Example/Card",component:m,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{title:"Card Title",content:"This is the content of the card with dark mode.",labelButton:"Ver más",icon:"chevron_forward",backgroundColor:"#fff"}},n={args:{title:"Card Title",content:"This is the content of the card with light mode.",labelButton:"Ver más",icon:"chevron_forward",backgroundColor:"#236999"}};var s,i,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    content: 'This is the content of the card with dark mode.',
    labelButton: "Ver más",
    icon: "chevron_forward",
    backgroundColor: "#fff"
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,d,f;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    content: 'This is the content of the card with light mode.',
    labelButton: "Ver más",
    icon: "chevron_forward",
    backgroundColor: "#236999"
  }
}`,...(f=(d=n.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const w=["Primary","Secondary"];export{r as Primary,n as Secondary,w as __namedExportsOrder,v as default};
