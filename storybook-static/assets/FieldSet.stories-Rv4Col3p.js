import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as h}from"./index-DJO9vBfz.js";import{T as w}from"./Typography-DdMJCn-_.js";const i=({legendName:t,height:o,width:n,children:c})=>e.jsx("div",{className:"ff_fieldSet_container",children:e.jsxs("fieldset",{className:"ff_fieldSet",style:{height:o,width:n},children:[e.jsx("legend",{className:"ff_legend_container",children:e.jsx(w,{color:"var(--license_header_text_color)",fontSize:8,lineHeight:"12px",children:t})}),e.jsx("div",{className:"ff_children_container",children:c})]})});try{i.displayName="FieldSet",i.__docgenInfo={description:"",displayName:"FieldSet",props:{legendName:{defaultValue:null,description:"",name:"legendName",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string"}}}}}catch{}const M={title:"Components/FieldSet",component:i,parameters:{layout:"centered"},tags:["autodocs"]},g={legendName:"Default Legend",height:"200px",width:"300px",children:e.jsx(w,{children:"'Default content inside the FieldSet.'"})},r={args:{...g}},s={args:{...g,height:"300px",width:"400px",legendName:"Custom Dimensions"}},a={args:{...g,legendName:"Nested Content",children:e.jsxs("div",{children:[e.jsx("p",{children:"This is some nested content inside the FieldSet."}),e.jsx("button",{children:"Click Me"})]})}},l={render:()=>{const[t,o]=h.useState("Controlled FieldSet"),[n,c]=h.useState("Initial Content"),D=m=>o(m.target.value),T=m=>c(m.target.value);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsxs("label",{children:["Legend:",e.jsx("input",{type:"text",value:t,onChange:D,style:{marginLeft:"0.5rem"}})]})}),e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsxs("label",{children:["Content:",e.jsx("input",{type:"text",value:n,onChange:T,style:{marginLeft:"0.5rem"}})]})}),e.jsx(i,{legendName:t,height:"250px",width:"350px",children:n})]})}},d={args:{legendName:"Empty FieldSet",height:"32px",width:"317px",children:null}};var p,u,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var C,f,y;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    height: '300px',
    width: '400px',
    legendName: 'Custom Dimensions'
  }
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,v,N;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    legendName: 'Nested Content',
    children: <div>\r
        <p>This is some nested content inside the FieldSet.</p>\r
        <button>Click Me</button>\r
      </div>
  }
}`,...(N=(v=a.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var _,j,F;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [legend, setLegend] = useState('Controlled FieldSet');
    const [content, setContent] = useState('Initial Content');
    const handleLegendChange = (event: React.ChangeEvent<HTMLInputElement>) => setLegend(event.target.value);
    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => setContent(event.target.value);
    return <>\r
        <div style={{
        marginBottom: '1rem'
      }}>\r
          <label>\r
            Legend:\r
            <input type="text" value={legend} onChange={handleLegendChange} style={{
            marginLeft: '0.5rem'
          }} />\r
          </label>\r
        </div>\r
        <div style={{
        marginBottom: '1rem'
      }}>\r
          <label>\r
            Content:\r
            <input type="text" value={content} onChange={handleContentChange} style={{
            marginLeft: '0.5rem'
          }} />\r
          </label>\r
        </div>\r
        <FieldSet legendName={legend} height="250px" width="350px">\r
          {content}\r
        </FieldSet>\r
      </>;
  }
}`,...(F=(j=l.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var L,E,b;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    legendName: 'Empty FieldSet',
    height: '32px',
    width: '317px',
    children: null
  }
}`,...(b=(E=d.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const q=["Default","CustomDimensions","WithNestedChildren","Controlled","EmptyFieldSet"];export{l as Controlled,s as CustomDimensions,r as Default,d as EmptyFieldSet,a as WithNestedChildren,q as __namedExportsOrder,M as default};
