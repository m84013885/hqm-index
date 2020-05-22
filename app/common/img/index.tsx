import * as React from "react";
import { useEffect, useState } from "react";
import * as style from "./index.css"

interface prop {
    className: string;
    children?: any;
}
let lds: any = null
const Img = (prop: prop) => {
    const { className, children } = prop
    const [loading, setLoading] = useState(true)
    const [scale, setScale] = useState(1)
    const _getDom = (e: any) => {
        if (e) {
            const str = window.getComputedStyle(e).backgroundImage
            const width = parseInt(window.getComputedStyle(e).width)
            const height = parseInt(window.getComputedStyle(e).height)
            width > height ? setScale(height / 80) : setScale(width / 80)
            const r = /\".+\"/ig
            const t = str.match(r)[0].slice(1, -1)
            const img = new Image()
            img.src = t
            img.onload = () => {
                setLoading(false)
            }
        }
    }
    useEffect(() => {
        if (lds) {
            lds.style.webkitTransform = `scale(${scale})`
            lds.style.transform = `scale(${scale})`
        }
    }, [scale])

    const _render = () => {
        switch (loading) {
            case true:
                return (
                    <div className={style.ldsContent}>
                        <div className={style.lds} ref={(e) => { lds = e }}><div></div><div></div><div></div><div></div></div>
                        <div className={className} style={{ opacity: 0 }} ref={(e) => { _getDom(e) }}></div>
                    </div>
                )
            default:
                return (
                    <div className={className}>
                        {children}
                    </div>
                )
        }
    }
    return (
        <React.Fragment>
            {_render()}
        </React.Fragment>
    )
}

export default Img