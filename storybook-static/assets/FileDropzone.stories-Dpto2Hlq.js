import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{F as x}from"./FileDropzone-Oy1U8u6O.js";import{T as _}from"./Toast-CWcBRmbh.js";import{r as t}from"./index-DJO9vBfz.js";import{D as Z}from"./Drawer-Bj9d4h3e.js";import{C as G}from"./ConditionalDropdown-CdeKtMVH.js";import{B as v}from"./Button-CpFgCZ6s.js";import"./getExtension-B1kDXIq5.js";import"./checkEmpty-xi6SckPb.js";import"./Icon-BnrH6PuI.js";import"./index-NZcV-alF.js";import"./Typography-DdMJCn-_.js";import"./RadioGroup-CXtVZnPC.js";import"./RadioButton-BS2T1CXK.js";import"./Tooltip-jHEmaokv.js";import"./index-CFN9ZEHn.js";import"./ThemeProvider-D5XEyBwi.js";import"./useEscKeyEvent-_4Zk5j0a.js";import"./VariableDropdown-DMFOrdX0.js";import"./truncateText-D2e1-n0F.js";import"./Input-BT-svg7L.js";/* empty css                */const Se={title:"Components/FileDropzone",component:x,parameters:{layout:"centered"},tags:["autodocs"]},J=()=>{alert("onUploadFile")},u={accept:[".png"],multiple:!0,maxFiles:5,maxSize:5e6,maxSizeErrorMessage:"Max file size limit of 5MB exceeded",invalidFileMessage:"Invalid file format",fileExistMessage:"File already exist with same name and type",width:640,height:188,isUploadIcon:!0,onUploadFile:J},c={args:{...u}},d={args:{...u,accept:["image/png","image/jpeg","application/x-zip-compressed","application/zip"],validateMIMEType:!0}},p={render:()=>{const[o,i]=t.useState(!1),[M,a]=t.useState([]),[l,h]=t.useState([]),F=()=>{i(!0),setTimeout(()=>{i(!1)},2e3)},s=r=>{a(r)},g=r=>{h(r)};return e.jsxs(e.Fragment,{children:[e.jsx(x,{...u,accept:["image/png","image/jpeg","application/x-zip-compressed","application/zip"],validateMIMEType:!0,onMaxFilesError:F,getAcceptedFiles:s,getRejectedFiles:g,isApiResponseError:!0}),o&&e.jsx(_,{isOpen:o,variant:"danger",toastTitle:"Error",toastMessage:"Max 5 files can be uploaded"})]})}},m={render:()=>{const[o,i]=t.useState(!1),[M,a]=t.useState(!1),[l,h]=t.useState(),[F,s]=t.useState(null),[g,r]=t.useState(null),[B,f]=t.useState(""),k={primaryButtonProps:{label:"Create",variant:"primary",disabled:!1,onClick:()=>{}},secondaryButtonProps:{label:"Cancel",variant:"secondary",disabled:!1,onClick:()=>{}}},K=[{value:"Test Data",label:"Test Data"},{value:"Local File",label:"Local File"}],W=n=>{h(n),n.value==="Test Data"?a(!0):a(!1)},H=n=>{var T;const S=(T=n.target.files)==null?void 0:T[0],w=new FileReader;S&&(w.readAsText(S),w.onload=async()=>{const N=await w.result;f&&f(N)},s(S))},L=()=>{s(null)},U=()=>{i(!0),setTimeout(()=>{i(!1)},2e3)},V=[{_id:"1",name:"File1.txt",actualPath:"/documents/File1.txt",searchKey:"file1",parentId:"root"},{_id:"2",name:"File2.doc",actualPath:"/documents/File2.doc",searchKey:"file2",parentId:"root"},{_id:"3",name:"Image1.png",actualPath:"/images/Image1.png",searchKey:"image1",parentId:"folder1"},{_id:"4",name:"Presentation.ppt",actualPath:"/presentations/Presentation.ppt",searchKey:"presentation",parentId:"folder2"}],q=()=>{s(g),a(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(x,{...u,accept:["image/png","image/jpeg","application/x-zip-compressed","application/zip"],validateMIMEType:!0,onMaxFilesError:U,isWebServiceFileDropZone:!0,selectedRadioOption:l,radioOptions:K,handleOptionChange:W,setSelectedFile:s,selectedFile:F,handleFileChange:H,handleRemoveFile:L,setShowDrawer:a,setFileContent:f,fileContent:B}),o&&e.jsx(_,{isOpen:o,variant:"danger",toastTitle:"Error",toastMessage:"Max 5 files can be uploaded"}),(l==null?void 0:l.value)==="Test Data"&&e.jsxs(Z,{...k,isOpen:M,onClose:()=>a(!1),isFooterRequired:!1,_isExpanded:!1,size:"small",children:[e.jsx(G,{label:"Select Path Using #",placeholder:"Enter # to search files",isHash:!0,dataFiles:V,dropdownWidth:"auto",setHashInputValue:r}),e.jsxs("div",{className:"footer_basic_button",children:[e.jsx(v,{type:"button",variant:"secondary",size:"small",onClick:()=>a(!1),label:"Cancel"}),e.jsx(v,{type:"button",variant:"primary",size:"small",label:"Save",onClick:q})]})]})]})}};var C,y,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(D=(y=c.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var b,E,j;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    accept: ['image/png', 'image/jpeg', 'application/x-zip-compressed', 'application/zip'],
    validateMIMEType: true
  }
}`,...(j=(E=d.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var R,O,z;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [showToaster, setShowToaster] = useState<boolean>(false);
    const [acceptedFiles, setAcceptedFiles] = useState([]);
    const [rejectedFiles, setRejectedFiles] = useState([]);
    const showMaxFilesError = () => {
      setShowToaster(true);
      setTimeout(() => {
        setShowToaster(false);
      }, 2000);
    };
    const getAcceptedFiles = files => {
      setAcceptedFiles(files);
    };
    const getRejectedFiles = files => {
      setRejectedFiles(files);
    };
    return <>\r
        <FileDropzone {...defaultArgs} accept={['image/png', 'image/jpeg', 'application/x-zip-compressed', 'application/zip']} validateMIMEType={true} onMaxFilesError={showMaxFilesError} getAcceptedFiles={getAcceptedFiles} getRejectedFiles={getRejectedFiles} isApiResponseError />\r
        {showToaster && <Toaster isOpen={showToaster} variant="danger" toastTitle="Error" toastMessage={'Max 5 files can be uploaded'} />}\r
      </>;
  }
}`,...(z=(O=p.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var I,A,P;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [showToaster, setShowToaster] = useState<boolean>(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedRadioOption, setSelectedRadioOption] = useState<RadioOption>();
    const [selectedFile, setSelectedFile] = useState<File | DynamicObj | null>(null);
    const [testDataSelectedFile, setTestDataSelectedFile] = useState<DynamicObj | File | null>(null);
    const [fileContent, setFileContent] = useState<string>('');
    const drawerArgs = {
      primaryButtonProps: {
        label: 'Create',
        variant: 'primary',
        disabled: false,
        onClick: () => {}
      },
      secondaryButtonProps: {
        label: 'Cancel',
        variant: 'secondary',
        disabled: false,
        onClick: () => {}
      }
    };
    const radioOptions: RadioOption[] = [{
      value: 'Test Data',
      label: 'Test Data'
    }, {
      value: 'Local File',
      label: 'Local File'
    }];
    const handleOptionChange = (option: RadioOption) => {
      setSelectedRadioOption(option);
      if (option.value === 'Test Data') {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      const readerFileData = new FileReader();
      if (file) {
        readerFileData.readAsText(file);
        readerFileData.onload = async () => {
          const fileContent = await readerFileData.result;
          if (setFileContent) {
            setFileContent(fileContent as string);
          }
        };
        setSelectedFile(file);
      }
    };
    const handleRemoveFile = () => {
      setSelectedFile(null);
    };
    const showMaxFilesError = () => {
      setShowToaster(true);
      setTimeout(() => {
        setShowToaster(false);
      }, 2000);
    };
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
    const handleSaveButton = () => {
      setSelectedFile(testDataSelectedFile);
      setShowModal(false);
    };
    return <>\r
        <FileDropzone {...defaultArgs} accept={['image/png', 'image/jpeg', 'application/x-zip-compressed', 'application/zip']} validateMIMEType={true} onMaxFilesError={showMaxFilesError} isWebServiceFileDropZone selectedRadioOption={selectedRadioOption} radioOptions={radioOptions} handleOptionChange={handleOptionChange} setSelectedFile={setSelectedFile} selectedFile={selectedFile} handleFileChange={handleFileChange} handleRemoveFile={handleRemoveFile} setShowDrawer={setShowModal} setFileContent={setFileContent} fileContent={fileContent} />\r
\r
        {showToaster && <Toaster isOpen={showToaster} variant="danger" toastTitle="Error" toastMessage={'Max 5 files can be uploaded'} />}\r
        {selectedRadioOption?.value === 'Test Data' && <Drawer {...drawerArgs} isOpen={showModal} onClose={() => setShowModal(false)} isFooterRequired={false} _isExpanded={false} size="small">\r
            <ConditionalDropdown label="Select Path Using #" placeholder="Enter # to search files" isHash dataFiles={testData} dropdownWidth="auto" setHashInputValue={setTestDataSelectedFile} />\r
            <div className="footer_basic_button">\r
              <Button type="button" variant="secondary" size="small" onClick={() => setShowModal(false)} label={'Cancel'} />\r
\r
              <Button type={'button'} variant="primary" size="small" label={'Save'} onClick={handleSaveButton} />\r
            </div>\r
          </Drawer>}\r
      </>;
  }
}`,...(P=(A=m.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const we=["Primary","withMIMEValidation","Controlled","WithRadioButton"];export{p as Controlled,c as Primary,m as WithRadioButton,we as __namedExportsOrder,Se as default,d as withMIMEValidation};
