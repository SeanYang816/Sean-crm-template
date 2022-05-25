import React, { useState } from 'react'

const WDyrTest = props => {
    const [test, setTest] = useState({ name: 'sean' })
  return (
    <div>
        <button onClick={() => setTest({ name: 'not sean' })}>{test.name}</button>
    </div>
  )
}
WDyrTest.whyDidYouRender = true
WDyrTest.propTypes = {}

export default WDyrTest