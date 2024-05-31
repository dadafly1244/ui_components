import { useEffect, useRef, useState } from 'react'
import cx from './cx'
import data from './data'

const AccordionItem = ({
  id,
  title,
  description,
  current,
  toggle,
}: {
  id: string
  title: string
  description: string
  current: boolean
  toggle: () => void
}) => {
  const descRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // onBeforematch가 아직 반영되지 않아서 event listener로 넣어줌
    if (descRef.current) {
      descRef.current.addEventListener('beforematch', toggle)
    }
    return () => {
      if (descRef.current)
        descRef.current.removeEventListener('beforematch', toggle)
    }
  }, [toggle])

  return (
    <li
      className={cx('item', 'item3', { current })}
      key={id}>
      <div
        className={cx('tab')}
        onClick={toggle}>
        {title}
      </div>
      <div
        className={cx('description')}
        ref={descRef}
        // @ts-ignore: hidden에서 boolean이 아닌 새로운 until-found 속성을 사용하기 위해서
        HIDDEN={current ? undefined : 'until-found'}>
        {description}
      </div>
    </li>
  )
}

const AccordionReactWithCtrlF = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id)
  const toggleItem = (id: string) => () => {
    setCurrentId(prev => (prev === id ? null : id))
  }

  return (
    <>
      <h3>
        #6. React<sub>ctrl+F 검색 가능</sub>
      </h3>
      <ul className={cx('container')}>
        {data.map(d => (
          <AccordionItem
            {...d}
            key={d.id}
            current={currentId === d.id}
            toggle={toggleItem(d.id)}
          />
        ))}
      </ul>
    </>
  )
}

export default AccordionReactWithCtrlF

// 참고 한 블로그, 2023 FEconf: https://hiddenest.dev/accessible-accordion
