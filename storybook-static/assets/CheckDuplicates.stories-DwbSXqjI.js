import{j as n}from"./jsx-runtime-SKoiH9zj.js";import"./index-DJO9vBfz.js";const p=(r,e)=>{const a=new Set;for(const s of r){const i=e?s[e]:JSON.stringify(s);if(a.has(i))return!0;a.add(i)}return!1},f={title:"Utils/HasDuplicateFile",argTypes:{array:{control:"object",description:"Array of objects to check for duplicates."},property:{control:"text",description:"Optional property to check for duplicates."}}},t={args:{array:[{id:1,name:"file1"},{id:2,name:"file2"},{id:1,name:"file1"}],property:"id"},render:r=>{const e=p(r.array,r.property);return n.jsxs("div",{children:[n.jsxs("h3",{children:["Duplicate Check Result:"," ",e?"Duplicates Found":"No Duplicates"]}),n.jsx("pre",{children:JSON.stringify(r.array,null,2)})]})}};var o,c,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    array: [{
      id: 1,
      name: 'file1'
    }, {
      id: 2,
      name: 'file2'
    }, {
      id: 1,
      name: 'file1'
    }],
    property: 'id'
  },
  render: args => {
    const result = hasDuplicateFile(args.array, args.property);
    return <div>\r
        <h3>\r
          Duplicate Check Result:{' '}\r
          {result ? 'Duplicates Found' : 'No Duplicates'}\r
        </h3>\r
        <pre>{JSON.stringify(args.array, null, 2)}</pre>\r
      </div>;
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,f as default};
