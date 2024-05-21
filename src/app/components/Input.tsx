import {IoReload} from "react-icons/io5";

import {PiCopySimpleBold} from "react-icons/pi";

import styles from './Input.module.scss';

interface InputProps {
    value?: string;
    handleReload?: () => void;
    handleCopy?: () => void;
    disabled?: boolean;
}

export default function Input({value = "", disabled = false, handleReload, handleCopy}: InputProps) {
    return (
        <div className={styles.main}>
            <input
                type={"text"}
                onChange={() => {
                }}
                value={value}
                readOnly={true}
            />
            <div className={styles.icons}>
                {
                    !disabled && (
                        <button className={styles.icon} onClick={handleReload} disabled={disabled}>
                            <IoReload/>
                        </button>
                    )
                }
                {
                    value && (
                        <button className={styles.icon} onClick={handleCopy} disabled={disabled}>
                            <PiCopySimpleBold/>
                        </button>
                    )
                }
            </div>
        </div>
    )
}