import{j as o}from"./jsx-runtime-SKoiH9zj.js";import{A as p}from"./Accordion-ChiWgSqm.js";import{I as t}from"./Icon-BnrH6PuI.js";import"./index-DJO9vBfz.js";/* empty css              */import"./Tooltip-jHEmaokv.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";import"./index-NZcV-alF.js";import"./Typography-DdMJCn-_.js";const C={title:"Components/Accordion",component:p,parameters:{layout:"padded"},tags:["autodocs"]},l={headerTitle:"Accordion",accordionStateIconName:"arrow_down",AccordionStateIconWidth:4,AccordionStateIconHeight:8,iconColor:"var(--brand-color)",onClick:()=>{console.log("Accordion clicked!")}},e={args:{...l,headerTitle:o.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[o.jsx(t,{name:"accordion_header_icon"}),o.jsx("span",{children:"Home and Web"})]}),onClick:()=>{console.log("Sample Accordion clicked!")}}},r={args:{...l,headerTitle:o.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[o.jsx(t,{name:"accordion_header_icon"}),o.jsx("span",{children:"Home and Web"})]}),isExpand:!1,onClick:()=>{console.log("Closed Accordion clicked!")}}};var c,a,n;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    headerTitle: <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>\r
        <Icon name="accordion_header_icon" />\r
        <span>Home and Web</span>\r
      </div>,
    onClick: () => {
      console.log('Sample Accordion clicked!');
    }
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,i,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    headerTitle: <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>\r
        <Icon name="accordion_header_icon" />\r
        <span>Home and Web</span>\r
      </div>,
    isExpand: false,
    onClick: () => {
      console.log('Closed Accordion clicked!');
    }
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const S=["SampleAccordion","closedAccordion"];export{e as SampleAccordion,S as __namedExportsOrder,r as closedAccordion,C as default};
