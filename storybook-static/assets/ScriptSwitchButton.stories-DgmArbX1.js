import{j as n}from"./jsx-runtime-SKoiH9zj.js";import{r as x}from"./index-DJO9vBfz.js";import{I as d}from"./Icon-BnrH6PuI.js";import{T as l}from"./Tooltip-jHEmaokv.js";import"./index-NZcV-alF.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";const r=({selected:a="text",handleClick:o,tabList:e})=>{const t=e==null?void 0:e.includes("Automation"),c=e==null?void 0:e.includes("Manual");return n.jsxs("div",{className:"ff-script-switch-container",children:[n.jsx(l,{title:t?"Automation":"Add Automation",zIndex:1e3,children:n.jsx("div",{className:`ff-script-switch-button ${a==="Automation"?"active":""}`,onClick:()=>o(t?"Automation":"Add Automation"),children:n.jsx(d,{name:t?"automation_testcase":"add_testcase",color:a==="Automation"?"var(--primary-button-text-color)":"var(--description-text)"})})}),n.jsx(l,{title:c?"Manual":"Add Manual",zIndex:1e3,children:n.jsx("div",{className:`ff-script-switch-button ${a==="Manual"?"active":""}`,onClick:()=>o(c?"Manual":"Add Manual"),children:n.jsx(d,{name:c?"manual_testcase":"add_testcase",color:a==="Manual"?"var(--primary-button-text-color)":"var(--description-text)"})})})]})};try{r.displayName="ScriptSwitchButton",r.__docgenInfo={description:"",displayName:"ScriptSwitchButton",props:{handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"(selected: string) => void"}},selected:{defaultValue:{value:"text"},description:"",name:"selected",required:!1,type:{name:"string"}},tabList:{defaultValue:null,description:"",name:"tabList",required:!0,type:{name:'("Automation" | "Manual")[]'}}}}}catch{}const j={title:"Components/ScriptSwitchButton",component:r,tags:["autodocs"],argTypes:{selected:{control:{type:"radio"},options:["Automation","Manual"]}}},s={args:{selected:"Automation",tabList:["Automation","Manual"],handleClick:()=>{}}},i={render:()=>{const[a,o]=x.useState("Automation"),e=t=>{t.includes("Automation"),!t.includes("Add")&&o(t)};return n.jsx(r,{selected:a,tabList:["Automation","Manual"],handleClick:e})}};var u,m,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    selected: 'Automation',
    tabList: ['Automation', 'Manual'],
    handleClick: () => {}
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,A,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string>('Automation');
    const handleChange = (selectedSwitch: string) => {
      if (selectedSwitch.includes('Automation')) {
        !selectedSwitch.includes('Add') && setSelected(selectedSwitch);
      } else {
        !selectedSwitch.includes('Add') && setSelected(selectedSwitch);
      }
    };
    return <ScriptSwitchButton selected={selected} tabList={['Automation', 'Manual']} handleClick={handleChange} />;
  }
}`,...(S=(A=i.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const k=["Default","Switch"];export{s as Default,i as Switch,k as __namedExportsOrder,j as default};
