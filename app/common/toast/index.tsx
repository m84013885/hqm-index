import * as React from "react";
import { useEffect, useState } from "react";
import * as style from "./index.css"

let timerStart: any = null
let timerEnd: any = null

const Toast = () => {
    const [toastText, setToastText] = useState('')
    const [anima, setAnima] = useState(false)
    window.setToast = setToastText
    const clearTimer = () => {
        clearTimeout(timerStart)
        clearTimeout(timerEnd)
        timerStart = null
        timerEnd = null
    }
    useEffect(() => {
        if (toastText !== '') {
            clearTimer()
            setAnima(true)
            timerStart = setTimeout(() => {
                setAnima(false)
            }, 3000)
            timerEnd = setTimeout(() => {
                setToastText('')
            }, 3500)
        }
    }, [toastText])
    return (
        <div className={`${toastText === '' ? style.none : style.toast}`}>
            <div className={`${style.text} ${anima ? style.big : style.small}`}>
                {toastText}
            </div>
        </div>
    )
}

export default Toast