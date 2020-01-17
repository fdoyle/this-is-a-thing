import React, { useState, useEffect, useRef } from "react"
import Layout from "../components/layout"

export default function Page({ props }) {
  const [count, setCount] = useState(0)
  useInterval(() => {
    setCount(count + 11)
  }, 11)
  return (
    <Layout location={"Interaction Test"} title={"Interaction Test"}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </Layout>
  )
}

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
