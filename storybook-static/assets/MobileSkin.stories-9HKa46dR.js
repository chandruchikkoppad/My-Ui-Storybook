import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{R as W}from"./index-DJO9vBfz.js";import{I as q}from"./Icon-BnrH6PuI.js";import{T as A}from"./Tooltip-jHEmaokv.js";import"./index-NZcV-alF.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";const m=({children:t,orientation:C="",navBarIcons:r,mobileHeight:d=448,mobileWidth:p=220,UtilityBar:I})=>{const a=C==="portrait",h=a?d:p,f=a?p:d;return e.jsxs("div",{className:`ff-mobileskin-wrapper ${a?"portrait":"landscape"}`,children:[e.jsx("div",{className:"ff-mobileskin-container",style:{height:h+16,width:f+16},children:e.jsx("div",{className:"ff-mobile-container",style:{width:f,height:h},children:e.jsx("div",{className:"ff-mobile-image-container",children:W.isValidElement(t)?t:e.jsx("img",{src:t,alt:"Mobile content",style:{width:a?"100%":`${p*2.1}px`,height:a?"100%":`${d*.5}px`}})})})}),I&&e.jsx("div",{className:"ff-nav-bar",children:r==null?void 0:r.map((i,g)=>{const{title:P,...U}=i;return e.jsx("div",{className:`ff-nav-bar-icon ${(i==null?void 0:i.className)||""} ${g===r.length-1?"last-icon":""}`,children:e.jsx(A,{title:P,children:e.jsx(q,{...U})})},g)})})]})};try{m.displayName="MobileSkin",m.__docgenInfo={description:"",displayName:"MobileSkin",props:{orientation:{defaultValue:{value:""},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"portrait"'},{value:'"landscape"'}]}},UtilityBar:{defaultValue:null,description:"",name:"UtilityBar",required:!1,type:{name:"boolean"}},navBarIcons:{defaultValue:null,description:"",name:"navBarIcons",required:!1,type:{name:"NavBarIcon[]"}},mobileHeight:{defaultValue:{value:"448"},description:"",name:"mobileHeight",required:!1,type:{name:"number"}},mobileWidth:{defaultValue:{value:"220"},description:"",name:"mobileWidth",required:!1,type:{name:"number"}}}}}catch{}const z={title:"Components/MobileSkin",component:m,parameters:{layout:"padded"},tags:["autodocs"]},u=[{title:"Forward",name:"right_arrow_icon",onClick:()=>{},height:16,width:16},{title:"Backward",name:"left_arrow_icon",onClick:()=>{},height:16,width:16},{title:"Refresh",name:"refresh_icon",onClick:()=>{},height:16,width:16},{title:"Capture",name:"minimize_script",onClick:()=>{},height:16,width:16},{title:"Rotate",name:"replace_icon",onClick:()=>{},height:16,width:16}],c={navBarIcons:u,mobileWidth:220,mobileHeight:448,children:e.jsx("p",{children:"No Data Found"})},n={args:{...c,orientation:"portrait"}},o={args:{...c,orientation:"landscape"}},s={args:{...c,orientation:"portrait",UtilityBar:!0,navBarIcons:u}},l={args:{...c,orientation:"landscape",UtilityBar:!0,navBarIcons:u}};var v,w,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    orientation: 'portrait'
  }
}`,...(b=(w=n.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var y,_,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    orientation: 'landscape'
  }
}`,...(x=(_=o.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var N,V,j;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    orientation: 'portrait',
    UtilityBar: true,
    navBarIcons: navBarIcons
  }
}`,...(j=(V=s.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var k,B,S;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    orientation: 'landscape',
    UtilityBar: true,
    navBarIcons: navBarIcons
  }
}`,...(S=(B=l.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};const D=["PortraitView","LandscapeView","PortraitViewWithNavbar","LandscapeViewWithNavbar"];export{o as LandscapeView,l as LandscapeViewWithNavbar,n as PortraitView,s as PortraitViewWithNavbar,D as __namedExportsOrder,z as default};
