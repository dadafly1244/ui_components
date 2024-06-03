import { useEffect, useRef, useState } from 'react'
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
  const descRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (descRef.current) {
      descRef.current.addEventListener('beforematch', onClick)
    }
    return () => {
      if (descRef.current)
        descRef.current.removeEventListener('beforematch', onClick)
    }
  }, [onClick])
  return (
    <li
      className={cx('item', { current })}
      key={id}
      onClick={onClick}>
      <div className={cx('tab')}>{title}</div>
      <div
        ref={descRef}
        key={id}
        className={cx('description')}
        // @ts-ignore: hidden에서 boolean이 아닌 새로운 string 타입인  until-found 속성을 사용하기 위해서
        HIDDEN={current ? undefined : 'until-found'}>
        {description}
      </div>
    </li>
  )
}

const TabMenuReactWithCtrlFAndOneList = () => {
  const [currentId, setCurrentId] = useState<string>(data[0].id)

  const handleToggleTab = (id: string) => () => {
    setCurrentId(id)
  }

  return (
    <>
      <h3>
        #7. React
        <sub>검색이 가능하고, 하나의 li안에 title, desc가 있는 Tab메뉴</sub>
      </h3>
      <div className={cx('container', 'tabMenu3')}>
        {data.map(d => (
          <TabItem
            key={d.id}
            {...d}
            current={currentId === d.id}
            onClick={handleToggleTab(d.id)}
          />
        ))}
      </div>
    </>
  )
}

export default TabMenuReactWithCtrlFAndOneList
