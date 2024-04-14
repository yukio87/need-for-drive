import { formCheckbox } from './Checkbox.module.scss'

export function Checkbox({
  children,
  handleChange,
  id,
  name,
  value,
  checked,
  disabled,
}) {
  return (
    <div className={formCheckbox}>
      <input
        onChange={(e) => handleChange(e.target.checked)}
        value={value}
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        disabled={disabled}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}
