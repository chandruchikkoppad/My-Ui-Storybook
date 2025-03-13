import{j as a}from"./jsx-runtime-SKoiH9zj.js";import{r as h}from"./index-DJO9vBfz.js";const c=({selected:e="text",firstButton:t="File",secondButton:n="File",handleClick:o})=>a.jsxs("div",{className:"toggle-container",children:[a.jsx("button",{className:`toggle-button ${e===t?"active":""}`,onClick:()=>o(t),children:t}),a.jsx("button",{className:`toggle-button ${e===n?"active":""}`,onClick:()=>o(n),children:n})]});try{c.displayName="ToggleSwitch",c.__docgenInfo={description:"",displayName:"ToggleSwitch",props:{firstButton:{defaultValue:{value:"File"},description:"",name:"firstButton",required:!1,type:{name:"string"}},secondButton:{defaultValue:{value:"File"},description:"",name:"secondButton",required:!1,type:{name:"string"}},handleClick:{defaultValue:null,description:"",name:"handleClick",required:!0,type:{name:"(selected: string) => void"}},selected:{defaultValue:{value:"text"},description:"",name:"selected",required:!1,type:{name:"string"}}}}}catch{}const w={title:"Components/ToggleSwitch",component:c,tags:["autodocs"],argTypes:{selected:{control:{type:"radio"},options:["Automation","Manual"]}}},r={args:{selected:"Automation",firstButton:"Automation",secondButton:"Manual",handleClick:()=>{}}},s={render:()=>{const e=()=>{const[t,n]=h.useState("Automation"),o=m=>{n(m)};return a.jsx(c,{selected:t,firstButton:"Automation",secondButton:"Manual",handleClick:o})};return a.jsx(e,{})}};var l,i,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    selected: "Automation",
    firstButton: "Automation",
    secondButton: "Manual",
    handleClick: () => {}
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,p,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const ToggleSwitchWrapper = () => {
      const [selected, setSelected] = useState<string>("Automation");
      const handleChange = (selectedSwitch: string) => {
        setSelected(selectedSwitch);
      };
      return <ToggleSwitch selected={selected} firstButton="Automation" secondButton="Manual" handleClick={handleChange} />;
    };
    return <ToggleSwitchWrapper />;
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const x=["Default","Switch"];export{r as Default,s as Switch,x as __namedExportsOrder,w as default};
