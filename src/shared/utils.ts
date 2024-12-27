function mergeClz(
    ...args: Array<
        string | undefined | null | boolean | { [key: string]: boolean }
    >
): string {
    return args
        .flatMap(arg => {
            if (typeof arg === 'string') {
                return arg
            } else if (typeof arg === 'object' && arg !== null) {
                return Object.entries(arg)
                    .filter(([_, value]) => value)
                    .map(([key, _]) => key)
            }
            return []
        })
        .filter(Boolean)
        .join(' ')
}

function stringToArrayBuffer(content: string): ArrayBuffer {
    const encoder = new TextEncoder()
    return encoder.encode(content).buffer
}

export { mergeClz, stringToArrayBuffer }
