import { ReactNode } from 'react';
import './Popup.css';
import { createPortal } from 'react-dom';

type Prop = {
  isOpen: boolean;
  positionTo?: HTMLElement | null;
  onClose?: () => void;
  children: ReactNode;
  opacity?: number;
};

export function Popup({
  isOpen,
  positionTo,
  onClose,
  children,
  opacity = 0.5,
}: Prop) {
  if (!isOpen) return null;

  const rect = positionTo?.getBoundingClientRect();
  const top = rect ? rect.top + rect.height : '50%';
  const left = rect ? rect.left + rect.width / 2 : '50%';

  return createPortal(
    <>
      <div
        className="backdrop"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: `rgba(0, 0, 0, ${opacity})`,
          zIndex: 999,
        }}
        onClick={onClose}
      />
      <div className="menu-wrapper" style={{ position: 'absolute', top, left }}>
        {children}
      </div>
    </>,
    document.body
  );
}
