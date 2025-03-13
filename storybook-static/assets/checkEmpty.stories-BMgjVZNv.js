import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{c as l}from"./checkEmpty-xi6SckPb.js";import"./index-DJO9vBfz.js";const x={title:"Utils/checkEmpty",component:l},t=()=>{const s=[{value:null,expected:!0},{value:void 0,expected:!0},{value:"",expected:!0},{value:[],expected:!0},{value:{},expected:!0},{value:0,expected:!0},{value:"Hello",expected:!1},{value:[1,2,3],expected:!1},{value:{key:"value"},expected:!1}];return e.jsxs("div",{children:[e.jsxs("h1",{children:[e.jsx("u",{children:"checkEmpty(value)"})," - true / false"]}),s.map((n,c)=>e.jsxs("div",{children:["checkEmpty( ",JSON.stringify(n.value)," ) -",l(n.value)?"True":"False"]},c))]})};var a,r,u;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const testCases = [{
    value: null,
    expected: true
  }, {
    value: undefined,
    expected: true
  }, {
    value: '',
    expected: true
  }, {
    value: [],
    expected: true
  }, {
    value: {},
    expected: true
  }, {
    value: 0,
    expected: true
  }, {
    value: 'Hello',
    expected: false
  }, {
    value: [1, 2, 3],
    expected: false
  }, {
    value: {
      key: 'value'
    },
    expected: false
  }];
  return <div>\r
      <h1>\r
        <u>checkEmpty(value)</u> - true / false\r
      </h1>\r
      {testCases.map((test, index) => <div key={index}>\r
          checkEmpty( {JSON.stringify(test.value)} ) -\r
          {checkEmpty(test.value) ? 'True' : 'False'}\r
        </div>)}\r
    </div>;
}`,...(u=(r=t.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const i=["Default"];export{t as Default,i as __namedExportsOrder,x as default};
