import { formRadio } from './RadioButton.module.scss'

export function RadioButton({
  children,
  onChange,
  id,
  name = 'group',
  isChecked = false,
}) {
  return (
    <div className={formRadio}>
      <input
        onChange={onChange}
        type="radio"
        id={id}
        name={name}
        defaultChecked={isChecked}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}
