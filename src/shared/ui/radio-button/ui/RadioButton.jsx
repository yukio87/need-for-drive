import { formRadio } from './RadioButton.module.scss'

export function RadioButton({
  children,
  handleChange,
  id,
  name = 'group',
  value,
  defaultChecked = false,
}) {
  return (
    <div className={formRadio}>
      <input
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        type="radio"
        id={id}
        name={name}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}
