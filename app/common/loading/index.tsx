import * as React from "react";
import { useEffect, useState } from "react";
import * as style from "./index.css"

// 使用fixed定位
// z-index = 10

interface prop {
    _show?: boolean;
}

const Loading = (prop: prop) => {
    const _show = prop._show || true
    // 控制显示不显示
    const [show, setShow] = useState(false)
    const [anima, setAnima] = useState(false)
    window.setLoading = setAnima
    const closeAnima = (e: any) => {
        if (e.animationName.indexOf('hide') !== -1) {
            setShow(false)
        }
    }
    useEffect(() => {
        if (anima) {
            setShow(true)
        }
    }, [anima])
    return (
        <div className={`${show ? style.loadingContent : style.none} ${!_show && style.opacity}`}>
            <div className={`${style.loadingBg} ${anima ? style.show : style.hide}`} onAnimationEnd={(e) => {
                closeAnima(e)
            }}></div>
            <div className={`${style.ldsEllipsis} ${anima ? style.show : style.hide}`}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading