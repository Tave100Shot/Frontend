import { useEffect, useRef, useState } from "react";
import * as l from "../../styles/loginModalStyle";
import Modal from 'react-modal';
import { useDispatch } from "react-redux";
import { SetModal } from "../../redux/actions/mainAction";


const AddAuthModal = ({isOpen, onRequestClose}) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(SetModal(false))
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
    <h2>모달 제목</h2>
    <p>모달 내용</p>
    <button onClick={closeModal}>CLOSE</button>
  </Modal>
  )
}

export default AddAuthModal;