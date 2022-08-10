import React from 'react';

export const InputField = ({
  id = '',
  error = '',
  label = '',
  register = {},
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...register} />
      <span className={'error'}>{error}</span>
    </div>
  );
};
