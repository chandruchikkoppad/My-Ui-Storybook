import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as l}from"./index-DJO9vBfz.js";import{r as st}from"./index-CFN9ZEHn.js";import{B as m}from"./Button-CpFgCZ6s.js";import{u as ie}from"./useEscKeyEvent-_4Zk5j0a.js";import{u as dt}from"./useClickOutside-BYc9KT_v.js";import{c as D}from"./index-NZcV-alF.js";import{T as r}from"./Typography-DdMJCn-_.js";import{I as H}from"./Icon-BnrH6PuI.js";import{C as ct}from"./DatePicker-B6sh8Uhw.js";/* empty css                */import"./functionUtils-C4j6ouf0.js";const p=l.forwardRef(({anchorRef:s,headerProps:c,childContent:f,cancelButtonProps:a=()=>{},proceedButtonProps:t=()=>{},footerContent:u,isWrapped:n=!1,isAnimated:o=!1,isPopOver:x=!1,modalPosition:i="bottom",leftTopArrow:w=!1,firstAnchorRef:g,anchorRefLeftNum:we,modalProperties:h,anchorLeftDistanceForWrapper:ve=170,extraTopSpace:b,extraRightSpace:C,extraLeftSpace:R,isIconModel:_,wrapperProperties:Re,arrowProperties:je,arrowZIndex:Te,overlay:ke,outSideClick:Z,ignoreRefs:Pe},Ae)=>{var ee;const[y,Le]=l.useState({top:0,left:0}),[U,Be]=l.useState(0),[W,Se]=l.useState(0),[Oe,Ie]=l.useState(0),[Fe,Ne]=l.useState(!1),$=l.useRef(null),{width:We,height:$e,borderRadius:ze=4,zIndex:Ee=99,boxShadow:z,left:Ve,right:qe,top:De,padding:He}=h||{},{left:K,top:X,right:Y=-10,size:M=10}=je||{},G=d=>{const{top:A,left:L,bottom:B,right:T}=d,k=window.innerWidth,E=window.innerHeight;return{spaceTop:A,spaceLeft:L,spaceRight:k-T,spaceBottom:E-B}},v=typeof s=="string"?document.getElementById(s):(s==null?void 0:s.current)||null,J=v==null?void 0:v.getBoundingClientRect();if(!n&&J){const d=G(J);switch(i){case"top":d.spaceTop<((h==null?void 0:h.height)??150)&&(i="bottom");break;case"left":d.spaceLeft<((h==null?void 0:h.width)??480)&&(i="right");break;case"right":d.spaceRight<((h==null?void 0:h.width)??480)&&(i="left");break;case"bottom":d.spaceBottom<((h==null?void 0:h.height)??150)&&(i="top");break}}const _e=d=>d||0,Ze=()=>w&&i==="right"?"left-top-arrow":i==="right"?"left-middle-arrow":"",Ue=_e(we),Ke=(g==null?void 0:g.current)&&((ee=g==null?void 0:g.current)==null?void 0:ee.getBoundingClientRect().left)-ve,Xe=(()=>{const d=(h==null?void 0:h.height)??0;return i==="bottom"?n?y.top+((b==null?void 0:b.wrappedModal)??5):y.top+((b==null?void 0:b.normalModal)??10):i==="right"?w?y.top-((C==null?void 0:C.leftTopArrow)??23):(y==null?void 0:y.top)-d/((C==null?void 0:C.middleLeftArrow)??3.5):i==="top"?y.top-(d+((b==null?void 0:b.normalModal)??10)):i==="left"?w?y.top-((C==null?void 0:C.leftTopArrow)??25):(y==null?void 0:y.top)-d/((C==null?void 0:C.middleLeftArrow)??3.5):y.top-d/1.5})(),Ye=i==="right"?y.left+((R==null?void 0:R.rightAlignModal)??40):g?Ke:i==="left"?y.left-((h==null?void 0:h.width)??274)-15:y.left-((R==null?void 0:R.normal)??30),Ge=ie("Escape"),Je=ie("Enter");Ge(Z),Je(t==null?void 0:t.onClick),dt($,Z,Pe);const j=l.useCallback(()=>{var B;const d=v==null?void 0:v.getBoundingClientRect(),A=d&&G(d),L=(B=$.current)==null?void 0:B.getBoundingClientRect();if(n&&d){const{height:T}=d;if(T>24){const k=T-24;Se(k)}}if(d&&L&&A){const{bottom:T,left:k,right:E}=d,{height:te,width:it}=L,{spaceBottom:re}=A,{scrollX:oe,scrollY:lt}=window;let V=T+lt,q;i=="right"?q=E+oe-20:q=k+oe,it<280&&Ie(6);let ne=0;if(te>re){const ae=te-re;V=V-ae,ne=ae}Le({top:V,left:q}),Be(ne)}},[v]);l.useEffect(()=>{const d=setTimeout(()=>{Ne(!0),j()},100);return window.addEventListener("resize",j),window.addEventListener("scroll",j),()=>{window.removeEventListener("resize",j),clearTimeout(d),window.removeEventListener("scroll",j)}},[j]);const{height:Qe=35,top:et=-34,width:tt=35,zIndex:rt=101,boxShadow:ot}=Re||{},{isOverlay:Q,backgroundColorOverlay:nt,zIndexOverlay:at}=ke||{};return n&&x?null:st.createPortal(e.jsxs(e.Fragment,{children:[Q&&e.jsx("div",{className:D("ff-mini-modal-overlay"),style:{zIndex:at??98,backgroundColor:nt??"transparent"},onClick:a==null?void 0:a.onClick}),e.jsxs("div",{ref:Ae||$,className:D("ff-mini-edit-modal-container",{modalVisible:Fe,animatedModal:o}),style:{top:`${De??Xe}px`,left:`${Ve??Ye}px`,right:`${qe}px`},children:[x&&e.jsx("div",{className:`popover-arrow popover-arrow-${i==="right"?"left":i==="top"?"bottom":i==="left"?"right":"top"} ${Ze()}`,style:{zIndex:`${Te}`,top:`${X?X+U:U}px`,left:`${K&&K}px`,right:`${Y&&Y+Oe}px`,borderWidth:`${i==="right"?`${M}px ${M}px ${M}px 0`:i==="top"?`${M}px ${M}px 0 ${M}px`:i==="left"?`${M}px 0 ${M}px ${M}px`:`0 ${M}px ${M}px ${M}px`}`}}),n&&e.jsx("div",{className:"wrapped-div",style:{left:`${Ue}px`,width:`${tt+W/1.2}px`,height:`${Qe+W}px`,top:`${et-W}px`,backgroundColor:Q?"white":"transparent",zIndex:`${rt}`,boxShadow:ot??"0px -3px 4px 0px var(--ff-mini-modal-box-shadow)"}}),e.jsxs("div",{className:D("mini-edit-modal",{"mini-edit-modal-wrapper-shadow":!!n&&!z,"mini-edit-modal-arrow-shadow":!!x&&!z}),style:{minWidth:n?"190px":"",width:`${We}px`,height:`${$e}px`,borderRadius:`${ze}px`,zIndex:`${Ee}`,boxShadow:`${z??"0px 4px 8px var(--ff-mini-modal-arrow-shadow)"}`,padding:`${He??4}px`},children:[c?e.jsx(r,{as:"div",children:c}):_?e.jsx(e.Fragment,{}):e.jsxs(r,{as:"header",children:[e.jsx(r,{as:"h2",children:"Header text"}),e.jsx("hr",{})]}),f,u?e.jsx(r,{as:"footer",children:u}):_?e.jsx(e.Fragment,{}):e.jsxs("footer",{className:"modal-footer",children:[e.jsx(m,{variant:"primary",className:"btn-cancel",onClick:a==null?void 0:a.onClick,label:a==null?void 0:a.text}),e.jsx(m,{variant:"secondary",className:"btn-proceed",label:t==null?void 0:t.text,onClick:t==null?void 0:t.onClick})]})]})]})]}),document.body)});try{p.displayName="MiniModal",p.__docgenInfo={description:"",displayName:"MiniModal",props:{anchorRef:{defaultValue:null,description:"A reference to the button element that triggers the modal.",name:"anchorRef",required:!1,type:{name:"string | RefObject<HTMLButtonElement>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | number"}},headerProps:{defaultValue:null,description:"Optional properties for configuring the modal header.",name:"headerProps",required:!1,type:{name:"ReactNode"}},childContent:{defaultValue:null,description:"The main content to be displayed inside the modal",name:"childContent",required:!0,type:{name:"ReactNode"}},cancelButtonProps:{defaultValue:{value:"() => {}"},description:"Props for the cancel button inside the modal",name:"cancelButtonProps",required:!1,type:{name:"any"}},proceedButtonProps:{defaultValue:{value:"() => {}"},description:"Props for the proceed button inside the modal.",name:"proceedButtonProps",required:!1,type:{name:"any"}},footerContent:{defaultValue:null,description:"Optional content for the footer of the modal.",name:"footerContent",required:!1,type:{name:"ReactNode"}},isWrapped:{defaultValue:{value:"false"},description:"Determines if the modal should be wrapped inside a container element.",name:"isWrapped",required:!1,type:{name:"boolean"}},isAnimated:{defaultValue:{value:"false"},description:"Determines if the modal should have an animation when displayed.",name:"isAnimated",required:!1,type:{name:"boolean"}},isPopOver:{defaultValue:{value:"false"},description:"Specifies if the modal should behave as a popover with an arrow.",name:"isPopOver",required:!1,type:{name:"boolean"}},isIconModel:{defaultValue:null,description:"Specifies if the modal should behave as a popover with an arrow.",name:"isIconModel",required:!1,type:{name:"boolean"}},modalPosition:{defaultValue:{value:"bottom"},description:`Sets the position of the modal relative to its anchor.
bottom: The modal appears below the anchor.
right: The modal appears to the right of the anchor.`,name:"modalPosition",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"bottom"'},{value:'"top"'}]}},leftTopArrow:{defaultValue:{value:"false"},description:"Adds a top-left aligned arrow to the modal when its position is set to `'right'`.",name:"leftTopArrow",required:!1,type:{name:"boolean"}},firstAnchorRef:{defaultValue:null,description:"A reference to an additional anchor element for positioning the modal.",name:"firstAnchorRef",required:!1,type:{name:"RefObject<HTMLButtonElement>"}},anchorRefLeftNum:{defaultValue:null,description:"A numeric value representing the left position of the anchor element, used to calculate the modal's left position.",name:"anchorRefLeftNum",required:!1,type:{name:"number"}},modalProperties:{defaultValue:null,description:`Optional properties for configuring the modal's dimensions.
width: The width of the modal.
height: The height of the modal.`,name:"modalProperties",required:!1,type:{name:"ModalDimensions"}},anchorLeftDistanceForWrapper:{defaultValue:{value:"170"},description:"distance for the wrapper model from align alignments",name:"anchorLeftDistanceForWrapper",required:!1,type:{name:"number"}},extraTopSpace:{defaultValue:null,description:"extra top space added from anchor",name:"extraTopSpace",required:!1,type:{name:"{ wrappedModal?: number; normalModal?: number; } | undefined"}},extraRightSpace:{defaultValue:null,description:"extra right space added from anchor",name:"extraRightSpace",required:!1,type:{name:"{ leftTopArrow?: number; middleLeftArrow?: number; } | undefined"}},extraLeftSpace:{defaultValue:null,description:"extra left space added from anchor",name:"extraLeftSpace",required:!1,type:{name:"{ normal?: number; rightAlignModal?: number; } | undefined"}},wrapperProperties:{defaultValue:null,description:"",name:"wrapperProperties",required:!1,type:{name:"{ height?: number; top?: number; width?: number | undefined; zIndex?: number | undefined; boxShadow?: string | undefined; } | undefined"}},arrowZIndex:{defaultValue:null,description:"",name:"arrowZIndex",required:!1,type:{name:"number"}},arrowProperties:{defaultValue:null,description:"",name:"arrowProperties",required:!1,type:{name:"{ right?: number; left?: number; top?: number | undefined; size?: number | undefined; } | undefined"}},overlay:{defaultValue:null,description:"",name:"overlay",required:!1,type:{name:"{ isOverlay?: boolean; zIndexOverlay?: number; backgroundColorOverlay?: string | undefined; } | undefined"}},outSideClick:{defaultValue:null,description:"",name:"outSideClick",required:!1,type:{name:"any"}},ignoreRefs:{defaultValue:null,description:"",name:"ignoreRefs",required:!1,type:{name:"RefObject<HTMLElement>[]"}}}}}catch{}const kt={title:"Components/MiniModal",component:p,parameters:{layout:"centered"},tags:["autodocs"]},P=()=>{const[s,c]=l.useState(null);return{currentModal:s,openModal:t=>{c(u=>u===t?null:t)},closeModal:()=>c(null)}},pt=()=>{const s=l.useRef(null),c=l.useRef(null),f=l.useRef(null),a=l.useRef(null),t=l.useRef(null),u=l.useRef(null),{currentModal:n,openModal:o,closeModal:x}=P(),[i,w]=l.useState(),g=()=>{x()};return e.jsxs("div",{className:"ff-mini-modal-buttons-flex ff-mini-modal-gap-10",children:[e.jsx(m,{onClick:()=>o(1),id:"112233",ref:s,label:"122",variant:n===1?"primary":"secondary"}),n===1&&e.jsx(p,{anchorRef:"112233",overlay:{isOverlay:!0,zIndexOverlay:99},modalProperties:{width:300,height:180,left:180,top:250},headerProps:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",children:"Modal 1"}),e.jsx("hr",{})]}),childContent:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",children:"This is some asdsadasd sa dasdadad content inside the first modal."}),e.jsx(ct,{value:i,onChange:w,calendarWidth:240,dateOnly:!0,zIndex:100})]}),cancelButtonProps:{text:"Cancel",onClick:g},proceedButtonProps:{text:"Proceed",onClick:()=>{}},isWrapped:!1,isPopOver:!1,isAnimated:!0,modalPosition:"left",ignoreRefs:[u]}),e.jsx(m,{onClick:()=>o(2),ref:c,label:"2",variant:n===2?"primary":"secondary"}),n===2&&e.jsx(p,{anchorRef:c,modalProperties:{width:300,height:180},headerProps:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",children:"Modal 2"}),e.jsx("hr",{})]}),childContent:e.jsx(e.Fragment,{children:e.jsx(r,{as:"p",children:"This is some content inside the second modal."})}),cancelButtonProps:{text:"Cancel",onClick:g},proceedButtonProps:{text:"Proceed",onClick:()=>{}},isWrapped:!1,isAnimated:!1,isPopOver:!1,modalPosition:"top"}),e.jsx(m,{onClick:()=>o(3),ref:f,label:"3",variant:n===3?"primary":"secondary"}),n===3&&e.jsx(p,{anchorRef:f,modalProperties:{width:300,height:180},headerProps:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",children:"Modal 3"}),e.jsx("hr",{})]}),childContent:e.jsx(e.Fragment,{children:e.jsx(r,{as:"p",children:"This is some content inside the second modal."})}),cancelButtonProps:{text:"Cancel",onClick:g},proceedButtonProps:{text:"Proceed",onClick:()=>{}},isWrapped:!1,isAnimated:!1,isPopOver:!1,modalPosition:"top"}),e.jsx(m,{onClick:()=>o(4),ref:a,label:"4",variant:n===4?"primary":"secondary"}),n===4&&e.jsx(p,{anchorRef:a,modalProperties:{width:300,height:180},headerProps:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",children:"Modal 4"}),e.jsx("hr",{})]}),childContent:e.jsx(e.Fragment,{children:e.jsx(r,{as:"p",children:"This is some content inside the second modal."})}),cancelButtonProps:{text:"Cancel",onClick:g},proceedButtonProps:{text:"Proceed",onClick:()=>{}},isWrapped:!1,isAnimated:!1,isPopOver:!1,modalPosition:"bottom"}),e.jsx(m,{onClick:()=>o(5),ref:t,label:"5",variant:n===5?"primary":"secondary"}),n===5&&e.jsx(p,{anchorRef:t,modalProperties:{width:300,height:180},headerProps:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",children:"Modal 5"}),e.jsx("hr",{})]}),childContent:e.jsx(e.Fragment,{children:e.jsx(r,{as:"p",children:"This is some content inside the second modal."})}),cancelButtonProps:{text:"Cancel",onClick:g},proceedButtonProps:{text:"Proceed",onClick:()=>{}},isWrapped:!1,isAnimated:!1,isPopOver:!1,modalPosition:"right"})]})},S={render:()=>e.jsx(pt,{})},O=()=>{const s=l.useRef(null),c=l.useRef(null),f=l.useRef(null),a=l.useRef(null),{currentModal:t,openModal:u,closeModal:n}=P(),o=()=>{n()};return e.jsxs("div",{className:"ff-mini-modal-buttons-flex ff-mini-modal-gap-10",children:[e.jsx(m,{onClick:()=>u(1),label:"12",id:"1a2b",variant:t===1?"primary":"secondary"}),t===1&&e.jsx(p,{anchorRef:"1a2b",overlay:{isOverlay:!0,zIndexOverlay:99},modalProperties:{width:300,height:250,left:180},arrowProperties:{left:270,size:6},arrowZIndex:1e3,headerProps:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",children:"Modal 1"}),e.jsx("hr",{})]}),childContent:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",children:"This is some content inside the third modal."}),e.jsx(r,{as:"p",children:"This is some content inside the third modal."}),e.jsx(r,{as:"p",children:"This is some content inside the third modal."})]}),cancelButtonProps:{text:"Cancel",onClick:o},outSideClick:o,proceedButtonProps:{text:"Proceed",onClick:()=>{}},isWrapped:!1,isAnimated:!0,isPopOver:!0,extraTopSpace:{normalModal:10}}),e.jsx(m,{onClick:()=>u(2),ref:s,label:"2",variant:t===2?"primary":"secondary"}),t===2&&e.jsx(p,{modalProperties:{width:300,height:350},anchorRef:s,headerProps:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",children:"Modal 2"}),e.jsx("hr",{})]}),childContent:e.jsx(e.Fragment,{children:e.jsx(r,{as:"p",children:"This is some content inside the third modal. Lorem ipsum dolor elit."})}),cancelButtonProps:{text:"Cancel",onClick:o},outSideClick:o,proceedButtonProps:{text:"Proceed",onClick:()=>{}},isWrapped:!1,isAnimated:!1,isPopOver:!0,modalPosition:"right",leftTopArrow:!1,extraRightSpace:{middleLeftArrow:4},extraLeftSpace:{rightAlignModal:40}}),e.jsx(m,{onClick:()=>u(3),ref:c,label:"3",variant:t===3?"primary":"secondary"}),t===3&&e.jsx(p,{anchorRef:c,modalProperties:{width:300,height:250},headerProps:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",children:"Modal 3"}),e.jsx("hr",{})]}),childContent:e.jsx(e.Fragment,{children:e.jsx(r,{as:"p",children:"This is some content inside the third modal. Lorem ipsum dolor sit."})}),cancelButtonProps:{text:"Cancel",onClick:o},outSideClick:o,proceedButtonProps:{text:"Proceed",onClick:()=>{}},modalPosition:"right",isPopOver:!0,leftTopArrow:!0,extraRightSpace:{middleLeftArrow:30},extraLeftSpace:{rightAlignModal:40}}),e.jsx(m,{onClick:()=>u(4),ref:f,label:"4",variant:t===4?"primary":"secondary"}),t===4&&e.jsx(p,{anchorRef:f,modalProperties:{width:300,height:200},headerProps:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",children:"Modal 4"}),e.jsx("hr",{})]}),childContent:e.jsx(e.Fragment,{children:e.jsx(r,{as:"p",children:"This is some content inside the third modal. Lorem ipsum dolor sit."})}),cancelButtonProps:{text:"Cancel",onClick:o},outSideClick:o,proceedButtonProps:{text:"Proceed",onClick:()=>{}},modalPosition:"top",isPopOver:!0,leftTopArrow:!0,extraTopSpace:{normalModal:20},extraRightSpace:{middleLeftArrow:30},extraLeftSpace:{rightAlignModal:40}}),e.jsx(m,{onClick:()=>u(5),ref:a,label:"5",variant:t===5?"primary":"secondary"}),t===5&&e.jsx(p,{anchorRef:a,modalProperties:{height:148,width:304},headerProps:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",children:"Modal 5"}),e.jsx("hr",{})]}),childContent:e.jsx(e.Fragment,{children:e.jsx(r,{as:"p",children:"This is some content inside the third modal. Lorem ipsum dolor sit."})}),footerContent:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Footer"}),e.jsx("button",{onClick:o,children:"Cancel"})]}),outSideClick:o,cancelButtonProps:{text:"Cancel",onClick:o},proceedButtonProps:{text:"Proceed",onClick:()=>{}},modalPosition:"left",isPopOver:!0,leftTopArrow:!0,extraTopSpace:{normalModal:20},extraRightSpace:{middleLeftArrow:30},extraLeftSpace:{rightAlignModal:40}})]})},I=()=>{const s=l.useRef(null),c=l.useRef(null),f=l.useRef(null),{currentModal:a,openModal:t,closeModal:u}=P(),n=()=>{u()};return e.jsxs("div",{className:"ff-mini-modal-buttons-flex ff-mini-modal-gap-10",children:[e.jsx(m,{onClick:()=>t(1),ref:s,label:"1",variant:a===1?"primary":"secondary"}),a===1&&e.jsx(p,{anchorRef:s,overlay:{isOverlay:!0,zIndexOverlay:99,backgroundColorOverlay:"var(--pop-up-background-blur)"},modalProperties:{width:487,height:180},headerProps:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",children:"Update Label For Scripts"}),e.jsx("hr",{})]}),childContent:e.jsx(e.Fragment,{children:e.jsx(r,{as:"p",children:"This is some content inside the first modal."})}),outSideClick:n,cancelButtonProps:{text:"Cancel",onClick:n},proceedButtonProps:{text:"Update",onClick:()=>{}},isWrapped:!0,isAnimated:!0,firstAnchorRef:s,anchorRefLeftNum:164,anchorLeftDistanceForWrapper:170,extraTopSpace:{normalModal:5}}),e.jsx(m,{onClick:()=>t(2),ref:c,label:"2",variant:a===2?"primary":"secondary"}),a===2&&e.jsx(p,{anchorRef:c,modalProperties:{width:358,height:135},headerProps:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",children:"Export Selected scripts"}),e.jsx("hr",{})]}),childContent:e.jsx(r,{as:"p",children:"Child content modify here"}),cancelButtonProps:{text:"Cancel",onClick:n},proceedButtonProps:{text:"Export",onClick:()=>{}},outSideClick:n,isWrapped:!0,isAnimated:!1,firstAnchorRef:s,anchorRefLeftNum:193,anchorLeftDistanceForWrapper:170,extraTopSpace:{normalModal:5}}),e.jsx(m,{onClick:()=>t(3),ref:f,label:"3",variant:a===3?"primary":"secondary"}),a===3&&e.jsx(p,{anchorRef:f,modalProperties:{width:487,height:210,borderRadius:0,zIndex:3,boxShadow:"none"},wrapperProperties:{width:30,zIndex:4,boxShadow:"none"},headerProps:e.jsxs(e.Fragment,{children:[e.jsx(r,{as:"p",children:"Delete Selected Scripts"}),e.jsx("hr",{})]}),childContent:e.jsx(e.Fragment,{children:e.jsx(r,{as:"p",children:"This is some content inside the third modal."})}),cancelButtonProps:{text:"Cancel",onClick:n},proceedButtonProps:{text:"Delete",onClick:()=>{}},isWrapped:!0,isAnimated:!0,outSideClick:n,firstAnchorRef:s,anchorRefLeftNum:225,anchorLeftDistanceForWrapper:170,extraTopSpace:{normalModal:50}})]})},F=()=>{const s=l.useRef(null),c=l.useRef(null),f=l.useRef(null),{currentModal:a,openModal:t}=P();return e.jsxs("div",{className:"ff-mini-modal-buttons-flex ff-mini-modal-gap-10",children:[e.jsx(H,{className:"ff-mini-edit-model-icon",width:16,height:16,onClick:()=>t(1),ref:s,name:"user_profile"}),a===1&&e.jsx(p,{anchorRef:s,modalProperties:{width:168,height:108},overlay:{isOverlay:!0,zIndexOverlay:99},childContent:e.jsx(e.Fragment,{children:e.jsx(r,{as:"p",children:"This is some content inside the first modal."})}),isIconModel:!0,isAnimated:!0,firstAnchorRef:s,anchorLeftDistanceForWrapper:0,extraTopSpace:{normalModal:5}}),e.jsx(H,{className:"ff-mini-edit-model-icon",width:16,height:16,onClick:()=>t(2),ref:c,name:"user_profile"}),a===2&&e.jsx(p,{anchorRef:c,modalProperties:{width:193,height:128},childContent:e.jsx(e.Fragment,{children:e.jsx(r,{as:"p",children:"This is some content inside the Second modal."})}),isIconModel:!0,isAnimated:!0,firstAnchorRef:c,anchorLeftDistanceForWrapper:20,extraTopSpace:{normalModal:15}}),e.jsx(H,{className:"ff-mini-edit-model-icon",width:16,height:16,onClick:()=>t(3),ref:f,name:"user_profile"}),a===3&&e.jsx(p,{anchorRef:f,modalProperties:{width:168,height:108},childContent:e.jsx(e.Fragment,{children:e.jsx(r,{as:"p",children:"This is some content inside the third modal."})}),isIconModel:!0,isAnimated:!0,firstAnchorRef:f,anchorLeftDistanceForWrapper:10,extraTopSpace:{normalModal:10}})]})},N=()=>{const{currentModal:s,openModal:c,closeModal:f}=P(),t=["one","two","three","four","three","four","four","three","four"].map((o,x)=>({id:`${x+1}`,value:o})),u=l.useRef([]),n=o=>{const x=u.current[o];if(x){const{top:i,left:w,height:g}=x.getBoundingClientRect();return{top:i+g,left:w}}return{top:0,left:0}};return e.jsx("div",{className:"ff-mini-modal-loop",children:t.map((o,x)=>e.jsxs("div",{className:"ff-mini-modal-loop-div",children:[e.jsx("p",{children:o.value}),e.jsx(m,{variant:"primary",ref:i=>u.current[x]=i,onClick:()=>c(Number(o.id)),id:o.id,label:o.id}),s===Number(o.id)&&e.jsx(p,{anchorRef:i=>u.current[x]=i,id:o.id,modalProperties:{width:168,height:108,top:n(x).top,left:n(x).left},overlay:{isOverlay:!0,zIndexOverlay:99},childContent:e.jsxs(r,{as:"p",children:["This is some content inside the modal for ",o.value,"."]}),isIconModel:!0,isAnimated:!0,outSideClick:f})]},o.id))})};var le,se,de;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <BasicModalComponent />
}`,...(de=(se=S.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ce,pe,he;O.parameters={...O.parameters,docs:{...(ce=O.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  const btnRef2 = useRef<HTMLButtonElement>(null);
  const btnRef3 = useRef<HTMLButtonElement>(null);
  const btnRef4 = useRef<HTMLButtonElement>(null);
  const btnRef5 = useRef<HTMLButtonElement>(null);
  const {
    currentModal,
    openModal,
    closeModal
  } = useModal();
  const handleCancel = () => {
    closeModal();
  };
  return <div className="ff-mini-modal-buttons-flex ff-mini-modal-gap-10">\r
      <Button onClick={() => openModal(1)} label="12" id="1a2b" variant={currentModal === 1 ? 'primary' : 'secondary'} />\r
\r
      {currentModal === 1 && <MiniModal anchorRef="1a2b" overlay={{
      isOverlay: true,
      zIndexOverlay: 99
    }} modalProperties={{
      width: 300,
      height: 250,
      left: 180
    }} arrowProperties={{
      left: 270,
      size: 6
    }} arrowZIndex={1000} headerProps={<>\r
              <Typography as="p">Modal 1</Typography>\r
              <hr />\r
            </>} childContent={<>\r
              <Typography as="p">\r
                This is some content inside the third modal.\r
              </Typography>\r
              <Typography as="p">\r
                This is some content inside the third modal.\r
              </Typography>\r
              <Typography as="p">\r
                This is some content inside the third modal.\r
              </Typography>\r
            </>} cancelButtonProps={{
      text: 'Cancel',
      onClick: handleCancel
    }} outSideClick={handleCancel} proceedButtonProps={{
      text: 'Proceed',
      onClick: () => {}
    }} isWrapped={false} isAnimated={true} isPopOver={true} extraTopSpace={{
      normalModal: 10
    }} />}\r
      <Button onClick={() => openModal(2)} ref={btnRef2} label="2" variant={currentModal === 2 ? 'primary' : 'secondary'} />\r
\r
      {currentModal === 2 && <MiniModal modalProperties={{
      width: 300,
      height: 350
    }} anchorRef={btnRef2} headerProps={<>\r
              <Typography as="p">Modal 2</Typography>\r
              <hr />\r
            </>} childContent={<>\r
              <Typography as="p">\r
                This is some content inside the third modal. Lorem ipsum dolor\r
                elit.\r
              </Typography>\r
            </>} cancelButtonProps={{
      text: 'Cancel',
      onClick: handleCancel
    }} outSideClick={handleCancel} proceedButtonProps={{
      text: 'Proceed',
      onClick: () => {}
    }} isWrapped={false} isAnimated={false} isPopOver={true} modalPosition="right" leftTopArrow={false} extraRightSpace={{
      middleLeftArrow: 4
    }} extraLeftSpace={{
      rightAlignModal: 40
    }} />}\r
      <Button onClick={() => openModal(3)} ref={btnRef3} label="3" variant={currentModal === 3 ? 'primary' : 'secondary'} />\r
\r
      {currentModal === 3 && <MiniModal anchorRef={btnRef3} modalProperties={{
      width: 300,
      height: 250
    }} headerProps={<>\r
              <Typography as="p">Modal 3</Typography>\r
              <hr />\r
            </>} childContent={<>\r
              <Typography as="p">\r
                This is some content inside the third modal. Lorem ipsum dolor\r
                sit.\r
              </Typography>\r
            </>} cancelButtonProps={{
      text: 'Cancel',
      onClick: handleCancel
    }} outSideClick={handleCancel} proceedButtonProps={{
      text: 'Proceed',
      onClick: () => {}
    }} modalPosition="right" isPopOver={true} leftTopArrow={true} extraRightSpace={{
      middleLeftArrow: 30
    }} extraLeftSpace={{
      rightAlignModal: 40
    }} />}\r
      <Button onClick={() => openModal(4)} ref={btnRef4} label="4" variant={currentModal === 4 ? 'primary' : 'secondary'} />\r
\r
      {currentModal === 4 && <MiniModal anchorRef={btnRef4} modalProperties={{
      width: 300,
      height: 200
    }} headerProps={<>\r
              <Typography as="p">Modal 4</Typography>\r
              <hr />\r
            </>} childContent={<>\r
              <Typography as="p">\r
                This is some content inside the third modal. Lorem ipsum dolor\r
                sit.\r
              </Typography>\r
            </>} cancelButtonProps={{
      text: 'Cancel',
      onClick: handleCancel
    }} outSideClick={handleCancel} proceedButtonProps={{
      text: 'Proceed',
      onClick: () => {}
    }} modalPosition="top" isPopOver={true} leftTopArrow={true} extraTopSpace={{
      normalModal: 20
    }} extraRightSpace={{
      middleLeftArrow: 30
    }} extraLeftSpace={{
      rightAlignModal: 40
    }} />}\r
      <Button onClick={() => openModal(5)} ref={btnRef5} label="5" variant={currentModal === 5 ? 'primary' : 'secondary'} />\r
\r
      {currentModal === 5 && <MiniModal anchorRef={btnRef5} modalProperties={{
      height: 148,
      width: 304
    }} headerProps={<>\r
              <Typography as="p">Modal 5</Typography>\r
              <hr />\r
            </>} childContent={<>\r
              <Typography as="p">\r
                This is some content inside the third modal. Lorem ipsum dolor\r
                sit.\r
              </Typography>\r
            </>} footerContent={<>\r
              <p>Footer</p>\r
              <button onClick={handleCancel}>Cancel</button>\r
            </>} outSideClick={handleCancel} cancelButtonProps={{
      text: 'Cancel',
      onClick: handleCancel
    }} proceedButtonProps={{
      text: 'Proceed',
      onClick: () => {}
    }} modalPosition="left" isPopOver={true} leftTopArrow={true} extraTopSpace={{
      normalModal: 20
    }} extraRightSpace={{
      middleLeftArrow: 30
    }} extraLeftSpace={{
      rightAlignModal: 40
    }} />}\r
    </div>;
}`,...(he=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ue,fe,me;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const btnRef1 = useRef<HTMLButtonElement>(null);
  const btnRef2 = useRef<HTMLButtonElement>(null);
  const btnRef3 = useRef<HTMLButtonElement>(null);
  const {
    currentModal,
    openModal,
    closeModal
  } = useModal();
  const handleCancel = () => {
    closeModal();
  };
  return <div className="ff-mini-modal-buttons-flex ff-mini-modal-gap-10">\r
      <Button onClick={() => openModal(1)} ref={btnRef1} label="1" variant={currentModal === 1 ? 'primary' : 'secondary'} />\r
\r
      {currentModal === 1 && <MiniModal anchorRef={btnRef1} overlay={{
      isOverlay: true,
      zIndexOverlay: 99,
      backgroundColorOverlay: 'var(--pop-up-background-blur)'
    }} modalProperties={{
      width: 487,
      height: 180
    }} headerProps={<>\r
              <Typography as="p">Update Label For Scripts</Typography>\r
              <hr />\r
            </>} childContent={<>\r
              <Typography as="p">\r
                This is some content inside the first modal.\r
              </Typography>\r
            </>} outSideClick={handleCancel} cancelButtonProps={{
      text: 'Cancel',
      onClick: handleCancel
    }} proceedButtonProps={{
      text: 'Update',
      onClick: () => {}
    }} isWrapped={true} isAnimated={true} firstAnchorRef={btnRef1} anchorRefLeftNum={164} anchorLeftDistanceForWrapper={170} extraTopSpace={{
      normalModal: 5
    }} />}\r
\r
      <Button onClick={() => openModal(2)} ref={btnRef2} label="2" variant={currentModal === 2 ? 'primary' : 'secondary'} />\r
\r
      {currentModal === 2 && <MiniModal anchorRef={btnRef2} modalProperties={{
      width: 358,
      height: 135
    }} headerProps={<>\r
              <Typography as="p">Export Selected scripts</Typography>\r
              <hr />\r
            </>} childContent={<Typography as="p">Child content modify here</Typography>} cancelButtonProps={{
      text: 'Cancel',
      onClick: handleCancel
    }} proceedButtonProps={{
      text: 'Export',
      onClick: () => {}
    }} outSideClick={handleCancel} isWrapped={true} isAnimated={false} firstAnchorRef={btnRef1} anchorRefLeftNum={193} anchorLeftDistanceForWrapper={170} extraTopSpace={{
      normalModal: 5
    }} />}\r
\r
      <Button onClick={() => openModal(3)} ref={btnRef3} label="3" variant={currentModal === 3 ? 'primary' : 'secondary'} />\r
\r
      {currentModal === 3 && <MiniModal anchorRef={btnRef3} modalProperties={{
      width: 487,
      height: 210,
      borderRadius: 0,
      zIndex: 3,
      boxShadow: 'none'
    }} wrapperProperties={{
      width: 30,
      zIndex: 4,
      boxShadow: 'none'
    }} headerProps={<>\r
              <Typography as="p">Delete Selected Scripts</Typography>\r
              <hr />\r
            </>} childContent={<>\r
              <Typography as="p">\r
                This is some content inside the third modal.\r
              </Typography>\r
            </>} cancelButtonProps={{
      text: 'Cancel',
      onClick: handleCancel
    }} proceedButtonProps={{
      text: 'Delete',
      onClick: () => {}
    }} isWrapped={true} isAnimated={true} outSideClick={handleCancel} firstAnchorRef={btnRef1} anchorRefLeftNum={225} anchorLeftDistanceForWrapper={170} extraTopSpace={{
      normalModal: 50
    }} />}\r
    </div>;
}`,...(me=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var xe,ge,ye;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const iconRef1 = useRef<HTMLButtonElement>(null);
  const iconRef2 = useRef<HTMLButtonElement>(null);
  const iconRef3 = useRef<HTMLButtonElement>(null);
  const {
    currentModal,
    openModal
  } = useModal();
  return <div className="ff-mini-modal-buttons-flex ff-mini-modal-gap-10">\r
      <Icon className="ff-mini-edit-model-icon" width={16} height={16} onClick={() => openModal(1)} ref={iconRef1} name="user_profile" />\r
\r
      {currentModal === 1 && <MiniModal anchorRef={iconRef1} modalProperties={{
      width: 168,
      height: 108
    }} overlay={{
      isOverlay: true,
      zIndexOverlay: 99
    }} childContent={<>\r
              <Typography as="p">\r
                This is some content inside the first modal.\r
              </Typography>\r
            </>} isIconModel={true} isAnimated={true} firstAnchorRef={iconRef1} anchorLeftDistanceForWrapper={0} extraTopSpace={{
      normalModal: 5
    }} />}\r
\r
      <Icon className="ff-mini-edit-model-icon" width={16} height={16} onClick={() => openModal(2)} ref={iconRef2} name="user_profile" />\r
\r
      {currentModal === 2 && <MiniModal anchorRef={iconRef2} modalProperties={{
      width: 193,
      height: 128
    }} childContent={<>\r
              <Typography as="p">\r
                This is some content inside the Second modal.\r
              </Typography>\r
            </>} isIconModel={true} isAnimated={true} firstAnchorRef={iconRef2} anchorLeftDistanceForWrapper={20} extraTopSpace={{
      normalModal: 15
    }} />}\r
\r
      <Icon className="ff-mini-edit-model-icon" width={16} height={16} onClick={() => openModal(3)} ref={iconRef3} name="user_profile" />\r
\r
      {currentModal === 3 && <MiniModal anchorRef={iconRef3} modalProperties={{
      width: 168,
      height: 108
    }} childContent={<>\r
              <Typography as="p">\r
                This is some content inside the third modal.\r
              </Typography>\r
            </>} isIconModel={true} isAnimated={true} firstAnchorRef={iconRef3} anchorLeftDistanceForWrapper={10} extraTopSpace={{
      normalModal: 10
    }} />}\r
    </div>;
}`,...(ye=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var Ce,Me,be;N.parameters={...N.parameters,docs:{...(Ce=N.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  const {
    currentModal,
    openModal,
    closeModal
  } = useModal();
  const modelItems = ['one', 'two', 'three', 'four', 'three', 'four', 'four', 'three', 'four'];
  const structuredArray = modelItems.map((value, index) => ({
    id: \`\${index + 1}\`,
    value: value
  }));
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const getButtonPosition = (index: number) => {
    const button = buttonRefs.current[index];
    if (button) {
      const {
        top,
        left,
        height
      } = button.getBoundingClientRect();
      return {
        top: top + height,
        left
      };
    }
    return {
      top: 0,
      left: 0
    };
  };
  return <div className="ff-mini-modal-loop">\r
      {structuredArray.map((data, index) => <div key={data.id} className="ff-mini-modal-loop-div">\r
          <p>{data.value}</p>\r
          <Button variant="primary" ref={el => buttonRefs.current[index] = el} onClick={() => openModal(Number(data.id))} id={data.id} label={data.id} />\r
\r
          {currentModal === Number(data.id) && <MiniModal anchorRef={el => buttonRefs.current[index] = el} id={data.id} modalProperties={{
        width: 168,
        height: 108,
        top: getButtonPosition(index).top,
        left: getButtonPosition(index).left
      }} overlay={{
        isOverlay: true,
        zIndexOverlay: 99
      }} childContent={<Typography as="p">\r
                  This is some content inside the modal for {data.value}.\r
                </Typography>} isIconModel={true} isAnimated={true} outSideClick={closeModal} />}\r
        </div>)}\r
    </div>;
}`,...(be=(Me=N.parameters)==null?void 0:Me.docs)==null?void 0:be.source}}};const Pt=["BasicModal","CustomModalWithArrow","CustomModalWithWrapper","normalModalFollowedByIcon","NormalModalWithLoop"];export{S as BasicModal,O as CustomModalWithArrow,I as CustomModalWithWrapper,N as NormalModalWithLoop,Pt as __namedExportsOrder,kt as default,F as normalModalFollowedByIcon};
