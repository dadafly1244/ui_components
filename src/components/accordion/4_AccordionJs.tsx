import VanillaWrapper from '../vanillaWrapper'
import cx from './cx'
import data from './data'

const itemBuilder = ({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description: string
}) => {
  const liEl = document.createElement('li')
  liEl.classList.add(cx('item'), cx('item3'))
  liEl.setAttribute('data-id', id)

  const tabEl = document.createElement('div')
  tabEl.classList.add(cx('tab'))
  tabEl.textContent = title

  const descriptionEl = document.createElement('div')
  descriptionEl.classList.add(cx('description'))
  descriptionEl.textContent = description

  liEl.append(tabEl, descriptionEl)
  return liEl
}

const initiator = (wrapper: HTMLDivElement) => {
  let currentId: string | null = data[0].id

  const ulEl = document.createElement('ul')
  ulEl.classList.add(cx('container'))

  const itemsEl = data.map(itemBuilder) // data.map(d => itemBuilder(d)) 이랑 data.map(itemBuilder)은 같음!

  ulEl.append(...itemsEl)

  const handleClickTab = (e: Event) => {
    const targetEl = e.target as HTMLElement
    if (!targetEl.classList.contains(cx('tab'))) return

    const targetId = targetEl.parentElement!.dataset.id
    if (!targetId) return
    currentId = targetId === currentId ? null : targetId

    itemsEl.forEach(itemEl => {
      itemEl.classList.toggle(cx('current'), currentId === itemEl.dataset.id) // classlist.toggle(a, boolean) true이면 a를 무조건 넣어라, false면 a를 무조건 뺴라. boolean이 없으면 있으면 넣고 없으면 빼고.
    })
  }
  ulEl.addEventListener('click', handleClickTab) // ul에 이벤트를 걸었지만 이벤트 버블링이 됨으로 클릭한 부분이 하위에 있기만 하면 클릭이벤트를 실행 가능.

  wrapper.append(ulEl)
}

const AccordionJs = () => (
  <VanillaWrapper
    title="#4"
    initiator={initiator}
  />
)

export default AccordionJs
