import React, {Dispatch, SetStateAction} from "react";
import {Button, Form, Input, InputNumber, message} from "antd";

interface ICreateEntryFormProps {
  entryType: string
  onClose: Dispatch<SetStateAction<boolean>>
}

const { TextArea } = Input;

const CreateEntryForm: React.FC<ICreateEntryFormProps> = ({entryType, onClose}) => {
  const [form] = Form.useForm();
  const [isFormSubmitting, setIsFormSubmitting] = React.useState(false)

  const onFinish = (values: any) => {
    setIsFormSubmitting(true);
    setTimeout(() => {
      message.success('Запис успішно збережено!');
      onClose(false);
      form.resetFields();
      setIsFormSubmitting(false);
    }, 2000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      name="createEntry"
      layout={"vertical"}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Назва"
        name="name"
        rules={[{required: true, message: 'Будь ласка, вкажіть назву.'}]}
      >
        <Input placeholder={"Продукти, рахунок, кава..."} size={"large"} style={{borderRadius: 16}}/>
      </Form.Item>

      <Form.Item
        label="Сума"
        name="amount"
        rules={[{required: true, message: 'Будь ласка, вкажіть суму.'}]}
      >
        <InputNumber min={0} max={1000000} placeholder={"100"} size={"large"} style={{borderRadius: 16}}/>
      </Form.Item>

      <Form.Item
        label="Опис"
        name="description"
      >
        <TextArea placeholder={"Нотатки та деталі"} size={"large"} style={{borderRadius: 16}}/>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={isFormSubmitting}
          style={{
            borderRadius: 16
          }}
        >
          Додати
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CreateEntryForm