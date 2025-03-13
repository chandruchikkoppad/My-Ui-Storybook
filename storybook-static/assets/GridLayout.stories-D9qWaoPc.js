import{j as s}from"./jsx-runtime-SKoiH9zj.js";import{C as o,R as r,a as e}from"./GridLayout-CW4-pQSl.js";import"./index-DJO9vBfz.js";import"./index-NZcV-alF.js";const j={title:"Components/GridLayout",component:o,parameters:{layout:"centered"},tags:["autodocs"]},u={fluid:!1,gap:"20px"},n={args:{...u},render:l=>s.jsx(s.Fragment,{children:s.jsxs(o,{...l,children:[s.jsxs(r,{children:[s.jsx(e,{size:4,children:s.jsx("div",{className:"one",children:"Column 1"})}),s.jsx(e,{size:4,children:s.jsx("div",{className:"two",children:"Column 2"})}),s.jsx(e,{size:4,children:s.jsx("div",{className:"three",children:"Column 3"})})]}),s.jsxs(r,{children:[s.jsx(e,{size:6,children:s.jsx("div",{className:"four",children:"Column 4"})}),s.jsx(e,{size:6,children:s.jsx("div",{className:"five",children:"Column 5"})})]})]})})},i={args:{...u},render:l=>s.jsx(s.Fragment,{children:s.jsxs(o,{...l,children:[s.jsxs(r,{gap:"20px",children:[s.jsx(e,{size:3,children:s.jsx("div",{className:"one",children:"Column 1 (size 3)"})}),s.jsx(e,{size:6,children:s.jsx("div",{className:"two",children:"Column 2 (size 6)"})}),s.jsx(e,{size:3,children:s.jsx("div",{className:"three",children:"Column 3 (size 3)"})})]}),s.jsxs(r,{gap:"10px",children:[s.jsx(e,{size:4,children:s.jsx("div",{className:"four",children:"Column 4 (size 4)"})}),s.jsx(e,{size:4,children:s.jsx("div",{className:"five",children:"Column 5 (size 4)"})}),s.jsx(e,{size:4,children:s.jsx("div",{className:"one",children:"Column 6 (size 4)"})})]}),s.jsx(r,{gap:"15px",children:s.jsx(e,{size:12,children:s.jsx("div",{className:"two",children:"Full-width column (size 12)"})})})]})})};var a,d,c;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...defaultContainerArgs
  },
  render: args => <>\r
      <Container {...args}>\r
        <Row>\r
          <Col size={4}>\r
            <div className="one">Column 1</div>\r
          </Col>\r
          <Col size={4}>\r
            <div className="two">Column 2</div>\r
          </Col>\r
          <Col size={4}>\r
            <div className="three">Column 3</div>\r
          </Col>\r
        </Row>\r
        <Row>\r
          <Col size={6}>\r
            <div className="four">Column 4</div>\r
          </Col>\r
          <Col size={6}>\r
            <div className="five">Column 5</div>\r
          </Col>\r
        </Row>\r
      </Container>\r
    </>
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,t,C;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultContainerArgs
  },
  render: args => <>\r
      <Container {...args}>\r
        <Row gap="20px">\r
          <Col size={3}>\r
            <div className="one">Column 1 (size 3)</div>\r
          </Col>\r
          <Col size={6}>\r
            <div className="two">Column 2 (size 6)</div>\r
          </Col>\r
          <Col size={3}>\r
            <div className="three">Column 3 (size 3)</div>\r
          </Col>\r
        </Row>\r
        <Row gap="10px">\r
          <Col size={4}>\r
            <div className="four">Column 4 (size 4)</div>\r
          </Col>\r
          <Col size={4}>\r
            <div className="five">Column 5 (size 4)</div>\r
          </Col>\r
          <Col size={4}>\r
            <div className="one">Column 6 (size 4)</div>\r
          </Col>\r
        </Row>\r
        <Row gap="15px">\r
          <Col size={12}>\r
            <div className="two">Full-width column (size 12)</div>\r
          </Col>\r
        </Row>\r
      </Container>\r
    </>
}`,...(C=(t=i.parameters)==null?void 0:t.docs)==null?void 0:C.source}}};const p=["Grid","Grid2"];export{n as Grid,i as Grid2,p as __namedExportsOrder,j as default};
