import { useEffect, useRef, useState } from 'react'
import cx from './cx'
import data from './data'

const TabItem = ({
  id,
  title,
  current,
  toggle,
}: {
  id: string
  title: string
  current: boolean
  toggle: () => void
}) => {
  return (
    <li
      className={cx('tab', { current })}
      key={id}
      onClick={toggle}>
      {title}
    </li>
  )
}

const Description = ({
  id,
  current,
  description,
  toggle,
}: {
  id: string
  current: boolean
  description: string
  toggle: () => void
}) => {
  const descRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (descRef.current) {
      // onBeforematch가 아직 반영되지 않아서 event listener로 넣어줌
      descRef.current.addEventListener('beforematch', toggle)
    }
    return () => {
      if (descRef.current)
        descRef.current.removeEventListener('beforematch', toggle)
    }
  }, [toggle])

  return (
    <div
      ref={descRef}
      key={id}
      className={cx('description', { current })}
      // @ts-ignore: hidden에서 boolean이 아닌 새로운 string 타입인  until-found 속성을 사용하기 위해서
      HIDDEN={current ? undefined : 'until-found'}>
      {description}
    </div>
  )
}

const TabMenuReactWithCtrlF = () => {
  const parentRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLUListElement>(null)
  const [currentId, setCurrentId] = useState<string>(data[0].id)

  const toggleItem = (id: string) => () => {
    setCurrentId(id)
  }

  return (
    <>
      <h3>
        #6. React<sub>검색이 가능한 Tab 메뉴</sub>
      </h3>
      <div
        className={cx('container', 'tabMenu6')}
        ref={parentRef}>
        <ul
          className={cx('tabList')}
          ref={headerRef}>
          {data.map(d => (
            <TabItem
              {...d}
              key={d.id}
              current={currentId === d.id}
              toggle={toggleItem(d.id)}
            />
          ))}
        </ul>
        {data.map(d => (
          <Description
            {...d}
            key={d.id}
            current={currentId === d.id}
            toggle={toggleItem(d.id)}
          />
        ))}
      </div>
    </>
  )
}

export default TabMenuReactWithCtrlF
