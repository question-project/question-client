import React, { FC } from 'react'
import styles from './index.module.scss'

interface QuestionTextareaProps {
    fe_id: string
    props: {
        title: string
        placeholder?: string
    }
}

const QuestionTextarea: FC<QuestionTextareaProps> = ({ fe_id, props }: QuestionTextareaProps) => {
    const { title, placeholder = '' } = props
    return (
        <>
            <p>{title}</p>
            <div className={styles.textareaWrapper}>
                <textarea name={fe_id} placeholder={placeholder} rows={5} />
            </div>
        </>
    )
}
export default QuestionTextarea
