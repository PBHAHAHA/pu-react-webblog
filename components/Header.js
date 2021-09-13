import React from 'react'
import styles from '../styles/components/header.module.css'
import {Row,Col,Menu,Icon} from 'antd'
import {
    HomeOutlined,
    FileDoneOutlined,
    SmileOutlined,
} from '@ant-design/icons';

const Header = () => (
    <div className={styles.header}>
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className={styles['header-logo']}>PUB</span>
                <span className={styles['header-txt']}>life is event possible</span>
            </Col>
            <Col className={styles['memu-div']} xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu  mode="horizontal">
                    <Menu.Item key="home">
                        <HomeOutlined />
                        首页
                    </Menu.Item>
                    <Menu.Item key="video">
                        <FileDoneOutlined />
                        前端
                    </Menu.Item>
                    <Menu.Item key="life">
                        <SmileOutlined />
                        测试
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header