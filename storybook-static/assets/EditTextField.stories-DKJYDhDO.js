import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as n}from"./index-DJO9vBfz.js";import{T as I}from"./Typography-DdMJCn-_.js";import{H as O}from"./HighlightText-DXRXqgoy.js";import{I as y}from"./Icon-BnrH6PuI.js";import{T as p}from"./Tooltip-jHEmaokv.js";import{c as ee}from"./capitalize-CjhOyDkC.js";import{I as te}from"./Input-BT-svg7L.js";import{u as ie}from"./UseKeyboardActions-IEqgejH8.js";/* empty css                */import"./index-NZcV-alF.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";const re=(a,o,s,u)=>a===o?"No changes were made.":a?a.length<3?"Please enter at least 3 characters.":u?s??"":"":"Text is required",d=({label:a,text:o,highlightText:s,customError:u,customErrorCondition:$=!1,confirmIcon:i,cancelIcon:r,editIcon:t,dropdownData:E=[],isOpen:z=!1,confirmAction:v,onClick:b,nameTooltipTitle:T})=>{var q;const[h,C]=n.useState(z??!1),[c,F]=n.useState(o),[V,B]=n.useState(!0),[K,U]=n.useState(((q=E[0])==null?void 0:q.value)??""),[w,m]=n.useState(""),[G,k]=n.useState(!1),J=!!(w&&h),Q=n.useRef(null),X=n.useRef(null),Y=()=>{C(!0),m("")},j=()=>{const l=re(c,o,u,$);l&&h?m(l):(C(!1),m(""),v&&v(c,K))},A=()=>{var l;F(o),U(((l=E[0])==null?void 0:l.value)??""),C(!1),m(""),k(!1)},Z=l=>{F(l.target.value),k(!0),m(""),B(!1)};function N(l){l==="Enter"&&j(),l==="Escape"&&A()}return ie([{key:"Enter",action:()=>N("Enter")},{key:"Escape",action:()=>N("Escape")}]),e.jsxs("div",{className:"ff-label-edit-text-field",ref:Q,children:[h?e.jsxs("div",{className:"ff-label-text-field",children:[e.jsx("div",{className:"ff-label-text-field-without-dropdown",children:e.jsx(te,{name:"input",label:a||"",disabled:!1,error:J,placeholder:"Enter your name",value:c,onChange:Z,className:`
                
               ${G?"modified":""}`,type:"text"})}),e.jsxs("div",{className:"ff-icon-container",children:[i&&e.jsx(p,{title:"confirm",placement:"bottom",children:e.jsx(y,{color:(i==null?void 0:i.color)??"var(--default-confirm-icon-color)",height:(i==null?void 0:i.height)??20,disabled:V,width:(i==null?void 0:i.width)??20,name:(i==null?void 0:i.name)??"default-confirm-icon",className:`${(i==null?void 0:i.className)??"default-confirm-class"} ${V?"disabled-confirm-icon":"confirm-icon"}`,onClick:j})}),r&&e.jsx(p,{title:"cancel",placement:"bottom",children:e.jsx(y,{color:(r==null?void 0:r.color)??"var(--label-edit-cancel-icon)",height:(r==null?void 0:r.height)??12,width:(r==null?void 0:r.width)??20,name:(r==null?void 0:r.name)??"default-cancel-icon",className:(r==null?void 0:r.className)??"cancel-icon",onClick:A,ref:X})})]})]}):e.jsxs("div",{className:"display-text-container",children:[T?e.jsx(p,{title:T,children:e.jsx("span",{className:"display-text",onClick:b,children:e.jsx(O,{text:c,highlight:s})})}):e.jsx("span",{className:"display-text",onClick:b,children:e.jsx(O,{text:c,highlight:s})}),e.jsx(p,{title:ee((t==null?void 0:t.name)??"Edit"),children:e.jsx(y,{color:(t==null?void 0:t.color)??"var(--label-edit-cancel-icon)",height:(t==null?void 0:t.height)??20,width:(t==null?void 0:t.width)??20,name:(t==null?void 0:t.name)??"edit",className:(t==null?void 0:t.className)??"edit-icon",onClick:Y})})]}),w&&h&&e.jsx(I,{as:"p",fontSize:8,className:"error-text",children:w})]})};try{d.displayName="EditTextField",d.__docgenInfo={description:"",displayName:"EditTextField",props:{label:{defaultValue:null,description:"Label text displayed above the input field.",name:"label",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"Initial text displayed in the input field.",name:"text",required:!0,type:{name:"string"}},highlightText:{defaultValue:null,description:"Text to be highlighted within the displayed text, if provided.",name:"highlightText",required:!1,type:{name:"string"}},customError:{defaultValue:null,description:"Custom error message to be displayed, if applicable.",name:"customError",required:!1,type:{name:"string"}},confirmIcon:{defaultValue:null,description:"Confirm icon properties including icon name and click handler.",name:"confirmIcon",required:!1,type:{name:"IconProps"}},cancelIcon:{defaultValue:null,description:"Cancel icon properties including icon name and click handler.",name:"cancelIcon",required:!1,type:{name:"IconProps"}},editIcon:{defaultValue:null,description:"",name:"editIcon",required:!1,type:{name:"IconProps"}},variant:{defaultValue:null,description:"Type of input field - standard text field or text field with a dropdown.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"textFieldWithDropdown"'},{value:'"textField"'}]}},dropdownData:{defaultValue:{value:"[]"},description:"Array of dropdown options used if the dropdown variant is selected.",name:"dropdownData",required:!1,type:{name:"DropdownOption[]"}},width:{defaultValue:null,description:"Width of the input field component.",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Height of the input field component.",name:"height",required:!1,type:{name:"string"}},confirmAction:{defaultValue:null,description:"Function called when confirming input changes, with input and dropdown values as arguments.",name:"confirmAction",required:!1,type:{name:"((inputValue: string, dropdownValue: string) => void)"}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},customErrorCondition:{defaultValue:{value:"false"},description:"for conditionally handle custom error",name:"customErrorCondition",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},nameTooltipTitle:{defaultValue:null,description:"",name:"nameTooltipTitle",required:!1,type:{name:"string"}}}}}catch{}const Ce={title:"Components/EditTextField",component:d,parameters:{layout:"centered"},tags:["autodocs"]},f={render:()=>{const[a,o]=n.useState(""),s=u=>{o(u)};return e.jsx(d,{text:"Verify The Function Of Categories For",label:"Add Module",customError:a,confirmIcon:{name:"update_icon",onClick:()=>{},color:"var(--label-edit-confirm-icon)",height:20,width:20},cancelIcon:{name:"close",onClick:()=>{},color:"var(--label-edit-cancel-icon)",height:16,width:16},width:"300px",height:"22px",confirmAction:s,customErrorCondition:!1})}},g={render:()=>{const a=o=>{console.info("Confirmed input value:",o)};return e.jsx(d,{text:"Verify The Function Of Categories For",confirmIcon:{name:"update_icon",onClick:()=>{},color:"var(--label-edit-confirm-icon)",height:20,width:20},cancelIcon:{name:"close",onClick:()=>{},color:"var(--label-edit-cancel-icon)",height:16,width:16},width:"300px",height:"22px",confirmAction:a,customErrorCondition:!1})}},x={render:()=>{const a=s=>{console.info("Confirmed input value:",s)};let o="Verify The Function Of Categories For";return e.jsx(d,{text:o,confirmIcon:{name:"update_icon",onClick:()=>{},color:"yellow",height:20,width:20},cancelIcon:{name:"close",onClick:()=>{},color:"yellow",height:16,width:16},editIcon:{name:"close",onClick:()=>{},color:"yellow",height:16,width:16},width:"200px",height:"50px",isOpen:!0,confirmAction:a,customError:"max char 10",customErrorCondition:o.length>10,onClick:()=>{}})}};var _,S,M;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [customError, setCustomError] = useState<string>('');
    const handleConfirmAction = (inputValue: string) => {
      setCustomError(inputValue);
    };
    return <EditTextField text="Verify The Function Of Categories For" label="Add Module" customError={customError} // Updated to use state
    confirmIcon={{
      name: 'update_icon',
      onClick: () => {},
      color: 'var(--label-edit-confirm-icon)',
      height: 20,
      width: 20
    }} cancelIcon={{
      name: 'close',
      onClick: () => {},
      color: 'var(--label-edit-cancel-icon)',
      height: 16,
      width: 16
    }} width="300px" height="22px" confirmAction={handleConfirmAction} customErrorCondition={false} />;
  }
}`,...(M=(S=f.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var D,L,W;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const handleConfirmAction = (inputValue: string) => {
      //DEMO: we are getting that value from LabelEditTextField
      console.info('Confirmed input value:', inputValue);
    };
    return <EditTextField text="Verify The Function Of Categories For" //it might be state
    confirmIcon={{
      name: 'update_icon',
      onClick: () => {},
      color: 'var(--label-edit-confirm-icon)',
      height: 20,
      width: 20
    }} cancelIcon={{
      name: 'close',
      onClick: () => {},
      color: 'var(--label-edit-cancel-icon)',
      height: 16,
      width: 16
    }} width="300px" height="22px" confirmAction={handleConfirmAction} customErrorCondition={false} />;
  }
}`,...(W=(L=g.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var R,P,H;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const handleConfirmAction = (inputValue: string) => {
      //DEMO: we are getting that value from LabelEditTextField
      console.info('Confirmed input value:', inputValue);
    };
    let demoText = 'Verify The Function Of Categories For';
    return <EditTextField text={demoText} //it might be state
    confirmIcon={{
      name: 'update_icon',
      onClick: () => {},
      color: 'yellow',
      height: 20,
      width: 20
    }} cancelIcon={{
      name: 'close',
      onClick: () => {},
      color: 'yellow',
      height: 16,
      width: 16
    }} editIcon={{
      name: 'close',
      onClick: () => {},
      color: 'yellow',
      height: 16,
      width: 16
    }} width="200px" height="50px" isOpen={true} confirmAction={handleConfirmAction} customError="max char 10" customErrorCondition={demoText.length > 10} onClick={() => {}} />;
  }
}`,...(H=(P=x.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};const we=["textFieldWithLabel","textFieldWithOutLabel","openTextField"];export{we as __namedExportsOrder,Ce as default,x as openTextField,f as textFieldWithLabel,g as textFieldWithOutLabel};
