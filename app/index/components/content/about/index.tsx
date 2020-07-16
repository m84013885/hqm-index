import * as React from 'react'
import { useState, useEffect } from 'react'
import * as style from "./index.css"

import { useInterval, useRenderTime } from '../../useCommon'

const AGE = 35
const EXP = 10

const power = [
  { type: 1, name: 'React' },
  { type: 2, name: 'Vue' },
  { type: 1, name: 'Webpack' },
  { type: 2, name: 'node' },
  { type: 2, name: 'typeScript' },
  { type: 1, name: 'javaScript' },
  { type: 3, name: 'Svg' },
  { type: 2, name: 'nginx' },
  { type: 3, name: 'mobx' },
  { type: 1, name: 'ReactHook' },
  { type: 3, name: 'reactNative' },
  { type: 3, name: 'php' },
  { type: 2, name: 'antdesign' },
  { type: 3, name: 'element-ui' },
  { type: 2, name: 'koa' },
  { type: 3, name: 'mongodb' },
  { type: 3, name: 'mongoose' },
]

const project2020 = [
  { time: 7, title: 'hqm-index', detail: ['个人主页','使用常用webpack+react的打包工具','删除vw单位，直接使用px','使用最简单的自适应方案，媒体查询，而且只查询768px','设计方面写一部分想一部分'] },
  { time: 7, title: 'pmind', detail: ['后台管理系统','前端react、react-hook','总共3个页面，登录页、列表页、操作页','主要使用typeScript+vscode编程', '包含上传图片、修改数据、拖拽模块'] },
  { time: 7, title: 'node-server', detail: ['node服务', 'koa+koa-route','中间件使用koaBody来解决传值与上传文件的问题','总共十余个接口，包含前端接口与后台接口','上传的图片直接保存到腾讯云', '数据库使用腾讯云mysql'] },
  { time: 6, title: 'rnProject', detail: ['react-native项目','内部使用react-navigation路由页面','尽量使用react-hook编程'] },
  { time: 4, title: 'webpack-typeScript', detail: ['比较长期维护的webpack+typeScript+react项目','包含常用的webpack插件，可根据router.json设置多页面','近期webpack引出dll，减少多页面重复引入的问题','总共3个webpack的类别，开发、生产、生成dll（引出react、react-dom）','每个页面配置独立useCommon，可自行定义use方法','移动端内置css文件px转vw的方法','内置自己常用的组件，mask、toast等，部分组件绑定了全局变量'] },
]


const date = new Date()
const day = date.getDate()
const month = date.getMonth()

const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const timeStartExp = new Date(`2016/6/1`).getTime()
const timeStartAge = new Date(`1992/11/20`).getTime()


const About = () => {
  const [timeEndAge, setTimeEndAge] = useState(timeStartAge)
  const [timeEndExp, setTimeEndExp] = useState(timeStartExp)
  const _renderTimeAge = () => {
    const { year, day } = useRenderTime(timeEndAge, new Date().getTime())
    return `${year}岁${day}天`
  }
  const _renderTimeExp = () => {
    const { year, day } = useRenderTime(timeEndExp, new Date().getTime())
    return `${year}年${day}天`
  }
  useInterval(() => {
    setTimeEndAge(timeEndAge + 1000)
    setTimeEndExp(timeEndExp + 1000)
  }, 1000)
  const _renderBox = (c: any, i: number) => {
    if (i % 2 === 0) {
      return (
        <div className={style.rightBox} key={i}>
          <div className={`${style.boxTime} elementsColor1`}>
            <div className={`${style.fontSizeS} textColor`}>{monthArr[c.time - 1]}</div>
          </div>
          <div className={`${style.boxContent} btnColor`}>
            <div className={`${style.boxTitle} ${style.fontSizeM} btnTextColor`}>{c.title}</div>
            {c.detail.map((cc: any, ii: number) => {
              return (
                <div className={`${style.boxText}`} key={ii}>
                  <div className={`${style.fontSizeS} textColor`}>{ii + 1}、{cc}</div>
                </div>
              )
            })}
          </div>
        </div>
      )
    } else {
      return (
        <div className={style.leftBox} key={i}>
          <div className={`${style.boxContent} btnColor`}>
            <div className={`${style.boxTitle} ${style.fontSizeM} btnTextColor`}>{c.title}</div>
            {c.detail.map((cc: any, ii: number) => {
              return (
                <div className={`${style.boxText}`} key={ii}>
                  <div className={`${style.fontSizeS} textColor`}>{ii + 1}、{cc}</div>
                </div>
              )
            })}
          </div>
          <div className={`${style.boxTime} elementsColor1`}>
            <div className={`${style.fontSizeS} textColor`}>{monthArr[c.time - 1]}</div>
          </div>
        </div>
      )
    }
  }
  return (
    <div className={style.main}>
      <div className={style.header}>
        <div className={`${style.timeLine}`}>
          <div className={`${style.timeLineText} ${style.fontSizeL} textColor`}>{day}</div>
          <div className={`${style.timeLineText1} ${style.fontSizeS} textColor`}>{monthArr[month]}</div>
        </div>
        <div className='center'></div>
        <div className={`${style.name} ${style.fontSizeS} textColor`}>HUANGQIMING</div>
      </div>

      <div className={`${style.list} ${style.fontSizeM}`}>
        <div className={`${style.listTitle} ${style.fontSizeM} btnColor btnTextColor`}>Age</div>
        <div className={`${style.listContent} ${style.fontSizeS} btnTextColor center`}>
          <span className={`${style.listContentText} btnTextColor`}>{_renderTimeAge()}</span>
          <div className={`${style.listContentColor} elementsColor1`} style={{ width: 100 / AGE * useRenderTime(timeEndAge, new Date().getTime()).year + '%' }}></div>
        </div>
        <div className={`${style.listTarget} ${style.fontSizeM} btnColor btnTextColor`}>{AGE}</div>
      </div>
      <div className={`${style.list} ${style.fontSizeM}`}>
        <div className={`${style.listTitle} ${style.fontSizeM} btnColor btnTextColor`}>Exp</div>
        <div className={`${style.listContent} ${style.fontSizeS} btnTextColor center`}>
          <span className={`${style.listContentText} btnTextColor`}>{_renderTimeExp()}</span>
          <div className={`${style.listContentColor} elementsColor1`} style={{ width: 100 / EXP * useRenderTime(timeEndExp, new Date().getTime()).year + '%' }}></div>
        </div>
        <div className={`${style.listTarget} ${style.fontSizeM} btnColor btnTextColor`}>{EXP}</div>
      </div>
      <div className={`${style.powerTagBox}`}>
        <div className={style.powerTagToast}>
          <div className={`${style.powerTagToastBox} btnColor`}></div>
          <div className={`${style.powerTagToastText} ${style.fontSizeS} textColor`}>best</div>
          <div className={`${style.powerTagToastBox} elementsColor2`}></div>
          <div className={`${style.powerTagToastText} ${style.fontSizeS} textColor`}>good</div>
          <div className={`${style.powerTagToastBox} elementsColor1`}></div>
          <div className={`${style.powerTagToastText} ${style.fontSizeS} textColor`}>normal</div>
        </div>
        <div className={style.powerTagContent}>
          {power.map((c, i) => {
            return <div key={i} className={`${style.powerTag} ${c.type === 1 ? 'btnColor' : c.type === 2 ? 'elementsColor2' : 'elementsColor1'} btnTextColor`}>{c.name}</div>
          })}
        </div>
      </div>
      <div className={`${style.arrowBox} elementsColor1`}>
        <div className={style.arrow}></div>
      </div>
      {project2020.map((c, i) => {
        return (
          <React.Fragment>
            {_renderBox(c, i)}
          </React.Fragment>
        )
      })}
    </div >
  )
}
export default About
