import{j as c}from"./jsx-runtime-SKoiH9zj.js";import{C as r}from"./Checkbox-DE1WcxCl.js";import{r as l}from"./index-DJO9vBfz.js";import"./index-NZcV-alF.js";import"./Icon-BnrH6PuI.js";/* empty css                */import"./Typography-DdMJCn-_.js";const L={component:r,title:"Components/Checkbox",tags:["autodocs"],parameters:{layout:"centered"}},o={render:()=>{const[t,n]=l.useState(!0),a=e=>{n(e.target.checked)};return c.jsx(r,{label:"Default Checkbox",id:"default-checkbox",name:"default",checked:t,onChange:a})}},d={render:()=>{const[t,n]=l.useState(!0),a=e=>{n(e.target.checked)};return c.jsx(c.Fragment,{children:c.jsx(r,{label:"Partial Checkbox",id:"partial-checkbox",name:"partial",partial:!0,checked:t,onChange:a})})}},h={render:()=>{const[t,n]=l.useState(!1),a=e=>{n(e.target.checked)};return c.jsx(r,{label:t?"Checked! Click to uncheck.":"Click here to check.",id:"controlled-checkbox",name:"controlled",checked:t,onChange:a})}},s={render:()=>{const[t,n]=l.useState(!1),a=e=>{n(e.target.checked)};return c.jsx(c.Fragment,{children:["passed","failed","warning","skipped","flaky","closed","open","total"].map(e=>c.jsx(r,{label:`${t?"Checked! Click to uncheck.":"Click here to check. "} ${e}`,id:"controlled-checkbox",name:"controlled",checked:t,onChange:a,variant:e},e))})}};var k,C,i;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
    return <Checkbox label="Default Checkbox" id="default-checkbox" name="default" checked={checked} onChange={handleChange} />;
  }
}`,...(i=(C=o.parameters)==null?void 0:C.docs)==null?void 0:i.source}}};var u,p,m;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
    return <>\r
        <Checkbox label="Partial Checkbox" id="partial-checkbox" name="partial" partial={true} checked={checked} onChange={handleChange} />\r
      </>;
  }
}`,...(m=(p=d.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,x,b;h.parameters={...h.parameters,docs:{...(g=h.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
    return <Checkbox label={checked ? 'Checked! Click to uncheck.' : 'Click here to check.'} id="controlled-checkbox" name="controlled" checked={checked} onChange={handleChange} />;
  }
}`,...(b=(x=h.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,v,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
    return <>\r
        {['passed', 'failed', 'warning', 'skipped', 'flaky', 'closed', 'open', 'total'].map(varient => <Checkbox key={varient} label={\`\${checked ? 'Checked! Click to uncheck.' : 'Click here to check. '} \${varient}\`} id="controlled-checkbox" name="controlled" checked={checked} onChange={handleChange} variant={varient as any} />)}\r
      </>;
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const M=["Default","Partial","Controlled","Varient"];export{h as Controlled,o as Default,d as Partial,s as Varient,M as __namedExportsOrder,L as default};
