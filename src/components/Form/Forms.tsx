import React, { forwardRef, useImperativeHandle } from 'react';
import Form from './Form';
interface FormProps<T extends Form.FieldValues> extends Form.UseFormProps<T> {
  id?: string;
  onSubmit: Form.SubmitHandler<T>;
  children: (
    methods: ReturnType<typeof Form.useForm<T>> & {
      Form: typeof Form;
    }
  ) => React.ReactNode;
}

const Forms = <T extends Form.FieldValues>(
  { onSubmit, children, id, ...rest }: FormProps<T>,
  ref: React.Ref<any>
) => {
  const methods = Form.useForm<T>(rest);
  const { handleSubmit } = methods;
  const extendedMethods = {
    ...methods,
    Form: Form,
  };
  useImperativeHandle(ref, () => ({
    submit: handleSubmit(onSubmit),
    ...extendedMethods,
  }));

  return (
    <form id={id} onSubmit={handleSubmit(onSubmit)}>
      {children(extendedMethods)}
    </form>
  );
};

const ForwardedForms = forwardRef(Forms) as <T extends Form.FieldValues>(
  props: FormProps<T> & { ref?: React.Ref<any> }
) => JSX.Element;

export default ForwardedForms;
