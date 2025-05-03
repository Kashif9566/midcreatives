import React, { ReactNode, CSSProperties, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface PortalModalProps {
  children: ReactNode;
  style?: CSSProperties;
  onMouseLeave?: () => void;
  onMouseEnter?: () => void;
}

const modalRootId = 'portal-modal-root';

export default function PortalModal({ children, style, onMouseLeave, onMouseEnter }: PortalModalProps) {
  const elRef = useRef<HTMLDivElement | null>(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    let modalRoot = document.getElementById(modalRootId);
    if (!modalRoot) {
      modalRoot = document.createElement('div');
      modalRoot.id = modalRootId;
      document.body.appendChild(modalRoot);
    }
    modalRoot.appendChild(elRef.current!);
    return () => {
      if (elRef.current && modalRoot) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  return ReactDOM.createPortal(
    <div style={style} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
      {children}
    </div>,
    elRef.current
  );
} 