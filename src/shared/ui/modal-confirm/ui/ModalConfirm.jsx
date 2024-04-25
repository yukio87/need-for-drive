import {
  buttons,
  closedModal,
  container,
  headerStyles,
  openedModal,
} from './ModalConfirm.module.scss'

export function ModalConfirm({
  isOpen,
  header = 'Подтвердить заказ',
  textAllowBtn = 'Подтвердить',
  textDisallowBtn = 'Вернуться',
  handleClickOnAllowBtn,
  handleClickOnDisallowBtn,
  disabledAllowBtn,
}) {
  return (
    <div className={isOpen ? openedModal : closedModal}>
      <div className={container}>
        <p className={headerStyles}>{header}</p>
        <div className={buttons}>
          <button
            onClick={handleClickOnAllowBtn}
            disabled={disabledAllowBtn}
            type="button"
          >
            {textAllowBtn}
          </button>
          <button onClick={handleClickOnDisallowBtn} type="button">
            {textDisallowBtn}
          </button>
        </div>
      </div>
    </div>
  )
}
