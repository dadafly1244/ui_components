import { useState } from 'react'
import cx from './cx'
import data from './data'

const AccordionItem = ({
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
  onClick: (id: string) => () => void
}) => {
  return (
    <li
      className={cx('item', 'item2', { current })}
      key={id}>
      <div
        className={cx('tab')}
        onClick={onClick(id)}>
        {title}
      </div>
      <div className={cx('description')}>{description}</div>
    </li>
  )
}

const AccordionReactCss = () => {
  const [currentId, setCurrentId] = useState<string | null>(null)
  const handleToggleItem = (id: string) => () => {
    setCurrentId(prev => (prev === id ? null : id))
  }

  return (
    <>
      <h3>
        #2. React<sub>CSS로 toggle처리</sub>
      </h3>
      <ul className={cx('container')}>
        {data.map(d => (
          <AccordionItem
            key={d.id}
            {...d}
            current={currentId === d.id}
            onClick={handleToggleItem}
          />
        ))}
      </ul>
    </>
  )
}

export default AccordionReactCss
