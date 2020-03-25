import React from 'react'
import { Typography } from 'antd'
import styles from './styles.module.css'

const FooterApp = () => {
    const { Text } = Typography
    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <Text type="secondary">Created With ♥ from {JSON.stringify({})} to Indonesia</Text>
            </div>
            <div className={styles.image} />
        </div>
    )
}

export default FooterApp