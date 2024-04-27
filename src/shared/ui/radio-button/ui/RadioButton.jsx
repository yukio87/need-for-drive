import { formRadio } from './RadioButton.module.scss'

export function RadioButton({
  children,
  handleChange,
  id,
  name,
  value,
  defaultChecked,
  checked,
  disabled,
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
        checked={checked}
        disabled={disabled}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}
