import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{D as a}from"./Drawer-Bj9d4h3e.js";import{r as s}from"./index-DJO9vBfz.js";import{B as o}from"./Button-CpFgCZ6s.js";import{I as W}from"./Icon-BnrH6PuI.js";import"./index-CFN9ZEHn.js";import"./index-NZcV-alF.js";import"./useEscKeyEvent-_4Zk5j0a.js";import"./ThemeProvider-D5XEyBwi.js";/* empty css                */import"./Typography-DdMJCn-_.js";const $={title:"Components/Drawer",component:a,parameters:{layout:"centered"},tags:["autodocs"]},r={isOpen:!0,title:"Drawer Title",showEditButton:!1,showTransition:!0,_isExpanded:!1,showHeader:!0,onClose:()=>{},primaryButtonProps:{label:"Create",variant:"primary",disabled:!1,onClick:()=>{}},secondaryButtonProps:{label:"Cancel",variant:"secondary",disabled:!1,onClick:()=>{}},leftPrimaryButtonProps:{label:"Next",variant:"primary",disabled:!1,onClick:()=>{}},leftSecondaryButtonProps:{label:"Previuos",variant:"secondary",disabled:!1,onClick:()=>{}},onEdit:()=>{},overlay:!1,isFooterRequired:!0,footerContent:null,backButtonIcon:e.jsx(W,{name:"error",height:16,width:16}),onCloseIconClick:()=>alert("Close icon clicked!")},t={args:{...r,size:"medium",showHeader:!0}},n={args:{...r,showHeader:!1,size:"medium"},parameters:{docs:{disable:!0}}},l={args:{...r,customHeader:e.jsx("div",{children:e.jsx("h3",{children:"My Custom Header"})})},parameters:{docs:{disable:!0}}},i={args:{...r,customFooter:e.jsx("div",{children:e.jsx("h3",{children:"My Custom Footer"})})},parameters:{docs:{disable:!0}}},d={args:{...r,leftTertiaryButtonProps:{label:"Help",onClick:()=>{}},rightTertiaryButtonProps:{label:"More Info",onClick:()=>{}}},parameters:{docs:{disable:!0}}},u={args:{...r,zIndex:1050},parameters:{docs:{disable:!0}}},c={render:()=>{const[f,m]=s.useState(!1),[D,w]=s.useState(!1),[C,p]=s.useState(!1),[S,h]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>m(!0),label:"Show X-Large Drawer",variant:"primary"}),f&&e.jsxs(a,{...r,isOpen:f,onClose:()=>m(!1),isFooterRequired:!0,_isExpanded:!1,size:"x-large",overlay:!0,onCloseIconClick:()=>m(!1),children:[e.jsx("span",{children:"Drawer Body XL"}),e.jsx(o,{onClick:()=>w(!0),label:"Show Large Drawer",variant:"primary"})]}),D&&e.jsxs(a,{...r,isOpen:D,onClose:()=>w(!1),isFooterRequired:!0,_isExpanded:!1,size:"large",overlay:!0,onCloseIconClick:()=>w(!1),children:[e.jsx("span",{children:"Drawer Body Large"}),e.jsx(o,{onClick:()=>p(!0),label:"Show Medium Drawer",variant:"primary"})]}),C&&e.jsxs(a,{...r,isOpen:C,onClose:()=>p(!1),isFooterRequired:!0,_isExpanded:!1,size:"medium",overlay:!0,onCloseIconClick:()=>p(!1),children:[e.jsx("span",{children:"Drawer Body Medium"}),e.jsx(o,{onClick:()=>h(!0),label:"Show Small Drawer",variant:"primary"})]}),S&&e.jsx(a,{...r,isOpen:S,onClose:()=>h(!1),isFooterRequired:!0,_isExpanded:!1,size:"small",onCloseIconClick:()=>h(!1),overlay:!0,children:e.jsx("span",{children:"Drawer Body Small"})})]})}};var g,y,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    size: 'medium',
    showHeader: true
  }
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var b,v,k;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    showHeader: false,
    size: 'medium'
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(k=(v=n.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var B,L,j;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    customHeader: <div>\r
        <h3>My Custom Header</h3>\r
      </div>
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(j=(L=l.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var M,I,F;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    customFooter: <div>\r
        <h3>My Custom Footer</h3>\r
      </div>
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(F=(I=i.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var H,z,E;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    leftTertiaryButtonProps: {
      label: 'Help',
      onClick: () => {}
    },
    rightTertiaryButtonProps: {
      label: 'More Info',
      onClick: () => {}
    }
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(E=(z=d.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var X,A,_;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    zIndex: 1050
  },
  parameters: {
    docs: {
      disable: true
    }
  }
}`,...(_=(A=u.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var O,P,R;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [showXLDrawer, setShowXLDrawer] = useState(false);
    const [showLargeDrawer, setShowLargeDrawer] = useState(false);
    const [showMediumDrawer, setShowMediumDrawer] = useState(false);
    const [showSmallDrawer, setShowSmallDrawer] = useState(false);
    return <>\r
        <Button onClick={() => setShowXLDrawer(true)} label="Show X-Large Drawer" variant="primary" />\r
        {showXLDrawer && <Drawer {...defaultArgs} isOpen={showXLDrawer} onClose={() => setShowXLDrawer(false)} isFooterRequired _isExpanded={false} size="x-large" overlay onCloseIconClick={() => setShowXLDrawer(false)}>\r
            <span>Drawer Body XL</span>\r
            <Button onClick={() => setShowLargeDrawer(true)} label="Show Large Drawer" variant="primary" />\r
          </Drawer>}\r
\r
        {showLargeDrawer && <Drawer {...defaultArgs} isOpen={showLargeDrawer} onClose={() => setShowLargeDrawer(false)} isFooterRequired _isExpanded={false} size="large" overlay onCloseIconClick={() => setShowLargeDrawer(false)}>\r
            <span>Drawer Body Large</span>\r
            <Button onClick={() => setShowMediumDrawer(true)} label="Show Medium Drawer" variant="primary" />\r
          </Drawer>}\r
\r
        {showMediumDrawer && <Drawer {...defaultArgs} isOpen={showMediumDrawer} onClose={() => setShowMediumDrawer(false)} isFooterRequired _isExpanded={false} size="medium" overlay onCloseIconClick={() => setShowMediumDrawer(false)}>\r
            <span>Drawer Body Medium</span>\r
            <Button onClick={() => setShowSmallDrawer(true)} label="Show Small Drawer" variant="primary" />\r
          </Drawer>}\r
\r
        {showSmallDrawer && <Drawer {...defaultArgs} isOpen={showSmallDrawer} onClose={() => setShowSmallDrawer(false)} isFooterRequired _isExpanded={false} size="small" onCloseIconClick={() => setShowSmallDrawer(false)} overlay>\r
            <span>Drawer Body Small</span>\r
          </Drawer>}\r
      </>;
  }
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const ee=["Default","WithoutHeader","WithCustomHeader","WithCustomFooter","WithTertiaryButtons","WithCustomZIndex","Controlled"];export{c as Controlled,t as Default,i as WithCustomFooter,l as WithCustomHeader,u as WithCustomZIndex,d as WithTertiaryButtons,n as WithoutHeader,ee as __namedExportsOrder,$ as default};
