import{A as b}from"./AddResourceButton-CY5wXw3U.js";import"./jsx-runtime-SKoiH9zj.js";import"./index-DJO9vBfz.js";import"./index-NZcV-alF.js";import"./MenuOption-DncJFCYj.js";import"./Icon-BnrH6PuI.js";import"./Tooltip-jHEmaokv.js";import"./index-CFN9ZEHn.js";import"./checkEmpty-xi6SckPb.js";import"./ThemeProvider-D5XEyBwi.js";import"./Typography-DdMJCn-_.js";import"./useClickOutside-BYc9KT_v.js";import"./usePortalPosition-DKFkIZLt.js";const C={title:"Components/AddResourceButton",component:b,parameters:{layout:"centered"}},n={args:{directionalArrow:[{direction:"right",menuOptions:[{label:"Sub Module",value:"sub_module_sibling",icon:"module_icon",disable:!1}]}],onMenuOptionClick:e=>{alert(`Option clicked: ${e.label}, Value: ${e.value}`)}}},o={args:{directionalArrow:[{direction:"top",menuOptions:[{label:"Add Module",value:"add_module_top",icon:"module_icon",disable:!1}]},{direction:"right",menuOptions:[{label:"Add Sub Module",value:"add_sub_module_sibling",icon:"module_icon",disable:!1}]}],onMenuOptionClick:e=>{alert(`Option clicked: ${e.label}, Value: ${e.value}`)}}},a={args:{directionalArrow:[{direction:"top",menuOptions:[{label:"Module",value:"add_module_top",icon:"module_icon",disable:!1}]},{direction:"right",menuOptions:[{label:"Sub Module",value:"add_module_sibling",icon:"module_icon",disable:!1},{label:"Automation Script",value:"add_Automation_script_sibling",icon:"automation_testcase",disable:!1},{label:"Manual Test Case",value:"add_manual_test_case_sibling",icon:"manual_testcase",disable:!1},{label:"Pre / Post Condition",value:"add_pre_post_condition_sibling",icon:"pre_post_condition",disable:!1},{label:"Authorization",value:"add_authorization_sibling",icon:"authorization_icon",disable:!1},{label:"Data Provider",value:"data_provider_sibling",icon:"data_provider",disable:!1}]},{direction:"down",menuOptions:[{label:"Sub Module",value:"sub_module_down",icon:"module_icon",disable:!1}]}],onMenuOptionClick:e=>{alert(`Option clicked: ${e.label}, Value: ${e.value}`)}}};var i,l,t;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    directionalArrow: [{
      direction: 'right',
      menuOptions: [{
        label: 'Sub Module',
        value: 'sub_module_sibling',
        icon: 'module_icon',
        disable: false
      }]
    }],
    onMenuOptionClick: (option: {
      label: string | ReactNode;
      value: any;
    }) => {
      alert(\`Option clicked: \${option.label}, Value: \${option.value}\`);
    }
  } as AddResourceButtonProps
}`,...(t=(l=n.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};var d,s,r;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    directionalArrow: [{
      direction: 'top',
      menuOptions: [{
        label: 'Add Module',
        value: 'add_module_top',
        icon: 'module_icon',
        disable: false
      }]
    }, {
      direction: 'right',
      menuOptions: [{
        label: 'Add Sub Module',
        value: 'add_sub_module_sibling',
        icon: 'module_icon',
        disable: false
      }]
    }],
    onMenuOptionClick: (option: {
      label: string | ReactNode;
      value: any;
    }) => {
      alert(\`Option clicked: \${option.label}, Value: \${option.value}\`);
    }
  } as AddResourceButtonProps
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var u,c,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    directionalArrow: [{
      direction: 'top',
      menuOptions: [{
        label: 'Module',
        value: 'add_module_top',
        icon: 'module_icon',
        disable: false
      }]
    }, {
      direction: 'right',
      menuOptions: [{
        label: 'Sub Module',
        value: 'add_module_sibling',
        icon: 'module_icon',
        disable: false
      }, {
        label: 'Automation Script',
        value: 'add_Automation_script_sibling',
        icon: 'automation_testcase',
        disable: false
      }, {
        label: 'Manual Test Case',
        value: 'add_manual_test_case_sibling',
        icon: 'manual_testcase',
        disable: false
      }, {
        label: 'Pre / Post Condition',
        value: 'add_pre_post_condition_sibling',
        icon: 'pre_post_condition',
        disable: false
      }, {
        label: 'Authorization',
        value: 'add_authorization_sibling',
        icon: 'authorization_icon',
        disable: false
      }, {
        label: 'Data Provider',
        value: 'data_provider_sibling',
        icon: 'data_provider',
        disable: false
      }]
    }, {
      direction: 'down',
      menuOptions: [{
        label: 'Sub Module',
        value: 'sub_module_down',
        icon: 'module_icon',
        disable: false
      }]
    }],
    onMenuOptionClick: (option: {
      label: string | ReactNode;
      value: any;
    }) => {
      alert(\`Option clicked: \${option.label}, Value: \${option.value}\`);
    }
  } as AddResourceButtonProps
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const B=["Default","TwoArrowsButtons","ThreeArrowsButton"];export{n as Default,a as ThreeArrowsButton,o as TwoArrowsButtons,B as __namedExportsOrder,C as default};
