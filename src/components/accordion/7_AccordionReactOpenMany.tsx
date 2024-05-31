import { useEffect, useRef, useState } from 'react'
import data from './data'
import cx from './cx'

const AccordionItem = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  const [current, setCurrent] = useState(false)

  const descRef = useRef<HTMLDivElement>(null)

  const toggle = () => setCurrent(prev => !prev)

  useEffect(() => {
    if (descRef.current) {
      descRef.current.addEventListener('beforematch', toggle)
    }
    return () => {
      if (descRef.current)
        descRef.current.removeEventListener('beforematch', toggle)
    }
  }, [toggle])

  return (
    <li className={cx('item', 'item3', { current })}>
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

const AccordionReactOpenMany = () => {
  return (
    <>
      <h3>
        #7. React
        <sub>여러 개가 펼쳐지는 아코디언, 검색가능</sub>
      </h3>
      <ul className={cx('container')}>
        {data.map(d => (
          <AccordionItem
            {...d}
            key={d.id}
          />
        ))}
      </ul>
    </>
  )
}

export default AccordionReactOpenMany
