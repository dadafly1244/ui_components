import { SyntheticEvent, useEffect, useState } from 'react'
import cx from './cx'
import data from './data'

const Tooltip = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickTitle = (e: SyntheticEvent) => {
    e.stopPropagation()
    setIsOpen(prev => !prev)
  }
  const handleClickDescription = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  useEffect(() => {
    const closeTooltip = () => setIsOpen(false)
    if (isOpen) {
      window.addEventListener('click', closeTooltip)
    }
    return () => {
      window.removeEventListener('click', closeTooltip)
    }
  }, [isOpen])
  return (
    <div className={cx('container')}>
      <button
        className={cx('trigger')}
        onClick={handleClickTitle}>
        {title}
      </button>
      {isOpen && (
        <div
          className={cx('tooltip')}
          onClick={handleClickDescription}>
          {description}
        </div>
      )}
    </div>
  )
}

const TooltipReact = () => {
  return (
    <>
      <h3>
        1. React <sub>외부 클릭시 닫히는 tooltip</sub>
      </h3>
      {data.map(d => (
        <Tooltip
          {...d}
          key={d.id}
        />
      ))}
    </>
  )
}

export default TooltipReact
