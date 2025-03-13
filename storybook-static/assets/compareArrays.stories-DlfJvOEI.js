import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{c as i}from"./compareObjects-BqXd13zI.js";import"./index-DJO9vBfz.js";const u=(n,r)=>!Array.isArray(n)||!Array.isArray(r)||n.length!==r.length?!1:n.every((a,t)=>{const c=r[t];return i(a,c)}),y={title:"Utils/compareArrays",component:u},s=()=>{const n=[{arr1:[1,2,3],arr2:[1,2,3],expected:!0},{arr1:[1,2,3],arr2:[1,2,4],expected:!1},{arr1:[1,{a:1}],arr2:[1,{a:1}],expected:!0},{arr1:[1,{a:1}],arr2:[1,{a:2}],expected:!1},{arr1:[1,2,3],arr2:[1,2,3,4],expected:!1},{arr1:[],arr2:[],expected:!0},{arr1:[null,void 0],arr2:[null,void 0],expected:!0},{arr1:[null],arr2:[void 0],expected:!1},{arr1:[[1,2],[3,4]],arr2:[[1,2],[3,4]],expected:!0},{arr1:[[1,2],[3,4]],arr2:[[1,2],[4,3]],expected:!1}];return e.jsxs("div",{children:[e.jsxs("h1",{children:[e.jsx("u",{children:"compareArrays(arr1, arr2)"})," - Expected / Actual"]}),n.map(({arr1:r,arr2:a,expected:t},c)=>{const d=u(r,a);return e.jsxs("div",{children:[e.jsxs("strong",{children:["compareArrays(",JSON.stringify(r),", ",JSON.stringify(a),") -"]}),e.jsx("span",{style:{color:d===t?"green":"red"},children:` Expected: ${t}, Actual: ${d}`})]},c)})]})};var l,p,o;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const testCases = [{
    arr1: [1, 2, 3],
    arr2: [1, 2, 3],
    expected: true
  }, {
    arr1: [1, 2, 3],
    arr2: [1, 2, 4],
    expected: false
  }, {
    arr1: [1, {
      a: 1
    }],
    arr2: [1, {
      a: 1
    }],
    expected: true
  }, {
    arr1: [1, {
      a: 1
    }],
    arr2: [1, {
      a: 2
    }],
    expected: false
  }, {
    arr1: [1, 2, 3],
    arr2: [1, 2, 3, 4],
    expected: false
  }, {
    arr1: [],
    arr2: [],
    expected: true
  }, {
    arr1: [null, undefined],
    arr2: [null, undefined],
    expected: true
  }, {
    arr1: [null],
    arr2: [undefined],
    expected: false
  }, {
    arr1: [[1, 2], [3, 4]],
    arr2: [[1, 2], [3, 4]],
    expected: true
  }, {
    arr1: [[1, 2], [3, 4]],
    arr2: [[1, 2], [4, 3]],
    expected: false
  }];
  return <div>\r
      <h1>\r
        <u>compareArrays(arr1, arr2)</u> - Expected / Actual\r
      </h1>\r
      {testCases.map(({
      arr1,
      arr2,
      expected
    }, index) => {
      const actual = compareArrays(arr1, arr2);
      return <div key={index}>\r
            <strong>\r
              compareArrays({JSON.stringify(arr1)}, {JSON.stringify(arr2)}) -\r
            </strong>\r
            <span style={{
          color: actual === expected ? 'green' : 'red'
        }}>\r
              {\` Expected: \${expected}, Actual: \${actual}\`}\r
            </span>\r
          </div>;
    })}\r
    </div>;
}`,...(o=(p=s.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};const A=["Default"];export{s as Default,A as __namedExportsOrder,y as default};
