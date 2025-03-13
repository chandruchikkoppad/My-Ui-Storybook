import{j as a}from"./jsx-runtime-SKoiH9zj.js";import{r as U}from"./index-DJO9vBfz.js";import{c as f}from"./index-NZcV-alF.js";import{A as G}from"./Accordion-ChiWgSqm.js";import{I as z}from"./Icon-BnrH6PuI.js";import{T as K}from"./Tooltip-jHEmaokv.js";/* empty css              */import{T as b}from"./Typography-DdMJCn-_.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";const g=({tableMeta:s=[],tableData:m=[],accordionType:h="row",noDataContent:$,height:y="100%",withFixedHeader:x=!1,headerType:A,TableAccordionStateIconWidth:S=4,TableAccordionStateIconHeight:I=8})=>{const[p,F]=U.useState(-1),P=e=>{F(e===p?-1:e)},k=(e,t)=>{let o=e[t.accessor];return t.cell?t.cell({value:o,row:e,column:t.accessor}):t.accessor||o&&typeof o!="object"?o:"--"},v=e=>e.map((o,w)=>a.jsx("table",{className:"ff-accordion-table",cellSpacing:0,children:a.jsx("tbody",{className:"ff-table-body",children:a.jsx("tr",{className:"ff-table-row",children:s.map((u,N)=>a.jsx("td",{className:"ff-table-cell",style:{width:u.width},children:h==="column"&&N===0?"":a.jsx(b,{children:k(o,u)})},u.accessor+N))},o.id||w)})},`accordion-table-${w}`));return a.jsxs("div",{style:{height:y},className:f("ff-accordion-table-container",{"ff-accordion-fixed-header-table":x}),children:[a.jsx("table",{cellSpacing:0,className:f("ff-accordion-table",{"ff-accordion-fixed-header":x}),children:a.jsx("thead",{children:a.jsx("tr",{className:"ff-table-row",children:s.map(e=>a.jsx("th",{style:{width:e.width},className:f("ff-table-header",A&&`ff-accordion-table--${A}-bg`),children:a.jsx("div",{children:a.jsx(b,{fontWeight:"medium",fontSize:12,children:e.header})})},`header-${e.header}`))})})}),h==="row"&&m.map((e,t)=>a.jsx(G,{headerTitle:e.title,color:"var(--text-color)",accordionContent:v(e.data),disable:e.disable,disableInfoMessage:e.disableInfoMessage,accordionStateIconName:"arrows_down_icon",AccordionStateIconWidth:S,AccordionStateIconHeight:I},`accordion-row-${t}`)),h==="column"&&m.map((e,t)=>a.jsxs("div",{className:"column-table-accordion",children:[a.jsx("div",{className:"ff-display-flex",children:a.jsx(K,{title:e==null?void 0:e.disableInfoMessage,children:a.jsxs("div",{className:`accordion-header ${e.disable&&"ff-disabled"}`,children:[a.jsx("div",{className:"header-title",children:a.jsx("span",{children:a.jsx(b,{fontWeight:"regular",children:e.title})})}),a.jsx("div",{className:"accordion-arrow",onClick:()=>{!e.disable&&P(t)},children:a.jsx(z,{name:p===t?"arrows_down_icon":"arrows_right_icon",color:"var(--table-with-accordion-icon-color)",width:S,height:I,hoverEffect:!1})})]})})}),p===t&&a.jsx("div",{children:v(e.data)})]},`column-accordion-${t}`)),m.length<=0&&a.jsx("div",{className:"no-data-content",style:{height:`calc(${y} - 50px)`},children:$})]})};try{g.displayName="TableWithAccordion",g.__docgenInfo={description:"",displayName:"TableWithAccordion",props:{tableMeta:{defaultValue:{value:"[]"},description:"Column details for table",name:"tableMeta",required:!1,type:{name:"ColumnProps[]"}},tableData:{defaultValue:{value:"[]"},description:"Data for table",name:"tableData",required:!1,type:{name:"DataProps[]"}},accordionType:{defaultValue:{value:"row"},description:"Table type",name:"accordionType",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},noDataContent:{defaultValue:null,description:"Specific sentence to be displayed data not found",name:"noDataContent",required:!1,type:{name:"ReactNode"}},withFixedHeader:{defaultValue:{value:"false"},description:"withFixedHeader prop to have non-scrollable fixed accordion table header",name:"withFixedHeader",required:!1,type:{name:"boolean"}},height:{defaultValue:{value:"100%"},description:"Height of the table in string",name:"height",required:!1,type:{name:"string"}},headerType:{defaultValue:null,description:"Header type to have different background color",name:"headerType",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"default"'}]}},TableAccordionStateIconWidth:{defaultValue:{value:"4"},description:"Accordion collapse and expand Icon width",name:"TableAccordionStateIconWidth",required:!1,type:{name:"number"}},TableAccordionStateIconHeight:{defaultValue:{value:"8"},description:"Accordion collapse and expand Icon height",name:"TableAccordionStateIconHeight",required:!1,type:{name:"number"}}}}}catch{}const T=[{title:"Pre conditions",data:[{desc:"Open Browser",modifiedBy:"Ram",suiteName:"test"}]},{title:"Steps",data:[{desc:"1. SG1",modifiedBy:"Ram",suiteName:"suite1"},{desc:"2. SG2",modifiedBy:"Laxman",suiteName:"suite 2"}]},{title:"Post conditions",data:[{desc:"close browser",modifiedBy:"Krishna",suiteName:"test 2"}]}],re={title:"Components/TableWithAccordion",component:g,parameters:{layout:"centered"},tags:["autodocs"]},d={tableMeta:[],tableData:[]},L=[],l=[{header:"Description",accessor:"desc",width:100},{header:"SUITE NAME",accessor:"suiteName",width:100},{header:"SUITE TYPE",accessor:"suiteName",width:100},{header:"SUITE ACCESS",accessor:"suiteName",width:100},{header:"Modified By",accessor:"modifiedBy",width:100}],c={args:{...d,tableMeta:l,tableData:T,accordionType:"row",TableAccordionStateIconWidth:4,TableAccordionStateIconHeight:8}},r={args:{...d,tableMeta:l,tableData:T,accordionType:"column",TableAccordionStateIconWidth:4,TableAccordionStateIconHeight:8}},n={args:{...d,tableMeta:l,tableData:L,accordionType:"column",TableAccordionStateIconWidth:4,TableAccordionStateIconHeight:8}},i={args:{...d,tableMeta:l,tableData:T,accordionType:"row",height:"200px",withFixedHeader:!0,TableAccordionStateIconWidth:4,TableAccordionStateIconHeight:8}};var D,W,j;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    tableMeta: columnsData,
    tableData: sampleData,
    accordionType: 'row',
    TableAccordionStateIconWidth: 4,
    TableAccordionStateIconHeight: 8
  }
}`,...(j=(W=c.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var H,C,_;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    tableMeta: columnsData,
    tableData: sampleData,
    accordionType: 'column',
    TableAccordionStateIconWidth: 4,
    TableAccordionStateIconHeight: 8
  }
}`,...(_=(C=r.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var M,E,q;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    tableMeta: columnsData,
    tableData: emptyData,
    accordionType: 'column',
    TableAccordionStateIconWidth: 4,
    TableAccordionStateIconHeight: 8
  }
}`,...(q=(E=n.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var V,R,B;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    tableMeta: columnsData,
    tableData: sampleData,
    accordionType: 'row',
    height: '200px',
    withFixedHeader: true,
    TableAccordionStateIconWidth: 4,
    TableAccordionStateIconHeight: 8
  }
}`,...(B=(R=i.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const ne=["TableWithRowAccordion","TableWithColumnAccordion","EmtptyTableWithColumnAccordion","AccordionTableWithFixedHeader"];export{i as AccordionTableWithFixedHeader,n as EmtptyTableWithColumnAccordion,r as TableWithColumnAccordion,c as TableWithRowAccordion,ne as __namedExportsOrder,re as default};
