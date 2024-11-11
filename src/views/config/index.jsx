import styles from './index.module.less'
import { Tabs, Button, Space } from '@arco-design/web-react';
const TabPane = Tabs.TabPane;


const configPage = () => {
  return (
    <div className={styles.todoItemContent}>
      <Tabs
        defaultActiveTab='1'
      >
        <TabPane key='1' title='配置'>
          <div className={styles.tabBOX}>
            <div className={styles.leftContent}></div>
            <div className={styles.rightContent}></div>
          </div>
        </TabPane>
        <TabPane key='2' title='英雄'>
          <div className={styles.tabBOX}>
            <div className={styles.leftContent}></div>
            <div className={styles.rightContent}></div>
          </div>
        </TabPane>
        <TabPane key='3' title='关卡'>
          <div className={styles.tabBOX}>
            <div className={styles.leftContent}></div>
            <div className={styles.rightContent}></div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default configPage;