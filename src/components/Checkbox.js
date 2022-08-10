import React from 'react';

export const Checkbox = ({
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
            {...register}
            id={item.value}
            type={'checkbox'}
            value={item.value}
          />
          <label htmlFor={item.value}>{item.label}</label>
        </div>
      ))}
      <span className={'error'}>{error}</span>
    </div>
  );
};
