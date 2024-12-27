import { makeAutoObservable } from 'mobx'

import Taro from '@tarojs/taro'

import site from '@/site'

class TabList {
    get list() {
        return Object.entries(site.pageList).map(([path, metadata]) => {
            // 构造页面数据
            return {
                ...metadata,
                path
            }
        })
    }

    currentIdx = 0

    constructor() {
        makeAutoObservable(this)
    }

    switchTab(idx: number) {
        this.currentIdx = idx
        const redirectTo = this.list[idx]
        Taro.switchTab({
            url: '/' + redirectTo.path
        })
        console.log('redirectTo', redirectTo)
    }
}

export default new TabList()
