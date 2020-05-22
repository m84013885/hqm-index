import * as React from 'react'
import { useState, useEffect } from 'react'
import * as style from "./index.css"

interface prop {
  children: any
}

const Mask = (prop: prop) => {
  const children = prop.children || ''
  // 控制显示不显示
  const [mask, setMask] = useState(false)
  // 控制动画
  const [show, setShow] = useState(false)
  const [maskAnima, setMaskAnima] = useState(null)
  // 保留child
  const [maskNumber, setMaskNumber] = useState(0)
  window.setMask = setMaskAnima
  useEffect(() => {
    if (maskAnima !== null) {
      setMaskNumber(maskAnima)
      setMask(true)
      setShow(true)
    } else {
      setShow(false)
    }
  }, [maskAnima])
  const closeAnima = (e: any) => {
    if (e.animationName.indexOf('hide') !== -1) {
      setMaskAnima(null)
      setMask(false)
    }
  }
  return (
    <div className={mask ? style.modal : style.none}>
      <div className={`${style.bg} ${show ? style.show : style.hide}`} onClick={() => { setShow(false) }} onAnimationEnd={(e) => { closeAnima(e) }}></div>
      <div className={`${style.child} ${show ? style.big : style.small}`}>
        {children[maskNumber]}
      </div>
    </div>
  )
}
export default Mask
