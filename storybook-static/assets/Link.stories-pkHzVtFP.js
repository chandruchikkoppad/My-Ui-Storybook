import{j as a}from"./jsx-runtime-SKoiH9zj.js";import{r as u}from"./index-DJO9vBfz.js";import{c as p}from"./index-NZcV-alF.js";import{c as re}from"./checkEmpty-xi6SckPb.js";import{I as le}from"./Icon-BnrH6PuI.js";import{T as ie}from"./Tooltip-jHEmaokv.js";import{U as x}from"./regex-CmAMYcQS.js";import"./index-CFN9ZEHn.js";import"./ThemeProvider-D5XEyBwi.js";const m=u.forwardRef(({type:o="text",variant:d="primary",name:i="",label:n,disabled:s=!1,required:r=!1,placeholder:c="Enter input",value:l,error:t,helperText:e,noBorder:K,className:G="",onChange:X,onBlur:$,onFocus:W,autoComplete:z="off",autoFocus:P=!1,minValue:O=-1/0,maxValue:J=1/0,transparentBackground:Q=!1,size:L="small",isLabelRequired:E=!0,onClick:Y,onKeyUp:Z,...ee},ae)=>{const te=!re(l),ne=()=>{l&&!t&&window.open(l,"_blank")};return a.jsxs("fieldset",{className:p("ff-link-input-fieldset",{"ff-link-input-fieldset--disabled":s}),children:[a.jsxs("div",{className:p("ff-link-input-container",{"ff-link-input-container--float":te,"ff-link-input-container--disabled":!!s}),children:[E&&a.jsxs("label",{className:p(`ff-link-input-label-container ff-link-input-label-container--${L}`,{"ff-link-input-label-container--danger":!!t}),htmlFor:i,children:[r&&a.jsx("span",{className:"required-asterisk",children:"*"}),a.jsx("span",{className:p(`ff-link-input-label ff-link-input-label--${d}`,{"ff-link-input-label--no-hover":!!l,"ff-link-input-label--disabled":!!s,"ff-link-input-label--danger":!!t}),children:n})]}),a.jsx("input",{ref:ae,name:i,value:l,type:o,spellCheck:!1,id:i,className:p(`ff-link-input ff-link-input-${d} default-input ff-link-input--${L}`,{"ff-link-input--transparentBackground":!!Q,"ff-link-input--no-hover":!!l,"ff-link-input--disabled":!!s,"ff-link-input--danger":!!t,"ff-link-input--no-border":!!K,"ff-link-input--placeholder":!E},`${G}`),placeholder:c,disabled:s,onChange:X,onFocus:W,onBlur:$,autoComplete:z,autoFocus:P,min:O,max:J,onClick:Y,onKeyUp:Z,...ee}),a.jsx("div",{className:"input-link-icon",children:a.jsx(ie,{title:"Click here to navigate",children:a.jsx(le,{name:"link",onClick:t?()=>{}:ne})})})]}),e&&t&&a.jsx("span",{className:p("ff-link-input-message",{"ff-link-input-message--danger":!!t}),children:e})]})});try{m.displayName="Link",m.__docgenInfo={description:"",displayName:"Link",props:{name:{defaultValue:{value:""},description:"Name | name of the input field",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label | field label to be displayed",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"value | input field value",name:"value",required:!0,type:{name:"string"}},error:{defaultValue:null,description:"error | If true, error message will be displayed",name:"error",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"helperText | error, success, warning message to be shown",name:"helperText",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"variants to set color/style of the input field",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'}]}},type:{defaultValue:{value:"text"},description:"type to set color/style of the input field",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"password"'},{value:'"email"'},{value:'"url"'},{value:'"time"'}]}},disabled:{defaultValue:{value:"false"},description:"to disable the input field",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"if true, input field will be mandatory",name:"required",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Enter input"},description:"placeholder for the input field",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"classnames to style the input field",name:"className",required:!1,type:{name:"string"}},noBorder:{defaultValue:null,description:"noBorder prop 'true' removes border of input",name:"noBorder",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"onChange, onKeyDown, onBlur, onFocus actions",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>, item?: any) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<HTMLInputElement>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLInputElement, MouseEvent>) => void)"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"((event: KeyboardEvent<HTMLInputElement>) => void)"}},id:{defaultValue:null,description:"id to select the input field uniquely",name:"id",required:!1,type:{name:"string"}},autoComplete:{defaultValue:{value:"off"},description:"if on, suggestion popup will be displayed",name:"autoComplete",required:!1,type:{name:"enum",value:[{value:'"on"'},{value:'"off"'}]}},autoFocus:{defaultValue:{value:"false"},description:"if true, input field is in autofocus state",name:"autoFocus",required:!1,type:{name:"boolean"}},minValue:{defaultValue:{value:"-Infinity"},description:"minimum and maximum values for the number type input field and their functions",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!1,type:{name:"number"}},transparentBackground:{defaultValue:{value:"false"},description:"background of the input field prop",name:"transparentBackground",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"size for the input field",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},isLabelRequired:{defaultValue:{value:"true"},description:"isLabelRequired for the input field without label,showing placeholder",name:"isLabelRequired",required:!1,type:{name:"boolean"}}}}}catch{}const he={title:"Components/Link",component:m,parameters:{layout:"centered"},tags:["autodocs"]},f={name:"input",label:"",disabled:!1,placeholder:"Attached Link will be shown here if any URL is added",value:"",type:"text"},v={args:{...f,label:"Link",variant:"default",type:"text"}},h={args:{...f,label:"Link",variant:"primary",type:"text"}},y={args:{...f,label:"Link",variant:"primary",type:"text",value:"Disabled",disabled:!0,required:!0}},b={args:{...f,label:"Link",variant:"primary",type:"text",value:"",required:!0,autoFocus:!0}},g={render:()=>{const[o,d]=u.useState(""),[i,n]=u.useState(!1),[s,r]=u.useState(),c=t=>{const e=t.target.value;(i||!e)&&(x.test(e)?(n(!1),r("")):(n(!0),r("Enter a valid URL"))),d(e)},l=t=>{const e=t.target.value;e?x.test(e)?(n(!1),r("")):(n(!0),r("Enter a valid URL")):(n(!0),r("This field is required"))};return a.jsx(a.Fragment,{children:a.jsx(m,{...f,type:"text",onChange:c,disabled:!1,value:o,name:"Link",onBlur:l,label:"Link",placeholder:"Attached Link will be shown here if any URL is added",variant:"primary",required:!0,error:i,helperText:s,isLabelRequired:!1})})}},k={render:()=>{const[o,d]=u.useState(""),[i,n]=u.useState(!1),[s,r]=u.useState(),c=t=>{const e=t.target.value;(i||!e)&&(x.test(e)?(n(!1),r("")):(n(!0),r("Enter a valid URL"))),d(e)},l=t=>{const e=t.target.value;e?x.test(e)?(n(!1),r("")):(n(!0),r("Enter a valid URL")):(n(!0),r("This field is required"))};return a.jsx(a.Fragment,{children:a.jsx(m,{...f,type:"text",onChange:c,onBlur:l,disabled:!1,value:o,name:"Link",label:"Link",placeholder:"Attached Link will be shown here if any URL is added",variant:"primary",required:!0,error:i,helperText:s})})}};var V,q,w;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Link',
    variant: 'default',
    type: 'text'
  }
}`,...(w=(q=v.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var T,H,R;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Link',
    variant: 'primary',
    type: 'text'
  }
}`,...(R=(H=h.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var C,U,B;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Link',
    variant: 'primary',
    type: 'text',
    value: 'Disabled',
    disabled: true,
    required: true
  }
}`,...(B=(U=y.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var I,S,F;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Link',
    variant: 'primary',
    type: 'text',
    value: '',
    required: true,
    autoFocus: true
  }
}`,...(F=(S=b.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var j,_,A;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>();
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      if (error || !newValue) {
        if (!URL_REGEX.test(newValue)) {
          setError(true);
          setHelperText('Enter a valid URL');
        } else {
          setError(false);
          setHelperText('');
        }
      }
      setValue(newValue);
    };
    const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      if (!newValue) {
        setError(true);
        setHelperText('This field is required');
      } else if (!URL_REGEX.test(newValue)) {
        setError(true);
        setHelperText('Enter a valid URL');
      } else {
        setError(false);
        setHelperText('');
      }
    };
    return <>\r
        <Link {...defaultArgs} type="text" onChange={onChangeHandler} disabled={false} value={value} name="Link" onBlur={onBlurHandler} label="Link" placeholder="Attached Link will be shown here if any URL is added" variant="primary" required={true} error={error} helperText={helperText} isLabelRequired={false} />\r
      </>;
  }
}`,...(A=(_=g.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var N,M,D;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>();
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      if (error || !newValue) {
        if (!URL_REGEX.test(newValue)) {
          setError(true);
          setHelperText('Enter a valid URL');
        } else {
          setError(false);
          setHelperText('');
        }
      }
      setValue(newValue);
    };
    const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      if (!newValue) {
        setError(true);
        setHelperText('This field is required');
      } else if (!URL_REGEX.test(newValue)) {
        setError(true);
        setHelperText('Enter a valid URL');
      } else {
        setError(false);
        setHelperText('');
      }
    };
    return <>\r
        <Link {...defaultArgs} type="text" onChange={onChangeHandler} onBlur={onBlurHandler} disabled={false} value={value} name="Link" label="Link" placeholder="Attached Link will be shown here if any URL is added" variant="primary" required={true} error={error} helperText={helperText} />\r
      </>;
  }
}`,...(D=(M=k.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const ye=["Default","Primary","DisabledWithValue","AutoFocusInput","WithoutLabel","Controlled"];export{b as AutoFocusInput,k as Controlled,v as Default,y as DisabledWithValue,h as Primary,g as WithoutLabel,ye as __namedExportsOrder,he as default};
