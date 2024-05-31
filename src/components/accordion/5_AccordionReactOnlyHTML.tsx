import cx from './cx'
import data from './data'

const AccordionItem = ({
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
      className={cx('item', 'item5')}
      key={id}>
      <input
        type="radio"
        name="accordion"
        id={id}
        className={cx('input')}
        defaultChecked={initialChecked}
      />
      <label
        htmlFor={id}
        className={cx('tab')}>
        {title}
      </label>
      <div className={cx('description')}>{description}</div>
    </li>
  )
}

const AccordionReactOnlyHTML = () => {
  return (
    <>
      <h3>
        #5. React<sub>HTML input radio 이용</sub>
      </h3>
      <ul className={cx('container')}>
        {data.map((d, i) => (
          <AccordionItem
            key={d.id}
            {...d}
            initialChecked={i === 0}
          />
        ))}
      </ul>
    </>
  )
}
// TODO: 한번 더 클릭하면 닫기게 하는 기능
export default AccordionReactOnlyHTML
