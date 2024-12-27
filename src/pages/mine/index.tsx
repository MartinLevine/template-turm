import React from 'react'
import { observer } from 'mobx-react-lite'

import { Text, View } from '@tarojs/components'

const Mine: React.FC = () => {
    return (
        <View className="grid place-content-center">
            <View>
                <Text>This is mine page.</Text>
            </View>
        </View>
    )
}

export default observer(Mine)
