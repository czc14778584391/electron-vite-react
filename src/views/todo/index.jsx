import styles from './index.module.less'
import { Tabs, Button, Space } from '@arco-design/web-react';
const TabPane = Tabs.TabPane;


const todoPage = () => {
  return (
    <div className={styles.todoItemContent}>
      <Tabs
        defaultActiveTab='1'
        extra={
          <Button size='small' type='text'>
            前往TAPD查看
          </Button>
        }
      >
        <TabPane key='1' title='需求'>
          <Space>
            <Button size='small' type='primary'>合并分支</Button> | 迭代需求 16  待合分支 3
          </Space>
          <div className={styles.TapdStyle}></div>
        </TabPane>
        <TabPane key='2' title='缺陷'>
        <Space>
            <Button size='small' type='primary'>合并分支</Button> | 日常bug 16   当前迭代 12   待合分支 3
          </Space>
          <div className={styles.TapdStyle}></div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default todoPage;