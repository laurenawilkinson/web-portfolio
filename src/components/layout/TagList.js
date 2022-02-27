import * as React from 'react'
import cn from 'classnames'
import * as styles from '../../styles/components/TagList.module.scss'

const TagList = ({ items = [], size = 'medium' }) => {
  return (
    <ul className={cn(styles.list, styles[size])}>
      {items.map((item, index) => (
        <li className={styles.listItem} key={index}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default TagList
