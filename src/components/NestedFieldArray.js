import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

const NestedFieldArray = ({
  fieldIndex = 0,
  fieldName = '',
  nestedFieldName = '',
}) => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `${fieldName}.${fieldIndex}.${nestedFieldName}`,
  });

  return (
    <div>
      {fields.map((item, index) => (
        <div key={item.id}>
          <input
            {...register(
              `${fieldName}.${fieldIndex}.${nestedFieldName}.${index}`
            )}
          />
          <button onClick={() => remove(index)}>Remove Answer</button>
        </div>
      ))}
      <button type={'button'} onClick={() => append('')}>
        Append Answer
      </button>
    </div>
  );
};

export default NestedFieldArray;
