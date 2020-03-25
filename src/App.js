import React from 'react'
import { Layout, Row, Col } from 'antd'
import HeaderApp from './components/Header'
import ContentApp from './components/Content'
import FooterApp from './components/Footer'
import './App.css'

const App = () => {
  const { Header, Content, Footer } = Layout
  const layout = {
    xs: 24,
    sm: 24
  }
  return (
    <>
      <Row>
        <Col {...layout}>
          <Header>
            <HeaderApp />
          </Header>
        </Col>
        <Col {...layout}>
          <Content className="content">
            <ContentApp />
          </Content>
        </Col>
        <Col {...layout}>
          <Footer className="footer">
            <FooterApp />
          </Footer>
        </Col>
      </Row>
    </>
  )
}

export default App