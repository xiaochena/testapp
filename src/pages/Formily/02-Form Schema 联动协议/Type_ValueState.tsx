import React from 'react';
import { Button, Input, Radio } from 'antd';
import { SchemaForm, Submit, FormButtonGroup } from '@formily/antd';

const components = { Button, Input, Radio, Group: Radio.Group };

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const Type_ValueState: React.FC = () => {
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
              title: '控制是否可编辑',
              'x-rules': {
                required: true,
                message: 'Please input your username!',
              },
              'x-component': 'Group',
              'x-component-props': {
                options: [
                  { value: 1, label: '可编辑' },
                  { value: 0, label: '不可编辑' },
                ],
              },
              'x-linkages': [
                {
                  type: 'value:state',
                  target: 'Label',
                  condition: '{{ $self.value === 1 }}',
                  state: {
                    //控制Label字段的可编辑状态，如果不指定condition，默认会走到该处
                    editable: true,
                  },
                  otherwise: {
                    //条件不满足时控制Label字段的编辑状态
                    editable: false,
                  },
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

export default Type_ValueState;
