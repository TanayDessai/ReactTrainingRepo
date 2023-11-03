import React, { useEffect } from 'react'

function FirstPage() {
  useEffect(() => {
    console.log('FirstPage is mounted')
    return () => {
      console.log('FirstPage is unmounted')
    }
  }, [])
  return (
    <div>FirstPage</div>
  )
}

export default FirstPage