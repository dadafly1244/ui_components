import cx from './cx'
import data from './data'
import VanillaWrapper from '../vanillaWrapper'

const buildTabMenus = ({ id, title }: { id: string; title: string }) => {
  const liEl = document.createElement('li')
  liEl.classList.add(cx('tab'))
  liEl.textContent = title
  liEl.setAttribute('data-id', id)
  return liEl
}

const buildDescriptions = ({
  id,
  description,
}: {
  id: string
  description: string
}) => {
  const divEl = document.createElement('div')
  divEl.classList.add(cx('description'))
  divEl.setAttribute('data-id', id)
  divEl.textContent = description
  return divEl
}

const initiator = (wrapper: HTMLDivElement) => {
  let currentId: string = data[0].id

  const containerEl = document.createElement('div')
  containerEl.classList.add(cx('container'), cx('tabMenu2'))

  const tabUlEl = document.createElement('ul')
  tabUlEl.classList.add(cx('tabList'))

  const tabListEl = data.map(buildTabMenus)
  const descEl = data.map(buildDescriptions)

  tabUlEl.append(...tabListEl)
  containerEl.append(tabUlEl, ...descEl)

  const handleClickTab = (e: Event) => {
    const targetEl = e.target as HTMLElement
    if (!targetEl.classList.contains(cx('tab'))) return

    currentId = targetEl.dataset.id || data[0].id
    tabListEl.forEach((itemEl, i) => {
      itemEl.classList.toggle(cx('current'), currentId === itemEl.dataset.id)
      descEl[i].classList.toggle(cx('current'), currentId === itemEl.dataset.id)
    })
  }
  tabUlEl.addEventListener('click', handleClickTab)
  tabListEl[3].click()

  wrapper.append(containerEl)
}

const TabMenusVanilla = () => (
  <VanillaWrapper
    title="#4"
    initiator={initiator}
  />
)

export default TabMenusVanilla
