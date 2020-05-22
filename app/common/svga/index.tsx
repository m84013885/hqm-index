import * as React from "react";
import { useEffect, useState } from "react";
import * as style from "./index.css"

import { Downloader, Parser, Player } from 'svga.lite'

let canvas: any = null

interface prop {
    svga: any;
}

const Svga = (prop: prop) => {
    const { svga } = prop
    useEffect(() => {
        const downloader = new Downloader()
        const parser = new Parser()
        const player = new Player(canvas)

            ; (async () => {
                const fileData = await downloader.get(svga)
                const svgaData = await parser.do(fileData)

                player.set({
                    loop: 1,
                    fillMode: 'forwards',
                })

                await player.mount(svgaData)

                player
                    .$on('start', () => console.log('event start'))
                    .$on('pause', () => console.log('event pause'))
                    .$on('stop', () => console.log('event stop'))
                    .$on('end', () => console.log('event end'))
                    .$on('clear', () => console.log('event clear'))
                    .$on('process', () => {
                        // console.log('event process', player.progress)
                        if (player.progress > 83.5) {
                            player.pause()
                        }
                    })

                // player.startFrame(10)
                player.start()
                // player.pause()
                // player.stop()
                // player.clear()
            })()
    }, [])
    return (
        <canvas className={style.canvas} ref={(e) => { canvas = e }}></canvas>
    )
}

export default Svga