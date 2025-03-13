import{j as n}from"./jsx-runtime-SKoiH9zj.js";import{t as s}from"./truncateText-D2e1-n0F.js";import"./index-DJO9vBfz.js";const p={title:"Utils/truncateText",component:s},e=()=>{const c=[{text:"This is a placeholder text that might be too long",maxLength:25,expected:"This is a placeholder text..."},{text:"Short text",maxLength:25,expected:"Short text"},{text:"Another example",maxLength:10,expected:"Another ex..."},{text:"Testing with a long text",maxLength:5,expected:"Testi..."},{text:"",maxLength:10,expected:""},{text:"Exactly twenty-five chars!",maxLength:25,expected:"Exactly twenty-five chars!"}];return n.jsx("div",{children:c.map((t,h)=>n.jsxs("div",{children:["truncateText(",JSON.stringify(t.text),", ",t.maxLength,") - Expected: ",t.expected,", Result:"," ",s(t.text,t.maxLength)]},h))})};var x,a,r;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const testCases = [{
    text: 'This is a placeholder text that might be too long',
    maxLength: 25,
    expected: 'This is a placeholder text...'
  }, {
    text: 'Short text',
    maxLength: 25,
    expected: 'Short text'
  }, {
    text: 'Another example',
    maxLength: 10,
    expected: 'Another ex...'
  }, {
    text: 'Testing with a long text',
    maxLength: 5,
    expected: 'Testi...'
  }, {
    text: '',
    maxLength: 10,
    expected: ''
  }, {
    text: 'Exactly twenty-five chars!',
    maxLength: 25,
    expected: 'Exactly twenty-five chars!'
  }];
  return <div>\r
      {testCases.map((test, index) => <div key={index}>\r
          truncateText({JSON.stringify(test.text)}, {test.maxLength}) -\r
          Expected: {test.expected}, Result:{' '}\r
          {truncateText(test.text, test.maxLength)}\r
        </div>)}\r
    </div>;
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,p as default};
