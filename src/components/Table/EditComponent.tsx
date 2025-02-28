import { useState } from 'react';
import Button from '../Button';
import Typography from '../Typography';
import Select from '../Select';
import Form from '../Form/Forms';
import './Table.scss';
import { FormValues } from './Types';

const ifFailedOptionList = [
  {
    label: 'Mark this script as Failed and continue dependant script execution',
    value: 'MARK_THIS_SCRIPT_AS_FAILED_AND_CONTINUE_DEPENDANT_SCRIPT_EXECUTION',
  },
  {
    label:
      'Mark this script as Warning and continue dependant script execution',
    value:
      'MARK_THIS_SCRIPT_AS_WARNING_AND_CONTINUE_DEPENDANT_SCRIPT_EXECUTION',
  },
  {
    label: 'Mark this script as Failed and stop dependant script execution',
    value: 'MARK_THIS_SCRIPT_AS_FAILED_AND_STOP_DEPENDANT_SCRIPT_EXECUTION',
  },
  {
    label: 'Mark this script as Failed and stop current module execution',
    value: 'MARK_THIS_SCRIPT_AS_FAILED_AND_STOP_CURRENT_MODULE_EXECUTION',
  },
  {
    label: 'Mark this script as Failed and stop complete execution',
    value: 'MARK_THIS_SCRIPT_AS_FAILED_AND_STOP_COMPLETE_EXECUTION',
  },
];
//DEMO COMPONENT
const EditComponent = ({
  rowData,
  rowIndex,
  handleSave,
  handleCancel,
}: any) => {
  const [initialFormState] = useState<FormValues>({
    ifFailed: '',
  });

  return (
    <section className={'edit_depends_on_script'}>
      <header className={'edit_depends_on_script__header'}>
        <div>
          <Typography color="var(--nlp-option-color)" lineHeight="18px">
            {rowIndex}.{rowData?.name}
          </Typography>
        </div>
        <div className={'edit_depends_on_script__header__link'}>
          <Typography
            children="Go to script"
            color="var(--nlp-color)"
            fontWeight="semi-bold"
          />
        </div>
      </header>
      <Form<FormValues> onSubmit={handleSave} defaultValues={initialFormState}>
        {({ register, setValue, formState: { errors }, watch, trigger }) => {
          return (
            <div className={'edit_depends_on_script__form'}>
              <Select
                label="if Failed"
                optionsList={ifFailedOptionList}
                {...register('ifFailed')}
                onChange={(option) => {
                  setValue('ifFailed', option.label);
                }}
                errorMsg={errors.ifFailed?.message}
                optionZIndex={9999}
                selectedOption={{
                  label: watch('ifFailed'),
                  value: watch('ifFailed'),
                }}
                onBlur={() => {
                  trigger('ifFailed');
                }}
              />
              <div className={'edit_depends_on_script__form__button'}>
                <Button
                  variant="tertiary"
                  children="Cancel"
                  onClick={handleCancel}
                />
                <Button variant="primary" type="submit" children="Update" />
              </div>
            </div>
          );
        }}
      </Form>
    </section>
  );
};

export default EditComponent;
