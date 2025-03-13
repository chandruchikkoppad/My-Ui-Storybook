import{j as t}from"./jsx-runtime-SKoiH9zj.js";import{r as a}from"./index-DJO9vBfz.js";import{C as d}from"./ConditionalDropdown-CdeKtMVH.js";import{v as w}from"./constants-CwbLlsYY.js";import{C as N}from"./CreateVariableSlider-EDnTXRW8.js";import"./checkEmpty-xi6SckPb.js";import"./VariableDropdown-DMFOrdX0.js";import"./Icon-BnrH6PuI.js";import"./index-NZcV-alF.js";import"./Typography-DdMJCn-_.js";import"./truncateText-D2e1-n0F.js";import"./Input-BT-svg7L.js";import"./Tooltip-jHEmaokv.js";import"./index-CFN9ZEHn.js";import"./ThemeProvider-D5XEyBwi.js";import"./Drawer-Bj9d4h3e.js";import"./Button-CpFgCZ6s.js";/* empty css                */import"./useEscKeyEvent-_4Zk5j0a.js";import"./Select-BJocvAjy.js";import"./getSelectOptionValue-DZyM0SAQ.js";import"./useClickOutside-BYc9KT_v.js";import"./usePortalPosition-DKFkIZLt.js";import"./Checkbox-DE1WcxCl.js";const le={title:"Components/ConditionalDropdown",component:d,args:{label:"Add Variables",placeholder:"Enter text",variableList:w,dropdownWidth:"138px",variant:"primary"},parameters:{layout:"centered"}},I=c=>{const o=a.useRef(null),[u,p]=a.useState(""),[r,s]=a.useState(!1),[L,y]=a.useState(""),[x,O]=a.useState(""),[H,P]=a.useState({label:"Local Variable",value:"LOCAL"}),[j,T]=a.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(d,{...c,onChange:e=>p(e.target.value),value:u,onCreateVariableClick:()=>s(!0),ref:o,showAddVariableIcon:!0}),r&&t.jsx(N,{isOpen:r,onClose:()=>s(!1),variableName:L,value:x,hideValue:j,handleSubmit:()=>{alert("Variable Created")},onHideChange:e=>{T(e)},onNameChange:e=>{y(e)},onValueChange:e=>O(e),onVariableTypeChange:e=>P(e),selectedVariableType:H,variableTypesList:[{label:"Local Variable",value:"LOCAL"},{label:"Global Variable",value:"GLOBAL"}]})]})},l=I.bind({});l.args={onCreateVariableClick:()=>alert("Create Variable clicked")};const n=I.bind({});n.args={inputValue:"Initial Text with $",onCreateVariableClick:()=>alert("Create Variable clicked")};const i={render:()=>{const[c,o]=a.useState(),[u,p]=a.useState(),r=[{_id:"1",name:"File1.txt",actualPath:"/documents/File1.txt",searchKey:"file1",parentId:"root"},{_id:"2",name:"File2.doc",actualPath:"/documents/File2.doc",searchKey:"file2",parentId:"root"},{_id:"3",name:"Image1.png",actualPath:"/images/Image1.png",searchKey:"image1",parentId:"folder1"},{_id:"4",name:"Presentation.ppt",actualPath:"/presentations/Presentation.ppt",searchKey:"presentation",parentId:"folder2"},{_id:"5",name:"Spreadsheet.xlsx",actualPath:"/spreadsheets/Spreadsheet.xlsx",searchKey:"spreadsheet",parentId:"folder3"},{_id:"6",name:"Code.js",actualPath:"/projects/Code.js",searchKey:"code",parentId:"folder4"}];return t.jsx(t.Fragment,{children:t.jsx(d,{label:"Select Path Using #",placeholder:"Enter # to search files",isHash:!0,dataFiles:r,dropdownWidth:"auto",setHashInputValue:o,onChange:s=>p(s.target.value),value:u})})}};var V,b,m;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [openCreateVariable, setOpenCreateVariable] = useState<boolean>(false);
  const [variableName, setVariableName] = useState<string>('');
  const [variableValue, setVariableValue] = useState<string>('');
  const [selectedVariable, setSelectedVariable] = useState<dynamicObject>({
    label: 'Local Variable',
    value: 'LOCAL'
  });
  const [hideValue, setHideValue] = useState<boolean>(false);
  return <>\r
      <ConditionalDropdown {...args} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)} value={inputValue} onCreateVariableClick={() => setOpenCreateVariable(true)} ref={inputRef} showAddVariableIcon />\r
      {openCreateVariable && <CreateVariableSlider isOpen={openCreateVariable} onClose={() => setOpenCreateVariable(false)} variableName={variableName} value={variableValue} hideValue={hideValue} handleSubmit={() => {
      alert('Variable Created');
    }} onHideChange={value => {
      setHideValue(value);
    }} onNameChange={value => {
      setVariableName(value);
    }} onValueChange={value => setVariableValue(value)} onVariableTypeChange={option => setSelectedVariable(option)} selectedVariableType={selectedVariable} variableTypesList={[{
      label: 'Local Variable',
      value: 'LOCAL'
    }, {
      label: 'Global Variable',
      value: 'GLOBAL'
    }]} />}\r
    </>;
}`,...(m=(b=l.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var h,C,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [openCreateVariable, setOpenCreateVariable] = useState<boolean>(false);
  const [variableName, setVariableName] = useState<string>('');
  const [variableValue, setVariableValue] = useState<string>('');
  const [selectedVariable, setSelectedVariable] = useState<dynamicObject>({
    label: 'Local Variable',
    value: 'LOCAL'
  });
  const [hideValue, setHideValue] = useState<boolean>(false);
  return <>\r
      <ConditionalDropdown {...args} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)} value={inputValue} onCreateVariableClick={() => setOpenCreateVariable(true)} ref={inputRef} showAddVariableIcon />\r
      {openCreateVariable && <CreateVariableSlider isOpen={openCreateVariable} onClose={() => setOpenCreateVariable(false)} variableName={variableName} value={variableValue} hideValue={hideValue} handleSubmit={() => {
      alert('Variable Created');
    }} onHideChange={value => {
      setHideValue(value);
    }} onNameChange={value => {
      setVariableName(value);
    }} onValueChange={value => setVariableValue(value)} onVariableTypeChange={option => setSelectedVariable(option)} selectedVariableType={selectedVariable} variableTypesList={[{
      label: 'Local Variable',
      value: 'LOCAL'
    }, {
      label: 'Global Variable',
      value: 'GLOBAL'
    }]} />}\r
    </>;
}`,...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var g,f,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [hashInputValue, setHashInputValue] = useState<dynamicObject | null>();
    const [inputValue, setInputValue] = useState<string>();
    const testData = [{
      _id: '1',
      name: 'File1.txt',
      actualPath: '/documents/File1.txt',
      searchKey: 'file1',
      parentId: 'root'
    }, {
      _id: '2',
      name: 'File2.doc',
      actualPath: '/documents/File2.doc',
      searchKey: 'file2',
      parentId: 'root'
    }, {
      _id: '3',
      name: 'Image1.png',
      actualPath: '/images/Image1.png',
      searchKey: 'image1',
      parentId: 'folder1'
    }, {
      _id: '4',
      name: 'Presentation.ppt',
      actualPath: '/presentations/Presentation.ppt',
      searchKey: 'presentation',
      parentId: 'folder2'
    }, {
      _id: '5',
      name: 'Spreadsheet.xlsx',
      actualPath: '/spreadsheets/Spreadsheet.xlsx',
      searchKey: 'spreadsheet',
      parentId: 'folder3'
    }, {
      _id: '6',
      name: 'Code.js',
      actualPath: '/projects/Code.js',
      searchKey: 'code',
      parentId: 'folder4'
    }];
    return <>\r
        <ConditionalDropdown label="Select Path Using #" placeholder="Enter # to search files" isHash dataFiles={testData} dropdownWidth="auto" setHashInputValue={setHashInputValue} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)} value={inputValue} />\r
      </>;
  }
}`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const ne=["Default","WithInitialValue","DropdownOnHash"];export{l as Default,i as DropdownOnHash,n as WithInitialValue,ne as __namedExportsOrder,le as default};
