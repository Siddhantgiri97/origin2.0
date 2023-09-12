import React from 'react'
import styles from '@/styles/Detail.module.css'

const Loader = () => {
    return (
        <>
            <div className={styles.loader}>
                <div class={styles.boxes}>
                    <div class={styles.box}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class={styles.box}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class={styles.box}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class={styles.box}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader