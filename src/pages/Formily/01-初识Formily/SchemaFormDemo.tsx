import React from 'react';
import { SchemaForm, Submit, FormButtonGroup } from '@formily/antd';
import { Input, Button } from 'antd';
import { Checkbox } from '@formily/antd-components';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const { Password } = Input;

const components = { Input, Checkbox, Password, Button };

const FormSchemaDemo: React.FC = () => {
  const onSubmit = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <>
      <SchemaForm
        {...layout}
        initialValues={{ remember: true }}
        components={components}
        onSubmit={onSubmit}
        schema={{
          type: 'object',
          properties: {
            Username: {
              type: 'string',
              title: 'Username',
              'x-rules': {
                required: true,
                message: 'Please input your username!',
              },
              'x-component': 'Input',
            },
            Password: {
              type: 'string',
              title: 'Password',
              'x-rules': {
                required: true,
                message: 'Please input your username!',
              },
              'x-component': 'Password',
            },
            remember: {
              title: ' ',
              type: 'string',
              'x-props': { colon: false },
              'x-component': 'Checkbox',
              'x-component-props': {
                children: 'Remember me',
              },
            },
          },
        }}
      >
        <FormButtonGroup offset={8}>
          <Submit type="primary" htmlType="submit">
            Submit
          </Submit>
        </FormButtonGroup>
      </SchemaForm>
    </>
  );
};

export default FormSchemaDemo;
