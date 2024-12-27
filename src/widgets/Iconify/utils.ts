import Taro from '@tarojs/taro'

const ICON_CACHE: Record<string, string> = {}

function encodeSvg(svg: string) {
    return svg
        .replace(
            '<svg',
            ~svg.indexOf('xmlns')
                ? '<svg'
                : '<svg xmlns="http://www.w3.org/2000/svg"'
        )
        .replace(/"/g, "'")
        .replace(/%/g, '%25')
        .replace(/#/g, '%23')
        .replace(/{/g, '%7B')
        .replace(/}/g, '%7D')
        .replace(/</g, '%3C')
        .replace(/>/g, '%3E')
}

function getDataUri(data: string) {
    return `url("data:image/svg+xml;utf8,${data}")`
}

function fetchIconifySvg(code: string) {
    return new Promise(resolve => {
        if (!ICON_CACHE[code]) {
            Taro.request({
                url: `https://api.iconify.design/${code}.svg`
            }).then(res => {
                const svg = res.data
                resolve(getDataUri(encodeSvg(svg)))
            })
            return
        }
        resolve(getDataUri(encodeSvg(ICON_CACHE[code])))
    })
}

export { fetchIconifySvg }
