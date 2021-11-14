import React from "react";
import styles from "./Widgets.module.css";
import cx from "classnames";
import { useRef } from "react";

function Modal({ open, setOpen, modalPosition }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpen(false);
    }
  };
  return (
    <div
      className={cx(
        styles.modal,
        open ? styles.modalVisible : styles.modalInvisible
      )}
      onClick={closeModal}
      ref={modalRef}
    >
      <div
        className={styles.modalContent}
        style={{
          position: "fixed",
          left: modalPosition.x - 150,
          top: modalPosition.y - 20,
        }}
      >
        <button className={styles.button} onClick={() => setOpen(false)}>
          x
        </button>
        <div className={styles.modalbtn}>Action</div>
        <div className={styles.modalbtn}>Next Action</div>
        <div className={styles.modalbtn}>Another Action</div>
      </div>
    </div>
  );
}

export default Modal;
