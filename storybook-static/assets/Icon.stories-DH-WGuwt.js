import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{I as c,C as x}from"./Icon-BnrH6PuI.js";import{r as y}from"./index-DJO9vBfz.js";import"./index-NZcV-alF.js";const I={title:"Components/Icon",component:c,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["light","dark"]}}},a={args:{name:"more",color:""}},t={render:()=>{const[o,s]=y.useState(""),i=Object.keys(x).filter(r=>r.toLowerCase().includes(o.toLowerCase()));return e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"Search icons...",value:o,onChange:r=>s(r.target.value),style:{marginBottom:"16px",padding:"8px",width:"100%",boxSizing:"border-box"}}),e.jsx("div",{className:"group-icons",style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center",justifyContent:"center"},children:i.map(r=>e.jsxs("div",{style:{border:"1px solid var(--brand-color)",width:"30%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[e.jsx(c,{name:r,height:40,width:40}),e.jsx("p",{style:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",width:"160px"},title:r,children:r})]},r))})]})}},n={args:{name:"hamburger_menu",color:"var(--ff-icon-color-dark-variant)",variant:"dark",hoverEffect:!0},render:o=>{const s=o.variant==="dark"?"#000":"#fff",i=o.variant==="dark"?"var(--ff-icon-color-dark-variant)":"var(--brand-color)";return e.jsx("div",{style:{backgroundColor:s,padding:"20px"},children:e.jsx(c,{...o,color:i,height:16,width:16})})}};var l,d,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'more',
    color: ''
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,h,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredIcons = Object.keys(Components).filter(iconName => iconName.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div>\r
        <input type="text" placeholder="Search icons..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} style={{
        marginBottom: '16px',
        padding: '8px',
        width: '100%',
        boxSizing: 'border-box'
      }} />\r
        <div className="group-icons" style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
      }}>\r
          {filteredIcons.map(iconName => <div key={iconName} style={{
          border: '1px solid var(--brand-color)',
          width: '30%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>\r
              <Icon name={iconName} height={40} width={40} />\r
              <p style={{
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            width: '160px'
          }} title={iconName}>\r
                {iconName}\r
              </p>\r
            </div>)}\r
        </div>\r
      </div>;
  }
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var u,g,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'hamburger_menu',
    color: 'var(--ff-icon-color-dark-variant)',
    variant: 'dark',
    hoverEffect: true
  },
  render: args => {
    const backgroundColor = args.variant === 'dark' ? '#000' : '#fff';
    const iconColor = args.variant === 'dark' ? 'var(--ff-icon-color-dark-variant)' : 'var(--brand-color)';
    return <div style={{
      backgroundColor,
      padding: '20px'
    }}>\r
        <Icon {...args} color={iconColor} height={16} width={16} />\r
      </div>;
  }
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const j=["Icons","AllIcons","DarkVariantIcons"];export{t as AllIcons,n as DarkVariantIcons,a as Icons,j as __namedExportsOrder,I as default};
