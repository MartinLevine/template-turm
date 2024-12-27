import site from '@/site'

export default defineAppConfig({
    pages: Object.keys(site.pageList),
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    tabBar: {
        custom: true,
        list: Object.keys(site.pageList).map(path => ({
            pagePath: path,
            text: site.pageList[path].title
        }))
    }
})
