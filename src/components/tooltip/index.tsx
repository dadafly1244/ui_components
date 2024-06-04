import cx from './cx'
import ToolTipReact from './1_TooltipReact'
import TooltipReactWithContext from './2_TooltipReactWithContext'
import TooltipReactHtml from './3_TooltipReactHtml'
import TooltipReactOnScreen from './4_TooltipReactOnScreen'
import TooltipJs from './5_TooltipJs'
const ToolTip = () => {
  return (
    <div className={cx('Tooltips')}>
      <ToolTipReact />
      <TooltipReactWithContext />
      <TooltipReactHtml />
      <TooltipReactOnScreen />
      <TooltipJs />
    </div>
  )
}

export default ToolTip
