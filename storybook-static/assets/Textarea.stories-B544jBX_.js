import{j as l}from"./jsx-runtime-SKoiH9zj.js";import{T as E}from"./Textarea-D9SJPe55.js";import{r as i}from"./index-DJO9vBfz.js";import{c as R}from"./checkEmpty-xi6SckPb.js";import"./index-NZcV-alF.js";import"./Typography-DdMJCn-_.js";import"./regex-CmAMYcQS.js";const $={title:"Components/Textarea",component:E,parameters:{layout:"centered"},tags:["autodocs"]},o={name:"textarea",label:"",disabled:!1,placeholder:"Type Your Description Here",value:"",variant:"primary",rows:4,cols:30,capacity:200,resize:!1,errorText:"Add Description"},a={args:{...o,label:"Description",variant:"default"}},t={args:{...o,label:"Description",variant:"primary"}},s={args:{...o,label:"Description",variant:"primary",disabled:!0}},n={render:()=>{const[q,S]=i.useState(""),[C,u]=i.useState(!1),[A,c]=i.useState(),d=(e,r,j)=>j&&R(e)?(u(!0),c(`${r} is required`),!1):(u(!1),c(""),!0),V=e=>{const r=e.target.value;S(r),d(r,e.target.name,e.target.required)},B=e=>{const r=e.target.value;d(r,e.target.name,e.target.required)};return l.jsx(l.Fragment,{children:l.jsx(E,{...o,onChange:V,disabled:!1,capacity:200,value:q,name:"Description",label:"Description",placeholder:"Type Your Description Here",variant:"primary",required:!0,error:C,onBlur:B,errorText:A})})}};var p,m,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Description',
    variant: 'default'
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,f,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Description',
    variant: 'primary'
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var T,h,b;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Description',
    variant: 'primary',
    disabled: true
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,D,H;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>();
    const handleValidation = (value: string, name: string, isRequired: boolean) => {
      if (isRequired && checkEmpty(value)) {
        setError(true);
        setHelperText(\`\${name} is required\`);
        return false;
      }
      setError(false);
      setHelperText('');
      return true;
    };
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.target.value;
      setValue(value);
      handleValidation(value, event.target.name, event.target.required);
    };
    const onBlurHandler = (event: React.FocusEvent<HTMLTextAreaElement>) => {
      const value = event.target.value;
      handleValidation(value, event.target.name, event.target.required);
    };
    return <>\r
        <Textarea {...defaultArgs} onChange={onChangeHandler} disabled={false} capacity={200} value={value} name="Description" label="Description" placeholder="Type Your Description Here" variant="primary" required={true} error={error} onBlur={onBlurHandler} errorText={helperText} />\r
      </>;
  }
}`,...(H=(D=n.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};const w=["Default","Primary","Disabled","Controlled"];export{n as Controlled,a as Default,s as Disabled,t as Primary,w as __namedExportsOrder,$ as default};
