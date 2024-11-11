import {  useImperativeHandle, useState,useRef } from 'react'
import { Modal, Form,  Input } from '@arco-design/web-react'
import api from '@/api'
import { Message } from '@arco-design/web-react';

export default function CreateProject(props) {
  const FormItem = Form.Item;
  const formRef = useRef();
  const [action, setAction] = useState('create')
  const [visible, setVisible] = useState(false)

  useImperativeHandle(props.mRef, () => ({
    open
  }))

  // 打开弹框函数
  const open = (type, data) => {
    setAction(type)
    setVisible(true)
  }

  // 部门提交
  const handleSubmit = async () => {
    const valid = await formRef.current.validate()
    if (valid) {
      if (action === 'create') {
        await api.createMenu(formRef.current.getFieldsValue())
      } else {
        await api.editMenu(formRef.current.getFieldsValue())
      }
      Message.success('操作成功')
      handleCancel()
      props.update()
    }
  }
  // 关闭和重置弹框
  const handleCancel = () => {
    setVisible(false)
    formRef.current.resetFields();
  }
  return (
    <Modal
      title={action === 'create' ? '创建菜单' : '编辑菜单'}
      width={800}
      visible={visible}
      okText='确定'
      cancelText='取消'
      onOk={handleSubmit}
      onCancel={handleCancel}
    >
      <Form  ref={formRef} labelAlign='right' labelCol={{ span: 4 }} initialValues={{ menuType: 1, menuState: 1 }}>
        <FormItem hidden name='_id'>
          <Input />
        </FormItem>
        <FormItem label='菜单名称' name='menuName' rules={[{ required: true, message: '请输入菜单名称' }]}>
          <Input placeholder='请输入菜单名称' />
        </FormItem>
        <FormItem label='组件名称' name='component'>
          <Input placeholder='请输入组件名称' />
        </FormItem>
      </Form>
    </Modal>
  )
}
