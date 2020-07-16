import * as React from 'react'
import { useState, useEffect } from 'react'
import * as style from "./index.css"

import About from './about'

const Content = () => {
  return (
    <main className={`bgColor`}>
      <About />
    </main>
  )
}
export default Content
