import { observer } from 'mobx-react-lite'

import { View, Text } from '@tarojs/components'

import { useStore } from '@/widgets/ApplicationContext'
import { mergeClz } from '@/shared/utils'
import { Iconify } from '@/widgets/Iconify'

const Tabbar = () => {
    const { tabList } = useStore()

    const onNavItemClick = (idx: number) => () => tabList.switchTab(idx)

    const renderTabItem = () => {
        return tabList.list.map((item, idx) => {
            const isActive = tabList.currentIdx === idx
            return (
                <View
                    className={mergeClz(
                        'p-4 flex flex-col items-center justify-center',
                        {
                            'text-amber': isActive
                        }
                    )}
                    onClick={onNavItemClick(idx)}>
                    <Iconify
                        className="mb-2"
                        code={isActive ? item.iconActive : item.icon}
                        size="46rpx"
                    />
                    <Text>{item.title}</Text>
                </View>
            )
        })
    }
    return (
        <View className="flex items-center justify-around">
            {renderTabItem()}
        </View>
    )
}
Tabbar.options = {
    addGlobalClass: true
}

export default observer(Tabbar)
