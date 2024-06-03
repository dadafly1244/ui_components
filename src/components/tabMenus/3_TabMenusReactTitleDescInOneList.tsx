import { useState } from 'react'
import cx from './cx'
import data from './data'

const TabItem = ({
  id,
  title,
  description,
  current,
  onClick,
}: {
  id: string
  title: string
  description: string
  current: boolean
  onClick: () => void
}) => {
  return (
    <li
      className={cx('item', { current })}
      key={id}>
      <div
        className={cx('tab')}
        onClick={onClick}>
        {title}
      </div>
      <div className={cx('description')}>{description}</div>
    </li>
  )
}

const TabMenusReactTitleDescInOneList = () => {
  const [currentId, setCurrentId] = useState<string>(data[0].id)
  const handleToggleTab = (id: string) => () => {
    setCurrentId(id)
  }
  return (
    <>
      <h3>
        #3. React
        <sub>
          한 개의 li안에 title/desc 모두 넣고 css로 스타일 만져주기, 스크린
          리더기가 읽어줄때 title 읽고 desc읽게 할 수 있음!
        </sub>
      </h3>
      <ul className={cx('container', 'tabMenu3')}>
        {data.map(d => (
          <TabItem
            key={d.id}
            {...d}
            current={currentId === d.id}
            onClick={handleToggleTab(d.id)}
          />
        ))}
      </ul>
    </>
  )
}

export default TabMenusReactTitleDescInOneList
