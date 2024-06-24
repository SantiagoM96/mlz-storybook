import{j as e,B}from"./Button-Cr9APSHd.js";import"./index-CEThVCg_.js";const g=({title:x="Card Title",content:y,buttonLabel:v="Ver más",containerBgColor:t,isSolid:T=!1,icon:C="chevron_forward",iconPosition:b="separate"})=>{const s=T&&t==="#236999"?"#fff":void 0,n=t==="#fff"||s?"#236999":"#fff";return e.jsx(e.Fragment,{children:e.jsx("div",{style:{backgroundColor:t},className:"main-container",children:e.jsxs("div",{className:`card-container 
                    ${s?"card-container-solid":t==="#fff"?"card-container-light":"card-container-transparent-blue"}`,children:[e.jsxs("div",{className:"card-text-container",children:[e.jsx("h3",{className:"card-title",children:x}),e.jsx("p",{className:`card-text ${n==="#fff"?"card-text-white":s!=="#fff"&&n==="#236999"?"card-text-dark":"card-text-blue"}`,children:y})]}),e.jsx(B,{label:v,icon:C,iconPosition:b,color:n})]})})})};g.__docgenInfo={description:"",methods:[],displayName:"CardWithButton",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Card Title"',computed:!1}},content:{required:!0,tsType:{name:"string"},description:""},containerBgColor:{required:!0,tsType:{name:"union",raw:'"#fff" | "#236999"',elements:[{name:"literal",value:'"#fff"'},{name:"literal",value:'"#236999"'}]},description:""},isSolid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Ver más"',computed:!1}},icon:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"chevron_forward"',computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:'"close" | "separate"',elements:[{name:"literal",value:'"close"'},{name:"literal",value:'"separate"'}]},description:"",defaultValue:{value:'"separate"',computed:!1}}}};const q={title:"Card",component:g,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{content:"This is the content of the card displayed in light mode.",containerBgColor:"#fff"}},r={args:{content:"This is the content of the card displayed in blue mode.",containerBgColor:"#236999"}},o={args:{content:"This is the content of the card displayed in blue solid mode.",containerBgColor:"#236999",isSolid:!0}};var i,d,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    content: 'This is the content of the card displayed in light mode.',
    containerBgColor: "#fff"
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,u,f;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    content: 'This is the content of the card displayed in blue mode.',
    containerBgColor: "#236999"
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var m,p,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    content: 'This is the content of the card displayed in blue solid mode.',
    containerBgColor: "#236999",
    isSolid: true
  }
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const V=["LightMode","BlueMode","SolidMode"];export{r as BlueMode,a as LightMode,o as SolidMode,V as __namedExportsOrder,q as default};
