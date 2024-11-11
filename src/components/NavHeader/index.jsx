import { useStore } from '@/store'
import TopMenu from '@/components/Menu'
// import { useLocation } from'react-router-dom'
// import BreadCrumb from './BreadCrumb'
const NavHeader = () => {

  const { userInfo } = useStore()
  // const onClick = ({ key }) => {
  //   if (key === 'logout') {
  //     storage.remove('token')
  //     location.href = '/login?callback=' + encodeURIComponent(location.href)
  //   }
  // }

  return (
    <div>
      <TopMenu/>
    </div>
  )
}

export default NavHeader
