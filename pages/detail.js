import React,{useState} from 'react'
import Head from 'next/head'
import {Row, Col , Icon ,Breadcrumb  } from 'antd'

import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import styles from '../styles/pages/detail.module.css'
import ReactMarkdown from 'react-markdown'


let markdown='# P01:环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'
const Detail = () => (
  <>
    <Head>
      <title>文章详细页</title>
    </Head>
    <Header />
    <Row className={styles["comm-main"]} type="flex" justify="center">
      <Col className={styles["comm-left"]} xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author />
      </Col>
      <Col className={styles["comm-right"]} xs={24} sm={24} md={16} lg={18} xl={14}  >
            <div>
              <div className={styles["bread-div"]}>
                <Breadcrumb>
                  <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item>前端</Breadcrumb.Item>
                  <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                </Breadcrumb>
              </div>

             <div>
                <div className={styles["detailed-title"]}>
                React实
                </div>

                <div className={styles["list-icon"],styles["center"]}>
                  <span> 2019-06-28</span>
                  <span>视频教程</span>
                  <span> 5498人</span>
                </div>

                <div className={styles["detailed-content"]} >
                  <ReactMarkdown 
                    children={markdown} 
                    escapeHtml={false}  
                  />
                </div>

             </div>

            </div>
        </Col>
      
    </Row>
    <Footer/>

 </>
)

export default Detail