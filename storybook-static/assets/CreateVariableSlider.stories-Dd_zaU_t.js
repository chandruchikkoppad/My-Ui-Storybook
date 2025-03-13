import{j as L}from"./jsx-runtime-SKoiH9zj.js";import{r as a}from"./index-DJO9vBfz.js";import{C as b}from"./CreateVariableSlider-EDnTXRW8.js";import"./Drawer-Bj9d4h3e.js";import"./index-CFN9ZEHn.js";import"./Button-CpFgCZ6s.js";/* empty css                */import"./Icon-BnrH6PuI.js";import"./index-NZcV-alF.js";import"./Typography-DdMJCn-_.js";import"./useEscKeyEvent-_4Zk5j0a.js";import"./ThemeProvider-D5XEyBwi.js";import"./Input-BT-svg7L.js";import"./checkEmpty-xi6SckPb.js";import"./Select-BJocvAjy.js";import"./getSelectOptionValue-DZyM0SAQ.js";import"./useClickOutside-BYc9KT_v.js";import"./Tooltip-jHEmaokv.js";import"./usePortalPosition-DKFkIZLt.js";import"./Checkbox-DE1WcxCl.js";const k={title:"Components/CreateVariableSlider",component:b},l={render:m=>{const[n,p]=a.useState(""),[t,c]=a.useState(""),[r,V]=a.useState({label:"Local Variable",value:"LOCAL"}),[i,d]=a.useState(!1),h=[{label:"Local Variable",value:"LOCAL"},{label:"Global Variable",value:"GLOBAL"},{label:"Project Environment Variable",value:"PROJECT_ENVIRONMENT"}],v=e=>{p(e)},C=e=>{c(e)},g=e=>{V(e)},T=()=>{let e={name:n,value:t,type:r.value,hideValue:i};console.log("Variable :",e)};return L.jsx(b,{...m,isOpen:!0,variableName:n,value:t,selectedVariableType:r,hideValue:i,variableTypesList:h,onNameChange:v,onValueChange:C,onVariableTypeChange:g,onHideChange:d,handleSubmit:T})}};var o,s,u;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [variableName, setVariableName] = useState('');
    const [value, setValue] = useState('');
    const [selectedVariableType, setSelectedVariableType] = useState({
      label: 'Local Variable',
      value: 'LOCAL'
    });
    const [hideValue, setHideValue] = useState(false);
    const variableTypeList = [{
      label: 'Local Variable',
      value: 'LOCAL'
    }, {
      label: 'Global Variable',
      value: 'GLOBAL'
    }, {
      label: 'Project Environment Variable',
      value: 'PROJECT_ENVIRONMENT'
    }];
    const handleNameChange = value => {
      setVariableName(value);
    };
    const handleValueChange = value => {
      setValue(value);
    };
    const handleTypeChange = value => {
      setSelectedVariableType(value);
    };
    const handleSubmit = () => {
      let variable = {
        name: variableName,
        value,
        type: selectedVariableType.value,
        hideValue
      };
      console.log('Variable :', variable);
    };
    return <CreateVariableSlider {...args} isOpen={true} // Ensures the drawer is open for interaction
    variableName={variableName} value={value} selectedVariableType={selectedVariableType} hideValue={hideValue} variableTypesList={variableTypeList} onNameChange={handleNameChange} onValueChange={handleValueChange} onVariableTypeChange={handleTypeChange} onHideChange={setHideValue} handleSubmit={handleSubmit} />;
  }
}`,...(u=(s=l.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const q=["WithState"];export{l as WithState,q as __namedExportsOrder,k as default};
