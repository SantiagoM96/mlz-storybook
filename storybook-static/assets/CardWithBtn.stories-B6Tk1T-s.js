import{j as e,B as w}from"./Button-Bv425jwO.js";import"./index-CEThVCg_.js";const g=({title:T,content:x,buttonLabel:b,cardBgColor:a,containerBgColor:o,icon:C,iconPosition:y})=>{const i=o==="#fff"||a?"#236999":"#fff";return e.jsx(e.Fragment,{children:e.jsx("div",{style:{backgroundColor:o},className:"main-container",children:e.jsxs("div",{className:`card-container 
                    ${a?"card-container-dark-solid":o==="#fff"?"card-container-light":"card-container-dark"}`,children:[e.jsxs("div",{className:"card-text-container",children:[e.jsx("h3",{className:"card-title",children:T}),e.jsx("p",{className:`card-text ${i==="#fff"?"card-text-white":a!=="#fff"&&i==="#236999"?"card-text-black":"card-text-blue"}`,children:x})]}),e.jsx(w,{label:b,icon:C,iconPosition:y,color:i})]})})})};g.__docgenInfo={description:"",methods:[],displayName:"CardWithButton",props:{title:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"string"},description:""},containerBgColor:{required:!0,tsType:{name:"union",raw:'"#fff" | "#236999"',elements:[{name:"literal",value:'"#fff"'},{name:"literal",value:'"#236999"'}]},description:""},cardBgColor:{required:!1,tsType:{name:"string"},description:""},buttonLabel:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"string"},description:""},iconPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""}}};const _={title:"Card",component:g,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{title:"Card Title",content:"This is the content of the card with light mode.",buttonLabel:"Ver más",icon:"chevron_forward",containerBgColor:"#fff"}},t={args:{title:"Card Title",content:"This is the content of the card with dark mode.",buttonLabel:"Ver más",icon:"chevron_forward",containerBgColor:"#236999"}},n={args:{title:"Card Title",content:"This is the content of the card with dark mode.",buttonLabel:"Ver más",icon:"chevron_forward",containerBgColor:"#236999",cardBgColor:"#fff"}};var s,c,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    content: 'This is the content of the card with light mode.',
    buttonLabel: "Ver más",
    icon: "chevron_forward",
    containerBgColor: "#fff"
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,m,f;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    content: 'This is the content of the card with dark mode.',
    buttonLabel: "Ver más",
    icon: "chevron_forward",
    containerBgColor: "#236999"
  }
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var h,u,p;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    content: 'This is the content of the card with dark mode.',
    buttonLabel: "Ver más",
    icon: "chevron_forward",
    containerBgColor: "#236999",
    cardBgColor: "#fff"
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const j=["Primary","Secondary","Terciary"];export{r as Primary,t as Secondary,n as Terciary,j as __namedExportsOrder,_ as default};
