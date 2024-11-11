import styles from './index.module.less'
import CreateProject from './components/CreateProject'
import { useRef } from 'react'
export default function homepage () {
  const menuRef = useRef()
  // 创建
  const handleCreate = () => {
    menuRef.current?.open('create', {
      orderBy: 1
    })
  }

  return (
    <>
      <div className={styles.homepageBox}>
        <div className={styles.leftContent}></div>
        <div className={styles.rightContent}></div>
      </div>
      <CreateProject mRef={menuRef} update={CreateProject} />
    </>
  )
}
