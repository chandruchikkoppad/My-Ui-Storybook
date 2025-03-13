import{j as t}from"./jsx-runtime-SKoiH9zj.js";import{c as n}from"./capitalize-CjhOyDkC.js";import"./index-DJO9vBfz.js";const c={title:"Utils/Capitalize",component:n},e=()=>{const a=[{input:"hello",output:n("hello")},{input:"world",output:n("world")},{input:"",output:n("")},{input:"capitalize",output:n("capitalize")}];return t.jsxs("div",{children:[t.jsx("h3",{children:"Capitalize Function Examples"}),t.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{style:{border:"1px solid black",padding:"8px"},children:"Input"}),t.jsx("th",{style:{border:"1px solid black",padding:"8px"},children:"Output"})]})}),t.jsx("tbody",{children:a.map((r,d)=>t.jsxs("tr",{children:[t.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:r.input}),t.jsx("td",{style:{border:"1px solid black",padding:"8px"},children:r.output})]},d))})]})]})};var l,p,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const examples = [{
    input: 'hello',
    output: capitalize('hello')
  }, {
    input: 'world',
    output: capitalize('world')
  }, {
    input: '',
    output: capitalize('')
  }, {
    input: 'capitalize',
    output: capitalize('capitalize')
  }];
  return <div>\r
      <h3>Capitalize Function Examples</h3>\r
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
                {example.output}\r
              </td>\r
            </tr>)}\r
        </tbody>\r
      </table>\r
    </div>;
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,c as default};
