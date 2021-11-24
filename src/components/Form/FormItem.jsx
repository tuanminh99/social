import { Form } from 'antd'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

const StyledFormItem = styled(Form.Item)`
  margin-bottom: 12px;

  .ant-form-item-label {
    margin-bottom: 6px;
    font-size: 14px;
    font-weight: 600;
    color: #271d25;
  }

  .ant-form-item-extra,
  .ant-form-item-explain {
    margin-top: 6px;
    font-size: 12px;
  }
`

const FormItem = ({ name, children, ...rest }) => {
  const {
    formState: { errors },
  } = useFormContext()

  return (
    <StyledFormItem
      help={name && errors[name]?.message}
      validateStatus={name && errors[name] ? 'error' : 'validating'}
      {...rest}>
      {children}
    </StyledFormItem>
  )
}

export default FormItem
