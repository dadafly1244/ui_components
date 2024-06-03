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

const TabMenusReactCss = () => {
  const [currentId, setCurrentId] = useState<string>(data[0].id)
  const handleToggleTab = (id: string) => () => {
    setCurrentId(id)
  }
  return (
    <>
      <h3>
        #2. React
        <sub>CSS로 toggle처리</sub>
      </h3>
      <div className={cx('container', 'tabMenu2')}>
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
        {data.map(d => (
          <div
            key={d.id}
            className={cx('description', { current: currentId === d.id })}>
            {d.description}
          </div>
        ))}
      </div>
    </>
  )
}

export default TabMenusReactCss
