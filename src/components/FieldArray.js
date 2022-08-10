import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import NestedFieldArray from './NestedFieldArray';

export const FieldArray = ({ fieldName = '' }) => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: fieldName,
  });

  return (
    <div>
      {fields.map((item, index) => (
        <div key={item.id}>
          <input {...register(`${fieldName}.${index}.content`)} />
          <button onClick={() => remove(index)}>Remove Question</button>
          <NestedFieldArray
            fieldIndex={index}
            fieldName={fieldName}
            nestedFieldName={'answers'}
          />
        </div>
      ))}
      <button
        type={'button'}
        onClick={() => append({ content: '', answers: [] })}
      >
        Append Question
      </button>
    </div>
  );
};
