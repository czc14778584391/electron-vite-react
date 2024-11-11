import  { useEffect } from 'react'
import { Layout , Watermark } from '@arco-design/web-react'
import {  Outlet, useLocation, useRouteLoaderData } from 'react-router-dom'
import NavHeader from '@/components/NavHeader'
// import Menu from '@/components/Menu'
import styles from './index.module.less'
import api from '@/api'
// import { useStore } from '@/store'
// import { IAuthLoader } from '@/router/AuthLoader'
// import { searchRoute } from '@/utils'
// import { router } from '@/router'
// const  Sider  = Layout.Sider

const App = () => {
  // const { collapsed, userInfo, updateUserInfo } = useStore()
  // const { pathname } = useLocation()
  useEffect(() => {
    getUserInfo()
  }, [])
  const getUserInfo = async () => {
    // const data = await api.getUserInfo()
    // updateUserInfo(data)
  }
  // 权限判断
  // const data = useRouteLoaderData('layout')
  // const route = searchRoute(pathname, router)
  // if (route && route.meta?.auth === false) {
  //   // 继续执行
  // } else {
  //   const staticPath = ['/welcome', '/403', '/404']
  //   if (!data.menuPathList.includes(pathname) && !staticPath.includes(pathname)) {
  //     // return <Navigate to='/403' />
  //   }
  // }

  return (
    // <Watermark content='React'>
      // {
         (
        <Layout>
            <NavHeader />
            <div className={styles.content}>
              <div className={styles.wrapper}>
                <Outlet></Outlet>
              </div>
            </div>
        </Layout>
      )
    // }
    // </Watermark>
  )
}

export default App
