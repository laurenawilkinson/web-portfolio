import React from 'react'

interface IconProps {
  children?: React.ReactNode
}

const Icon: React.FC<IconProps> = ({ children }) => {
  return <i className="material-icons-round">{children}</i>
}

export default Icon
