import{j as n}from"./jsx-runtime-SKoiH9zj.js";import{a5 as c}from"./regex-CmAMYcQS.js";import"./index-DJO9vBfz.js";function u(e,t=[]){function s(o){return o.replace(c,"\\$&")}return t.reduce((o,a)=>o.replace(new RegExp(s(a),"gi"),""),e).replace(/([A-Z])/g," $1").trim().replace(/^./,o=>o.toUpperCase())}function m(e){return e.toLowerCase().replace(/_/g," ").replace(/^./,t=>t.toUpperCase())}function r(e,t=[]){return e.toUpperCase()===e&&(e=e.toLowerCase()),e.includes("_")?m(e):u(e,t)}const y={title:"Utils/FormatString",component:r},i=()=>{const e=[{input:"hiBye",output:r("hiBye",["hi"]),removeSections:"hi"},{input:"hiHelloBye",output:r("hiHelloBye",["hello"]),removeSections:"Hello"},{input:"webserviceCount",output:r("webserviceCount",["count"]),removeSections:"count"},{input:"PARTIAL_PUBLIC",output:r("PARTIAL_PUBLIC")},{input:"assignedMemory",output:r("assignedMemory")},{input:"webAndMobileCount",output:r("webAndMobileCount",["count"]),removeSections:"count"}];return n.jsxs("div",{children:[n.jsx("h3",{children:"FormatString Function Examples"}),n.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{border:"1px solid black",padding:"8px"},children:"Input"}),n.jsx("th",{style:{border:"1px solid black",padding:"8px"},children:"Remove Section"}),n.jsx("th",{style:{border:"1px solid black",padding:"8px"},children:"Output"})]})}),n.jsx("tbody",{children:e.map((t,s)=>n.jsxs("tr",{children:[n.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:t.input}),n.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:t==null?void 0:t.removeSections}),n.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:t.output})]},s))})]})]})};var d,p,l;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const examples = [{
    input: 'hiBye',
    output: formatString('hiBye', ['hi']),
    removeSections: 'hi'
  }, {
    input: 'hiHelloBye',
    output: formatString('hiHelloBye', ['hello']),
    removeSections: 'Hello'
  }, {
    input: 'webserviceCount',
    output: formatString('webserviceCount', ['count']),
    removeSections: 'count'
  }, {
    input: 'PARTIAL_PUBLIC',
    output: formatString('PARTIAL_PUBLIC')
  }, {
    input: 'assignedMemory',
    output: formatString('assignedMemory')
  }, {
    input: 'webAndMobileCount',
    output: formatString('webAndMobileCount', ['count']),
    removeSections: 'count'
  }];
  return <div>\r
      <h3>FormatString Function Examples</h3>\r
      <table style={{
      borderCollapse: 'collapse',
      width: '100%'
    }}>\r
        <thead>\r
          <tr>\r
            <th style={{
            border: '1px solid black',
            padding: '8px'
          }}>Input</th>\r
            <th style={{
            border: '1px solid black',
            padding: '8px'
          }}>\r
              Remove Section\r
            </th>\r
            <th style={{
            border: '1px solid black',
            padding: '8px'
          }}>\r
              Output\r
            </th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          {examples.map((example, index) => <tr key={index}>\r
              <td style={{
            border: '1px solid black',
            padding: '8px'
          }}>\r
                {example.input}\r
              </td>\r
              <td style={{
            border: '1px solid black',
            padding: '8px'
          }}>\r
                {example?.removeSections}\r
              </td>\r
              <td style={{
            border: '1px solid black',
            padding: '8px'
          }}>\r
                {example.output}\r
              </td>\r
            </tr>)}\r
        </tbody>\r
      </table>\r
    </div>;
}`,...(l=(p=i.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const C=["Default"];export{i as Default,C as __namedExportsOrder,y as default};
