import * as React from "react"
import { useEffect, useState, useCallback, useMemo, useReducer, useRef } from "react"
import * as style from "./main.css"

import _fetch from '../../utils/fetch'
import { Toast, Svga, Mask, Loading, Img } from '../../common/index'
import { useClientRect, useInterval } from './useCommon'

import Header from './header'

const Main = () => {
    return (
        <React.Fragment>
            <div className={style.scrollView}>
                <Header />
                {/* something */}
            </div>
            <Loading />
            <Mask>
                {/* something */}
            </Mask>
            <Toast />
        </React.Fragment>
    )
}

export default Main