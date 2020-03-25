import React, { useEffect, useState } from 'react'
import CardContent from './CardContent'
import Loading from '../Loading'
import { convertDate } from '../../utils/helper'
import { Typography, Select, Form, Row, Col } from 'antd'
import axios from 'axios'
import styles from './style.module.css'

const ContentApp = () => {
  const { Title, Text } = Typography
  const { Option } = Select
  const [data, setData] = useState({})
  const [country, setCountry] = useState([])
  const [selectCountry, setSelectCountry] = useState("Indonesia")
  const [loading, setLoading] = useState(false)
  const layout = {
    col: {
      xs: 24,
      sm: 8
    },
    row: [8, 8]

  }
  const formItemLayout = {
    labelCol: {
      xs: { span: 2 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 2 },
      sm: { span: 20 },
    },
  }
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await axios.get('https://api.kawalcorona.com/')
      const getCountry = async res => {
        const initArray = []
        await res.map(item => {
          initArray.push(item.attributes.Country_Region)
          return true
        })
        setCountry(initArray)
      }
      let obj = res.data.find(item => item.attributes.Country_Region === selectCountry); //SEARCH BY SELECT
      setData(obj)
      getCountry(res.data)
      setLoading(false)
    }
    fetchData()
  }, [selectCountry])
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <Title style={{ margin: 0 }}>PANTAU CORONA</Title>
        <Text>Update Live Data Global COVID-19</Text>
      </div>
      <div className={styles.select}>
        <Form {...formItemLayout}>
          <Form.Item label="Pilih Negara">
            <Select
              style={{ width: 200 }}
              data={country}
              value={loading ? 'Loading...' : selectCountry}
              showSearch
              onChange={value => setSelectCountry(value)}
            >
              {country.map((item, index) => {
                return (
                  <Option value={item} key={index}>{item}</Option>
                )
              })}
            </Select>
          </Form.Item>
        </Form>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.cardContent}>
          {
            data ?
              data.attributes && !loading ?
                <>
                  <Row gutter={layout.row}>
                    <Col {...layout.col}>
                      <CardContent status="positif" total={data.attributes.Confirmed} />
                    </Col>
                    <Col {...layout.col}>
                      <CardContent status="sembuh" total={data.attributes.Recovered} />
                    </Col>
                    <Col {...layout.col}>
                      <CardContent status="meninggal" total={data.attributes.Deaths} />
                    </Col>
                  </Row>
                </>
                :
                <div className={styles.loadingComponent}>
                  <Loading />
                </div>
              :
              <div className={styles.loadingComponent}>
                <Loading />
              </div>
          }
        </div>
        <Text style={{ margin: '10px 0px' }}>
          Update Terakhir :
          {
            data ?
              data.attributes && !loading ? `${convertDate(data.attributes.Last_Update)} WIB` : ""
              : " Something Error"
          }
        </Text>
        <Text> Sumber :
          <a href="https://kawalcorona.com/" style={{ textDecoration: "none", color: "white" }}> https://kawalcorona.com/</a>
        </Text>
      </div>
    </div>
  )
}

export default ContentApp