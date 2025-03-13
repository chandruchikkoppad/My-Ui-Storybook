import{j as t}from"./jsx-runtime-SKoiH9zj.js";import{f as c}from"./ffid-Ct76gIPn.js";import"./index-DJO9vBfz.js";const I=n=>n.flatMap(e=>e.runLevelExecutionDataSets.map((l,i)=>{const{runLevelExecutionDataSets:U,...d}=e;return{...d,...l,runCount:i+1}})),m=({machineInstances:n})=>{const e=I(n);return t.jsxs("div",{children:[t.jsx("h3",{children:"Converted Payload"}),t.jsx("pre",{children:JSON.stringify(e,null,2)})]})},b={title:"Utils/getSequentialPayload",component:m,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{machineInstances:[{id:c(),clientId:"flinko-client-win-daa67320-d70c-438e-b417-62d76669e7a2",numberOfRuns:"3",executionEnv:"Local",browserName:"Google Chrome",browserVersion:"107.0.5304.88",systemUrl:"",machineInfo:{osName:"Windows 11 Home Single Language",osVersion:"10.0.22000",hostName:"LAPTOP-T793RVQN",iconName:"chrome"},deviceInfo:[],headless:!1,runLevelExecutionDataSets:[{peVariableSetId:"UUID",globalVariableSetId:"UUID",testDataSetId:"UUID"},{peVariableSetId:"UUID",globalVariableSetId:"UUID",testDataSetId:"UUID"},{peVariableSetId:"UUID",globalVariableSetId:"UUID",testDataSetId:"UUID"}]}]}};var o,r,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    machineInstances: [{
      id: ffid(),
      clientId: 'flinko-client-win-daa67320-d70c-438e-b417-62d76669e7a2',
      numberOfRuns: '3',
      executionEnv: 'Local',
      browserName: 'Google Chrome',
      browserVersion: '107.0.5304.88',
      systemUrl: '',
      machineInfo: {
        osName: 'Windows 11 Home Single Language',
        osVersion: '10.0.22000',
        hostName: 'LAPTOP-T793RVQN',
        iconName: 'chrome'
      },
      deviceInfo: [],
      headless: false,
      runLevelExecutionDataSets: [{
        peVariableSetId: 'UUID',
        globalVariableSetId: 'UUID',
        testDataSetId: 'UUID'
      }, {
        peVariableSetId: 'UUID',
        globalVariableSetId: 'UUID',
        testDataSetId: 'UUID'
      }, {
        peVariableSetId: 'UUID',
        globalVariableSetId: 'UUID',
        testDataSetId: 'UUID'
      }]
    }]
  }
}`,...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const p=["Primary"];export{a as Primary,p as __namedExportsOrder,b as default};
