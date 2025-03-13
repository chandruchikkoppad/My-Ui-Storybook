import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{c as r}from"./compareObjects-BqXd13zI.js";import"./index-DJO9vBfz.js";const x={title:"Utils/compareObjects",component:r},n=()=>{const s=[{obj1:{a:1,b:[2,{c:3}]},obj2:{a:1,b:[2,{c:3}]},expected:!0},{obj1:{a:1,b:[2,{c:3}]},obj2:{a:1,b:[3,2]},expected:!1},{obj1:{a:1,b:{c:2}},obj2:{a:1,b:{c:2}},expected:!0},{obj1:{a:1,b:{c:2}},obj2:{a:1,b:{c:3}},expected:!1},{obj1:null,obj2:null,expected:!0},{obj1:{a:null},obj2:{a:null},expected:!0},{obj1:{a:1},obj2:{a:null},expected:!1},{obj1:{},obj2:{},expected:!0},{obj1:{a:0},obj2:{a:0},expected:!0},{obj1:{a:0},obj2:{a:1},expected:!1}];return e.jsxs("div",{children:[e.jsxs("h1",{children:[e.jsx("u",{children:"compareObjects(obj1, obj2)"})," - true / false"]}),s.map(({obj1:t,obj2:o,expected:j},p)=>e.jsxs("div",{children:["compareObjects(",JSON.stringify(t),", ",JSON.stringify(o),") -",r(t,o)===j?" True":" False"]},p))]})};var a,b,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const testCases = [{
    obj1: {
      a: 1,
      b: [2, {
        c: 3
      }]
    },
    obj2: {
      a: 1,
      b: [2, {
        c: 3
      }]
    },
    expected: true
  }, {
    obj1: {
      a: 1,
      b: [2, {
        c: 3
      }]
    },
    obj2: {
      a: 1,
      b: [3, 2]
    },
    expected: false
  }, {
    obj1: {
      a: 1,
      b: {
        c: 2
      }
    },
    obj2: {
      a: 1,
      b: {
        c: 2
      }
    },
    expected: true
  }, {
    obj1: {
      a: 1,
      b: {
        c: 2
      }
    },
    obj2: {
      a: 1,
      b: {
        c: 3
      }
    },
    expected: false
  }, {
    obj1: null,
    obj2: null,
    expected: true
  }, {
    obj1: {
      a: null
    },
    obj2: {
      a: null
    },
    expected: true
  }, {
    obj1: {
      a: 1
    },
    obj2: {
      a: null
    },
    expected: false
  }, {
    obj1: {},
    obj2: {},
    expected: true
  }, {
    obj1: {
      a: 0
    },
    obj2: {
      a: 0
    },
    expected: true
  }, {
    obj1: {
      a: 0
    },
    obj2: {
      a: 1
    },
    expected: false
  }];
  return <div>\r
      <h1>\r
        <u>compareObjects(obj1, obj2)</u> - true / false\r
      </h1>\r
      {testCases.map(({
      obj1,
      obj2,
      expected
    }, index) => <div key={index}>\r
          compareObjects({JSON.stringify(obj1)}, {JSON.stringify(obj2)}) -\r
          {compareObjects(obj1, obj2) === expected ? ' True' : ' False'}\r
        </div>)}\r
    </div>;
}`,...(c=(b=n.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};const i=["Default"];export{n as Default,i as __namedExportsOrder,x as default};
