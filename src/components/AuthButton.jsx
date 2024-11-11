import { useStore } from '@/store'
import { Button } from '@arco-design/web-react'
import { useRouteLoaderData } from 'react-router-dom'

export default function AuthButton(props) {
  const data = useRouteLoaderData('layout')
  const role = useStore(state => state.userInfo.role)
  if (!props.auth) return <Button {...props}>{props}</Button>
  if (data.buttonList.includes(props.auth) || role == 1) {
    return <Button {...props}>{props}</Button>
  }
  return <></>
}
