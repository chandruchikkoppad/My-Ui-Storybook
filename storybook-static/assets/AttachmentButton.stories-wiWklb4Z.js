import{j as A}from"./jsx-runtime-SKoiH9zj.js";import{r as U}from"./index-DJO9vBfz.js";import{A as S}from"./AttachmentButton-D9b-3-3_.js";import"./Typography-DdMJCn-_.js";import"./Button-CpFgCZ6s.js";/* empty css                */import"./Icon-BnrH6PuI.js";import"./index-NZcV-alF.js";import"./IconButton-DADAjSNQ.js";import"./Toast-CWcBRmbh.js";import"./index-CFN9ZEHn.js";import"./ThemeProvider-D5XEyBwi.js";import"./Tooltip-jHEmaokv.js";import"./checkEmpty-xi6SckPb.js";const q={title:"Components/AttachmentButton",component:S,argTypes:{onFilesChange:{action:"files changed"},disabled:{control:"boolean"},maxFileSizeMB:{control:"number"},maxFiles:{control:"number"},buttonLabel:{control:"text"},showSelectedFiles:{control:"boolean"},deleteButton:{control:"boolean"},addAttachmentButton:{control:"boolean"}}},t={disabled:!1,maxFileSizeMB:5,maxFiles:10},e={args:{...t,label:"Upload Files",accept:[".*"]},render:l=>{const[h,B]=U.useState([]),M=n=>{B(n),l.onFilesChange(n)};return A.jsx(S,{...l,selectedFiles:h,onFilesChange:M})}},a={args:{...t,label:"Upload Files (2 MB Max)",maxFileSizeMB:2,maxFiles:5},render:e.render},r={args:{...t,label:"Upload Large Files (20 MB Max)",maxFileSizeMB:20,maxFiles:5,types:["image","video"]},render:e.render},s={args:{...t,label:"Disabled Uploader",disabled:!0},render:e.render};var o,i,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Upload Files',
    accept: ['.*']
  },
  render: args => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const handleFilesChange = (files: File[]) => {
      setSelectedFiles(files);
      args.onFilesChange(files);
    };
    return <AttachmentButton {...args} selectedFiles={selectedFiles} onFilesChange={handleFilesChange} />;
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Upload Files (2 MB Max)',
    maxFileSizeMB: 2,
    maxFiles: 5
  },
  render: Default.render
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var F,u,g;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Upload Large Files (20 MB Max)',
    maxFileSizeMB: 20,
    maxFiles: 5,
    types: ['image', 'video']
  },
  render: Default.render
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,x,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    label: 'Disabled Uploader',
    disabled: true
  },
  render: Default.render
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const G=["Default","SmallFileLimit","LargeFileLimit","DisabledUploader"];export{e as Default,s as DisabledUploader,r as LargeFileLimit,a as SmallFileLimit,G as __namedExportsOrder,q as default};
