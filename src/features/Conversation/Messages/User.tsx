import { ReactNode, memo } from 'react'
import { Flexbox } from 'react-layout-kit'

import { LOADING_FLAT } from '@/const/message'
import { ChatMessage } from '@/types/message'

import BubblesLoading from '../components/BubblesLoading'

export const UserMessage = memo<
    ChatMessage & {
        editableContent: ReactNode
    }
>(({ id, editableContent, content }) => {
    if (content === LOADING_FLAT) return <BubblesLoading />

    return (
        <Flexbox gap={8} id={id}>
            {editableContent}
        </Flexbox>
    )
})