import React from 'react';
import {
  useForm,
  UseFormProps,
  SubmitHandler,
  FieldValues,
  FieldPath,
  FieldErrors,
} from 'react-hook-form';
import './Form.scss';

interface FormProps<T extends FieldValues> extends UseFormProps<T> {
  onSubmit: SubmitHandler<T>;
  children: (props: {
    register: (name: FieldPath<T>, options?: any) => any;
    errors: FieldErrors<T>;
    handleBlur: (field: FieldPath<T>) => void;
    getValues: () => T;
    watch: (field?: FieldPath<T>) => any;
    setValue: (field: FieldPath<T>, value: any, options?: object) => void;
  }) => React.ReactNode;
}

const Form = <T extends FieldValues>({
  onSubmit,
  children,
  ...rest
}: FormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
    watch,
    setValue
  } = useForm<T>(rest);

  const handleBlur = async (field: FieldPath<T>) => {
    await trigger(field);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children({
        register,
        errors,
        handleBlur,
        getValues,
        watch,
        setValue,
      })}
    </form>
  );
};

export default Form;
