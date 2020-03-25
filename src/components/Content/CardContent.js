import React from 'react'
import { Card, Avatar, Typography } from 'antd'
import styles from './style.module.css'

const CardContent = ({ status, total }) => {
  const { Title, Text } = Typography
  const positif = 'https://image.flaticon.com/icons/svg/1742/1742427.svg'
  const sembuh = 'https://image.flaticon.com/icons/svg/1742/1742340.svg'
  const meninggal = 'https://image.flaticon.com/icons/svg/1742/1742348.svg'
  return (
    <>
      <Card>
        <div className={styles.wrapperCard}>
          <div className={styles.left}>
            <Text>TOTAL {status.toUpperCase()}</Text>
            <Title style={{ margin: 0 }} level={3}>{total}</Title>
            <Text>ORANG</Text>
          </div>
          <div className={styles.right}>
            <Avatar
              src={
                status === "positif" ? positif
                  : status === "sembuh" ? sembuh
                    : status === "meninggal" ? meninggal
                      : ''
              }
              style={{ verticalAlign: 'middle' }}
              size={64}
            />
          </div>
        </div>
      </Card>
    </>
  )
}

export default CardContent