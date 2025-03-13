import{j as c}from"./jsx-runtime-SKoiH9zj.js";import{c as J}from"./index-NZcV-alF.js";import{T as K}from"./Typography-DdMJCn-_.js";import{T as Q}from"./Tooltip-jHEmaokv.js";import"./index-DJO9vBfz.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";const p=({status:a="passed",label:m="",onClick:D=()=>{},className:I="",style:L={},disabled:$=!1,...z})=>{const G=a==="partially-executed"||a==="not-executed";return c.jsx(Q,{title:G?m:"",placement:"bottom",children:c.jsx("button",{className:J("ff-status-button",`ff-status-button--${a}`,I),style:L,onClick:D,disabled:$,...z,children:c.jsx(K,{as:"div",fontWeight:"semi-bold",lineHeight:"16px",textAlign:"center",className:"ff-status-button__text",children:m})})})};try{p.displayName="StatusButton",p.__docgenInfo={description:"",displayName:"StatusButton",props:{status:{defaultValue:{value:"passed"},description:"Status of the button",name:"status",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"passed"'},{value:'"failed"'},{value:'"skipped"'},{value:'"running"'},{value:'"terminated"'},{value:'"partially-executed"'},{value:'"aborted"'},{value:'"not-executed"'}]}},label:{defaultValue:{value:""},description:"Button label (status text)",name:"label",required:!1,type:{name:"string"}},onClick:{defaultValue:{value:"() => {}"},description:"Optional click handler",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},children:{defaultValue:null,description:"Button content",name:"children",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"Button id",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Disabled state",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Classname for the button",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:{value:"{}"},description:"Additional styles for the button",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const re={title:"Components/StatusButton",component:p,parameters:{layout:"centered"},tags:["autodocs"]},e={disabled:!1},t={args:{...e,label:"Passed",status:"passed"}},s={args:{...e,label:"Failed",status:"failed"}},r={args:{...e,label:"Running",status:"running"}},n={args:{...e,label:"Terminated",status:"terminated"}},o={args:{...e,label:"Skipped",status:"skipped"}},l={args:{...e,label:"Warning",status:"warning"}},u={args:{...e,label:"Partially Executed",status:"partially-executed"}},d={args:{...e,label:"Aborted",status:"aborted"}},i={args:{...e,label:"Not Executed",status:"not-executed"}};var g,f,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Passed',
    status: 'passed'
  }
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,y,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Failed',
    status: 'failed'
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,A,h;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Running',
    status: 'running'
  }
}`,...(h=(A=r.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var E,_,N;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Terminated',
    status: 'terminated'
  }
}`,...(N=(_=n.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var k,T,P;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Skipped',
    status: 'skipped'
  }
}`,...(P=(T=o.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var q,B,V;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Warning',
    status: 'warning'
  }
}`,...(V=(B=l.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var R,j,C;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Partially Executed',
    status: 'partially-executed'
  }
}`,...(C=(j=u.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var W,F,w;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Aborted',
    status: 'aborted'
  }
}`,...(w=(F=d.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var M,H,O;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Not Executed',
    status: 'not-executed'
  }
}`,...(O=(H=i.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const ne=["Passed","Failed","Running","Terminated","Skipped","Warning","PartiallyExecuted","Aborted","NotExecuted"];export{d as Aborted,s as Failed,i as NotExecuted,u as PartiallyExecuted,t as Passed,r as Running,o as Skipped,n as Terminated,l as Warning,ne as __namedExportsOrder,re as default};
