import { formRadio } from './RadioButton.module.scss'

export function RadioButton({
  children,
  onChange,
  id,
  name = 'group',
  value,
  isChecked = false,
}) {
  return (
    <div className={formRadio}>
      <input
        onChange={(e) => onChange(e)}
        value={value}
        type="radio"
        id={id}
        name={name}
        defaultChecked={isChecked}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}
