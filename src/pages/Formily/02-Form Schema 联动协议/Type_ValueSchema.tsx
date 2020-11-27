import React from 'react';
import { Button, Input, Radio, TimePicker } from 'antd';
import { SchemaForm, Submit, FormButtonGroup } from '@formily/antd';

const components = { Button, Input, Radio, Group: Radio.Group, TimePicker };

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const Type_ValueSchema: React.FC = () => {
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
              title: '控制指定字段的 schema',
              'x-rules': {
                required: true,
                message: 'Please input your username!',
              },
              'x-component': 'Group',
              'x-component-props': {
                options: [
                  { value: 1, label: '商品ID' },
                  { value: 0, label: '时间' },
                ],
              },
              'x-linkages': [
                {
                  type: 'value:schema',
                  target: 'Label',
                  condition: '{{ $self.value === 1 }}',
                  schema: {
                    //控制Label字段的schema，如果不指定condition，默认会走到该处
                    title: '商品ID',
                    'x-component': 'TimePicker',
                    'x-component-props': {
                      placeholder: '请输入',
                    },
                  },
                  otherwise: {
                    //条件不满足时控制Label字段的schema
                    title: '后端',
                    'x-component': 'Group',
                    'x-component-props': {
                      options: [
                        { value: 1, label: '商品ID' },
                        { value: 0, label: '时间' },
                      ],
                    },
                  },
                },
              ],
            },
            Label: {
              type: 'string',
              title: ' ',
              'x-component': 'TimePicker',
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

export default Type_ValueSchema;
