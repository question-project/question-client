import React, { FC } from 'react'

interface QuestionInfoProps {
    title: string
    desc?: string
}

const QuestionInfo: FC<QuestionInfoProps> = (props: QuestionInfoProps) => {
    const { title, desc } = props
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default QuestionInfo
