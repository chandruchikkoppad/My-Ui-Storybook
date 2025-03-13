import{j as t}from"./jsx-runtime-SKoiH9zj.js";import{T as i,t as o}from"./Toastify-CnLhTvUT.js";import{B as e}from"./Button-CpFgCZ6s.js";import"./index-DJO9vBfz.js";import"./Toast-CWcBRmbh.js";import"./index-CFN9ZEHn.js";import"./Icon-BnrH6PuI.js";import"./index-NZcV-alF.js";import"./Typography-DdMJCn-_.js";import"./ThemeProvider-D5XEyBwi.js";/* empty css                */const x={title:"Components/Toastify",component:i,parameters:{layout:"centered"},tags:["autodocs"]},l={isOpen:!1,toastTitle:"Success",toastMessage:"Variable name Requested for Review successfully",closeButtonLabel:"x",displayDuration:3e3},r={args:{...l},render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t.jsx(i,{}),t.jsx(e,{variant:"primary",label:"Show Success Toast",onClick:()=>o.success("Your request was successful!","Your request was successful! Your request was successful! Your request was successful! Your request was successful!")}),t.jsx(e,{variant:"delete",label:"Show Error Toast",onClick:()=>o.error("Something went wrong!")}),t.jsx(e,{variant:"warning",label:"Show warning Object Toast",onClick:()=>o.warning("Something went wrong!",{a:"hi",b:"5",c:10})}),t.jsx(e,{variant:"secondary",label:"Show info Array Toast",onClick:()=>o.info("Something went wrong!",["1",4,"hi"])}),t.jsx(e,{variant:"tertiary",label:"Show alert function Toast",onClick:()=>o.alert("Something went wrong!",()=>{})})]})};var s,a,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  render: () => (
  /*\r
    Note:-\r
    import { Toastify, toast } from 'pixel-react';\r
  */

  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  }}>\r
      {/* Render Toastify to allow toast notifications */}\r
      <Toastify />\r
\r
      {/* Button to trigger a toast notification */}\r
      <Button variant="primary" label="Show Success Toast" onClick={() => toast.success('Your request was successful!', 'Your request was successful! Your request was successful! Your request was successful! Your request was successful!')} />\r
      <Button variant="delete" label="Show Error Toast" onClick={() => toast.error('Something went wrong!')} />\r
      <Button variant="warning" label="Show warning Object Toast" onClick={() => toast.warning('Something went wrong!', {
      a: 'hi',
      b: '5',
      c: 10
    })} />\r
      <Button variant="secondary" label="Show info Array Toast" onClick={() => toast.info('Something went wrong!', ['1', 4, 'hi'])} />\r
      <Button variant="tertiary" label="Show alert function Toast" onClick={() => toast.alert('Something went wrong!', () => {})} />\r
    </div>)
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const T=["Controlled"];export{r as Controlled,T as __namedExportsOrder,x as default};
