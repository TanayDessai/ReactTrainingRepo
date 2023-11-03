import React, { useEffect } from 'react'

function SecondPage() {
  useEffect(() => {
    console.log('SecondPage is mounted')
    return () => {
      console.log('SecondPage is unmounted')
    }
  }, [])
  return (
    <div>SecondPage</div>
  )
}

export default SecondPage