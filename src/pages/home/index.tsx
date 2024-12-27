import React from 'react'
import { observer } from 'mobx-react-lite'

import { Button, Text, View } from '@tarojs/components'

import { useStore } from '@/widgets/ApplicationContext'

const Home: React.FC = () => {
    const { counter } = useStore()

    const handleBtnDecClick = () => counter.decrement()

    const handleBtnIncClick = () => counter.increment()

    return (
        <View className="grid place-content-center">
            <View>
                <Text>emmm</Text>
                <View className="flex justify-center items-center mt-4">
                    <Button onClick={handleBtnDecClick}>-</Button>
                    <Text>Current number is {counter.number}.</Text>
                    <Button onClick={handleBtnIncClick}>+</Button>
                </View>
            </View>
        </View>
    )
}

export default observer(Home)
