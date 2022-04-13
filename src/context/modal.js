import React, { createContext, useState } from 'react';
import AppModal from '../components/common/Modal';

export const context = createContext(false); // initial state

export const ModalProvider = (props) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [btnContent, setBtnContent] = useState("");
  const [btnClick, setBtnClick] = useState(() => {})

  const showAlert = ({ t, d, tp, bc, bClick }) => {
    setTitle(t);
    setDesc(d);
    setType(tp);
    setBtnContent(bc);

    // set the click handler
    setBtnClick(() => {
      if (bClick) {
        return () => { bClick(); setOpen(false); }
      } else {
        return () => setOpen(false);
      }
    })

    // open modal
    setOpen(true);
  };

  return (
    <context.Provider value={showAlert}>
      {props.children}
      <AppModal
        isOpen={open}
        title={title}
        description={desc}
        type={type}
        btnContent={btnContent}
        onClose={() => setOpen(false)}
        btnClick={btnClick}
      />
    </context.Provider>
  );
};
