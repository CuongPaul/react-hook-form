import React from 'react';

export const RadioButton = ({
  name = '',
  error = '',
  label = '',
  option = [],
  register = {},
}) => {
  return (
    <div>
      <label>{label}</label>
      {option.map((item, index) => (
        <div key={index}>
          <input
            name={name}
            {...register}
            type={'radio'}
            id={item.value}
            value={item.value}
          />
          <label htmlFor={item.value}>{item.label}</label>
        </div>
      ))}
      <span className={'error'}>{error}</span>
    </div>
  );
};
