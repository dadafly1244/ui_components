import cx from './cx'
import AccordionReactHtmlDesc from './1_AccordionReactHtmlDesc'
import AccordionReactCss from './2_AccordionReactCss'
import AccordionReactCssTransition from './3_AccordionReactCssTransition'
import AccordionJs from './4_AccordionJs'
import AccordionReactOnlyHTML from './5_AccordionReactOnlyHTML'
import AccordionReactWithCtrlF from './6_AccordionReactWithCtrlF'
import AccordionReactOpenMany from './7_AccordionReactOpenMany'

const Accordions = () => {
  return (
    <div className={cx('Accordions')}>
      <AccordionReactHtmlDesc />
      <AccordionReactCss />
      <AccordionReactCssTransition />
      <AccordionJs />
      <AccordionReactOnlyHTML />
      <AccordionReactWithCtrlF />
      <AccordionReactOpenMany />
    </div>
  )
}

export default Accordions
