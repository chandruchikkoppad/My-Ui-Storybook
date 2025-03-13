import{j as n}from"./jsx-runtime-SKoiH9zj.js";import{T as B}from"./Typography-DdMJCn-_.js";import{S as J}from"./Select-BJocvAjy.js";import"./index-DJO9vBfz.js";import"./Icon-BnrH6PuI.js";import"./index-NZcV-alF.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";import"./getSelectOptionValue-DZyM0SAQ.js";import"./useClickOutside-BYc9KT_v.js";import"./Tooltip-jHEmaokv.js";import"./Button-CpFgCZ6s.js";/* empty css                */import"./usePortalPosition-DKFkIZLt.js";const p=({value:a,isReviewer:l=!1,isApprovePage:e=!1,handleStateValueClick:u,handleDropdownOptionsClick:N,disabled:c=!1,isOnlyReviewer:A=!1,showBorder:j=!0,zIndex:x=100})=>{const r=a.toUpperCase(),v=l&&!e&&r==="REVIEW",_=A&&!e?[{label:"New",value:"New"},{label:"Approve",value:"Approve"}]:!l&&!e?[{label:r==="REJECTED"?"Rejected":"New",value:r==="REJECTED"?"Rejected":"New"},{label:"Review",value:"Review"}]:l&&!e?[{label:r==="REJECTED"?"Rejected":"New",value:r==="REJECTED"?"Rejected":"New"},{label:"Review",value:"Review"},{label:"Approve",value:"Approve"}]:l&&e?[{label:"Review",value:"Review"},{label:"Approve",value:"Approve"},{label:"Reject",value:"Reject"}]:v?[{label:"Review",value:"Review"},{label:"Approve",value:"Approve"}]:[{label:"New",value:"New"},{label:"Review",value:"Review"}],q={label:a,value:a},I=(r==="NEW"&&!e||e&&r==="REVIEW"||v||r==="REJECTED"&&!e)&&!c?n.jsx(J,{label:a,onChange:T=>N(T),optionsList:_,selectedOption:q,showLabel:!1,showBorder:j,disableInput:!0,selectedOptionColor:"var(--brand-color)",optionZIndex:x}):n.jsx(B,{children:a,className:"ff-state-value",onClick:()=>{a.toLowerCase()==="review"&&!c&&!e&&!l&&u()},cursor:c?"text":"pointer"});return n.jsx(n.Fragment,{children:I})};try{p.displayName="StateDropdown",p.__docgenInfo={description:"",displayName:"StateDropdown",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},isReviewer:{defaultValue:{value:"false"},description:"",name:"isReviewer",required:!1,type:{name:"boolean"}},isApprovePage:{defaultValue:{value:"false"},description:"",name:"isApprovePage",required:!1,type:{name:"boolean"}},handleDropdownOptionsClick:{defaultValue:null,description:"",name:"handleDropdownOptionsClick",required:!0,type:{name:"(option: Option) => void"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},isOnlyReviewer:{defaultValue:{value:"false"},description:"",name:"isOnlyReviewer",required:!1,type:{name:"boolean"}},handleStateValueClick:{defaultValue:null,description:"",name:"handleStateValueClick",required:!0,type:{name:"() => void"}},showBorder:{defaultValue:{value:"true"},description:"",name:"showBorder",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:{value:"100"},description:"",name:"zIndex",required:!1,type:{name:"number"}}}}}catch{}const re={title:"Components/StateDropdown",component:p,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{value:"New",handleStateValueClick:()=>{},handleDropdownOptionsClick:()=>{},isOnlyReviewer:!1,isReviewer:!0,isApprovePage:!1,disabled:!0,showBorder:!0}},o={args:{value:"Review",handleStateValueClick:()=>{},handleDropdownOptionsClick:()=>{},isOnlyReviewer:!1,isReviewer:!0,isApprovePage:!0,disabled:!1}},s={args:{value:"Rejected",handleStateValueClick:()=>{},handleDropdownOptionsClick:()=>{},isOnlyReviewer:!1,isReviewer:!1,isApprovePage:!1,disabled:!1}},i={args:{value:"Approved",handleStateValueClick:()=>{},handleDropdownOptionsClick:()=>{},isOnlyReviewer:!1,isReviewer:!1,isApprovePage:!1,disabled:!1}},d={render:()=>{const a="New",l=u=>{},e=()=>{};return n.jsx(p,{value:a,isReviewer:!1,isApprovePage:!1,handleStateValueClick:e,handleDropdownOptionsClick:l,disabled:!1,isOnlyReviewer:!1,showBorder:!0})}};var w,f,m;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: 'New',
    handleStateValueClick: () => {},
    handleDropdownOptionsClick: () => {},
    isOnlyReviewer: false,
    isReviewer: true,
    isApprovePage: false,
    disabled: true,
    showBorder: true
  }
}`,...(m=(f=t.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var R,h,C;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    value: 'Review',
    handleStateValueClick: () => {},
    handleDropdownOptionsClick: () => {},
    isOnlyReviewer: false,
    isReviewer: true,
    isApprovePage: true,
    disabled: false
  }
}`,...(C=(h=o.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var b,O,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 'Rejected',
    handleStateValueClick: () => {},
    handleDropdownOptionsClick: () => {},
    isOnlyReviewer: false,
    isReviewer: false,
    isApprovePage: false,
    disabled: false
  }
}`,...(S=(O=s.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var k,y,g;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    value: 'Approved',
    handleStateValueClick: () => {},
    handleDropdownOptionsClick: () => {},
    isOnlyReviewer: false,
    isReviewer: false,
    isApprovePage: false,
    disabled: false
  }
}`,...(g=(y=i.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var D,V,E;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const value = 'New';
    const handleDropdownOptionsClick = (_option: Option) => {
      // Operations to be performed on click of dropdown options
    };
    const handleStateValueClick = () => {};
    return <StateDropdown value={value} isReviewer={false} isApprovePage={false} handleStateValueClick={handleStateValueClick} handleDropdownOptionsClick={handleDropdownOptionsClick} disabled={false} isOnlyReviewer={false} showBorder={true} />;
  }
}`,...(E=(V=d.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const le=["Disable","Review","Reject","Approved","NewState"];export{i as Approved,t as Disable,d as NewState,s as Reject,o as Review,le as __namedExportsOrder,re as default};
