import React, { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';

import './style.css';
import { loginSchema } from './schema';
import { Table, Select, Checkbox, InputField, FieldArray, RadioButton } from './components';

const App = () => {
  const ITEMS_PER_PAGE = 3;

  const headingTable = ['Email', 'Password', 'Gender', 'Family status', 'Hobbies'];
  const genderOption = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ];
  const familyStatusOption = [
    {label: 'Single', value: 'single'},
    {label: 'Married', value: 'married'},
  ];
  const hobbiesOption = [
    {label: 'Travel', value: 'travel'},
    {label: 'Cycling', value: 'cycling'},
    {label: 'Football', value: 'football'},
    {label: 'Batminton', value: 'batminton'},
  ];

  const [loading, setLoading] = useState(true);
  const [dataTable, setDataTable] = useState([]);
  
  const formMethods = useForm({ resolver: yupResolver(loginSchema) });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods;
  
  const handleClickSubmit = (data) => {
    // setDataTable([data]);
    console.log(data);
  };
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, []);

  return (
    <div>
      <FormProvider {...formMethods}>
        <form id={'loginForm'}>
          <InputField id={'email'} error={errors.email?.message} label={'Email'} register={ ...register('email') } />
          <InputField id={'password'} error={errors.password?.message} label={'Password'} register={ ...register('password') } />
          <Select error={errors.gender?.message} label={'Gender'} option={genderOption} register={ ...register('gender') } />
          <RadioButton name={'familyStatus'} error={errors.familyStatus?.message} label={'Family status'} option={familyStatusOption} register={ ...register('familyStatus') } />
          <Checkbox error={errors.hobbies?.message} label={'Hobbies'} option={hobbiesOption} register={ ...register('hobbies') } />
          <FieldArray fieldName={'questions'} />
        </form>
        <button type={'submit'} form={'loginForm'} onClick={handleSubmit(handleClickSubmit)}>Submit</button>
      </FormProvider>
      <Table data={dataTable} loading={loading} heading={headingTable} itemsPerPage={ITEMS_PER_PAGE}/>
    </div>
  );
}

export default App;