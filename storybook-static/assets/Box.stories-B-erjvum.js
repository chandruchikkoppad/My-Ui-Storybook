import{j as e}from"./jsx-runtime-SKoiH9zj.js";/* empty css                */import{T as v}from"./Typography-DdMJCn-_.js";import"./index-DJO9vBfz.js";const c=({cardProperties:n={width:"200px",height:"200px",background:"white",borderRadius:"16px",boxShadow:"1px 4px 8px var(--plugins-header-bg-color)",padding:"16px",margin:"0",border:"none",className:"",style:{},onClick:()=>{}},headerContent:r,midContent:o,footerContent:a})=>{const{width:p,height:l,background:x,borderRadius:u,boxShadow:m,padding:h,margin:g,border:f,className:b="",style:y={}}=n;return e.jsxs("section",{className:`ff-card ${b}`,style:{width:p,height:l,background:x,borderRadius:u,boxShadow:m,padding:h,margin:g,border:f,...y},onClick:n.onClick,children:[(r==null?void 0:r.isHeader)&&e.jsx("div",{className:"ff-card-header",children:r.content}),(o==null?void 0:o.isMidContent)&&e.jsx("div",{className:"ff-card-content",children:o.content}),(a==null?void 0:a.isFooter)&&e.jsx("div",{className:"ff-card-footer",children:a.content})]})};try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{cardProperties:{defaultValue:{value:`{\r
    width: '200px',\r
    height: '200px',\r
    background: 'white',\r
    borderRadius: '16px',\r
    boxShadow: '1px 4px 8px var(--plugins-header-bg-color)',\r
    padding: '16px',\r
    margin: '0',\r
    border: 'none',\r
    className: '',\r
    style: {} as CSSProperties,\r
    onClick: () => {},\r
  }`},description:"",name:"cardProperties",required:!1,type:{name:"CardProperties"}},headerContent:{defaultValue:null,description:"",name:"headerContent",required:!1,type:{name:"HeaderContentProperties"}},midContent:{defaultValue:null,description:"",name:"midContent",required:!0,type:{name:"MidContentProperties"}},footerContent:{defaultValue:null,description:"",name:"footerContent",required:!1,type:{name:"FooterContentProperties"}},isSkeleton:{defaultValue:null,description:"",name:"isSkeleton",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Components/Box",component:c,parameters:{layout:"left"},tags:["autodocs"]},t={render:()=>e.jsx(v,{as:"div",children:e.jsx(c,{cardProperties:{height:"300px",width:"300px",background:"var(--brand-color)",borderRadius:"8px",margin:"20px",padding:"20px"},headerContent:{isHeader:!0,content:e.jsx("div",{className:"row",children:"Box Header"})},midContent:{isMidContent:!0,content:e.jsx("div",{className:"row",children:"Box content"})},footerContent:{isFooter:!0,content:e.jsx("div",{className:"row",children:"Box Footer"})}})})};var d,s,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    return <Typography as="div">\r
        <Box cardProperties={{
        height: '300px',
        width: '300px',
        background: 'var(--brand-color)',
        borderRadius: '8px',
        margin: '20px',
        padding: '20px'
      }} headerContent={{
        isHeader: true,
        content: <div className="row">Box Header</div>
      }} midContent={{
        isMidContent: true,
        content: <div className="row">Box content</div>
      }} footerContent={{
        isFooter: true,
        content: <div className="row">Box Footer</div>
      }} />\r
      </Typography>;
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const C=["SampleBox"];export{t as SampleBox,C as __namedExportsOrder,k as default};
