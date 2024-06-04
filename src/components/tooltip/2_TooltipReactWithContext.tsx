import { SyntheticEvent, useEffect, useState } from 'react'
import cx from './cx'
import data from './data'
import SingleOpenContextProvider, { useSingleOpen } from '../../context/singleOpenContext'

const Tooltip = ({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description: string
}) => {
  const [isOpen, toggleTooltip] = useSingleOpen(id)

  const handleClickTitle = (e: SyntheticEvent) => {
    e.stopPropagation()
    toggleTooltip(prev => (prev === id ? null : id))
  }
  const handleClickDescription = (e: SyntheticEvent) => {
    e.stopPropagation()
  }

  useEffect(() => {
    const closeTooltip = () => toggleTooltip(null)
    if (isOpen) {
      window.addEventListener('click', closeTooltip, { once: true })
    }
    return () => {
      window.removeEventListener('click', closeTooltip)
    }
  }, [isOpen, toggleTooltip])
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

const TooltipReactWithContext = () => {
  return (
    <>
      <h3>
        2. React <sub>context를 사용해서 하나만 열리게 하기</sub>
      </h3>
      <SingleOpenContextProvider>
        {data.map(d => (
          <Tooltip
            {...d}
            key={d.id}
          />
        ))}
      </SingleOpenContextProvider>
    </>
  )
}

export default TooltipReactWithContext
