import{j as o}from"./jsx-runtime-SKoiH9zj.js";import{T as p,t as a}from"./Toastify-CnLhTvUT.js";import"./index-DJO9vBfz.js";import"./Toast-CWcBRmbh.js";import"./index-CFN9ZEHn.js";import"./Icon-BnrH6PuI.js";import"./index-NZcV-alF.js";import"./Button-CpFgCZ6s.js";/* empty css                */import"./Typography-DdMJCn-_.js";import"./ThemeProvider-D5XEyBwi.js";const m=(l,s)=>{if(!l||!(l instanceof Blob))throw console.error("Invalid Blob object"),new Error("Invalid Blob object");const r=window.navigator;if(r.msSaveOrOpenBlob){const e=r.msSaveOrOpenBlob;e&&e(l,s)}else{const e=document.createElement("a");document.body.appendChild(e);const t=window.URL.createObjectURL(l);e.href=t,e.download=s,e.click(),setTimeout(()=>{window.URL.revokeObjectURL(t),document.body.removeChild(e)},0)}},g={title:"Utils/saveFileFromBlob",component:m},n=()=>{const l=[{blob:new Blob(["Hello, world!"],{type:"text/plain"}),filename:"hello.txt"},{blob:new Blob(['{ "key": "value" }'],{type:"application/json"}),filename:"data.json"},{blob:null,filename:"invalid.txt",expectedError:"Invalid Blob object"}],s=(r,e)=>{try{if(r instanceof Blob)m(r,e),a.success(`File "${e}" downloaded successfully!`);else throw new Error("Invalid Blob object")}catch(t){a.error(t.message)}};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{children:[o.jsx("h1",{children:"saveFileFromBlob - Test Cases"}),l.map(({blob:r,filename:e,expectedError:t},b)=>o.jsxs("div",{style:{marginBottom:"1rem"},children:[o.jsxs("button",{onClick:()=>s(r,e),style:{marginRight:"1rem"},children:["Download ",e]}),t&&o.jsxs("span",{style:{color:"red"},children:["Expected Error: ",t]})]},b))]}),o.jsx(p,{})]})};var i,c,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const testCases = [{
    blob: new Blob(['Hello, world!'], {
      type: 'text/plain'
    }),
    filename: 'hello.txt'
  }, {
    blob: new Blob(['{ "key": "value" }'], {
      type: 'application/json'
    }),
    filename: 'data.json'
  }, {
    blob: null,
    filename: 'invalid.txt',
    expectedError: 'Invalid Blob object'
  }];
  const handleDownload = (blob: Blob | null, filename: string) => {
    try {
      if (blob instanceof Blob) {
        saveFileFromBlob(blob, filename);
        toast.success(\`File "\${filename}" downloaded successfully!\`);
      } else {
        throw new Error('Invalid Blob object');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return <>\r
      <div>\r
        <h1>saveFileFromBlob - Test Cases</h1>\r
        {testCases.map(({
        blob,
        filename,
        expectedError
      }, index) => <div key={index} style={{
        marginBottom: '1rem'
      }}>\r
            <button onClick={() => handleDownload(blob as Blob, filename)} style={{
          marginRight: '1rem'
        }}>\r
              Download {filename}\r
            </button>\r
            {expectedError && <span style={{
          color: 'red'
        }}>\r
                Expected Error: {expectedError}\r
              </span>}\r
          </div>)}\r
      </div>\r
      <Toastify />\r
    </>;
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const C=["Default"];export{n as Default,C as __namedExportsOrder,g as default};
