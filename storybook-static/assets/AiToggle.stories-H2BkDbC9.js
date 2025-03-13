import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as v}from"./index-DJO9vBfz.js";import{T}from"./Typography-DdMJCn-_.js";import{c as i}from"./index-NZcV-alF.js";const c=({onChange:t,disabled:n,checked:a=!1,id:o="toggle",path:y})=>{const C=k=>{t&&t(k)};return e.jsxs("div",{className:"ff--ai-switch-container",children:[e.jsx("input",{className:"ff--ai-switch-checkbox",id:`ff-toggle-${o}`,type:"checkbox",disabled:!!n,onChange:C,checked:a}),e.jsx("label",{className:i("ff--ai-switch-label",{"ff--ai-switch-label--disabled":n}),htmlFor:`ff-toggle-${o}`,children:e.jsx("span",{className:"ff--ai-switch-content",children:e.jsxs("span",{className:"ff--ai-switch-content",children:[e.jsx(T,{className:i("ff--ai-switch-typography",{left:a,right:!a}),as:"div",fontWeight:"bold",fontSize:18,color:a?"var(--base-bg-color)":"var(--ff-ai-toggle-text-color)",children:"AI"}),e.jsx("img",{className:"ff--ai-switch-image",src:y,alt:"AI image"})]})})})]})};try{c.displayName="AiToggle",c.__docgenInfo={description:"",displayName:"AiToggle",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: MouseEvent<HTMLInputElement, MouseEvent>) => void)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},id:{defaultValue:{value:"toggle"},description:"",name:"id",required:!1,type:{name:"string"}},path:{defaultValue:null,description:"",name:"path",required:!1,type:{name:"string"}}}}}catch{}const w={title:"Components/AiToggle",component:c,parameters:{layout:"centered"},argTypes:{onChange:{action:"changed"},disabled:{control:"boolean"},checked:{control:"boolean"},id:{control:"text"}}},s={args:{disabled:!1,checked:!1,id:"toggle1"}},r={args:{...s.args,disabled:!0,id:"toggle2"}},l={render:()=>{const[t,n]=v.useState(!1),a=o=>{n(o.target.checked)};return e.jsx(c,{id:"toggle8",checked:t,onChange:a})}};var d,g,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    disabled: false,
    checked: false,
    id: 'toggle1'
  }
}`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var f,m,u;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    id: 'toggle2'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,b,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      setChecked((e.target as HTMLInputElement).checked);
    };
    return <AiToggle id="toggle8" checked={checked} onChange={handleChange} />;
  }
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const A=["Default","Disabled","Controlled"];export{l as Controlled,s as Default,r as Disabled,A as __namedExportsOrder,w as default};
