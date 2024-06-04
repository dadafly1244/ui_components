import VanillaWrapper from '../vanillaWrapper'
import cx from './cx'
import data from './data'

const initiator = (wrapper: HTMLDivElement) => {
  const tooltipsEl = data.map(({ id, title, description }) => {
    const detailsEl = document.createElement('details')
    detailsEl.classList.add(cx('details'))
    detailsEl.setAttribute('data-tooltip', id)

    const summaryEl = document.createElement('summary')
    summaryEl.classList.add(cx('summary'))
    summaryEl.setAttribute('data-tooltip-summary', 'true')
    summaryEl.textContent = title

    const tooltipEl = document.createElement('div')
    tooltipEl.classList.add(cx('tooltip'))
    tooltipEl.textContent = description

    detailsEl.append(summaryEl, tooltipEl)
    return detailsEl
  })

  const closeAllTooltip = (e: Event) => {
    const target = e.target as HTMLElement
    document.querySelectorAll('[data-tooltip]').forEach(elem => {
      if (elem !== target.parentElement) elem.removeAttribute('open')
    })
  }
  window.addEventListener('click', closeAllTooltip)

  wrapper.append(...tooltipsEl)
}

const TooltipJs = () => (
  <VanillaWrapper
    title="#5"
    initiator={initiator}
  />
)

export default TooltipJs
