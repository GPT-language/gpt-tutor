import { TextAreaRef } from 'antd/es/input/TextArea'
import { useCallback, useRef, useState } from 'react'

import { useChatStore } from '@/store/chat'

import { useSendMessage } from './useSend'

export const useChatInput = () => {
    const ref = useRef<TextAreaRef>(null)
    const [expand, setExpand] = useState<boolean>(false)
    const onSend = useSendMessage()

    const [loading, value, onInput, onStop] = useChatStore((s) => [
        !!s.chatLoadingId,
        s.inputMessage,
        s.updateInputMessage,
        s.stopGenerateMessage,
    ])

    const handleSend = useCallback(() => {
        setExpand(false)

        onSend()
    }, [onSend])

    return {
        expand,
        loading,
        onInput,
        onSend: handleSend,
        onStop,
        ref,
        setExpand,
        value,
    }
}
