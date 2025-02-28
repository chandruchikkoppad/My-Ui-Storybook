import React, { useRef } from 'react';
import Forms from './Forms';
import Input from '../Input';
import RadioGroup from '../RadioGroup';
import Select from '../Select';
import { Meta, StoryObj } from '@storybook/react';
import Typography from '../Typography';
import './Form.scss';
import Checkbox from '../Checkbox';
import TextArea from '../TextArea';
import Drawer from '../Drawer';
import { useState } from 'react';
import { Container } from '../GridLayout/GridLayout';
import Button from '../Button/Button';

type FormValues = {
  username: string;
  email: string;
  password: string;
  gender: string;
  language: string;
  check: boolean;
  description: string;
};

const meta: Meta<typeof Forms> = {
  title: 'Components/Forms',
  component: Forms,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Forms>;

export const WithDefaultValues: Story = {
  render: () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const initialFormState: FormValues = {
      username: '',
      email: '',
      password: '',
      gender: '',
      language: '',
      check: false,
      description: '',
    };

    const onSubmit = (data: FormValues) => {
      alert('Form submitted with: ' + JSON.stringify(data));
    };

    const pageDrawerPrimaryButton = {
      label: 'Select',
      disabled: false,
      size: 'medium',
      type: 'submit' as 'submit',
      form: 'element',
    };

    const pageDrawerSecondaryButton = {
      label: 'Cancel',
      variant: 'secondary',
      size: 'medium',
      disabled: false,
    };

    return (
      <Drawer
        overlay
        isOpen={isDrawerOpen}
        title="Select Page"
        onClose={() => setIsDrawerOpen(false)}
        primaryButtonProps={pageDrawerPrimaryButton}
        secondaryButtonProps={pageDrawerSecondaryButton}
      >
        <Container fluid className="ff-forms-container">
          <Forms<FormValues>
            onSubmit={onSubmit}
            id="element"
            defaultValues={initialFormState}
          >
            {({
              register,
              formState: { errors },
              setValue,
              watch,
              reset,
              trigger,
            }) => {
              return (
                <div className="ff-main">
                  {/* Username Field */}
                  <div>
                    <Input
                      type="text"
                      label="Username"
                      disabled={false}
                      {...register('username', {
                        required: {
                          value: true,
                          message: 'Username is required',
                        },
                        minLength: {
                          value: 3,
                          message: 'Username must be at least 3 characters',
                        },
                        maxLength: {
                          value: 15,
                          message: 'Username must not exceed 15 characters',
                        },
                      })}
                      error={!!errors.username?.message}
                      helperText={errors.username?.message}
                      value={watch('username')}
                      onChange={(e) =>
                        setValue('username', e.target.value, {
                          shouldValidate: true,
                        })
                      }
                      onBlur={() => {
                        trigger('username');
                      }}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <Input
                      type="email"
                      label="Email"
                      disabled={false}
                      {...register('email', {
                        required: { value: true, message: 'Email is required' },
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: 'Please enter a valid email',
                        },
                      })}
                      error={!!errors.email?.message}
                      helperText={errors.email?.message}
                      value={watch('email')}
                      onChange={(e) =>
                        setValue('email', e.target.value, {
                          shouldValidate: true,
                        })
                      }
                      onBlur={() => {
                        trigger('email');
                      }}
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <Input
                      label="Password"
                      disabled={false}
                      type="password"
                      {...register('password', {
                        required: {
                          value: true,
                          message: 'Password is required',
                        },
                        minLength: {
                          value: 6,
                          message: 'Password must be at least 6 characters',
                        },
                      })}
                      error={!!errors.password?.message}
                      helperText={errors.password?.message}
                      value={watch('password')}
                      onChange={(e) =>
                        setValue('password', e.target.value, {
                          shouldValidate: true,
                        })
                      }
                      onBlur={() => {
                        trigger('password');
                      }}
                    />
                  </div>

                  {/* Gender Field */}
                  <div className="ff-radio">
                    <Typography as="label">Gender</Typography>
                    <RadioGroup
                      options={[
                        {
                          label: 'Male',
                          value: 'male',
                        },
                        {
                          label: 'Female',
                          value: 'female',
                        },
                        {
                          label: 'Other',
                          value: 'other',
                        },
                      ]}
                      {...register('gender', {
                        required: {
                          value: true,
                          message: 'select the Gender',
                        },
                      })}
                      selectedValue={watch('gender')}
                      onChange={(option) => {
                        setValue('gender', option.value, {
                          shouldValidate: true,
                        });
                      }}
                    />
                    {errors?.gender && (
                      <Typography className="ff-error">
                        {errors.gender.message}
                      </Typography>
                    )}
                  </div>

                  {/* Language Field */}
                  <div className="ff-select">
                    <Typography as="label">Programming Language</Typography>
                    <Select
                      optionZIndex={9999999}
                      optionsList={[
                        { label: 'Java', value: 'Java' },
                        { label: 'Rust', value: 'Rust' },
                        { label: 'Dart', value: 'Dart' },
                      ]}
                      selectedOption={{
                        label: watch('language') || 'Select a language',
                        value: watch('language') || '',
                      }}
                      {...register('language', {
                        required: {
                          value: true,
                          message: 'language is required',
                        },
                      })}
                      showLabel={false}
                      errorMsg={errors.language?.message}
                      onChange={(option) =>
                        setValue('language', option.value, {
                          shouldValidate: true,
                        })
                      }
                      onBlur={() => {
                        trigger('language');
                      }}
                    />
                  </div>

                  {/* TextArea Field */}
                  <div className="ff-textarea">
                    <TextArea
                      label="Description"
                      value={watch('description')}
                      {...register('description', {
                        required: 'Description is required',
                        maxLength: {
                          value: 30,
                          message: 'Maximum length is 200 characters',
                        },
                      })}
                      error={!!errors?.description?.message}
                      onChange={(e) => {
                        setValue('description', e.target.value, {
                          shouldValidate: true,
                        });
                      }}
                      onBlur={() => {
                        trigger('description');
                      }}
                    />
                  </div>
                  {/* check box Field */}
                  <div className="ff-check">
                    <Checkbox
                      label="terms condition"
                      disabled={false}
                      checked={watch('check')}
                      {...register('check', {
                        required: {
                          value: true,
                          message: 'Please select the checkbox',
                        },
                      })}
                      onChange={(e) => {
                        setValue('check', e.target.checked, {
                          shouldValidate: true,
                        });
                      }}
                    />
                    {errors?.check && (
                      <Typography className="ff-error">
                        {errors.check.message}
                      </Typography>
                    )}
                  </div>
                  {/* Buttons */}
                  <div className="ff-button-layout">
                    <button
                      type="button"
                      onClick={() => {
                        reset(initialFormState);
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              );
            }}
          </Forms>
        </Container>
      </Drawer>
    );
  },
};

export const WithSubmissionOutside: Story = {
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
      check: false,
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

    const footerContent = (
      <>
        <Checkbox
          label="Copy to shared"
          disabled={false}
          checked={formRef.current?.watch('check')}
          {...formRef.current?.register('check', {
            required: {
              value: true,
              message: 'Please select the checkbox',
            },
          })}
          onChange={(e) => {
            formRef.current?.setValue('check', e.target.checked, {
              shouldValidate: true,
            });
          }}
        />
        <Button
          variant="secondary"
          onClick={() => setIsDrawerOpen(false)}
          label="Cancel"
        />
        <Button variant="secondary" onClick={handleReset} label="Reset" />
        <Button
          variant="secondary"
          onClick={handleCreateAndContinue}
          label="Create and continue"
        />
        <Button variant="primary" onClick={submitForm} label="Submit" />
      </>
    );

    return (
      <div>
        <Drawer
          overlay
          isOpen={isDrawerOpen}
          title="Select Page"
          onClose={() => setIsDrawerOpen(false)}
          footerContent={footerContent}
        >
          <Forms
            ref={formRef}
            onSubmit={handleSubmit}
            defaultValues={initialFormState}
          >
            {({
              watch,
              register,
              setValue,
              trigger,
              formState: { errors },
            }) => (
              <div className="ff-form-container">
                <div>
                  <Input
                    type="text"
                    label="Username"
                    value={watch('username')}
                    {...register('username', {
                      required: 'Username is required',
                      minLength: {
                        value: 3,
                        message: 'Username must be at least 3 characters',
                      },
                    })}
                    onChange={(e) =>
                      setValue('username', e.target.value, {
                        shouldValidate: true,
                      })
                    }
                    onBlur={() => {
                      trigger('username');
                    }}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <Input
                    type="email"
                    label="Email"
                    value={watch('email')}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: 'Please enter a valid email',
                      },
                    })}
                    onChange={(e) =>
                      setValue('email', e.target.value, {
                        shouldValidate: true,
                      })
                    }
                    onBlur={() => {
                      trigger('email');
                    }}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </div>

                {/* Password Field */}
                <div>
                  <Input
                    label="Password"
                    value={watch('password')}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                    })}
                    onChange={(e) =>
                      setValue('password', e.target.value, {
                        shouldValidate: true,
                      })
                    }
                    onBlur={() => {
                      trigger('password');
                    }}
                    placeholder="Enter your password"
                    type="password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                </div>
              </div>
            )}
          </Forms>
        </Drawer>

        {/* Submit Button Outside the Form */}
        <Button onClick={submitForm} variant="primary">
          Submit Form
        </Button>
      </div>
    );
  },
};

export default meta;
