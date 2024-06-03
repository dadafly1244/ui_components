import cx from './cx'
import data from './data'

const TabItem = ({
  id,
  title,
  description,
  initialChecked,
}: {
  id: string
  title: string
  description: string
  initialChecked: boolean
}) => {
  return (
    <li
      className={cx('item')}
      key={id}>
      <input
        type="radio"
        className={cx('input')}
        name={'tabMenu'}
        id={id}
        defaultChecked={initialChecked}
      />
      <label
        className={cx('tab')}
        htmlFor={id}>
        {title}
      </label>
      <div className={cx('description')}>{description}</div>
    </li>
  )
}

const TabMenusReactInputRadio = () => {
  return (
    <>
      <h3>
        #5. React<sub>html input(radio)로 처리</sub>
      </h3>
      <ul className={cx('container', 'tabMenu5')}>
        {data.map((d, i) => (
          <TabItem
            {...d}
            key={d.id}
            initialChecked={i === 0}
          />
        ))}
      </ul>
    </>
  )
}

export default TabMenusReactInputRadio
