import { Component, PropsWithChildren } from 'react'

import { Application } from '@/widgets/ApplicationContext'
import store from '@/store'

import 'uno.css'
import './app.scss'

class App extends Component<PropsWithChildren> {
    componentDidMount() {}

    componentDidShow() {}

    componentDidHide() {}

    // this.props.children 就是要渲染的页面
    render() {
        return <Application store={store}>{this.props.children}</Application>
    }
}

export default App
