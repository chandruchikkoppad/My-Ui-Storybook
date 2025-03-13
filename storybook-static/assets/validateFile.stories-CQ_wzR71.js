import{j as a}from"./jsx-runtime-SKoiH9zj.js";import{r as V}from"./index-DJO9vBfz.js";const C=(n,e)=>{var l,r,d,c,u,h;const t=((r=(l=n.target)==null?void 0:l.files)==null?void 0:r[0])||n,i="."+((u=(c=(d=t==null?void 0:t.name)==null?void 0:d.split("."))==null?void 0:c.pop())==null?void 0:u.toLowerCase()),s=t==null?void 0:t.type;return[".ipa",".y4m",".yml",".md",".pem",".properties"].includes(i)&&((h=Object.keys(e))!=null&&h.includes(i))?!0:e[i]&&s===e[i]},F=n=>{var i,s,l,r;const e=((s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0])||n,t=["application/zip","application/x-zip-compressed"];return e&&(t==null?void 0:t.includes(e==null?void 0:e.type))&&((r=(l=e==null?void 0:e.name)==null?void 0:l.toLowerCase())==null?void 0:r.endsWith(".zip"))},I={title:"Utils/validateFile"},j={".txt":"text/plain",".zip":"application/zip",".jpg":"image/jpeg"},o=()=>{const[n,e]=V.useState(""),t=i=>{const s=C(i,j);e(s?"Valid file type":"Invalid file type")};return a.jsxs("div",{children:[a.jsx("h3",{children:"Validate File Extension"}),a.jsx("input",{type:"file",onChange:t}),a.jsxs("p",{children:["Result: ",n.toString()]})]})},p=()=>{const[n,e]=V.useState(""),t=i=>{const s=F(i);e(s?"Valid ZIP file":"Invalid ZIP file")};return a.jsxs("div",{children:[a.jsx("h3",{children:"Validate ZIP File Extension"}),a.jsx("input",{type:"file",onChange:t}),a.jsxs("p",{children:["Result: ",n.toString()]})]})};var x,g,m;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [result, setResult] = useState<string | boolean>('');
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = validateFileExtension(event, allowedFileTypes);
    setResult(isValid ? 'Valid file type' : 'Invalid file type');
  };
  return <div>\r
      <h3>Validate File Extension</h3>\r
      <input type="file" onChange={handleFileChange} />\r
      <p>Result: {result.toString()}</p>\r
    </div>;
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var v,E,f;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [result, setResult] = useState<string | boolean>('');
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = validateZipFileExtension(event);
    setResult(isValid ? 'Valid ZIP file' : 'Invalid ZIP file');
  };
  return <div>\r
      <h3>Validate ZIP File Extension</h3>\r
      <input type="file" onChange={handleFileChange} />\r
      <p>Result: {result.toString()}</p>\r
    </div>;
}`,...(f=(E=p.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const S=["ValidateFileExtension","ValidateZipFileExtension"];export{o as ValidateFileExtension,p as ValidateZipFileExtension,S as __namedExportsOrder,I as default};
