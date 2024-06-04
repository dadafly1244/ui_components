import { useRef } from 'react'
import cx from './cx'
import data from './data'
import ViewportContextProvider from '@/context/viewportContext'
import useStyleInView from './useStyleInView'

const tooltipPosition = {
  top: '100%',
  bottom: 20,
  left: 0,
  right: 0,
}

const Tooltip = ({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description: string
}) => {
  const wrapperRef = useRef<HTMLDetailsElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const style = useStyleInView(wrapperRef, targetRef, tooltipPosition)

  return (
    <details
      className={cx('details')}
      data-tooltip={id}
      ref={wrapperRef}>
      <summary
        className={cx('summary')}
        data-tooltip-summary>
        {title}
      </summary>
      <div
        className={cx('tooltip')}
        onClick={e => e.stopPropagation()}
        ref={targetRef}
        style={style}>
        {description}
      </div>
    </details>
  )
}

const TooltipReactOnScreen = () => {
  return (
    <ViewportContextProvider>
      <>
        <h3>
          #4. React<sub>화면 영역 안에 있도록 처리</sub>
        </h3>
        {data.map(d => (
          <Tooltip
            {...d}
            key={d.id}
          />
        ))}
      </>
    </ViewportContextProvider>
  )
}
export default TooltipReactOnScreen
