import React from 'react'
import { Typography } from 'antd'
import styles from './style.module.css'

const HeaderApp = () => {
  const { Title } = Typography
  return (
    <div className={styles.main}>
      <Title level={2} style={{ margin: 0 }}>Pantau Corona</Title>
    </div>
  )
}


export default HeaderApp