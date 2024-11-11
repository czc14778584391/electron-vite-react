import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Menu, Dropdown, Space, Button, Avatar, Badge, Trigger, Skeleton } from '@arco-design/web-react';
import { IconDown, IconApps, IconLoop } from '@arco-design/web-react/icon';
import { useLocation } from 'react-router-dom'
import styles from './index.module.less'
const MenuItem = Menu.Item;



function TopMenu () {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [defaultPath, setDefaultPath] = useState('/homepage')

  useEffect(() => {
    setDefaultPath(pathname)
  }, [pathname])

  // 菜单
  const MenuArray = [{
    name: '首页',
    path: '/homepage'
  }, {
    name: '待办业务',
    path: '/todo'
  }, {
    name: '配置中心',
    path: '/config'
  }];
  const EnvArray = ['王者荣耀', '英雄联盟', '和平精英']
  const dropList = (
    <Menu>
      {EnvArray.map((item, index) => {
        return <MenuItem key={index + 1}>{item}</MenuItem>
      })}
    </Menu>
  );
  function Popup () {
    return (
      <div className='demo-trigger-popup' style={{ width: 300 }}>
        <Skeleton />
      </div>
    );
  }
  // 右侧菜单
  const RightMenu = () => {
    // const [visible, setVisible] = useState(false);
    return (<Space className={styles.menuRight} size='small' align='center'>
      <Trigger
        showArrow
        trigger='click'
        position='bl'
        popup={() => (
          <div className={styles.demoTriggerPopup} style={{ width: 250 }}>
            <Skeleton />
          </div>
        )}
      >
        <IconApps className={styles.rightItemStyle} style={{ fontSize: 16, marginRight: 20 }} />
      </Trigger>
      <Trigger
        showArrow
        trigger='click'
        position='bl'
        popup={() => (
          <div className={styles.demoTriggerPopup} style={{ width: 250 }}>
            <Skeleton />
          </div>
        )}
      >
        <Badge className={styles.rightItemStyle} count='12' dotStyle={{ right: 9, top: -2 }}>
          <IconLoop style={{ fontSize: 24, marginRight: 20 }} />
        </Badge >
      </Trigger>
      <Trigger
        showArrow
        trigger='click'
        position='bl'
        popup={() => (
          <div className={styles.demoTriggerPopup} style={{ width: 250 }}>
            <Skeleton />
          </div>
        )}
      >
        <Avatar className={styles.rightItemStyle} size={20} style={{ backgroundColor: '#00d0b6' }}>
          Design
        </Avatar>
      </Trigger>
    </Space>)
  }

  // 左侧菜单
  const LeftMenu = () => {

    return (
      <MenuItem
        key='0'
        disabled
      >
        <Space align='center'>
          <div className={styles.menuLogo}></div>
          <Dropdown droplist={dropList} trigger='click' position='br'>
            <Button type='text'>
              王者荣耀
              <IconDown />
            </Button>
          </Dropdown> |
        </Space>
      </MenuItem>)
  }

  return (
    <div className={styles.menuDemo}>
      <Menu mode='horizontal' selectedKeys={defaultPath} onClickMenuItem={(key) => {
        navigate(key)
      }}>
        <LeftMenu />
        {MenuArray.map((item) => {
          return <MenuItem key={item.path}>{item.name}</MenuItem>
        })}
        <RightMenu />
      </Menu>
    </div>
  );
}

export default TopMenu;