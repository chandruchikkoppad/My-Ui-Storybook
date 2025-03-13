import{j as m}from"./jsx-runtime-SKoiH9zj.js";import{r as h}from"./index-DJO9vBfz.js";import{E as f}from"./EditLabel-CnoQrhi6.js";import"./Icon-BnrH6PuI.js";import"./index-NZcV-alF.js";import"./Select-BJocvAjy.js";import"./Typography-DdMJCn-_.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";import"./getSelectOptionValue-DZyM0SAQ.js";import"./useClickOutside-BYc9KT_v.js";import"./Tooltip-jHEmaokv.js";import"./Button-CpFgCZ6s.js";/* empty css                */import"./usePortalPosition-DKFkIZLt.js";import"./Toast-CWcBRmbh.js";import"./HighlightText-DXRXqgoy.js";const K={title:"Components/EditLabel",component:f,parameters:{layout:"centered"},tags:["autodocs"]};let S=[{label:"option 1",value:"option 1"},{label:"option 2",value:"option 2"},{label:"option 3",value:"option 3"},{label:"option 4",value:"option 4"}],w={label:"option 2",value:"option 2"};const T={label:"Field-Name",placeholder:"Enter your name",optionsList:S,selectedOption:w,isDisable:{confirm:!1,cancel:!1,textField:!1}},n={args:{...T,value:"abc",isOnBlurTrue:!1}},o={render:()=>{const[l,i]=h.useState("script 123"),s=(t,c)=>(i(t),{text:t,currentSelectedOption:c}),d=t=>t?t.length<3?"Please enter at least 3 characters.":"":"Text is required";return m.jsx(f,{withDropdown:!0,value:l,optionsList:S,selectedOption:w,onConfirm:s,inputFieldWidth:100,selectFieldWidth:100,tooltip:{tooltipTitle:"text",tooltipPlacement:"bottom"},required:!0,handleCustomError:d,onClick:()=>{console.log("single click")}})}},a={render:()=>{const[l,i]=h.useState([{id:"1",text:"hello World"},{id:"2",text:"check it"},{id:"3",text:"dont check"}]),[s,d]=h.useState(null),t=(e,r)=>{i(u=>u.map(p=>p.id===e?{...p,text:r}:p))},c=e=>{const r={"Name is required":!e,"Name should contain at least 3 characters":e.length>0&&e.length<3,"Name cannot exceed 25 characters":e.length>25};return Object.keys(r).find(u=>r[u])||""},L=e=>{console.log(e.target.value)};return m.jsx("div",{style:{padding:"20px"},children:l.map(e=>m.jsx(f,{id:e.id,onConfirm:r=>t(e.id,r),value:e.text,label:"Edit Variable",withDropdown:!1,handleCustomError:c,inputFieldWidth:120,isDisable:{confirm:!1,cancel:!1,textField:!1},isEditable:s===e.id,setIsEditable:d,highlightText:"HELLO",handleOnChange:L,cursor:"default"},e.id))})}};var x,g,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    value: 'abc',
    isOnBlurTrue: false
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var E,v,C;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = useState('script 123');
    const handleOnConfirm = (text, currentSelectedOption) => {
      setText(text);
      return {
        text,
        currentSelectedOption
      };
    };
    const handleCustomError = (inputValue: string) => {
      if (!inputValue) {
        return 'Text is required';
      }
      if (inputValue.length < 3) {
        return 'Please enter at least 3 characters.';
      }
      return '';
    };
    return <EditLabel withDropdown={true} value={text} optionsList={optionsList} selectedOption={selectedOption} onConfirm={handleOnConfirm} inputFieldWidth={100} selectFieldWidth={100} tooltip={{
      tooltipTitle: 'text',
      tooltipPlacement: 'bottom'
    }} required handleCustomError={handleCustomError} onClick={() => {
      console.log('single click');
    }} />;
  }
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var O,k,D;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [values, setValues] = useState([{
      id: '1',
      text: 'hello World'
    }, {
      id: '2',
      text: 'check it'
    }, {
      id: '3',
      text: 'dont check'
    }]);
    const [editableId, setEditableId] = useState<string | null>(null);
    const handleOnConfirm = (id: string, text: string) => {
      setValues(prevValues => prevValues.map(value => value.id === id ? {
        ...value,
        text
      } : value));
    };
    const handleCustomError = (inputValue: string) => {
      const errors: {
        [key: string]: boolean;
      } = {
        'Name is required': !inputValue,
        'Name should contain at least 3 characters': inputValue.length > 0 && inputValue.length < 3,
        'Name cannot exceed 25 characters': inputValue.length > 25
      };
      return Object.keys(errors).find(key => errors[key]) || '';
    };
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    };
    return <div style={{
      padding: '20px'
    }}>\r
        {values.map(value => <EditLabel key={value.id} id={value.id} onConfirm={text => handleOnConfirm(value.id, text)} value={value.text} label="Edit Variable" withDropdown={false} handleCustomError={handleCustomError} inputFieldWidth={120} isDisable={{
        confirm: false,
        cancel: false,
        textField: false
      }} isEditable={editableId === value.id} setIsEditable={setEditableId} highlightText="HELLO" handleOnChange={handleOnChange} cursor='default' />)}\r
      </div>;
  }
}`,...(D=(k=a.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const Q=["Default","withDropdown","SelectOneDisableOther"];export{n as Default,a as SelectOneDisableOther,Q as __namedExportsOrder,K as default,o as withDropdown};
