/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "../../styles/Modal.module.css";

import Modal from "react-modal";

Modal.setAppElement("div");

export default function WithdrawModal({ bool, changeOpenWithdraw }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(bool);
  }, [bool]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    changeOpenWithdraw();
  };

  const [contentFlag, setContentFlag] = useState(true);
  const [txFlag, setTxFlag] = useState(true);

  const withdraw = () => {
    setContentFlag(!contentFlag);
  };
  const confirmTx = () => {
    setTxFlag(!txFlag);
  };
  const cancelTx = () => {};

  const Content1 = () => {
    return (
      <div>
        <div className={styles.modalTitle}>
          <h1>Withdraw</h1>
        </div>
        <div className={styles.modalSubTitle}>
          Eu, hendrerit adipiscing pulvinar diam tincidunt ac amet eu. Nulla
          suspendisse dignissim
        </div>
        <div className={styles.sumbalance}>
          <div className="flex justify-between text-gray-400">
            <div>
              <div className="">
                <span className="text-gray-100 mr-2">Sum</span>
                <i className="fa fa-info-circle" aria-hidden="true"></i>
              </div>
            </div>
            <div>
              <span>Max limit: </span>
              <span>{100} SOL</span>
            </div>
          </div>
        </div>
        <button onClick={withdraw} className={styles.actionBtn}>
          Withdraw
        </button>
      </div>
    );
  };

  const Content2 = () => {
    return (
      <div>
        <div className="flex justify-center mb-6">
          <img
            src={
              txFlag
                ? "assets/image/modal/empty-wallet-time.png"
                : "assets/image/modal/tick-circle.png"
            }
            alt="tx"
          />
        </div>
        <div className={styles.modalTitle}>
          <h1 className="text-center">
            {txFlag ? "Transaction pending..." : "Transaction completed"}
          </h1>
        </div>
        <div className={styles.modalSubTitle}>
          Eu, hendrerit adipiscing pulvinar diam tincidunt ac amet eu. Nulla
          suspendisse dignissim
        </div>
        <div className="flex justify-between">
          <button onClick={cancelTx} className={styles.cancelBtn}>
            Cancel
          </button>
          <button onClick={confirmTx} className={styles.okayBtn}>
            Okay
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.Modal}>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className={styles.mymodal}
        overlayClassName={styles.myoverlay}
        closeTimeoutMS={500}
      >
        <div className={styles.modalContent}>
          <div
            className="text-gray-400 text-xl absolute top-4 right-4"
            onClick={toggleModal}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
          <div>{contentFlag ? <Content1 /> : <Content2 />}</div>
        </div>
      </Modal>
    </div>
  );
}
