import{j as t}from"./jsx-runtime-SKoiH9zj.js";import{r as e}from"./index-DJO9vBfz.js";import{c as ee}from"./checkEmpty-xi6SckPb.js";import{V as Ie}from"./VariableDropdown-DMFOrdX0.js";import{I as B}from"./Icon-BnrH6PuI.js";import{I as Se}from"./Input-BT-svg7L.js";import{c as xe}from"./index-NZcV-alF.js";import{T as M}from"./Typography-DdMJCn-_.js";import{t as De}from"./truncateText-D2e1-n0F.js";import{v as qe}from"./constants-CwbLlsYY.js";import{C as Le}from"./CreateVariableSlider-EDnTXRW8.js";import"./Drawer-Bj9d4h3e.js";import"./index-CFN9ZEHn.js";import"./Button-CpFgCZ6s.js";/* empty css                */import"./useEscKeyEvent-_4Zk5j0a.js";import"./ThemeProvider-D5XEyBwi.js";import"./Select-BJocvAjy.js";import"./getSelectOptionValue-DZyM0SAQ.js";import"./useClickOutside-BYc9KT_v.js";import"./Tooltip-jHEmaokv.js";import"./usePortalPosition-DKFkIZLt.js";import"./Checkbox-DE1WcxCl.js";const P=({onSelectVariable:p,dropdownPosition:f,filteredOptions:s=[],position:c="relative",width:m="100%",zIndex:u,truncateTextValue:g=34})=>t.jsx("div",{className:xe(`ff-variable-dropdown ${c}`),style:f?{top:f.top+30,left:f.left-30,width:m,zIndex:u}:{width:m,zIndex:u},children:ee(s)?t.jsx("div",{className:"ff-variable-option",children:t.jsx(M,{as:"div",children:"No Option",fontSize:14})}):s==null?void 0:s.map(d=>t.jsx("div",{className:"ff-variable-option",onClick:()=>p(d),children:t.jsx(M,{as:"span",fontSize:14,children:De(d==null?void 0:d.name,g)})},d==null?void 0:d.id))});try{P.displayName="OptionsDropdown",P.__docgenInfo={description:"",displayName:"OptionsDropdown",props:{position:{defaultValue:{value:"relative"},description:"Position whether absoloute or relative",name:"position",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'}]}},width:{defaultValue:{value:"100%"},description:"Dropdown width",name:"width",required:!1,type:{name:"string"}},filteredOptions:{defaultValue:{value:"[]"},description:"chars entered to search in Input :",name:"filteredOptions",required:!1,type:{name:"dynamicObject[]"}},onSelectVariable:{defaultValue:null,description:"Function to handle click on variable",name:"onSelectVariable",required:!0,type:{name:"(variable: object) => void"}},dropdownPosition:{defaultValue:null,description:"Dropdown postion used for dropdown placement",name:"dropdownPosition",required:!1,type:{name:"dropdownPositionType"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},truncateTextValue:{defaultValue:{value:"34"},description:"",name:"truncateTextValue",required:!1,type:{name:"number"}}}}}catch{}const I=e.forwardRef(({label:p="",hashInputValue:f="",setHashInputValue:s,variableList:c=[],placeholder:m="Enter text",onChange:u,onCreateVariableClick:g,handleClearInput:d,value:l="",dropdownWidth:S="100%",dropdownHeight:q="150px",isHash:V=!1,dataFiles:L=[],showAddVariableIcon:E=!0,helperText:O="",error:r,autoComplete:T="off",required:te=!1,zIndex:F=9999,truncateTextValue:R=34,formProps:le={},getSelectedVariable:ne=()=>{},symbol:j="$",type:re="text",...ie},se)=>{const[oe,_]=e.useState(!1),[ue,de]=e.useState(!1),[pe,H]=e.useState(!1),[x,ce]=e.useState(null),[me,N]=e.useState(0),[fe,he]=e.useState(!1),[Ve,be]=e.useState([]),o=e.useRef(null);e.useImperativeHandle(se,()=>o.current),e.useEffect(()=>{x!==null&&o.current&&(o.current.setSelectionRange(x,x),o.current.focus())},[x]),e.useEffect(()=>{if(V?_(l.startsWith("#")):he(!(l!=null&&l.includes(j))),l.startsWith("#")&&V){const a=l.slice(1).toLowerCase(),i=L.filter(v=>v.name.toLowerCase().includes(a));be(i),_(!0)}},[l]);const k=()=>{o.current&&N(o.current.selectionStart||0)},ve=k,ge=k;e.useEffect(()=>{o.current&&N(o.current.selectionStart||0)},[l]);const A=a=>{if(o.current){const{selectionStart:i,selectionEnd:v}=o.current,h=`${a.name}`;let n;V&&l[0]==="#"?n=a.name+l.slice(v||1):n=a.name,u&&(u({target:{value:n}},a),ne(a.name)),o.current.value=n,s==null||s(a),ce((i||0)+h.length),_(!1),de(!0)}};function ye(a,i,v){let h=!1,n="";const K=l[i-1]==="}";if(i<0||i>a.length)return{showDropdown:h,searchString:n};const y=a.lastIndexOf(j,i-1),G=a.indexOf(j,i);return y!==-1&&(i===y+1?(h=!0,n=""):(n=a.slice(y+1,G===-1?void 0:G),i>y+1&&(n=a.slice(y+1,i)),h=!0),ue&&K&&(h=!1),(/[{}]/.test(n)||i===0)&&(h=!1,n=""),n&&(v.some(we=>we.name.toLowerCase().includes(n.toLowerCase()))||(v=[]))),{showDropdown:h,searchString:n}}const b=ye(l,me,c),Ce=a=>{(!a.relatedTarget||!a.relatedTarget.closest(".dropdown-container"))&&H(!1)};return t.jsxs("div",{className:"ff-add-variable-container",children:[t.jsxs("div",{className:"ff-add-variable-input",children:[t.jsx(Se,{...ie,name:"add_variable",ref:o,type:re,value:l,onChange:u,variant:"primary",label:p,placeholder:m,onClick:ve,onKeyUp:ge,onFocus:()=>H(!0),onBlur:a=>Ce(a),autoComplete:T,helperText:O,error:r,required:te,...le}),!ee(l)&&!V&&fe&&E&&t.jsxs(t.Fragment,{children:[t.jsx(B,{onClick:d,name:"close",height:16,width:16,hoverEffect:!0}),t.jsx(B,{onClick:g,name:"variable",height:16,width:16,hoverEffect:!0})]})]}),(b==null?void 0:b.showDropdown)&&pe&&t.jsx(Ie,{position:"absolute",zIndex:F,truncateTextValue:R,width:S,height:q,optionsList:c.filter(a=>a.name.toLowerCase().includes(b==null?void 0:b.searchString)),onSelectVariable:A}),oe&&V&&t.jsx(P,{position:"relative",zIndex:F,truncateTextValue:R,width:S,filteredOptions:Ve,onSelectVariable:A})]})});try{I.displayName="VariableSuggestionInputDropDown",I.__docgenInfo={description:"",displayName:"VariableSuggestionInputDropDown",props:{label:{defaultValue:{value:""},description:"Label for the field",name:"label",required:!1,type:{name:"string"}},hashInputValue:{defaultValue:{value:""},description:"Value in the input should stored in this state",name:"hashInputValue",required:!1,type:{name:"TestDataObject | dynamicObject"}},setHashInputValue:{defaultValue:null,description:"Function storing and updating the inputValue state",name:"setHashInputValue",required:!1,type:{name:"((value: File | dynamicObject | null) => void)"}},variableList:{defaultValue:{value:"[]"},description:"List of variables",name:"variableList",required:!1,type:{name:"dynamicObject[]"}},placeholder:{defaultValue:{value:"Enter text"},description:"Place holder for the input field",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`Function to handle input change
@param value
@returns`,name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>, item?: dynamicObject) => void)"}},onCreateVariableClick:{defaultValue:null,description:"Function to handle create variable icon click",name:"onCreateVariableClick",required:!1,type:{name:"(() => void)"}},handleClearInput:{defaultValue:null,description:"Function to clear input field on close icon click",name:"handleClearInput",required:!1,type:{name:"(() => void)"}},dropdownWidth:{defaultValue:{value:"100%"},description:"Width of the dropdown",name:"dropdownWidth",required:!1,type:{name:"string"}},dropdownHeight:{defaultValue:{value:"150px"},description:"Height of the dropdown",name:"dropdownHeight",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Name | name of the input field",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"value | input field value",name:"value",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"variants to set color/style of the input field",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'}]}},type:{defaultValue:{value:"text"},description:"type to set color/style of the input field",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"password"'},{value:'"email"'},{value:'"url"'},{value:'"time"'}]}},error:{defaultValue:null,description:"error | If true, error message will be displayed",name:"error",required:!1,type:{name:"boolean"}},helperText:{defaultValue:{value:""},description:"helperText | error, success, warning message to be shown",name:"helperText",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"to disable the input field",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"if true, input field will be mandatory",name:"required",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"classnames to style the input field",name:"className",required:!1,type:{name:"string"}},noBorder:{defaultValue:null,description:"noBorder prop 'true' removes border of input",name:"noBorder",required:!1,type:{name:"boolean"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<HTMLInputElement>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},id:{defaultValue:null,description:"id to select the input field uniquely",name:"id",required:!1,type:{name:"string"}},autoComplete:{defaultValue:{value:"off"},description:"if on, suggestion popup will be displayed",name:"autoComplete",required:!1,type:{name:"enum",value:[{value:'"on"'},{value:'"off"'}]}},minValue:{defaultValue:null,description:"minimum and maximum values for the number type input field and their functions",name:"minValue",required:!1,type:{name:"string"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!1,type:{name:"string"}},transparentBackground:{defaultValue:null,description:"background of the input field prop",name:"transparentBackground",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"size for the input field",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},isLabelRequired:{defaultValue:null,description:"isLabelRequired for the input field without label,showing placeholder",name:"isLabelRequired",required:!1,type:{name:"boolean"}},isHash:{defaultValue:{value:"false"},description:"If true, dropdown opens when '#' is entered at the first position.",name:"isHash",required:!1,type:{name:"boolean"}},dataFiles:{defaultValue:{value:"[]"},description:"Options for the dropdown when `isHash` is true.",name:"dataFiles",required:!1,type:{name:"dynamicObject[]"}},showAddVariableIcon:{defaultValue:{value:"true"},description:"a boolean prop to show add variable icon or not.",name:"showAddVariableIcon",required:!1,type:{name:"boolean"}},formProps:{defaultValue:{value:"{}"},description:"",name:"formProps",required:!1,type:{name:"Record<string, any>"}},zIndex:{defaultValue:{value:"9999"},description:"",name:"zIndex",required:!1,type:{name:"number"}},truncateTextValue:{defaultValue:{value:"34"},description:"",name:"truncateTextValue",required:!1,type:{name:"number"}},getSelectedVariable:{defaultValue:{value:"() => {}"},description:"",name:"getSelectedVariable",required:!1,type:{name:"((option: string) => void)"}},symbol:{defaultValue:{value:"$"},description:"",name:"symbol",required:!1,type:{name:"string"}}}}}catch{}const Ze={title:"Components/VariableSuggestionInputDropDown",component:I,args:{label:"Add Variables",placeholder:"Enter text",variableList:qe,dropdownWidth:"100%",dropdownHeight:"140px",variant:"primary",zIndex:999,truncateTextValue:34,symbol:"@"},parameters:{layout:"centered"}},ae=p=>{const f=e.useRef(null),[s,c]=e.useState(""),[m,u]=e.useState(!1),[g,d]=e.useState(""),[l,S]=e.useState(""),[q,V]=e.useState({label:"Local Variable",value:"LOCAL"}),[L,E]=e.useState(!1),O=(r,T)=>{c(r.target.value)};return t.jsxs(t.Fragment,{children:[t.jsx(I,{...p,onChange:(r,T)=>O(r),value:s,onCreateVariableClick:()=>u(!0),ref:f,symbol:"@",showAddVariableIcon:!0,handleClearInput:()=>c("")}),m&&t.jsx(Le,{isOpen:m,onClose:()=>u(!1),variableName:g,value:l,hideValue:L,handleSubmit:()=>{alert("Variable Created")},onHideChange:r=>{E(r)},onNameChange:r=>{d(r)},onValueChange:r=>S(r),onVariableTypeChange:r=>V(r),selectedVariableType:q,variableTypesList:[{label:"Step Group Parameter",value:"PARAMETER"},{label:"Step Group Variable",value:"STEPGROUP"},{label:"Local Variable",value:"LOCAL"},{label:"Global Variable",value:"GLOBAL"}]})]})},C=ae.bind({});C.args={onCreateVariableClick:()=>alert("Create Variable clicked")};const w=ae.bind({});w.args={inputValue:"Initial Text with $",onCreateVariableClick:()=>alert("Create Variable clicked")};const D={render:()=>{const[p,f]=e.useState(),[s,c]=e.useState(""),m=[{_id:"1",name:"File1.txt",actualPath:"/documents/File1.txt",searchKey:"file1",parentId:"root"},{_id:"2",name:"File2.doc",actualPath:"/documents/File2.doc",searchKey:"file2",parentId:"root"},{_id:"3",name:"Image1.png",actualPath:"/images/Image1.png",searchKey:"image1",parentId:"folder1"},{_id:"4",name:"Presentation.ppt",actualPath:"/presentations/Presentation.ppt",searchKey:"presentation",parentId:"folder2"},{_id:"5",name:"Spreadsheet.xlsx",actualPath:"/spreadsheets/Spreadsheet.xlsx",searchKey:"spreadsheet",parentId:"folder3"},{_id:"6",name:"Code.js",actualPath:"/projects/Code.js",searchKey:"code",parentId:"folder4"}];return t.jsx(t.Fragment,{children:t.jsx(I,{label:"Select Path Using #",placeholder:"Enter # to search files",isHash:!0,zIndex:9999,truncateTextValue:34,dataFiles:m,dropdownWidth:"100%",setHashInputValue:f,hashInputValue:p||{},value:s,onChange:u=>c(u.target.value)})})}};var z,W,U;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
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
  const testDropDown = (event: React.ChangeEvent<HTMLInputElement>, item: any) => {
    setInputValue(event.target.value);
  };
  return <>\r
      <VariableSuggestionInputDropDown {...args} onChange={(event: React.ChangeEvent<HTMLInputElement>, item?: dynamicObject) => testDropDown(event, item)} value={inputValue} onCreateVariableClick={() => setOpenCreateVariable(true)} ref={inputRef} symbol="@" showAddVariableIcon handleClearInput={() => setInputValue('')} />\r
      {openCreateVariable && <CreateVariableSlider isOpen={openCreateVariable} onClose={() => setOpenCreateVariable(false)} variableName={variableName} value={variableValue} hideValue={hideValue} handleSubmit={() => {
      alert('Variable Created');
    }} onHideChange={value => {
      setHideValue(value);
    }} onNameChange={value => {
      setVariableName(value);
    }} onValueChange={value => setVariableValue(value)} onVariableTypeChange={option => setSelectedVariable(option)} selectedVariableType={selectedVariable} variableTypesList={[{
      label: 'Step Group Parameter',
      value: 'PARAMETER'
    }, {
      label: 'Step Group Variable',
      value: 'STEPGROUP'
    }, {
      label: 'Local Variable',
      value: 'LOCAL'
    }, {
      label: 'Global Variable',
      value: 'GLOBAL'
    }]} />}\r
    </>;
}`,...(U=(W=C.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var $,Q,J;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
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
  const testDropDown = (event: React.ChangeEvent<HTMLInputElement>, item: any) => {
    setInputValue(event.target.value);
  };
  return <>\r
      <VariableSuggestionInputDropDown {...args} onChange={(event: React.ChangeEvent<HTMLInputElement>, item?: dynamicObject) => testDropDown(event, item)} value={inputValue} onCreateVariableClick={() => setOpenCreateVariable(true)} ref={inputRef} symbol="@" showAddVariableIcon handleClearInput={() => setInputValue('')} />\r
      {openCreateVariable && <CreateVariableSlider isOpen={openCreateVariable} onClose={() => setOpenCreateVariable(false)} variableName={variableName} value={variableValue} hideValue={hideValue} handleSubmit={() => {
      alert('Variable Created');
    }} onHideChange={value => {
      setHideValue(value);
    }} onNameChange={value => {
      setVariableName(value);
    }} onValueChange={value => setVariableValue(value)} onVariableTypeChange={option => setSelectedVariable(option)} selectedVariableType={selectedVariable} variableTypesList={[{
      label: 'Step Group Parameter',
      value: 'PARAMETER'
    }, {
      label: 'Step Group Variable',
      value: 'STEPGROUP'
    }, {
      label: 'Local Variable',
      value: 'LOCAL'
    }, {
      label: 'Global Variable',
      value: 'GLOBAL'
    }]} />}\r
    </>;
}`,...(J=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var X,Y,Z;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [hashInputValue, setHashInputValue] = useState<dynamicObject | null>();
    const [value, setValue] = useState<string>('');
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
        <VariableSuggestionInputDropDown label="Select Path Using #" placeholder="Enter # to search files" isHash zIndex={9999} truncateTextValue={34} dataFiles={testData} dropdownWidth="100%" setHashInputValue={setHashInputValue} hashInputValue={hashInputValue || {}} value={value} onChange={e => setValue(e.target.value)} />\r
      </>;
  }
}`,...(Z=(Y=D.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ea=["Default","WithInitialValue","DropdownOnHash"];export{C as Default,D as DropdownOnHash,w as WithInitialValue,ea as __namedExportsOrder,Ze as default};
