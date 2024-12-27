import { useEffect, useState } from 'react'

import { View } from '@tarojs/components'

import { mergeClz } from '@/shared/utils'
import { fetchIconifySvg } from './utils'

import './index.scss'

interface IconifyProps {
    code: string
    color?: string
    size?: string
    className?: string
}

const Iconify: React.FC<IconifyProps> = ({ code, color, size, className }) => {
    const [icon, setIcon] = useState('')

    useEffect(() => {
        if (code) {
            fetchIconifySvg(code).then(setIcon)
        }
    }, [code])

    return (
        <View
            className={mergeClz('icon', className)}
            style={{
                color,
                height: size,
                width: size,
                ['--un-icon' as any]: icon
            }}
        />
    )
}

export { Iconify }
