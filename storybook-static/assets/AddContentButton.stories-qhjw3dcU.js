import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{I as L}from"./Icon-BnrH6PuI.js";import{T as r}from"./Typography-DdMJCn-_.js";import{I as _}from"./IconButton-DADAjSNQ.js";import{c as N}from"./checkEmpty-xi6SckPb.js";import"./index-DJO9vBfz.js";import"./index-NZcV-alF.js";const s=({iconName:a="",onButtonClick:x,buttonLabel:C="Label",buttonText:A="To Add Group",disableButton:u=!1,stepCount:B=1,iconWidth:y=120,iconHeight:T=120})=>e.jsxs("div",{className:`add-content-button ${u?"disabled":""}`,children:[!N(a)&&e.jsx("div",{className:"icon-container",children:e.jsx(L,{name:a,width:y,height:T})}),e.jsxs("div",{className:"typography-label-button",children:[e.jsxs(r,{fontSize:"12px",fontWeight:"regular",lineHeight:"18px",children:["step ",B," :"]}),e.jsx(r,{fontSize:"12px",fontWeight:"semi-bold",lineHeight:"18px",children:"Click"}),e.jsx(_,{label:C,onClick:x,iconName:"plus_user_icon",isDisable:u}),e.jsx(r,{fontSize:"12px",fontWeight:"semi-bold",lineHeight:"18px",children:A})]})]});try{s.displayName="AddContentButton",s.__docgenInfo={description:"",displayName:"AddContentButton",props:{iconName:{defaultValue:{value:""},description:"",name:"iconName",required:!1,type:{name:"string"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"(() => void | {})"}},buttonLabel:{defaultValue:{value:"Label"},description:"",name:"buttonLabel",required:!1,type:{name:"string"}},buttonText:{defaultValue:{value:"To Add Group"},description:"",name:"buttonText",required:!1,type:{name:"string"}},disableButton:{defaultValue:{value:"false"},description:"",name:"disableButton",required:!1,type:{name:"boolean"}},stepCount:{defaultValue:{value:"1"},description:"",name:"stepCount",required:!1,type:{name:"string | number"}},iconWidth:{defaultValue:{value:"120"},description:"",name:"iconWidth",required:!1,type:{name:"number"}},iconHeight:{defaultValue:{value:"120"},description:"",name:"iconHeight",required:!1,type:{name:"number"}}}}}catch{}const D={title:"Components/AddContentButton",component:s,parameters:{layout:"centered"},tags:["autodocs"]},i={stepCount:1,iconWidth:120,iconHeight:120},t={args:{...i,iconName:"no_data",buttonLabel:"Label",buttonText:"To Add Group",onButtonClick:()=>{}}},n={args:{...i,iconName:"no_data",buttonLabel:"Label",buttonText:"To Add Group",onButtonClick:()=>{},disableButton:!0}},o={args:{...i,buttonLabel:"Label",buttonText:"To Add Group",onButtonClick:()=>{}}};var d,l,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    iconName: 'no_data',
    buttonLabel: 'Label',
    buttonText: 'To Add Group',
    onButtonClick: () => {}
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    iconName: 'no_data',
    buttonLabel: 'Label',
    buttonText: 'To Add Group',
    onButtonClick: () => {},
    disableButton: true
  }
}`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,g,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    buttonLabel: 'Label',
    buttonText: 'To Add Group',
    onButtonClick: () => {}
  }
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const I=["Default","DisabledAddContentButton","AddContentButtonWithoutNoDataIcon"];export{o as AddContentButtonWithoutNoDataIcon,t as Default,n as DisabledAddContentButton,I as __namedExportsOrder,D as default};
