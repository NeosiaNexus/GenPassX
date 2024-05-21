import React from "react";

import styles from './SelectSize.module.scss';

interface SelectSizeProps {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;

}

export default function SelectSize({onChange}: SelectSizeProps) {

    return (
        <div className={styles.main}>
            <select onChange={onChange}>
                {
                    Array.from({length: 25}, (_, i) => i + 8).map((value) => (
                        <option key={value} value={value}>{value}</option>
                    ))
                }
            </select>
        </div>
    )

}