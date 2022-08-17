import React, { FC, ReactNode } from 'react'

import './styles.css'

interface ModalContainerProps {
    handleClose: () => void;
    children: ReactNode;
    isResult: boolean | null;
    textSuccess: string;
    title: string;
}

export const ModalContainer: FC<ModalContainerProps> = ({
    handleClose,
    children,
    isResult,
    textSuccess,
    title
}) => (
        <div className="container-modal">
            <button 
                onClick={handleClose}
                className="close-icon"
            >
                <i>X</i>
            </button>

            <span className="title">{title}</span>

            {children}

            {isResult !== null && (
                <span
                    className={isResult ? 'success' : 'error'}
                >{isResult ? textSuccess : 'Error'}</span>
            )}
    </div>
)
