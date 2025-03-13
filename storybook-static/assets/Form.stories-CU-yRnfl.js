import{j as e}from"./jsx-runtime-SKoiH9zj.js";import{r as F}from"./index-DJO9vBfz.js";import{F as T}from"./Forms-BG_2S6F-.js";import{I as p}from"./Input-BT-svg7L.js";import{R as L}from"./RadioGroup-CXtVZnPC.js";import{S as I}from"./Select-BJocvAjy.js";import{T as V}from"./Typography-DdMJCn-_.js";import{C as O}from"./Checkbox-DE1WcxCl.js";import{T as U}from"./Textarea-D9SJPe55.js";import{D as R}from"./Drawer-Bj9d4h3e.js";import{C as A}from"./GridLayout-CW4-pQSl.js";import{B as v}from"./Button-CpFgCZ6s.js";import"./index-NZcV-alF.js";import"./checkEmpty-xi6SckPb.js";import"./Icon-BnrH6PuI.js";import"./RadioButton-BS2T1CXK.js";import"./Tooltip-jHEmaokv.js";import"./index-CFN9ZEHn.js";import"./ThemeProvider-D5XEyBwi.js";import"./getSelectOptionValue-DZyM0SAQ.js";import"./useClickOutside-BYc9KT_v.js";import"./usePortalPosition-DKFkIZLt.js";/* empty css                */import"./regex-CmAMYcQS.js";import"./useEscKeyEvent-_4Zk5j0a.js";try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{name:{defaultValue:null,description:"Name | name of the textarea field",name:"name",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Label | field label to be displayed",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:{value:""},description:"value | textarea field value",name:"value",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"variants to set color/style of the textarea field",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'}]}},error:{defaultValue:null,description:"error | If true, error message will be displayed",name:"error",required:!1,type:{name:"boolean"}},helperText:{defaultValue:{value:""},description:"helperText | error, success, warning message to be shown",name:"helperText",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"to disable the textarea field",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"if true, textarea field will be mandatory",name:"required",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Enter text"},description:"placeholder for the textarea field",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"classnames to style the textarea field",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"onChange, onKeyDown, onBlur, onFocus actions",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLTextAreaElement>) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<HTMLTextAreaElement>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLTextAreaElement, Element>) => void)"}},onPaste:{defaultValue:null,description:"",name:"onPaste",required:!1,type:{name:"((event: ClipboardEvent<HTMLTextAreaElement>) => void)"}},id:{defaultValue:null,description:"id to select the textarea field uniquely",name:"id",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"if on, suggestion popup will be displayed",name:"autoComplete",required:!1,type:{name:"enum",value:[{value:'"on"'},{value:'"off"'}]}},capacity:{defaultValue:{value:"200"},description:"capacity | Maximum number of characters allowed in the textarea.",name:"capacity",required:!1,type:{name:"number"}},rows:{defaultValue:{value:"4"},description:`rows | Number of visible text lines in the textarea.
Used to control the height of the textarea.`,name:"rows",required:!1,type:{name:"number"}},cols:{defaultValue:{value:"40"},description:`cols | Number of visible character widths in the textarea.
Used to control the width of the textarea.`,name:"cols",required:!1,type:{name:"number"}},resize:{defaultValue:{value:"false"},description:"for resizing purpose",name:"resize",required:!1,type:{name:"boolean"}},errorText:{defaultValue:null,description:"",name:"errorText",required:!1,type:{name:"string"}}}}}catch{}const ce={title:"Components/Forms",component:T,parameters:{layout:"centered"},tags:["autodocs"]},q={render:()=>{const[b,x]=F.useState(!0),y={username:"",email:"",password:"",gender:"",language:"",check:!1,description:""},s=l=>{alert("Form submitted with: "+JSON.stringify(l))},k={label:"Select",disabled:!1,size:"medium",type:"submit",form:"element"},w={label:"Cancel",variant:"secondary",size:"medium",disabled:!1};return e.jsx(R,{overlay:!0,isOpen:b,title:"Select Page",onClose:()=>x(!1),primaryButtonProps:k,secondaryButtonProps:w,children:e.jsx(A,{fluid:!0,className:"ff-forms-container",children:e.jsx(T,{onSubmit:s,id:"element",defaultValues:y,children:({register:l,formState:{errors:a},setValue:i,watch:n,reset:C,trigger:r})=>{var o,m,c,u,g,h,f,d;return e.jsxs("div",{className:"ff-main",children:[e.jsx("div",{children:e.jsx(p,{type:"text",label:"Username",disabled:!1,...l("username",{required:{value:!0,message:"Username is required"},minLength:{value:3,message:"Username must be at least 3 characters"},maxLength:{value:15,message:"Username must not exceed 15 characters"}}),error:!!((o=a.username)!=null&&o.message),helperText:(m=a.username)==null?void 0:m.message,value:n("username"),onChange:t=>i("username",t.target.value,{shouldValidate:!0}),onBlur:()=>{r("username")}})}),e.jsx("div",{children:e.jsx(p,{type:"email",label:"Email",disabled:!1,...l("email",{required:{value:!0,message:"Email is required"},pattern:{value:/^\S+@\S+\.\S+$/,message:"Please enter a valid email"}}),error:!!((c=a.email)!=null&&c.message),helperText:(u=a.email)==null?void 0:u.message,value:n("email"),onChange:t=>i("email",t.target.value,{shouldValidate:!0}),onBlur:()=>{r("email")}})}),e.jsx("div",{children:e.jsx(p,{label:"Password",disabled:!1,type:"password",...l("password",{required:{value:!0,message:"Password is required"},minLength:{value:6,message:"Password must be at least 6 characters"}}),error:!!((g=a.password)!=null&&g.message),helperText:(h=a.password)==null?void 0:h.message,value:n("password"),onChange:t=>i("password",t.target.value,{shouldValidate:!0}),onBlur:()=>{r("password")}})}),e.jsxs("div",{className:"ff-radio",children:[e.jsx(V,{as:"label",children:"Gender"}),e.jsx(L,{options:[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Other",value:"other"}],...l("gender",{required:{value:!0,message:"select the Gender"}}),selectedValue:n("gender"),onChange:t=>{i("gender",t.value,{shouldValidate:!0})}}),(a==null?void 0:a.gender)&&e.jsx(V,{className:"ff-error",children:a.gender.message})]}),e.jsxs("div",{className:"ff-select",children:[e.jsx(V,{as:"label",children:"Programming Language"}),e.jsx(I,{optionZIndex:9999999,optionsList:[{label:"Java",value:"Java"},{label:"Rust",value:"Rust"},{label:"Dart",value:"Dart"}],selectedOption:{label:n("language")||"Select a language",value:n("language")||""},...l("language",{required:{value:!0,message:"language is required"}}),showLabel:!1,errorMsg:(f=a.language)==null?void 0:f.message,onChange:t=>i("language",t.value,{shouldValidate:!0}),onBlur:()=>{r("language")}})]}),e.jsx("div",{className:"ff-textarea",children:e.jsx(U,{label:"Description",value:n("description"),...l("description",{required:"Description is required",maxLength:{value:30,message:"Maximum length is 200 characters"}}),error:!!((d=a==null?void 0:a.description)!=null&&d.message),onChange:t=>{i("description",t.target.value,{shouldValidate:!0})},onBlur:()=>{r("description")}})}),e.jsxs("div",{className:"ff-check",children:[e.jsx(O,{label:"terms condition",disabled:!1,checked:n("check"),...l("check",{required:{value:!0,message:"Please select the checkbox"}}),onChange:t=>{i("check",t.target.checked,{shouldValidate:!0})}}),(a==null?void 0:a.check)&&e.jsx(V,{className:"ff-error",children:a.check.message})]}),e.jsx("div",{className:"ff-button-layout",children:e.jsx("button",{type:"button",onClick:()=>{C(y)},children:"Reset"})})]})}})})})}},S={render:()=>{var n,C;const[b,x]=F.useState(!0),y={username:"",email:"",password:"",check:!1},s=F.useRef(null),k=r=>{alert("Form submitted with: "+JSON.stringify(r))},w=()=>{s.current.submit()},l=()=>{s.current.submit(),s.current.reset(),s.current.clearErrors()},a=()=>{s.current.reset(),s.current.clearErrors()},i=e.jsxs(e.Fragment,{children:[e.jsx(O,{label:"Copy to shared",disabled:!1,checked:(n=s.current)==null?void 0:n.watch("check"),...(C=s.current)==null?void 0:C.register("check",{required:{value:!0,message:"Please select the checkbox"}}),onChange:r=>{var o;(o=s.current)==null||o.setValue("check",r.target.checked,{shouldValidate:!0})}}),e.jsx(v,{variant:"secondary",onClick:()=>x(!1),label:"Cancel"}),e.jsx(v,{variant:"secondary",onClick:a,label:"Reset"}),e.jsx(v,{variant:"secondary",onClick:l,label:"Create and continue"}),e.jsx(v,{variant:"primary",onClick:w,label:"Submit"})]});return e.jsxs("div",{children:[e.jsx(R,{overlay:!0,isOpen:b,title:"Select Page",onClose:()=>x(!1),footerContent:i,children:e.jsx(T,{ref:s,onSubmit:k,defaultValues:y,children:({watch:r,register:o,setValue:m,trigger:c,formState:{errors:u}})=>{var g,h,f;return e.jsxs("div",{className:"ff-form-container",children:[e.jsx("div",{children:e.jsx(p,{type:"text",label:"Username",value:r("username"),...o("username",{required:"Username is required",minLength:{value:3,message:"Username must be at least 3 characters"}}),onChange:d=>m("username",d.target.value,{shouldValidate:!0}),onBlur:()=>{c("username")},error:!!u.username,helperText:(g=u.username)==null?void 0:g.message})}),e.jsx("div",{children:e.jsx(p,{type:"email",label:"Email",value:r("email"),...o("email",{required:"Email is required",pattern:{value:/^\S+@\S+\.\S+$/,message:"Please enter a valid email"}}),onChange:d=>m("email",d.target.value,{shouldValidate:!0}),onBlur:()=>{c("email")},error:!!u.email,helperText:(h=u.email)==null?void 0:h.message})}),e.jsx("div",{children:e.jsx(p,{label:"Password",value:r("password"),...o("password",{required:"Password is required",minLength:{value:6,message:"Password must be at least 6 characters"}}),onChange:d=>m("password",d.target.value,{shouldValidate:!0}),onBlur:()=>{c("password")},placeholder:"Enter your password",type:"password",error:!!u.password,helperText:(f=u.password)==null?void 0:f.message})})]})}})}),e.jsx(v,{onClick:w,variant:"primary",children:"Submit Form"})]})}};var j,B,D;q.parameters={...q.parameters,docs:{...(j=q.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const initialFormState: FormValues = {
      username: '',
      email: '',
      password: '',
      gender: '',
      language: '',
      check: false,
      description: ''
    };
    const onSubmit = (data: FormValues) => {
      alert('Form submitted with: ' + JSON.stringify(data));
    };
    const pageDrawerPrimaryButton = {
      label: 'Select',
      disabled: false,
      size: 'medium',
      type: 'submit' as 'submit',
      form: 'element'
    };
    const pageDrawerSecondaryButton = {
      label: 'Cancel',
      variant: 'secondary',
      size: 'medium',
      disabled: false
    };
    return <Drawer overlay isOpen={isDrawerOpen} title="Select Page" onClose={() => setIsDrawerOpen(false)} primaryButtonProps={pageDrawerPrimaryButton} secondaryButtonProps={pageDrawerSecondaryButton}>\r
        <Container fluid className="ff-forms-container">\r
          <Forms<FormValues> onSubmit={onSubmit} id="element" defaultValues={initialFormState}>\r
            {({
            register,
            formState: {
              errors
            },
            setValue,
            watch,
            reset,
            trigger
          }) => {
            return <div className="ff-main">\r
                  {/* Username Field */}\r
                  <div>\r
                    <Input type="text" label="Username" disabled={false} {...register('username', {
                  required: {
                    value: true,
                    message: 'Username is required'
                  },
                  minLength: {
                    value: 3,
                    message: 'Username must be at least 3 characters'
                  },
                  maxLength: {
                    value: 15,
                    message: 'Username must not exceed 15 characters'
                  }
                })} error={!!errors.username?.message} helperText={errors.username?.message} value={watch('username')} onChange={e => setValue('username', e.target.value, {
                  shouldValidate: true
                })} onBlur={() => {
                  trigger('username');
                }} />\r
                  </div>\r
\r
                  {/* Email Field */}\r
                  <div>\r
                    <Input type="email" label="Email" disabled={false} {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required'
                  },
                  pattern: {
                    value: /^\\S+@\\S+\\.\\S+$/,
                    message: 'Please enter a valid email'
                  }
                })} error={!!errors.email?.message} helperText={errors.email?.message} value={watch('email')} onChange={e => setValue('email', e.target.value, {
                  shouldValidate: true
                })} onBlur={() => {
                  trigger('email');
                }} />\r
                  </div>\r
\r
                  {/* Password Field */}\r
                  <div>\r
                    <Input label="Password" disabled={false} type="password" {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is required'
                  },
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                })} error={!!errors.password?.message} helperText={errors.password?.message} value={watch('password')} onChange={e => setValue('password', e.target.value, {
                  shouldValidate: true
                })} onBlur={() => {
                  trigger('password');
                }} />\r
                  </div>\r
\r
                  {/* Gender Field */}\r
                  <div className="ff-radio">\r
                    <Typography as="label">Gender</Typography>\r
                    <RadioGroup options={[{
                  label: 'Male',
                  value: 'male'
                }, {
                  label: 'Female',
                  value: 'female'
                }, {
                  label: 'Other',
                  value: 'other'
                }]} {...register('gender', {
                  required: {
                    value: true,
                    message: 'select the Gender'
                  }
                })} selectedValue={watch('gender')} onChange={option => {
                  setValue('gender', option.value, {
                    shouldValidate: true
                  });
                }} />\r
                    {errors?.gender && <Typography className="ff-error">\r
                        {errors.gender.message}\r
                      </Typography>}\r
                  </div>\r
\r
                  {/* Language Field */}\r
                  <div className="ff-select">\r
                    <Typography as="label">Programming Language</Typography>\r
                    <Select optionZIndex={9999999} optionsList={[{
                  label: 'Java',
                  value: 'Java'
                }, {
                  label: 'Rust',
                  value: 'Rust'
                }, {
                  label: 'Dart',
                  value: 'Dart'
                }]} selectedOption={{
                  label: watch('language') || 'Select a language',
                  value: watch('language') || ''
                }} {...register('language', {
                  required: {
                    value: true,
                    message: 'language is required'
                  }
                })} showLabel={false} errorMsg={errors.language?.message} onChange={option => setValue('language', option.value, {
                  shouldValidate: true
                })} onBlur={() => {
                  trigger('language');
                }} />\r
                  </div>\r
\r
                  {/* TextArea Field */}\r
                  <div className="ff-textarea">\r
                    <TextArea label="Description" value={watch('description')} {...register('description', {
                  required: 'Description is required',
                  maxLength: {
                    value: 30,
                    message: 'Maximum length is 200 characters'
                  }
                })} error={!!errors?.description?.message} onChange={e => {
                  setValue('description', e.target.value, {
                    shouldValidate: true
                  });
                }} onBlur={() => {
                  trigger('description');
                }} />\r
                  </div>\r
                  {/* check box Field */}\r
                  <div className="ff-check">\r
                    <Checkbox label="terms condition" disabled={false} checked={watch('check')} {...register('check', {
                  required: {
                    value: true,
                    message: 'Please select the checkbox'
                  }
                })} onChange={e => {
                  setValue('check', e.target.checked, {
                    shouldValidate: true
                  });
                }} />\r
                    {errors?.check && <Typography className="ff-error">\r
                        {errors.check.message}\r
                      </Typography>}\r
                  </div>\r
                  {/* Buttons */}\r
                  <div className="ff-button-layout">\r
                    <button type="button" onClick={() => {
                  reset(initialFormState);
                }}>\r
                      Reset\r
                    </button>\r
                  </div>\r
                </div>;
          }}\r
          </Forms>\r
        </Container>\r
      </Drawer>;
  }
}`,...(D=(B=q.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var P,E,N;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    type FormValues = {
      username: string;
      email: string;
      password: string;
      check: boolean;
    };
    const initialFormState: FormValues = {
      username: '',
      email: '',
      password: '',
      check: false
    };
    const formRef = useRef<any>(null);
    const handleSubmit = (data: FormValues) => {
      alert('Form submitted with: ' + JSON.stringify(data));
    };
    const submitForm = () => {
      formRef.current.submit();
    };
    const handleCreateAndContinue = () => {
      formRef.current.submit();
      formRef.current.reset();
      formRef.current.clearErrors();
    };
    const handleReset = () => {
      formRef.current.reset();
      formRef.current.clearErrors();
    };
    const footerContent = <>\r
        <Checkbox label="Copy to shared" disabled={false} checked={formRef.current?.watch('check')} {...formRef.current?.register('check', {
        required: {
          value: true,
          message: 'Please select the checkbox'
        }
      })} onChange={e => {
        formRef.current?.setValue('check', e.target.checked, {
          shouldValidate: true
        });
      }} />\r
        <Button variant="secondary" onClick={() => setIsDrawerOpen(false)} label="Cancel" />\r
        <Button variant="secondary" onClick={handleReset} label="Reset" />\r
        <Button variant="secondary" onClick={handleCreateAndContinue} label="Create and continue" />\r
        <Button variant="primary" onClick={submitForm} label="Submit" />\r
      </>;
    return <div>\r
        <Drawer overlay isOpen={isDrawerOpen} title="Select Page" onClose={() => setIsDrawerOpen(false)} footerContent={footerContent}>\r
          <Forms ref={formRef} onSubmit={handleSubmit} defaultValues={initialFormState}>\r
            {({
            watch,
            register,
            setValue,
            trigger,
            formState: {
              errors
            }
          }) => <div className="ff-form-container">\r
                <div>\r
                  <Input type="text" label="Username" value={watch('username')} {...register('username', {
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username must be at least 3 characters'
                }
              })} onChange={e => setValue('username', e.target.value, {
                shouldValidate: true
              })} onBlur={() => {
                trigger('username');
              }} error={!!errors.username} helperText={errors.username?.message} />\r
                </div>\r
\r
                {/* Email Field */}\r
                <div>\r
                  <Input type="email" label="Email" value={watch('email')} {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\\S+@\\S+\\.\\S+$/,
                  message: 'Please enter a valid email'
                }
              })} onChange={e => setValue('email', e.target.value, {
                shouldValidate: true
              })} onBlur={() => {
                trigger('email');
              }} error={!!errors.email} helperText={errors.email?.message} />\r
                </div>\r
\r
                {/* Password Field */}\r
                <div>\r
                  <Input label="Password" value={watch('password')} {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })} onChange={e => setValue('password', e.target.value, {
                shouldValidate: true
              })} onBlur={() => {
                trigger('password');
              }} placeholder="Enter your password" type="password" error={!!errors.password} helperText={errors.password?.message} />\r
                </div>\r
              </div>}\r
          </Forms>\r
        </Drawer>\r
\r
        {/* Submit Button Outside the Form */}\r
        <Button onClick={submitForm} variant="primary">\r
          Submit Form\r
        </Button>\r
      </div>;
  }
}`,...(N=(E=S.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const pe=["WithDefaultValues","WithSubmissionOutside"];export{q as WithDefaultValues,S as WithSubmissionOutside,pe as __namedExportsOrder,ce as default};
