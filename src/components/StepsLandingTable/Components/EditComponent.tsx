import { useState } from 'react';
import Button from '../../Button';
import Typography from '../../Typography';
import Select from '../../Select';
import Form from '../../Form/Forms';
import { FormValues } from './Types';
import './EditComponent.scss';
import Icon from '../../Icon';

//?DEMO COMPONENT
const EditComponent = ({ rowData, rowIndex, handleAdd, handleCancel }: any) => {
  const [initialFormState] = useState<FormValues>({
    ifFailed: '',
  });
  return (
    <section className={'edit_depends_on_script'}>
      <header className={'edit_depends_on_script__header'}>
        <div className="edit_depends_on_script__header_text">
          <Typography
            as="div"
            color="var(--nlp-option-color)"
            lineHeight="18px"
          >
            {rowIndex}.{rowData?.name}
          </Typography>
          <Icon name="go_to_script" />
        </div>
        <div className={'edit_depends_on_script__header_buttons'}>
          <Button variant="tertiary" children="Cancel" onClick={handleCancel} />
          <Button variant="primary" type="submit" label="Update" />
        </div>
      </header>
      <Form<FormValues>
        onSubmit={(data) => handleAdd(data, rowIndex)}
        defaultValues={initialFormState}
      >
        {({ register, setValue, formState: { errors }, watch, trigger }) => {
          return (
            <div className={'edit_depends_on_script__form'}>
              <Select
                label="if Failed"
                optionsList={[
                  {
                    label:
                      'Mark this script as Failed and continue dependant script execution',
                    value:
                      'MARK_THIS_SCRIPT_AS_FAILED_AND_CONTINUE_DEPENDANT_SCRIPT_EXECUTION',
                  },
                  {
                    label:
                      'Mark this script as Warning and continue dependant script execution',
                    value:
                      'MARK_THIS_SCRIPT_AS_WARNING_AND_CONTINUE_DEPENDANT_SCRIPT_EXECUTION',
                  },
                ]}
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
            </div>
          );
        }}
      </Form>
    </section>
  );
};

export default EditComponent;
