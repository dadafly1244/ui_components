import { useState } from 'react'
import cx from './cx'
import data from './data'

const TabItem = ({
  id,
  title,
  current,
  onClick,
}: {
  id: string
  title: string
  current: boolean
  onClick: (id: string) => () => void
}) => {
  return (
    <li
      className={cx('tab', { current })}
      key={id}
      onClick={onClick(id)}>
      {title}
    </li>
  )
}

const TabMenusReact = () => {
  const [currentId, setCurrentId] = useState<string>(data[0].id)
  const handleToggleTab = (id: string) => () => {
    setCurrentId(id)
  }
  const currentData =
    data.find(item => item.id === currentId)?.description || ''

  return (
    <>
      <h3>#1. React</h3>
      <div className={cx('container')}>
        <ul className={cx('tabList')}>
          {data.map(d => (
            <TabItem
              key={d.id}
              {...d}
              current={currentId === d.id}
              onClick={handleToggleTab}
            />
          ))}
        </ul>
        <div className={cx('description')}>{currentData}</div>
      </div>
    </>
  )
}

export default TabMenusReact
