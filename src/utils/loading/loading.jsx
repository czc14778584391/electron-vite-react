import { Spin } from '@arco-design/web-react';
import './loading.less'
export default function Loading( tip = 'Loading' ) {
  return <Spin tip={tip} size='large' className='request-loading' />
}