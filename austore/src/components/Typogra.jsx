import React from 'react'

const Typogra = ({className, children, ...props}) => {
  return (
    <h1 className={'text-center text-[45px] font-medium mb-6 mt-12 text-red-700 ' + className} {...props}>
        {children}
    </h1>
  )
}

export default Typogra