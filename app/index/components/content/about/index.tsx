import * as React from 'react'
import { useState, useEffect } from 'react'
import * as style from "./index.css"

import { useInterval } from '../../useCommon'

const date = new Date()
const day = date.getDate()
const month = date.getMonth()
const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const thisTime = new Date().getTime()
const time = new Date('2027/11/20').getTime()
const timeS = (time - thisTime) / 1000

const About = () => {
  const [timeEnd, setTimeEnd] = useState(timeS)
  const _renderTime = () => {
    let day = timeEnd > 60 * 60 * 24 ? parseInt(timeEnd / (60 * 60 * 24) + '') : 0
    let hour = timeEnd > 60 * 60 ? parseInt(timeEnd / (60 * 60) + '') - (day * 24) : 0
    let minute = timeEnd > 60 ? parseInt(timeEnd / 60 + '') - (day * 24 * 60) - (hour * 60) : 0
    let second = parseInt(timeEnd + '') - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
    let dayText = ''
    if (hour === 0 && minute === 0 && second === 0) {
      for (let i = 0; i < window.timer.length; i++) {
        clearInterval(window.timer[i])
      }
      window.timer = []
    }
    if (day > 0) {
      dayText = `${day}天`
    }
    return `${dayText}${hour}时${minute}分${second}秒`
  }
  useInterval(() => {
    setTimeEnd(timeEnd - 1)
  }, 1000)
  return (
    <div className={style.main}>
      <div className={style.timeLine}>
        <div className={`${style.timeLineText} ${style.fontSizeL}`}>{day}</div>
        <div className={`${style.timeLineText1} ${style.fontSizeS}`}>{monthArr[month]}</div>
      </div>
      <div className={`${style.list} ${style.fontSizeM}`}>
        {/* 距离35岁还有: */}{_renderTime()}
      </div>
    </div>
  )
}
export default About
