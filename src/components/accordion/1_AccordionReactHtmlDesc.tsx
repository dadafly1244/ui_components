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
      className={cx('item', { current })}
      key={id}>
      <div
        className={cx('tab')}
        onClick={onClick(id)}>
        {title}
      </div>
      {current ? <div className={cx('description')}>{description}</div> : null}
    </li>
  )
}

const AccordionReactHtmlDesc = () => {
  const [currentId, setCurrentId] = useState<string | null>(null)
  const handleToggleItem = (id: string) => () => {
    setCurrentId(prev => (prev === id ? null : id))
  }

  return (
    <>
      <h3>#1. React</h3>
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

export default AccordionReactHtmlDesc
