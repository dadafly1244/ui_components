import cx from './cx'
import AccordionReactHtmlDesc from './1_AccordionReactHtmlDesc'
import AccordionReactCss from './2_AccordionReactCss'
import AccordionReactCssTransition from './3_AccordionReactCssTransition'
import AccordionJs from './4_AccordionJs'

const Accordions = () => {
  return (
    <div className={cx('Accordions')}>
      <AccordionReactHtmlDesc />
      <AccordionReactCss />
      <AccordionReactCssTransition />
      <AccordionJs />
    </div>
  )
}

export default Accordions
