import styles from './index.module.less'
export default function welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.content}>
        <div className={styles.subTitle}>欢迎体验</div>
        <div className={styles.desc}> L1工作台</div>
      </div> 
      <div className={styles.img}></div>
    </div>
  )
}
