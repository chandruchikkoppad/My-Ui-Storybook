import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as i}from"./index-DJO9vBfz.js";import{B as y}from"./Button-CpFgCZ6s.js";import{D}from"./Drawer-Bj9d4h3e.js";import{F as M}from"./FileDropzone-Oy1U8u6O.js";import{C as V}from"./ConditionalDropdown-CdeKtMVH.js";/* empty css                */import"./Icon-BnrH6PuI.js";import"./index-NZcV-alF.js";import"./Typography-DdMJCn-_.js";import"./index-CFN9ZEHn.js";import"./useEscKeyEvent-_4Zk5j0a.js";import"./ThemeProvider-D5XEyBwi.js";import"./getExtension-B1kDXIq5.js";import"./checkEmpty-xi6SckPb.js";import"./RadioGroup-CXtVZnPC.js";import"./RadioButton-BS2T1CXK.js";import"./Tooltip-jHEmaokv.js";import"./VariableDropdown-DMFOrdX0.js";import"./truncateText-D2e1-n0F.js";import"./Input-BT-svg7L.js";const c=({variant:d="primary",size:l="small",onClick:p,label:o="Choose File",disabled:n=!1,type:m="button",className:t="",style:a={},iconName:r,isChooseFile:h=!1,buttonWidth:f="auto",buttonHeight:F="auto",selectedFile:v={},handleCloseIcon:b})=>e.jsx("div",{children:e.jsx(y,{variant:d,label:o,type:m,onClick:p,buttonWidth:f,buttonHeight:F,isChooseFile:h,size:l,disabled:n,className:t,iconName:r,style:a,iconPosition:"right",selectedFile:v,handleCloseIcon:b})});try{c.displayName="ChooseFile",c.__docgenInfo={description:"",displayName:"ChooseFile",props:{variant:{defaultValue:{value:"primary"},description:"Variant of the button",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"delete"'},{value:'"warning"'}]}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},buttonWidth:{defaultValue:{value:"auto"},description:"Width in string format can be sent for needed width",name:"buttonWidth",required:!1,type:{name:"string"}},buttonHeight:{defaultValue:{value:"auto"},description:"Height in string format can be sent for needed height",name:"buttonHeight",required:!1,type:{name:"string"}},size:{defaultValue:{value:"small"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:{value:"Choose File"},description:"Button contents",name:"label",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"Type of the button",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},id:{defaultValue:null,description:"Button id",name:"id",required:!1,type:{name:"string"}},onSubmit:{defaultValue:null,description:"onSubmit function handler",name:"onSubmit",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},ref:{defaultValue:null,description:"react ref for the button",name:"ref",required:!1,type:{name:"any"}},className:{defaultValue:{value:""},description:"Classname for the button",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:{value:"{}"},description:"Additional styles for the button",name:"style",required:!1,type:{name:"CSSProperties"}},iconName:{defaultValue:null,description:"Give icon name availble in storybook that to be on left side of button",name:"iconName",required:!1,type:{name:"string"}},isChooseFile:{defaultValue:{value:"false"},description:"isChooseFile is a Boolean prop",name:"isChooseFile",required:!1,type:{name:"boolean"}},selectedFile:{defaultValue:{value:"{}"},description:"selectedfile object will be send.",name:"selectedFile",required:!1,type:{name:"File | DynamicObj | null"}},handleCloseIcon:{defaultValue:null,description:"handleCloseIcon function will set to the initial state .",name:"handleCloseIcon",required:!1,type:{name:"(() => void)"}}}}}catch{}const te={title:"Components/ChooseFile",component:c,parameters:{layout:"centered"},tags:["autodocs"]},j={disabled:!1},u={render:()=>{const[d,l]=i.useState(!1),[p,o]=i.useState(!1),[n,m]=i.useState(),[t,a]=i.useState(null),[r,h]=i.useState(null),f=[{_id:"1",name:"File1.txt",actualPath:"/documents/File1.txt",searchKey:"file1",parentId:"root"},{_id:"2",name:"File2.doc",actualPath:"/documents/File2.doc",searchKey:"file2",parentId:"root"},{_id:"3",name:"Image1.png",actualPath:"/images/Image1.png",searchKey:"image1",parentId:"folder1"},{_id:"4",name:"Presentation.ppt",actualPath:"/presentations/Presentation.ppt",searchKey:"presentation",parentId:"folder2"}],F=[{value:"Test Data",label:"Test Data"},{value:"Local File",label:"Local File"}],v=s=>{m(s),o(s.value==="Test Data")},b=s=>{var S;const g=(S=s.target.files)==null?void 0:S[0];a(g||null)},w=()=>a(null),_=()=>{a(r),o(!1)},q=()=>{a(null),l(!1)},E=()=>{l(!1)},C=(s,g)=>e.jsxs("div",{className:"footer_basic_button",children:[e.jsx(y,{type:"button",variant:"secondary",size:"small",onClick:g,label:"Cancel"}),e.jsx(y,{type:"button",variant:"primary",size:"small",onClick:s,label:"Save"})]});return i.useEffect(()=>{a(r)},[r]),e.jsxs(e.Fragment,{children:[e.jsx(c,{label:(t==null?void 0:t.name)||"Choose File",variant:"secondary",buttonWidth:"308px",buttonHeight:"32px",isChooseFile:!0,iconName:t!=null&&t.name?"close":"attachment_icon",onClick:()=>l(!0),selectedFile:t,handleCloseIcon:q}),e.jsxs(D,{isOpen:d,onClose:()=>l(!1),isFooterRequired:!1,_isExpanded:!1,size:"medium",children:[e.jsx(M,{...j,accept:["image/png","image/jpeg","application/x-zip-compressed","application/zip"],validateMIMEType:!0,isWebServiceFileDropZone:!0,selectedRadioOption:n,radioOptions:F,handleOptionChange:v,setSelectedFile:a,selectedFile:t,handleFileChange:b,handleRemoveFile:w,setShowDrawer:o}),(n==null?void 0:n.value)==="Test Data"&&e.jsxs(D,{isOpen:p,onClose:()=>o(!1),isFooterRequired:!1,_isExpanded:!1,size:"small",children:[e.jsx(V,{label:"Select Path Using #",placeholder:"Enter # to search files",isHash:!0,dataFiles:f,dropdownWidth:"auto",setHashInputValue:h}),C(_,()=>o(!1))]}),C(E,()=>l(!1))]})]})}};var O,I,x;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedRadioOption, setSelectedRadioOption] = useState<RadioOption>();
    const [selectedFile, setSelectedFile] = useState<File | DynamicObj | null>(null);
    const [testDataSelectedFile, setTestDataSelectedFile] = useState<DynamicObj | File | null>(null);
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
    }];
    const radioOptions: RadioOption[] = [{
      value: 'Test Data',
      label: 'Test Data'
    }, {
      value: 'Local File',
      label: 'Local File'
    }];
    const handleOptionChange = (option: RadioOption) => {
      setSelectedRadioOption(option);
      setShowModal(option.value === 'Test Data');
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      setSelectedFile(file || null);
    };
    const handleRemoveFile = () => setSelectedFile(null);
    const handleSaveButton = () => {
      setSelectedFile(testDataSelectedFile);
      setShowModal(false);
    };
    const handleCloseIcon = () => {
      setSelectedFile(null);
      setIsOpen(false);
    };
    const handleSaveChooseFile = () => {
      setIsOpen(false);
    };
    const renderFooterButtons = (onSave: () => void, onCancel: () => void) => <div className="footer_basic_button">\r
        <Button type="button" variant="secondary" size="small" onClick={onCancel} label="Cancel" />\r
        <Button type="button" variant="primary" size="small" onClick={onSave} label="Save" />\r
      </div>;
    useEffect(() => {
      setSelectedFile(testDataSelectedFile);
    }, [testDataSelectedFile]);
    return <>\r
        <ChooseFile label={selectedFile?.name || 'Choose File'} variant="secondary" buttonWidth="308px" buttonHeight="32px" isChooseFile iconName={selectedFile?.name ? 'close' : 'attachment_icon'} onClick={() => setIsOpen(true)} selectedFile={selectedFile} handleCloseIcon={handleCloseIcon} />\r
\r
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} isFooterRequired={false} _isExpanded={false} size="medium">\r
          <FileDropzone {...defaultArgs} accept={['image/png', 'image/jpeg', 'application/x-zip-compressed', 'application/zip']} validateMIMEType isWebServiceFileDropZone selectedRadioOption={selectedRadioOption} radioOptions={radioOptions} handleOptionChange={handleOptionChange} setSelectedFile={setSelectedFile} selectedFile={selectedFile} handleFileChange={handleFileChange} handleRemoveFile={handleRemoveFile} setShowDrawer={setShowModal} />\r
          {selectedRadioOption?.value === 'Test Data' && <Drawer isOpen={showModal} onClose={() => setShowModal(false)} isFooterRequired={false} _isExpanded={false} size="small">\r
              <ConditionalDropdown label="Select Path Using #" placeholder="Enter # to search files" isHash dataFiles={testData} dropdownWidth="auto" setHashInputValue={setTestDataSelectedFile} />\r
              {renderFooterButtons(handleSaveButton, () => setShowModal(false))}\r
            </Drawer>}\r
          {renderFooterButtons(handleSaveChooseFile, () => setIsOpen(false))}\r
        </Drawer>\r
      </>;
  }
}`,...(x=(I=u.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};const ae=["ChooseFileDisplay"];export{u as ChooseFileDisplay,ae as __namedExportsOrder,te as default};
