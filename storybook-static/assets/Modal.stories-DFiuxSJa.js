import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as m}from"./index-DJO9vBfz.js";import{M as c}from"./Modal-CJH4A5xd.js";import{B as o}from"./Button-CpFgCZ6s.js";import{u as h}from"./UseKeyboardActions-IEqgejH8.js";import"./index-CFN9ZEHn.js";import"./ThemeProvider-D5XEyBwi.js";import"./index-NZcV-alF.js";/* empty css                */import"./Icon-BnrH6PuI.js";import"./Typography-DdMJCn-_.js";const E={title:"Components/Modal",component:c,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{isOpen:!0,contentLabel:"modal",ariaHideApp:!0,isHeaderDisplayed:!0,headerContent:e.jsx("h2",{children:"title"}),children:e.jsx("h2",{children:"Hello"}),isFooterDisplayed:!0,footerContent:e.jsx(o,{variant:"primary",label:"continue"}),customWidth:"660px",customHeight:"auto",border:"1px solid #E79B0866"}},t={render:()=>{const[a,s]=m.useState(!1);return h([{key:"Enter",action:()=>alert("Enter key was pressed.")}]),e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",onClick:()=>{s(!0)},children:"Show Modal"}),a&&e.jsx(c,{overlayClassName:"custom-overlay",isOpen:a,onClose:()=>{s(!1)},headerContent:e.jsx("div",{children:"title"}),isHeaderDisplayed:!0,children:e.jsx("div",{children:"Hello"}),ariaHideApp:!0,isFooterDisplayed:!0,footerContent:e.jsx(o,{variant:"primary",label:"continue"}),customWidth:"660px",customHeight:"auto",border:"1px solid var(--warning-modal-border-color)"})]})}};var i,n,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    contentLabel: 'modal',
    ariaHideApp: true,
    isHeaderDisplayed: true,
    headerContent: <h2>title</h2>,
    children: <h2>Hello</h2>,
    isFooterDisplayed: true,
    footerContent: <Button variant="primary" label="continue" />,
    customWidth: '660px',
    customHeight: 'auto',
    border: '1px solid #E79B0866'
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [openModal, setModal] = useState(false);
    useKeyboardActions([{
      key: 'Enter',
      action: () => alert('Enter key was pressed.')
    }]);
    return <>\r
        <Button variant="primary" onClick={() => {
        setModal(true);
      }}>\r
          Show Modal\r
        </Button>\r
        {openModal && <Modal overlayClassName="custom-overlay" isOpen={openModal} onClose={() => {
        setModal(false);
      }} headerContent={<div>title</div>} isHeaderDisplayed={true} children={<div>Hello</div>} ariaHideApp={true} isFooterDisplayed={true} footerContent={<Button variant="primary" label="continue" />} customWidth="660px" customHeight="auto" border="1px solid var(--warning-modal-border-color)" />}\r
      </>;
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const B=["DefaultModalStory","Controlled"];export{t as Controlled,r as DefaultModalStory,B as __namedExportsOrder,E as default};
