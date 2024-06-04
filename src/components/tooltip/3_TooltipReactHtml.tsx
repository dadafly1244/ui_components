import { useEffect, SyntheticEvent } from 'react'
import data from './data'
import cx from './cx'

const Tooltip = ({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description: string
}) => {
  const handleClickDescription = (e: SyntheticEvent) => e.stopPropagation()
  return (
    <details
      className={cx('details')}
      data-tooltip={id}>
      <summary
        className={cx('summary')}
        // data-tooltip-summary
      >
        {title}
      </summary>
      <div
        className={cx('tooltip')}
        onClick={handleClickDescription}>
        {description}
      </div>
    </details>
  )
}

const TooltipReactHtml = () => {
  useEffect(() => {
    const closeAllTooltip = (e: Event) => {
      const target = e.target as HTMLElement
      // const isSummary = !!target.dataset.tooltipSummary // dataset안에서는 카멜케이스로 들어감!
      document.querySelectorAll('[data-tooltip]').forEach(elem => {
        if (elem !== target.parentElement) elem.removeAttribute('open')
      })
    }
    window.addEventListener('click', closeAllTooltip)
    return () => {
      window.removeEventListener('click', closeAllTooltip)
    }
  }, [])

  return (
    <>
      <h3>
        #3. React<sub>html details 태그 사용</sub>
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

export default TooltipReactHtml
