import { searchRoute } from '@/utils'
import { Tabs } from '@arco-design/web-react'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useRouteLoaderData } from 'react-router-dom'
export default function TabsFC() {
  const { pathname } = useLocation()
  const [tabsList, setTabsList] = useState([{ key: '/welcome', label: '首页', closable: false }])
  const [activeKey, setActiveKey] = useState('')
  const data = useRouteLoaderData('layout')
  const navigate = useNavigate()
  useEffect(() => {
    addTabs()
  }, [pathname])

  // 创建页签
  const addTabs = () => {
    const route = searchRoute(pathname, data.menuList)
    if (!route) return
    if (!tabsList.find(item => item.key == route.path)) {
      tabsList.push({
        key: route.path,
        label: route.menuName,
        closable: pathname !== '/welcome'
      })
    }
    setTabsList([...tabsList])
    setActiveKey(pathname)
  }

  // 路由切换
  const handleChange = (path) => {
    navigate(path)
  }

  const handleDel = (path) => {
    if (pathname === path) {
      tabsList.forEach((item, index) => {
        if (item.key != pathname) return
        const nextTab = tabsList[index + 1] || tabsList[index - 1]
        if (!nextTab) return
        navigate(nextTab.key)
      })
    }
    setTabsList(tabsList.filter(item => item.key != path))
  }
  return (
    <Tabs
      activeKey={activeKey}
      items={tabsList}
      tabBarStyle={{ height: 40, marginBottom: 0, backgroundColor: 'var(--dark-bg-color)' }}
      type='editable-card'
      hideAdd
      onChange={handleChange}
      onEdit={path => {
        handleDel(path)
      }}
    />
  )
}
