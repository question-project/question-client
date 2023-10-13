import { post } from './ajax'

export async function postAnswer(answerInfo: any) {
    const data = await post('/api/answer', answerInfo)
    return data
}
