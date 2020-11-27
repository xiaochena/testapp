import React from 'react';
import { Button, Input, Radio } from 'antd';
import { SchemaForm, Submit, FormButtonGroup } from '@formily/antd';

const components = { Button, Input, Radio, Group: Radio.Group };

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const TypeValueVisible: React.FC = () => {
  const onSubmit = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div>
      <SchemaForm
        {...layout}
        onSubmit={onSubmit}
        initialValues={{ isVisible: 1 }}
        components={components}
        schema={{
          type: 'object',
          properties: {
            isVisible: {
              type: 'string',
              title: '控制是否显示',
              'x-rules': {
                required: true,
                message: 'Please input your username!',
              },
              'x-component': 'Group',
              'x-component-props': {
                options: [
                  { value: 1, label: '显示' },
                  { value: 0, label: '隐藏' },
                ],
              },
              'x-linkages': [
                {
                  type: 'value:visible',
                  target: 'Label',
                  condition: '{{ $self.value === 1 }}',
                },
              ],
            },
            Label: {
              type: 'string',
              title: ' ',
              'x-props': { colon: false },
              'x-component': 'Input',
              'x-component-props': {
                placeholder: '请输入',
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
    </div>
  );
};

export default TypeValueVisible;
