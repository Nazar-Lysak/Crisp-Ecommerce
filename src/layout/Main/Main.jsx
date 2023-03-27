import React from 'react';
import {Button, Space} from 'antd';

const Main = () => {
  return (
    <Space
      className="site-button-ghost-wrapper"
      wrap
      style={{
        background: '#b1afaf',
        padding: '20px 15px',
      }}
    >
      <Button type="primary" ghost>
        Primary
      </Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>
        Dashed
      </Button>
      <Button type="primary" danger ghost>
        Danger
      </Button>
    </Space>
  );
};

export default Main;
