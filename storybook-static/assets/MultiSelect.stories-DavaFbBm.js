import{j as a}from"./jsx-runtime-SKoiH9zj.js";import{r as n}from"./index-DJO9vBfz.js";import{r as ia}from"./index-CFN9ZEHn.js";import{c as J}from"./index-NZcV-alF.js";import{a as oa}from"./ThemeProvider-D5XEyBwi.js";import{B as ca}from"./Button-CpFgCZ6s.js";import{T as q}from"./Typography-DdMJCn-_.js";import{C as Ge}from"./Checkbox-DE1WcxCl.js";import{T as fe}from"./Tooltip-jHEmaokv.js";import{t as ze}from"./truncateText-D2e1-n0F.js";import{a as T,g as j}from"./getSelectOptionValue-DZyM0SAQ.js";import{u as ua}from"./useIntersectionObserver-CzfTHjMy.js";import{I as me}from"./Icon-BnrH6PuI.js";import{c as pe}from"./checkEmpty-xi6SckPb.js";/* empty css                */const pa={verticalMargin:4,optionHeight:32,maxDropdownHeight:160},he=n.forwardRef(({options:r,handleOptionChange:o,searchedKeyword:t="",dropdownPosition:i={},zIndex:c,withSelectButton:u,labelAccessor:m="label",valueAccessor:b="value",loadMoreOptions:C,isAllSelected:Q,onToggleAllSelect:P,isAllSelect:U,maxDropdownHeight:M,variant:Z,handleIconClick:_},ee)=>{const G=r?r.filter(s=>{var h;return(h=T(s,b))==null?void 0:h.toLowerCase().includes(t.toLowerCase())}):[],{verticalMargin:D,optionHeight:ae,maxDropdownHeight:le}=pa,I=s=>{s.stopPropagation(),o({},!1)},w=(s,h)=>typeof s[h]=="string"?ze(j(s,h),25):s[h],O=n.useMemo(()=>{let s=Math.min(G.length*ae,M||le);return G.length<5&&u&&(s+=32),i.fromBottom>=s+D?i.top:i.top-s-i.selectHeight-2*D},[G.length,u,i]),g=n.useContext(oa),te=g==null?void 0:g.currentTheme;return ua(["ff-multiselect-pagination"],{root:document.getElementById("ff-multiselect-options-wrapper"),rootMargin:"0px",threshold:.1,onIntersect:(s,h)=>{s.isIntersecting&&C&&C()}}),a.jsxs("div",{role:"listbox",ref:ee,className:J("ff-multiselect-dropdown-container",{[te||""]:!0}),style:{left:i.left,top:O,width:i.width,zIndex:c,maxHeight:`${M}px`},children:[a.jsx("div",{className:"ff-multiselect-options-wrapper",style:{maxHeight:u?`${M-32}px`:`${M}px`},id:"ff-multiselect-options-wrapper",children:G.length===0?Z==="labels"&&t.trim().length>2?a.jsxs(q,{as:"p",className:"no-options",onClick:_,children:[t," add label"]}):a.jsx(q,{textAlign:"center",as:"p",className:"no-options",children:"No Result Found"}):a.jsxs(a.Fragment,{children:[U&&a.jsxs("div",{className:"dropdown-option-container",children:[a.jsx(Ge,{checked:Q,onChange:s=>{P==null||P(s.target.checked)}}),a.jsx(q,{className:"dropdown-option-label",children:"All"})]}),G.map(s=>a.jsxs("div",{role:"option",className:"dropdown-option-container",onClick:h=>{h.target.type!=="checkbox"&&!(s!=null&&s.isDisabled)&&o(s,!s.isChecked)},children:[a.jsx(Ge,{checked:s.isChecked,disabled:s==null?void 0:s.isDisabled}),a.jsx(fe,{zIndex:c+1,title:w(s,m).length>25?j(s,m):"",children:a.jsx(q,{className:"dropdown-option-label",children:w(s,m)})})]},j(s,m))),a.jsx("div",{id:"ff-multiselect-pagination"})]})}),u&&G.length>0&&a.jsx("div",{className:"select-button-container",children:a.jsx(ca,{label:"Select",variant:"tertiary",onClick:I})})]})});try{he.displayName="Dropdown",he.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option[]"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},handleOptionChange:{defaultValue:null,description:"",name:"handleOptionChange",required:!0,type:{name:"(option: Option, isChecked: boolean) => void"}},checkedOptions:{defaultValue:null,description:"",name:"checkedOptions",required:!0,type:{name:"Option[]"}},searchedKeyword:{defaultValue:{value:""},description:"",name:"searchedKeyword",required:!1,type:{name:"string"}},dropdownPosition:{defaultValue:{value:"{}"},description:"",name:"dropdownPosition",required:!1,type:{name:"any"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!0,type:{name:"number"}},withSelectButton:{defaultValue:null,description:"",name:"withSelectButton",required:!1,type:{name:"boolean"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(() => void)"}},labelAccessor:{defaultValue:{value:"label"},description:"",name:"labelAccessor",required:!1,type:{name:"string"}},valueAccessor:{defaultValue:{value:"value"},description:"",name:"valueAccessor",required:!1,type:{name:"string"}},loadMoreOptions:{defaultValue:null,description:"",name:"loadMoreOptions",required:!1,type:{name:"(() => void)"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!1,type:{name:"boolean"}},onToggleAllSelect:{defaultValue:null,description:"",name:"onToggleAllSelect",required:!1,type:{name:"((checkedState: boolean) => void)"}},isAllSelect:{defaultValue:null,description:"",name:"isAllSelect",required:!1,type:{name:"boolean"}},maxDropdownHeight:{defaultValue:null,description:"",name:"maxDropdownHeight",required:!0,type:{name:"number"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},handleIconClick:{defaultValue:null,description:"",name:"handleIconClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const de=({label:r,onChipCloseClick:o,disableChip:t,zIndex:i})=>r?a.jsxs("div",{className:"ff-multiselect-chip",children:[a.jsx("span",{className:`ff-multiselect-chip-label ${t&&"label-padding"}`,children:a.jsx(fe,{style:{display:"flex"},placement:"bottom",title:(r==null?void 0:r.length)>25?r:"",zIndex:i+1,children:a.jsx(q,{fontSize:10,lineHeight:"14px",as:"span",children:typeof r=="string"?ze(r,25):r})})}),!t&&a.jsx(me,{className:"ff-multiselect-chip-close-icon",onClick:o,name:"close_pill"})]}):null,S=({options:r=[],type:o="text",selectedOptions:t=[],onChange:i=()=>{},acceptNewOption:c=!1,zIndex:u=100,label:m="",onSearch:b=()=>{},required:C=!1,disabled:Q=!1,errorMessage:P="Fill this field",displayCount:U=!1,isAllSelected:M,onToggleAllSelect:Z,displayAllSelectedAsText:_,isAllSelect:ee,placeholderForSearching:G="Search",variant:D="default",onLabelPlusIconClick:ae=async()=>{},className:le="",onSelectButtonClick:I=()=>{},labelAccessor:w="label",valueAccessor:O="value",withSelectButton:g=D==="machines",loadMoreOptions:te=()=>{},onEnter:s=()=>{},maxVisibleChips:h=2,onBlur:ne=()=>{},maxDropdownHeight:$e=160})=>{const[p,v]=n.useState(!1),[V,re]=n.useState(r),[L,se]=n.useState(""),[E,H]=n.useState(!1),[ie,F]=n.useState(""),[be,oe]=n.useState(!1),[ge,Xe]=n.useState(U),[Ye,ve]=n.useState({top:0,left:0,width:0,fromBottom:0,selectHeight:0}),[Je,Qe]=n.useState("white"),A=n.useRef(null),N=n.useRef(null),x=n.useRef(null),y=n.useRef(null);let ce=E&&t.length===0;const ye=t.length-h,Ue=()=>{p?g&&x.current&&v(!1):v(!0)},Ze=e=>{var l;e.stopPropagation(),(l=A.current)==null||l.focus(),v(d=>!d),!E&&p&&H(!0)},Se=(e,l)=>{var k;(k=A.current)==null||k.focus();const d=V.map(B=>T(B,O)===T(e,O)?{...B,isChecked:l}:B);re(d);const f=d.filter(B=>B.isChecked).map(({isChecked:B,...sa})=>sa);if(E||H(!0),pe(e)){v(!1),I==null||I(f);return}i&&i(f)},Ce=(e,l)=>{l.stopPropagation(),Se(e,!1)},ea=e=>{e.stopPropagation();const l=V.map(d=>({...d,isChecked:!1}));re(l),i&&i([])},aa=e=>{if(c&&e.key==="Enter"){if(F(""),o==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(L)){v(!1),F("Please enter a valid email address.");return}s==null||s(L),se(""),v(!1)}},we=async()=>{try{await ae(L),se(""),oe(!1)}catch{}};n.useEffect(()=>{var l;const e=d=>{let f=d;for(;f;){const k=window.getComputedStyle(f);if(k.backgroundColor!=="rgba(0, 0, 0, 0)")return k.backgroundColor;f=f.parentElement}return""};if(y.current){const d=(l=y.current.parentElement)==null?void 0:l.parentElement;if(d){const f=e(d);f&&Qe(f)}}},[y.current]);const ue=()=>{if(N.current&&y.current){const e=N.current.getBoundingClientRect(),l=y.current.getBoundingClientRect();ve({top:e.bottom+window.scrollY,left:e.left+window.scrollX,width:e.width,fromBottom:document.documentElement.clientHeight-(e.bottom-4),selectHeight:l.height})}},la=e=>{p||v(!0);const l=e.target.value;if(se(l),b==null||b(l),l.length>2){const d=V.find(f=>{var k;return((k=j(f,O))==null?void 0:k.toLowerCase())===l.toLowerCase()});oe(!d)}else oe(!1)},ta=()=>{v(!1),Xe(!1)};n.useEffect(()=>{var l;const e=(l=N.current)==null?void 0:l.getBoundingClientRect();ve(d=>({...d,width:e==null?void 0:e.width}))},[be]),n.useEffect(()=>{p&&ue()},[p,V]);function na(){const e=document.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",document.body.appendChild(e);const l=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),l}const xe=e=>{const l=na();document.body.scrollHeight>window.innerHeight&&(document.body.style.paddingRight=e?"":`${l}px`),document.body.style.overflow=e?"":"hidden"};n.useEffect(()=>{var e;return p&&xe(!p),x!=null&&x.current&&((e=A==null?void 0:A.current)==null||e.focus()),()=>{xe(!0)}},[p]),n.useEffect(()=>{!p&&E&&ne()},[p,E]),n.useEffect(()=>{if(!pe(r)){let e=r;pe(t)||(e=r.map(l=>({...l,isChecked:t.some(d=>T(d,O)===T(l,O))}))),re(e)}},[r,t]),n.useEffect(()=>{const e=l=>{g&&N.current&&y.current&&x.current&&!x.current.contains(l==null?void 0:l.target)&&!y.current.contains(l==null?void 0:l.target)&&(F(""),v(!1),E||H(!0)),N.current&&A.current&&y.current&&x.current&&!A.current.contains(l==null?void 0:l.target)&&!x.current.contains(l==null?void 0:l.target)&&!y.current.contains(l==null?void 0:l.target)&&!(l!=null&&l.target&&l.target.closest(".ff-label-plus-icon"))&&(F(""),v(!1),E||H(!0))};return window.addEventListener("resize",ue),window.addEventListener("click",e,!0),()=>{window.removeEventListener("resize",ue),window.removeEventListener("click",e),document.body.style.overflow="auto"}},[]);const ra=_&&t.length===V.length;return a.jsxs("div",{className:`ff-multiselect-container-with-icon ${le}`,children:[a.jsxs("div",{ref:y,className:J("ff-multiselect-wrapper",{"ff-multiselect-wrapper--with-options":t==null?void 0:t.length,"ff-multiselect-wrapper--opened-dropdown":p,"ff-multiselect-wrapper--error":ce&&C||ie,"ff-multiselect-wrapper--disabled":Q}),children:[a.jsxs("div",{className:"ff-multiselect",onClick:Ue,children:[a.jsxs("div",{className:"ff-multiselect__main",children:[a.jsx(q,{style:{backgroundColor:Je},className:J({"active-default-label":p||!g&&(t==null?void 0:t.length)||ce&&C,"default-label":!p&&!(t!=null&&t.length)}),required:C,children:m}),a.jsxs("div",{className:"ff-multiselect-chip-container",children:[!g&&(_&&t.length===V.length&&w!=="name"?a.jsx(de,{zIndex:u,label:"All",onChipCloseClick:ea,disableChip:!1},"all"):ge?a.jsx(a.Fragment,{children:t.slice(0,h).map(e=>a.jsx(de,{zIndex:u,label:j(e,w)||"",onChipCloseClick:l=>Ce(e,l),disableChip:(e==null?void 0:e.isDisabled)||!1},j(e,w)))}):t.map(e=>a.jsx(de,{zIndex:u,label:j(e,w)||"",onChipCloseClick:l=>Ce(e,l),disableChip:(e==null?void 0:e.isDisabled)||!1},j(e,w)))),!ra&&a.jsx("div",{className:"ff-multiselect-input-container",children:a.jsx("input",{value:L,type:o,autoComplete:"off",placeholder:G,ref:A,onChange:la,onKeyDown:aa,id:"input-ele",className:"ff-select-input",style:{display:p||t.length&&!g?"inherit":"none"}})})]})]}),ye>0&&ge&&a.jsx("div",{className:"ff-multiselect-more-chip",onClick:ta,children:a.jsxs(q,{fontSize:12,fontWeight:"semi-bold",lineHeight:"16px",color:"var(--brand-color)",children:["+",ye]})}),a.jsx("div",{onClick:e=>{Ze(e)},className:"ff-multiselect__toggle",children:a.jsx(me,{name:"arrow_down",className:J({"ff-select-arrow--opened-dropdown":p,"ff-select-arrow":!p}),color:p?"var(--brand-color)":"var(--default-icon-color)",height:8,width:12})})]}),a.jsxs("div",{ref:N,children:[(ie||ce&&C&&P)&&a.jsx(q,{children:ie||P,fontSize:10,className:"error-text"}),p&&ia.createPortal(a.jsx(he,{ref:x,searchedKeyword:L,checkedOptions:t,handleOptionChange:Se,options:V,dropdownPosition:Ye,zIndex:u,withSelectButton:g,labelAccessor:w,valueAccessor:O,loadMoreOptions:te,isAllSelected:M,onToggleAllSelect:Z,isAllSelect:ee,maxDropdownHeight:$e,variant:D,handleIconClick:we}),document.body)]})]}),D==="labels"&&be&&a.jsx(fe,{title:"Add Label",placement:"top",zIndex:u+1,children:a.jsx(me,{name:"label_plus",onClick:we,className:"ff-label-plus-icon"})})]})};try{S.displayName="MultiSelect",S.__docgenInfo={description:"",displayName:"MultiSelect",props:{options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"Option[]"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"email"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},selectedOptions:{defaultValue:{value:"[]"},description:"",name:"selectedOptions",required:!1,type:{name:"Option[]"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onSearch:{defaultValue:{value:"() => {}"},description:"",name:"onSearch",required:!1,type:{name:"((searchedKeyword: string) => void)"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"((selectedOptions: Option[]) => void)"}},acceptNewOption:{defaultValue:{value:"false"},description:"",name:"acceptNewOption",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:{value:"100"},description:"",name:"zIndex",required:!1,type:{name:"number"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:"Fill this field"},description:"",name:"errorMessage",required:!1,type:{name:"string"}},withSelectButton:{defaultValue:{value:"variant === 'machines' ? true : false"},description:"",name:"withSelectButton",required:!1,type:{name:"boolean"}},onSelectButtonClick:{defaultValue:{value:"() => {}"},description:"",name:"onSelectButtonClick",required:!1,type:{name:"((selectedOptions: Option[]) => void)"}},displayCount:{defaultValue:null,description:"",name:"displayCount",required:!1,type:{name:"boolean"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!1,type:{name:"boolean"}},onToggleAllSelect:{defaultValue:null,description:"",name:"onToggleAllSelect",required:!1,type:{name:"((checkedState: boolean) => void)"}},displayAllSelectedAsText:{defaultValue:null,description:"",name:"displayAllSelectedAsText",required:!1,type:{name:"boolean"}},placeholderForSearching:{defaultValue:{value:"Search"},description:"",name:"placeholderForSearching",required:!1,type:{name:"string"}},isAllSelect:{defaultValue:null,description:"",name:"isAllSelect",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"Default is default. choose labels variant if you are using this component for labels dropdown or choose machines if you are using this component in parallel",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"labels"'},{value:'"machines"'}]}},onLabelPlusIconClick:{defaultValue:{value:"async () => {}"},description:"Pass the function what to do upon clicking label plus icon",name:"onLabelPlusIconClick",required:!1,type:{name:"((_enteredKeyword: string) => Promise<void>)"}},className:{defaultValue:{value:""},description:"classname to handle styling wrt to multiselect div and and labelplus icon",name:"className",required:!1,type:{name:"string"}},labelAccessor:{defaultValue:{value:"label"},description:"",name:"labelAccessor",required:!1,type:{name:"string"}},valueAccessor:{defaultValue:{value:"value"},description:"",name:"valueAccessor",required:!1,type:{name:"string"}},onEnter:{defaultValue:{value:"() => {}"},description:"",name:"onEnter",required:!1,type:{name:"((newOption: string) => void)"}},loadMoreOptions:{defaultValue:{value:"() => {}"},description:"",name:"loadMoreOptions",required:!1,type:{name:"(() => void)"}},maxVisibleChips:{defaultValue:{value:"2"},description:"",name:"maxVisibleChips",required:!1,type:{name:"number"}},onBlur:{defaultValue:{value:"() => {}"},description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},maxDropdownHeight:{defaultValue:{value:"160"},description:"default max height is 160px, give max dropdown height while using jsx or want to control how many max options you want to show",name:"maxDropdownHeight",required:!1,type:{name:"number"}}}}}catch{}const ja={title:"Components/MultiSelect",component:S,parameters:{layout:"centered"},tags:["autodocs"]},da={label:"Fruits",disabled:!1},K={args:{...da,withSelectButton:!0,maxDropdownHeight:192,options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Grape",value:"grape"},{label:"Kiwi",value:"kiwi"},{label:"Mango",value:"mango"},{label:"Orange",value:"orange"},{label:"Peach",value:"peach"},{label:"Strawberry",value:"strawberry"}]}},R={render:()=>{const[r,o]=n.useState([]),[t,i]=n.useState([{name:"Apple",fruit:"apple"}]),c=u=>{i(u)};return n.useEffect(()=>{o([{name:"Apple",fruit:"apple"},{name:"Banana",fruit:"banana"},{name:"CherryCherryCherryCherryCherryCherryCherryCherryCherryCherry",fruit:"cherry"},{name:"Date",fruit:"date"},{name:"Kiwi",fruit:"kiwi"},{name:"Mango",fruit:"mango"},{name:"Orange",fruit:"orange"},{name:"Peach",fruit:"peach"},{name:"Strawberry",fruit:"strawberry"}])},[]),a.jsx(S,{labelAccessor:"name",label:"Fruits",options:r,selectedOptions:t,onChange:c,valueAccessor:"fruit"})}},W={render:()=>{const[r,o]=n.useState([{label:"Sample1@gmail.com",value:"sample1@gmail.com",isDisabled:!0},{label:"Sample2@gmail.com",value:"sample2@gmail.com"}]),[t,i]=n.useState([{label:"Sample1@gmail.com",value:"sample1@gmail.com",isDisabled:!0}]),c=m=>{i(m)},u=m=>{o(b=>[...b,{label:m,value:m}]),i(b=>[...b,{label:m,value:m}])};return a.jsx(S,{label:"Enter Email",type:"email",options:r,selectedOptions:t,onChange:c,acceptNewOption:!0,displayCount:!0,labelAccessor:"label",valueAccessor:"value",onEnter:u})}},z={render:()=>{const[r,o]=n.useState([]),[t,i]=n.useState([]),[c,u]=n.useState(!1),m=C=>{i(C)},b=()=>{i(c?[]:r),u(!c)};return n.useEffect(()=>{o([{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"GrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrape123",value:"grape"},{label:"Kiwi",value:"kiwi"},{label:"Mango",value:"mango"},{label:"Orange",value:"orange"},{label:"Plum",value:"plum"},{label:"Berry",value:"berry"},{label:"Watermelon",value:"watermelon"},{label:"Guava",value:"guava"},{label:"Pineapple",value:"pineapple"},{label:"Strawberry",value:"strawberry"},{label:"Pear",value:"pear"},{label:"Peach",value:"peach"},{label:"Lemon",value:"lemon"},{label:"Papaya",value:"papaya"},{label:"Apricot",value:"apricot"},{label:"Raspberry",value:"raspberry"},{label:"Pomegranate",value:"pomegranate"},{label:"Cantaloupe",value:"cantaloupe"},{label:"Lychee",value:"lychee"}])},[]),n.useEffect(()=>{u(t.length===r.length)},[t,r]),a.jsx("div",{children:a.jsx(S,{label:"Fruits",required:!0,options:r,displayCount:!1,selectedOptions:t,onChange:m,isAllSelected:c,onToggleAllSelect:b,isAllSelect:!0,displayAllSelectedAsText:!0})})}},$={render:()=>{const[r,o]=n.useState([]),[t,i]=n.useState([]),c=u=>{i(u)};return n.useEffect(()=>{o([{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"GrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrape123",value:"grape"},{label:"Kiwi",value:"kiwi"},{label:"Mango",value:"mango"},{label:"Orange",value:"orange"},{label:"Plum",value:"plum"},{label:"Berry",value:"berry"},{label:"Watermelon",value:"watermelon"},{label:"Guava",value:"guava"},{label:"Pineapple",value:"pineapple"},{label:"Strawberry",value:"strawberry"},{label:"Pear",value:"pear"},{label:"Peach",value:"peach"},{label:"Lemon",value:"lemon"},{label:"Papaya",value:"papaya"},{label:"Apricot",value:"apricot"},{label:"Raspberry",value:"raspberry"},{label:"Pomegranate",value:"pomegranate"},{label:"Cantaloupe",value:"cantaloupe"},{label:"Lychee",value:"lychee"}])},[]),a.jsx(S,{label:"Fruits",required:!0,options:r,displayCount:!0,selectedOptions:t,onChange:c,maxDropdownHeight:224})}},X={render:()=>{const[r]=n.useState([{label:"Funtional Testing",value:"functional testing"},{label:"Smoke Testing",value:"smoke testing"},{label:"Regression Testing",value:"regression Testing"},{label:"Integration Testing",value:"integration testing"}]),[o,t]=n.useState([]),i=c=>{t(c)};return a.jsx("div",{style:{width:"250px"},children:a.jsx(S,{required:!0,label:"Labels",variant:"labels",options:r,selectedOptions:o,onChange:i,onLabelPlusIconClick:c=>{alert(c)},displayCount:!0})})}},Y={render:()=>{const[r]=n.useState([{label:a.jsx("h2",{children:"Machine 1"}),value:"machine 1"},{label:a.jsx("h2",{children:"Machine 2"}),value:"machine 2"},{label:a.jsx("h2",{children:"Machine 3"}),value:"machine 3"},{label:a.jsx("h2",{children:"Machine 4"}),value:"machine 4"}]),[o,t]=n.useState([]),i=c=>{t(c)};return a.jsx("div",{style:{width:"250px"},children:a.jsxs("div",{children:[o.map((c,u)=>a.jsx(S,{label:"Machines",variant:"machines",options:r,onSelectButtonClick:i,selectedOptions:o},u)),a.jsx(S,{label:"Machines",labelAccessor:"label",valueAccessor:"value",withSelectButton:!0,options:r,onSelectButtonClick:i,selectedOptions:o})]})})}};var Oe,Ae,ke;K.parameters={...K.parameters,docs:{...(Oe=K.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    withSelectButton: true,
    maxDropdownHeight: 192,
    //5 options and a select button
    options: [{
      label: 'Apple',
      value: 'apple'
    }, {
      label: 'Banana',
      value: 'banana'
    }, {
      label: 'Cherry',
      value: 'cherry'
    }, {
      label: 'Date',
      value: 'date'
    }, {
      label: 'Grape',
      value: 'grape'
    }, {
      label: 'Kiwi',
      value: 'kiwi'
    }, {
      label: 'Mango',
      value: 'mango'
    }, {
      label: 'Orange',
      value: 'orange'
    }, {
      label: 'Peach',
      value: 'peach'
    }, {
      label: 'Strawberry',
      value: 'strawberry'
    }]
  }
}`,...(ke=(Ae=K.parameters)==null?void 0:Ae.docs)==null?void 0:ke.source}}};var je,qe,Ve;R.parameters={...R.parameters,docs:{...(je=R.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    const [options, setOptions] = useState<Option[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([{
      name: 'Apple',
      fruit: 'apple'
    }]);
    const onChange = (options: Option[]) => {
      setSelectedOptions(options);
    };
    useEffect(() => {
      setOptions([{
        name: 'Apple',
        fruit: 'apple'
      }, {
        name: 'Banana',
        fruit: 'banana'
      }, {
        name: 'CherryCherryCherryCherryCherryCherryCherryCherryCherryCherry',
        fruit: 'cherry'
      }, {
        name: 'Date',
        fruit: 'date'
      }, {
        name: 'Kiwi',
        fruit: 'kiwi'
      }, {
        name: 'Mango',
        fruit: 'mango'
      }, {
        name: 'Orange',
        fruit: 'orange'
      }, {
        name: 'Peach',
        fruit: 'peach'
      }, {
        name: 'Strawberry',
        fruit: 'strawberry'
      }]);
    }, []);
    return <MultiSelect labelAccessor="name" label={'Fruits'} options={options} selectedOptions={selectedOptions} onChange={onChange} valueAccessor="fruit" />;
  }
}`,...(Ve=(qe=R.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};var Ee,Pe,Me;W.parameters={...W.parameters,docs:{...(Ee=W.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    const [options, setOptions] = useState([{
      label: 'Sample1@gmail.com',
      value: 'sample1@gmail.com',
      isDisabled: true
    }, {
      label: 'Sample2@gmail.com',
      value: 'sample2@gmail.com'
    }]);
    const [selectedOptions, setSelectedOptions] = useState<{
      label?: string;
      value?: string;
      isDisabled?: boolean;
    }[]>([{
      label: 'Sample1@gmail.com',
      value: 'sample1@gmail.com',
      isDisabled: true
    }]);
    const onChange = (options: {
      label?: string;
      value?: string;
      isDisabled?: boolean;
    }[]) => {
      setSelectedOptions(options);
    };
    const onEnter = (newOption: string) => {
      setOptions(prev => [...prev, {
        label: newOption,
        value: newOption
      }]);
      setSelectedOptions(prev => [...prev, {
        label: newOption,
        value: newOption
      }]);
    };
    return <MultiSelect label={'Enter Email'} type="email" options={options} selectedOptions={selectedOptions} onChange={onChange} acceptNewOption={true} displayCount={true} labelAccessor="label" valueAccessor="value" onEnter={onEnter} />;
  }
}`,...(Me=(Pe=W.parameters)==null?void 0:Pe.docs)==null?void 0:Me.source}}};var De,Ne,Be;z.parameters={...z.parameters,docs:{...(De=z.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => {
    const [options, setOptions] = useState<Option[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<{
      label?: string;
      value?: string;
    }[]>([]);
    const [isAllSelected, setIsAllSelected] = useState<boolean>(false);
    const onChange = (options: {
      label?: string;
      value?: string;
    }[]) => {
      setSelectedOptions(options);
    };
    const onToggleAllSelect = () => {
      if (isAllSelected) {
        setSelectedOptions([]);
      } else {
        setSelectedOptions(options);
      }
      setIsAllSelected(!isAllSelected);
    };
    useEffect(() => {
      setOptions([{
        label: 'Apple',
        value: 'apple'
      }, {
        label: 'Banana',
        value: 'banana'
      }, {
        label: 'Cherry',
        value: 'cherry'
      }, {
        label: 'Date',
        value: 'date'
      }, {
        label: 'GrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrape123',
        value: 'grape'
      }, {
        label: 'Kiwi',
        value: 'kiwi'
      }, {
        label: 'Mango',
        value: 'mango'
      }, {
        label: 'Orange',
        value: 'orange'
      }, {
        label: 'Plum',
        value: 'plum'
      }, {
        label: 'Berry',
        value: 'berry'
      }, {
        label: 'Watermelon',
        value: 'watermelon'
      }, {
        label: 'Guava',
        value: 'guava'
      }, {
        label: 'Pineapple',
        value: 'pineapple'
      }, {
        label: 'Strawberry',
        value: 'strawberry'
      }, {
        label: 'Pear',
        value: 'pear'
      }, {
        label: 'Peach',
        value: 'peach'
      }, {
        label: 'Lemon',
        value: 'lemon'
      }, {
        label: 'Papaya',
        value: 'papaya'
      }, {
        label: 'Apricot',
        value: 'apricot'
      }, {
        label: 'Raspberry',
        value: 'raspberry'
      }, {
        label: 'Pomegranate',
        value: 'pomegranate'
      }, {
        label: 'Cantaloupe',
        value: 'cantaloupe'
      }, {
        label: 'Lychee',
        value: 'lychee'
      }]);
    }, []);
    useEffect(() => {
      setIsAllSelected(selectedOptions.length === options.length);
    }, [selectedOptions, options]);
    return <div>\r
        <MultiSelect label={'Fruits'} required options={options} displayCount={false} selectedOptions={selectedOptions} onChange={onChange} isAllSelected={isAllSelected} onToggleAllSelect={onToggleAllSelect} isAllSelect={true} displayAllSelectedAsText={true} />\r
      </div>;
  }
}`,...(Be=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:Be.source}}};var Ie,Le,Te;$.parameters={...$.parameters,docs:{...(Ie=$.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => {
    const [options, setOptions] = useState<Option[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<{
      label?: string;
      value?: string;
    }[]>([]);
    const onChange = (options: {
      label?: string;
      value?: string;
    }[]) => {
      setSelectedOptions(options);
    };
    useEffect(() => {
      setOptions([{
        label: 'Apple',
        value: 'apple'
      }, {
        label: 'Banana',
        value: 'banana'
      }, {
        label: 'Cherry',
        value: 'cherry'
      }, {
        label: 'Date',
        value: 'date'
      }, {
        label: 'GrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrapeGrape123',
        value: 'grape'
      }, {
        label: 'Kiwi',
        value: 'kiwi'
      }, {
        label: 'Mango',
        value: 'mango'
      }, {
        label: 'Orange',
        value: 'orange'
      }, {
        label: 'Plum',
        value: 'plum'
      }, {
        label: 'Berry',
        value: 'berry'
      }, {
        label: 'Watermelon',
        value: 'watermelon'
      }, {
        label: 'Guava',
        value: 'guava'
      }, {
        label: 'Pineapple',
        value: 'pineapple'
      }, {
        label: 'Strawberry',
        value: 'strawberry'
      }, {
        label: 'Pear',
        value: 'pear'
      }, {
        label: 'Peach',
        value: 'peach'
      }, {
        label: 'Lemon',
        value: 'lemon'
      }, {
        label: 'Papaya',
        value: 'papaya'
      }, {
        label: 'Apricot',
        value: 'apricot'
      }, {
        label: 'Raspberry',
        value: 'raspberry'
      }, {
        label: 'Pomegranate',
        value: 'pomegranate'
      }, {
        label: 'Cantaloupe',
        value: 'cantaloupe'
      }, {
        label: 'Lychee',
        value: 'lychee'
      }]);
    }, []);
    return <MultiSelect label={'Fruits'} required options={options} displayCount selectedOptions={selectedOptions} onChange={onChange} maxDropdownHeight={224} //7 options
    />;
  }
}`,...(Te=(Le=$.parameters)==null?void 0:Le.docs)==null?void 0:Te.source}}};var _e,He,Fe;X.parameters={...X.parameters,docs:{...(_e=X.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => {
    const [options] = useState<Option[]>([{
      label: 'Funtional Testing',
      value: 'functional testing'
    }, {
      label: 'Smoke Testing',
      value: 'smoke testing'
    }, {
      label: 'Regression Testing',
      value: 'regression Testing'
    }, {
      label: 'Integration Testing',
      value: 'integration testing'
    }]);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const onChange = (options: {
      label?: string;
      value?: string;
    }[]) => {
      setSelectedOptions(options);
    };
    return <div style={{
      width: '250px'
    }}>\r
        <MultiSelect required label={'Labels'} variant="labels" options={options} selectedOptions={selectedOptions} onChange={onChange} onLabelPlusIconClick={searchedKeyword => {
        alert(searchedKeyword);
      }} displayCount />\r
      </div>;
  }
}`,...(Fe=(He=X.parameters)==null?void 0:He.docs)==null?void 0:Fe.source}}};var Ke,Re,We;Y.parameters={...Y.parameters,docs:{...(Ke=Y.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => {
    const [options] = useState<Option[]>([{
      label: <h2>Machine 1</h2>,
      value: 'machine 1'
    }, {
      label: <h2>Machine 2</h2>,
      value: 'machine 2'
    }, {
      label: <h2>Machine 3</h2>,
      value: 'machine 3'
    }, {
      label: <h2>Machine 4</h2>,
      value: 'machine 4'
    }]);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const handleSelectChange = (machines: Option[]) => {
      setSelectedOptions(machines);
    };
    return <div style={{
      width: '250px'
    }}>\r
        <div>\r
          {selectedOptions.map((machine, index) => <MultiSelect key={index} label="Machines" variant="machines"
        //  labelAccessor='label'
        // valueAccessor='value'
        options={options} onSelectButtonClick={handleSelectChange} selectedOptions={selectedOptions} // Pass shared state
        />)}\r
          <MultiSelect label="Machines" labelAccessor="label" valueAccessor="value" withSelectButton options={options} onSelectButtonClick={handleSelectChange} selectedOptions={selectedOptions} />\r
        </div>\r
      </div>;
  }
}`,...(We=(Re=Y.parameters)==null?void 0:Re.docs)==null?void 0:We.source}}};const qa=["Default","NameAccessor","EmailGroup","ControlledWithSelectAll","Controlled","Labels","Machines"];export{$ as Controlled,z as ControlledWithSelectAll,K as Default,W as EmailGroup,X as Labels,Y as Machines,R as NameAccessor,qa as __namedExportsOrder,ja as default};
