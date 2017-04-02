import React from 'react';
import { Card, Layout, Row, Col } from 'antd';

import Images from './images'

const { Header, Content, Footer } = Layout;

const Example = () => {
  return (
    <Layout style={{
        background: 'transparent'
      }}>
      <Header style={{
        background: 'transparent'
      }}>
        <Row>
          <Col span={12} offset={10}>
            <h1>Friends )</h1>
          </Col>
        </Row>
      </Header>

      <Content>
        <Images />
      </Content>

      <Footer>
        <Row>
          <Col span={12} offset={10}>
            <h3>Copyright © 2017</h3>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

Example.propTypes = {
};

export default Example;
