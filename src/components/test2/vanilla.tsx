import VanillaWrapper from '../vanillaWrapper'

const initiator = (wrapper: HTMLDivElement) => {
  let state = false
  const pEl = document.createElement('p')
  pEl.textContent = '꺼짐'
  const buttonEl = document.createElement('button')
  buttonEl.textContent = '토글'
  buttonEl.addEventListener('click', () => {
    state = !state
    pEl.textContent = state ? '켜짐' : '꺼짐'
  })

  const divEl = document.createElement('div')
  divEl.textContent = 'test2/vanilla'
  divEl.append(buttonEl, pEl)

  wrapper.insertAdjacentElement('beforeend', divEl)
}

const Test2Vanilla = () => <VanillaWrapper initiator={initiator} />

export default Test2Vanilla
