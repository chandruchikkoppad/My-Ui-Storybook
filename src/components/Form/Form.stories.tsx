import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Form from './Form';
import validationRules from './validation.json';
import { FormValues } from './types';
import Typography from '../Typography';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Form>;

export const WithControlledState: Story = {
  render: () => {
    const initialFormState: FormValues = {
      username: '',
      email: '',
      password: '',
      gender: '',
      language: '',
    };

    const [formData, setFormData] = useState<FormValues>(initialFormState);

    const handleSubmit = (data: FormValues) => {
      setFormData(data);
      alert('Form submitted with: ' + JSON.stringify(data));
    };

    const handleReset = (
      setValue: (field: keyof FormValues, value: any) => void
    ) => {
      Object.keys(initialFormState).forEach((field) => {
        setValue(
          field as keyof FormValues,
          initialFormState[field as keyof FormValues]
        );
      });
      setFormData(initialFormState);
    };

    return (
      <div className="ff-form-container">
        <Form<FormValues> onSubmit={handleSubmit}>
          {(
            { register, errors, handleBlur, setValue } // Include setValue here
          ) => (
            <>
              {['username', 'email', 'password'].map((field) => (
                <div className="ff-form-group" key={field}>
                  <Typography as="label">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </Typography>
                  <input
                    id={field}
                    type={
                      field === 'email'
                        ? 'email'
                        : field === 'password'
                        ? 'password'
                        : 'text'
                    }
                    {...register(field as keyof FormValues, {
                      ...validationRules[field as keyof typeof validationRules],
                      onChange: (e: any) => {
                        const value = e.target.value;
                        setFormData((prev) => ({
                          ...prev,
                          [field]: value,
                        }));
                        if (errors[field as keyof FormValues]?.message) {
                          handleBlur(field as keyof FormValues);
                        }
                      },
                    })}
                    className={
                      errors[field as keyof FormValues] ? 'ff-error' : ''
                    }
                    onBlur={() => handleBlur(field as keyof FormValues)}
                  />
                  {errors[field as keyof FormValues]?.message && (
                    <span className="ff-error">
                      {String(errors[field as keyof FormValues]?.message)}
                    </span>
                  )}
                </div>
              ))}

              {/* Gender Radio Input */}
              <div className="ff-form-radio-group">
              <Typography as="label"> Gender </Typography>
                <div className='ff-radio-group-wrapper'>
                {['Male', 'Female', 'Other'].map((gender) => (
                  <div className="ff-radio-gender" key={gender}>
                    <Typography as="label"> 
                      <input
                        type="radio"
                        value={gender}
                        {...register('gender', validationRules.gender)}
                        checked={formData.gender === gender}
                        onChange={() =>
                          setFormData((prev) => ({ ...prev, gender }))
                        }
                        onBlur={() => handleBlur('gender')}
                      />
                      {gender}
                    </Typography>
                  </div>
                ))}
                {errors.gender?.message && (
                  <span className="ff-error">
                    {String(errors.gender.message)}
                  </span>
                )}
                </div>
              </div>

              {/* Language Select Dropdown */}
              <div className="ff-form-group">
                <Typography as='label'>Programming Language</Typography>
                <select
                  id="language"
                  {...register('language', validationRules.language)}
                  onBlur={() => handleBlur('language')}
                  className={errors.language ? 'ff-error' : ''}
                  value={formData.language}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData((prev) => ({
                      ...prev,
                      language: value,
                    }));
                    if (value) {
                      setValue('language', value);
                    }
                  }}
                >
                  <option value="">Select a language</option>
                  {['Java', 'Rust', 'Dart'].map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
                {errors.language?.message && (
                  <span className="ff-error">
                    {String(errors.language.message)}
                  </span>
                )}
              </div>

              <div className="ff-button-layout">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => handleReset(setValue)}>
                  Reset
                </button>
              </div>
            </>
          )}
        </Form>

        <pre>
          <span>Payload Data:</span>
        </pre>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    );
  },
};

export default meta;