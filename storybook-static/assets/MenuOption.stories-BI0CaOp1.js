import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{M as r}from"./MenuOption-DncJFCYj.js";import{r as c}from"./index-DJO9vBfz.js";import{I as P}from"./Icon-BnrH6PuI.js";import"./index-NZcV-alF.js";import"./Tooltip-jHEmaokv.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";import"./Typography-DdMJCn-_.js";import"./useClickOutside-BYc9KT_v.js";const A={title:"Components/MenuOption",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{iconName:{control:"text",description:"Name of the icon to display in the button.",defaultValue:"more"},labelName:{control:"text",description:"Label text displayed beside the icon.",defaultValue:"Menu"},tooltipTitle:{control:"text",description:"Tooltip text displayed on hover.",defaultValue:"Select an option"},tooltipPlacement:{control:{type:"select",options:["top","down","left","right"]},description:"Placement of the tooltip relative to the button.",defaultValue:"top"},dropdownPlacement:{control:{type:"select",options:["top","down","left","right"]},description:"Placement of the dropdown menu relative to the button.",defaultValue:"down"}}},i=[{label:e.jsxs("div",{children:["hello ",e.jsx(P,{name:"edit"})]}),value:"opt1",icon:"success"},{label:"Option 2",value:"opt2",icon:"success"},{label:"Delete",value:"deleteOpt",icon:"delete",iconColor:"var(--delete-text-color)"}],s=o=>{alert(`Option clicked: ${o.label}`)},t={args:{iconName:"more",labelName:"Controlled Menu",tooltipTitle:"Select an option",dropdownPlacement:"top"},render:o=>{const n=c.useRef(null);return e.jsx("div",{ref:n,style:{display:"flex",height:"100vh",alignItems:"center"},children:e.jsx(r,{...o,options:i,targetRef:n,onOptionClick:s,dropdownPlacement:"down"})})},parameters:{docs:{description:{story:"A controlled `MenuOption` with customizable tooltip and dropdown placement."}}}},a={args:{...t.args,dropdownPlacement:"top"},render:o=>{const n=c.useRef(null);return e.jsx("div",{ref:n,children:e.jsx(r,{...o,options:i,targetRef:n,onOptionClick:s})})},parameters:{docs:{description:{story:"Dropdown menu positioned above the button."}}}},p={args:{...t.args,dropdownPlacement:"down"},render:o=>e.jsx("div",{id:"more",children:e.jsx(r,{...o,options:i,targetRef:"more",onOptionClick:s})}),parameters:{docs:{description:{story:"Dropdown menu positioned below the button."}}}},l={args:{...t.args,dropdownPlacement:"left"},render:o=>{const n=c.useRef(null);return e.jsx("div",{ref:n,children:e.jsx(r,{...o,options:i,targetRef:n,onOptionClick:s})})},parameters:{docs:{description:{story:"Dropdown menu positioned to the left of the button."}}}},d={args:{...t.args,dropdownPlacement:"right"},render:o=>{const n=c.useRef(null);return e.jsx("div",{ref:n,children:e.jsx(r,{...o,options:i,targetRef:n,onOptionClick:s})})},parameters:{docs:{description:{story:"Dropdown menu positioned to the right of the button."}}}};var m,u,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    iconName: 'more',
    labelName: 'Controlled Menu',
    tooltipTitle: 'Select an option',
    dropdownPlacement: 'top'
  },
  render: args => {
    const moreRef = useRef<HTMLDivElement>(null);
    return <div ref={moreRef} style={{
      display: 'flex',
      height: '100vh',
      alignItems: 'center'
    }}>\r
        <MenuOption {...args} options={options} targetRef={moreRef} // Make sure targetRef is passed properly here
      onOptionClick={handleOptionClick} dropdownPlacement="down" // Dropdown placement for testing
      />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'A controlled \`MenuOption\` with customizable tooltip and dropdown placement.'
      }
    }
  }
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,h,O;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...ControlledMenuOption.args,
    dropdownPlacement: 'top'
  },
  render: args => {
    const moreRef = useRef<HTMLDivElement>(null);
    return <div ref={moreRef}>\r
        <MenuOption {...args} options={options} targetRef={moreRef} onOptionClick={handleOptionClick} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu positioned above the button.'
      }
    }
  }
}`,...(O=(h=a.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var R,w,M;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...ControlledMenuOption.args,
    dropdownPlacement: 'down'
  },
  render: args => {
    return <div id="more">\r
        <MenuOption {...args} options={options} targetRef={'more'} onOptionClick={handleOptionClick} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu positioned below the button.'
      }
    }
  }
}`,...(M=(w=p.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var v,b,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...ControlledMenuOption.args,
    dropdownPlacement: 'left'
  },
  render: args => {
    const moreRef = useRef<HTMLDivElement>(null);
    return <div ref={moreRef}>\r
        <MenuOption {...args} options={options} targetRef={moreRef} onOptionClick={handleOptionClick} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu positioned to the left of the button.'
      }
    }
  }
}`,...(C=(b=l.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var x,y,k;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...ControlledMenuOption.args,
    dropdownPlacement: 'right' // Proper dropdown placement
  },
  render: args => {
    const moreRef = useRef<HTMLDivElement>(null);
    return <div ref={moreRef}>\r
        <MenuOption {...args} options={options} targetRef={moreRef} // Properly pass ref to targetRef
      onOptionClick={handleOptionClick} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu positioned to the right of the button.'
      }
    }
  }
}`,...(k=(y=d.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const B=["ControlledMenuOption","MenuOptionTop","MenuOptionBottom","MenuOptionLeft","MenuOptionRight"];export{t as ControlledMenuOption,p as MenuOptionBottom,l as MenuOptionLeft,d as MenuOptionRight,a as MenuOptionTop,B as __namedExportsOrder,A as default};
