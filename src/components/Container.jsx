import React from 'react'

const Container = ({children,className}) => {
  return (
   <div className={`container mx-auto ${className} px-1`}>{children}</div>
  )
}

export default Container