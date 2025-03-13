import{j as n}from"./jsx-runtime-SKoiH9zj.js";import{I as y}from"./Input-BT-svg7L.js";import{r as s}from"./index-DJO9vBfz.js";import"./index-NZcV-alF.js";import"./checkEmpty-xi6SckPb.js";import"./Icon-BnrH6PuI.js";const J={title:"Components/Input",component:y,parameters:{layout:"centered"},tags:["autodocs"]},u={name:"input",label:"",disabled:!1,placeholder:"Enter your name",value:"",type:"text"},c={args:{...u,label:"Name",variant:"default",type:"text"}},g={args:{...u,label:"Name",variant:"primary",type:"text"}},h={args:{...u,label:"Name",variant:"primary",type:"text",value:"Disabled",disabled:!0,required:!0}},v={args:{...u,label:"Name",variant:"primary",type:"text",value:"",required:!0,autoFocus:!0}},f={render:()=>{const[l,o]=s.useState(""),[i,r]=s.useState(!1),[p,t]=s.useState(),m=e=>{var d;const a=e.target.value;e.target&&(a.length<=0?(r(!0),t(`${(d=e==null?void 0:e.target)==null?void 0:d.name} is required`)):a.length>=10?(r(!0),t("Name should be within 10 characters")):(r(!1),t(""))),o(a)};return n.jsx(n.Fragment,{children:n.jsx(y,{...u,type:"text",onChange:m,disabled:!1,value:l,name:"Name",label:"Name",placeholder:"Enter name here",variant:"primary",required:!0,error:i,helperText:p,isLabelRequired:!1})})}},x={render:()=>{const[l,o]=s.useState(0),[i,r]=s.useState(!1),[p,t]=s.useState(),m=e=>{const a=e.target.value;o(parseInt(a)),e.target&&(l<=-2||l>=111?(r(!0),t("value is out of range")):(r(!1),t("")))};return n.jsx(n.Fragment,{children:n.jsx(y,{...u,type:"number",minValue:"-2",maxValue:"111",onChange:m,disabled:!1,value:l,name:"Value",label:"Value",placeholder:"Enter value here",variant:"primary",required:!0,error:i,helperText:p,setUpdatedNumberValue:e=>o(e)})})}},b={render:()=>{const[l,o]=s.useState(""),[i,r]=s.useState(!1),[p,t]=s.useState(),m=e=>{var d;const a=e.target.value;e.target&&(a.length<=0?(r(!0),t(`${(d=e==null?void 0:e.target)==null?void 0:d.name} is required`)):a.length>=10?(r(!0),t("Name should be within 10 characters")):(r(!1),t(""))),o(a)};return n.jsx(n.Fragment,{children:n.jsx(y,{...u,type:"text",onChange:m,disabled:!1,value:l,name:"Name",label:"Name",placeholder:"Enter name here",variant:"primary",required:!0,error:i,helperText:p})})}};var E,T,H;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Name',
    variant: 'default',
    type: 'text'
  }
}`,...(H=(T=c.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var S,V,N;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Name',
    variant: 'primary',
    type: 'text'
  }
}`,...(N=(V=g.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var C,q,I;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Name',
    variant: 'primary',
    type: 'text',
    value: 'Disabled',
    disabled: true,
    required: true
  }
}`,...(I=(q=h.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var A,j,F;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Name',
    variant: 'primary',
    type: 'text',
    value: '',
    required: true,
    autoFocus: true
  }
}`,...(F=(j=v.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var L,w,D;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>();
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (event.target) {
        if (value.length <= 0) {
          setError(true);
          setHelperText(\`\${event?.target?.name} is required\`);
        } else if (value.length >= 10) {
          setError(true);
          setHelperText(\`Name should be within 10 characters\`);
        } else {
          setError(false);
          setHelperText('');
        }
      }
      setValue(value);
    };
    return <>\r
        <Input {...defaultArgs} type="text" onChange={onChangeHandler} disabled={false} value={value} name="Name" label="Name" placeholder="Enter name here" variant="primary" required={true} error={error} helperText={helperText} isLabelRequired={false} />\r
      </>;
  }
}`,...(D=(w=f.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var W,$,M;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>();
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      setValue(parseInt(inputValue));
      if (event.target) {
        if (value <= -2 || value >= 111) {
          setError(true);
          setHelperText(\`value is out of range\`);
        } else {
          setError(false);
          setHelperText('');
        }
      }
    };
    return <>\r
        <Input {...defaultArgs} type="number" minValue="-2" maxValue="111" onChange={onChangeHandler} disabled={false} value={value} name="Value" label="Value" placeholder="Enter value here" variant="primary" required={true} error={error} helperText={helperText} setUpdatedNumberValue={value => setValue(value)} />\r
      </>;
  }
}`,...(M=($=x.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var R,P,U;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>();
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (event.target) {
        if (value.length <= 0) {
          setError(true);
          setHelperText(\`\${event?.target?.name} is required\`);
        } else if (value.length >= 10) {
          setError(true);
          setHelperText(\`Name should be within 10 characters\`);
        } else {
          setError(false);
          setHelperText('');
        }
      }
      setValue(value);
    };
    return <>\r
        <Input {...defaultArgs} type="text" onChange={onChangeHandler} disabled={false} value={value} name="Name" label="Name" placeholder="Enter name here" variant="primary" required={true} error={error} helperText={helperText} />\r
      </>;
  }
}`,...(U=(P=b.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const K=["Default","Primary","DisabledWithValue","AutoFocusInput","WithoutLabel","withNumber","Controlled"];export{v as AutoFocusInput,b as Controlled,c as Default,h as DisabledWithValue,g as Primary,f as WithoutLabel,K as __namedExportsOrder,J as default,x as withNumber};
