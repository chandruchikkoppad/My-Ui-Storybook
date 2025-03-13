import{j as s}from"./jsx-runtime-SKoiH9zj.js";import{r as k}from"./index-DJO9vBfz.js";import{A as D}from"./AttachMedia-BcOKw0RA.js";import"./index-9zYvQAMa.js";import{I as v}from"./Icon-BnrH6PuI.js";import{M as W}from"./Modal-CJH4A5xd.js";import"./Tooltip-jHEmaokv.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";import"./index-NZcV-alF.js";import"./Typography-DdMJCn-_.js";import"./UseKeyboardActions-IEqgejH8.js";const r=({MediaSrc:e,fileName:c,onDeleteClick:C,mediaType:d,fileId:E})=>{const[m,p]=k.useState(!1),S=()=>p(!0),l=()=>p(!1),g=()=>{const n=document.createElement("a");n.href=e,n.download=c||"download",n.click()};return s.jsxs("div",{children:[s.jsx(D,{mediaSrc:e,mediaType:d,onDownloadClick:g,onDeleteClick:()=>C(e),onExpandClick:S,fileName:c,fileId:E}),m&&s.jsxs(W,{isOpen:m,onClose:l,isFooterDisplayed:!1,isHeaderDisplayed:!1,customWidth:"666px",customHeight:"366px",zIndex:1e4,children:[s.jsxs("div",{className:"ff-expand-icons",children:[s.jsx(v,{name:"download_file_icon",onClick:g,color:"var(--icons-default-color)",hoverEffect:!0}),s.jsx(v,{name:"close",onClick:l,color:"var(--icons-default-color)",hoverEffect:!0})]}),d==="image"?s.jsx("img",{src:e,alt:"fileName",height:"366px",width:"666px"}):s.jsx("video",{src:e,controls:!0,height:"366px",width:"666px",controlsList:"nodownload"})]})]})};try{r.displayName="MediaPreview",r.__docgenInfo={description:"",displayName:"MediaPreview",props:{}}}catch{}const K={title:"Components/MediaPreview",component:r,tags:["autodocs"]},o={args:{src:"src/assets/image/Screenshot.png",fileName:"",type:"image"}},a={args:{src:"src/assets/video/sample-video.mp4",fileName:"sample-video.mp4",type:"video"}},t={args:{src:"src/assets/image/Screenshot (1).png",fileName:"Screenshot (1).png",type:"image"},render:e=>s.jsx(r,{...e})},i={args:{src:"src/assets/video/movie.mp4",fileName:"..........",type:"video"},render:e=>s.jsx(r,{...e})};var f,h,u;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    src: 'src/assets/image/Screenshot.png',
    fileName: '',
    type: 'image'
  }
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,w,P;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    src: 'src/assets/video/sample-video.mp4',
    fileName: 'sample-video.mp4',
    type: 'video'
  }
}`,...(P=(w=a.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var y,j,_;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    src: 'src/assets/image/Screenshot (1).png',
    fileName: 'Screenshot (1).png',
    type: 'image'
  },
  render: args => <MediaPreview {...args} />
}`,...(_=(j=t.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var M,N,I;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    src: 'src/assets/video/movie.mp4',
    fileName: '..........',
    type: 'video'
  },
  render: args => <MediaPreview {...args} />
}`,...(I=(N=i.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const Q=["ImagePreview","VideoPreview","ImagePreviewWithModal","VideoPreviewWithModal"];export{o as ImagePreview,t as ImagePreviewWithModal,a as VideoPreview,i as VideoPreviewWithModal,Q as __namedExportsOrder,K as default};
