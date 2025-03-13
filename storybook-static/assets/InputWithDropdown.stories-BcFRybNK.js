import{j as n}from"./jsx-runtime-SKoiH9zj.js";import{r as o}from"./index-DJO9vBfz.js";import{c as p}from"./index-NZcV-alF.js";import{S as D}from"./Select-BJocvAjy.js";import{T as U}from"./Typography-DdMJCn-_.js";import{c as I}from"./checkEmpty-xi6SckPb.js";import"./Icon-BnrH6PuI.js";import"./index-CFN9ZEHn.js";import"./ThemeProvider-D5XEyBwi.js";import"./getSelectOptionValue-DZyM0SAQ.js";import"./useClickOutside-BYc9KT_v.js";import"./Tooltip-jHEmaokv.js";import"./Button-CpFgCZ6s.js";/* empty css                */import"./usePortalPosition-DKFkIZLt.js";const b=o.forwardRef(({name:l="",label:i,value:d,disabled:t=!1,required:f=!1,placeholder:r,error:a,helperText:m,optionsList:c,selectedOption:h={label:"",value:""},autoComplete:v="off",onDropdownChangeHandler:e=()=>{},onInputChangeHandler:s,onInputBlurHandler:k,onClick:B,onKeyUp:F,onFocus:P,optionsRequired:y=!0,dropdownPosition:u="right",type:Z="text",leftDropDownPositionZindex:A,rightDropDownPositionZindex:R},K)=>{const g=!I(d)||u==="left";return n.jsxs("div",{className:p("ff-input-with-dropdown-container",{"ff-input-with-dropdown-container--filled":g}),children:[n.jsxs("fieldset",{className:p("ff-input-with-dropdown",{"ff-input-with-dropdown--filled":g,"ff-input-with-dropdown--no-hover":g,"ff-input-with-dropdown--disabled":!!t,"ff-input-with-dropdown--error":!!a,[`ff-input-with-dropdown--${u}`]:u}),children:[u==="left"&&n.jsxs(n.Fragment,{children:[n.jsx(D,{optionsList:c,selectedOption:h,showLabel:!1,showBorder:!1,onChange:e,disabled:t||!y,optionZIndex:A,optionsRequired:y,className:p("ff-floating-dropdown",{"ff-floating-dropdown--disabled":!!t,"ff-floating-dropdown--error":!!a,"ff-floating-dropdown--left":u==="left"}),width:94,height:30}),n.jsx("div",{className:"seperatorline"})]}),n.jsxs("div",{className:p("ff-floating-label-input-container"),children:[n.jsx(U,{as:"label",htmlFor:l,className:p("ff-floating-label",{"ff-floating-label--filled":g,"ff-floating-label--no-hover":g,"ff-floating-label--error":!!a}),required:f,children:i}),n.jsx("input",{ref:K,name:l,type:Z,id:l,value:d,onChange:s,onBlur:k,placeholder:r,autoComplete:v,required:f,disabled:t,onClick:B,onKeyUp:F,onFocus:P,className:p("ff-floating-input",{"ff-floating-input--filled":g,"ff-floating-input--disabled":!!t,"ff-floating-input--error":!!a,"ff-floating-input--left-dropdown":u==="left"})})]}),u==="right"&&n.jsx(D,{optionsList:c,selectedOption:h,showLabel:!1,showBorder:!1,optionZIndex:R,onChange:e,disabled:t||!y,optionsRequired:y,className:p("ff-floating-dropdown",{"ff-floating-dropdown--disabled":!!t,"ff-floating-dropdown--error":!!a}),width:120,height:30})]}),a&&m&&n.jsx("span",{className:"ff-helper-text",children:m})]})});try{b.displayName="InputWithDropdown",b.__docgenInfo={description:"",displayName:"InputWithDropdown",props:{name:{defaultValue:{value:""},description:"Name | name of the input field",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label | field label to be displayed",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"value | input field value",name:"value",required:!1,type:{name:"string | number"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"password"'},{value:'"email"'},{value:'"url"'},{value:'"time"'}]}},variant:{defaultValue:null,description:"variants to set color/style of the input field",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'}]}},error:{defaultValue:null,description:"error | If true, error message will be displayed",name:"error",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"helperText | error, success, warning message to be shown",name:"helperText",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"to disable the input field",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"if true, input field will be mandatory",name:"required",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"placeholder for the input field",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"classnames to style the input field",name:"className",required:!1,type:{name:"string"}},optionsList:{defaultValue:null,description:"Options for the select dropdown",name:"optionsList",required:!0,type:{name:"Option[]"}},selectedOption:{defaultValue:{value:"{ label: '', value: '' }"},description:"Selected option for the select dropdown",name:"selectedOption",required:!1,type:{name:"Option"}},onInputChangeHandler:{defaultValue:null,description:"onChange handler for input changes",name:"onInputChangeHandler",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},onDropdownChangeHandler:{defaultValue:{value:"() => { }"},description:"onChange handler for dropdown changes",name:"onDropdownChangeHandler",required:!1,type:{name:"((option: any) => void)"}},onInputBlurHandler:{defaultValue:null,description:"onInputBlurHandler action for input field",name:"onInputBlurHandler",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLInputElement, MouseEvent>) => void)"}},onKeyUp:{defaultValue:null,description:"",name:"onKeyUp",required:!1,type:{name:"((event: KeyboardEvent<HTMLInputElement>) => void)"}},id:{defaultValue:null,description:"id to select the input field uniquely",name:"id",required:!1,type:{name:"string"}},autoComplete:{defaultValue:{value:"off"},description:"if on, suggestion popup will be displayed",name:"autoComplete",required:!1,type:{name:"enum",value:[{value:'"on"'},{value:'"off"'}]}},minValue:{defaultValue:null,description:"minimum and maximum values for the number type input field",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!1,type:{name:"number"}},isBackgroundTransparent:{defaultValue:null,description:"background of the input field prop",name:"isBackgroundTransparent",required:!1,type:{name:"boolean"}},optionsRequired:{defaultValue:{value:"true"},description:"optionsRequired:false prop removes options from dropdown & shows static label only",name:"optionsRequired",required:!1,type:{name:"boolean"}},dropdownPosition:{defaultValue:{value:"right"},description:"",name:"dropdownPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},leftDropDownPositionZindex:{defaultValue:null,description:"",name:"leftDropDownPositionZindex",required:!1,type:{name:"number"}},rightDropDownPositionZindex:{defaultValue:null,description:"",name:"rightDropDownPositionZindex",required:!1,type:{name:"number"}}}}}catch{}const de={title:"Components/InputWithDropdown",component:b,parameters:{layout:"centered"},tags:["autodocs"]};let z=[{label:"option 1",value:"option 1"},{label:"option 2",value:"option 2"},{label:"option 3",value:"option 3"},{label:"option 4",value:"option 4"}],G={label:"option 2",value:"option 2"};const T={label:"Field-Name",disabled:!1,placeholder:"Enter your name",optionsList:z,selectedOption:G},w={args:{...T,disabled:!1,required:!1}},V={args:{...T,variant:"primary",value:12345,disabled:!0,required:!0}},x={render:()=>{const[l,i]=o.useState(0),[d,t]=o.useState(!1),[f,r]=o.useState(""),a=[{label:"milliseconds",value:"milliseconds"},{label:"seconds",value:"seconds"},{label:"minutes",value:"minutes"},{label:"hours",value:"hours"}],[m,c]=o.useState({label:"milliseconds",value:"milliseconds"}),h=e=>{c(e),i(0)},v=e=>{const s=parseInt(e.target.value);i(e.target.value),e.target&&(s<0||I(l)?(t(!0),r(`${e.target.name} is required`)):s>999?(t(!0),r(`${e.target.name} should be upto 999`)):(t(!1),r("")))};return n.jsx(b,{...T,name:"ImplicitTime",label:"ImplicitTime",placeholder:"Enter ImplicitTime here",value:l,required:!0,error:d,helperText:f,optionsList:a,selectedOption:m,onInputChangeHandler:v,onDropdownChangeHandler:h})}},q={render:()=>{const[l,i]=o.useState(0),[d,t]=o.useState(!1),[f,r]=o.useState(""),a=[{label:"Days",value:"Days"}],[m,c]=o.useState({label:"Days",value:"Days"}),h=e=>{c(e),i(0)},v=e=>{const s=parseInt(e.target.value);i(s),e.target&&(I(s)?(t(!0),r(`${e.target.name} is required`)):s>=366?(t(!0),r(`${e.target.name} should be upto 365`)):(t(!1),r("")))};return n.jsx(b,{...T,name:"Duration",label:"Duration",placeholder:"Enter Duration here",value:l,required:!0,error:d,helperText:f,optionsList:a,selectedOption:m,optionsRequired:!1,onInputChangeHandler:v,onDropdownChangeHandler:h})}};var H,E,C;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    disabled: false,
    required: false
  }
}`,...(C=(E=w.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var S,O,L;V.parameters={...V.parameters,docs:{...(S=V.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    variant: 'primary',
    value: 12345,
    disabled: true,
    required: true
  }
}`,...(L=(O=V.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var N,j,W;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | string>(0);
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>('');
    const optionsListToPass = [{
      label: 'milliseconds',
      value: 'milliseconds'
    }, {
      label: 'seconds',
      value: 'seconds'
    }, {
      label: 'minutes',
      value: 'minutes'
    }, {
      label: 'hours',
      value: 'hours'
    }];
    const [selectedOption, setSelectedOption] = useState<Option>({
      label: 'milliseconds',
      value: 'milliseconds'
    });
    const onDropdownChangeHandler = (option: Option) => {
      setSelectedOption(option);
      setValue(0);
    };
    const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = parseInt(event.target.value);
      setValue(event.target.value);
      if (event.target) {
        if (inputValue < 0 || checkEmpty(value)) {
          setError(true);
          setHelperText(\`\${event.target.name} is required\`);
        } else if (inputValue > 999) {
          setError(true);
          setHelperText(\`\${event.target.name} should be upto 999\`);
        } else {
          setError(false);
          setHelperText('');
        }
      }
    };
    return <InputWithDropdown {...defaultArgs} name="ImplicitTime" label="ImplicitTime" placeholder={\`Enter ImplicitTime here\`} value={value} required={true} error={error} helperText={helperText} optionsList={optionsListToPass} selectedOption={selectedOption} onInputChangeHandler={onInputChangeHandler} onDropdownChangeHandler={onDropdownChangeHandler} />;
  }
}`,...(W=(j=x.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var _,M,$;q.parameters={...q.parameters,docs:{...(_=q.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string>('');
    const optionsListToPass = [{
      label: 'Days',
      value: 'Days'
    }];
    const [selectedOption, setSelectedOption] = useState<Option>({
      label: 'Days',
      value: 'Days'
    });
    const onDropdownChangeHandler = (option: Option) => {
      setSelectedOption(option);
      setValue(0);
    };
    const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = parseInt(event.target.value);
      setValue(inputValue);
      if (event.target) {
        if (checkEmpty(inputValue)) {
          setError(true);
          setHelperText(\`\${event.target.name} is required\`);
        } else if (inputValue >= 366) {
          setError(true);
          setHelperText(\`\${event.target.name} should be upto 365\`);
        } else {
          setError(false);
          setHelperText('');
        }
      }
    };
    return <InputWithDropdown {...defaultArgs} name="Duration" label="Duration" placeholder={\`Enter Duration here\`} value={value} required={true} error={error} helperText={helperText} optionsList={optionsListToPass} selectedOption={selectedOption} optionsRequired={false} onInputChangeHandler={onInputChangeHandler} onDropdownChangeHandler={onDropdownChangeHandler} />;
  }
}`,...($=(M=q.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};const fe=["Default","DisabledWithValue","Controlled","InputWithStaticLabelWithoutOptions"];export{x as Controlled,w as Default,V as DisabledWithValue,q as InputWithStaticLabelWithoutOptions,fe as __namedExportsOrder,de as default};
