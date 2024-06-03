import cx from './cx'
import TabMenusReact from './1_TabMenusReact'
import TabMenusReactCss from './2_TabMenusReactCss'
import TabMenusReactTitleDescInOneList from './3_TabMenusReactTitleDescInOneList'
import TabMenusVanilla from './4_TabMenusVanilla'
import TabMenusReactInputRadio from './5_TabMenusReactInputRadio'
import TabMenuReactWithCtrlF from './6_TabMenuReactWithCtrlF'
import TabMenuReactWithCtrlFAndOneList from './7_TabMenuReactWithCtrlFAndOneList'

const TabMenus = () => {
  return (
    <div className={cx('TabMenus')}>
      <TabMenusReact />
      <TabMenusReactCss />
      <TabMenusReactTitleDescInOneList />
      <TabMenusVanilla />
      <TabMenusReactInputRadio />
      <TabMenuReactWithCtrlF />
      <TabMenuReactWithCtrlFAndOneList />
    </div>
  )
}

export default TabMenus
