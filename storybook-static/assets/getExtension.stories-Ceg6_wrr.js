import{j as s}from"./jsx-runtime-SKoiH9zj.js";import{g as i}from"./getExtension-B1kDXIq5.js";import"./index-DJO9vBfz.js";const l={title:"Utils/getExtension",component:i},e=()=>{const o=[{value:"test.txt",expected:"txt"}];return s.jsx("div",{children:o.map((t,x)=>s.jsxs("div",{children:["getExtension( ",JSON.stringify(t.value)," ) -",i(t.value)?"True":"False"]},x))})};var n,r,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const testCases = [{
    value: 'test.txt',
    expected: 'txt'
  }];
  return <div>\r
      {testCases.map((test, index) => <div key={index}>\r
          getExtension( {JSON.stringify(test.value)} ) -\r
          {getExtension(test.value) ? 'True' : 'False'}\r
        </div>)}\r
    </div>;
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,l as default};
