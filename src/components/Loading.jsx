import React, { useEffect, useRef } from 'react'

export default function Loading({ delay }) {
  let loader = useRef()
  // hide the loader after 2s
  useEffect(() => {
    if (delay) {
      setTimeout(() => { loader.current.style.display = 'none' }, delay)
    }
  }, []);
  return (
    <div className="loading" ref={loader}><div className="cercle"></div></div>
  )
}
