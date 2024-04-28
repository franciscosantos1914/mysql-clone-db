export function serializeList(list) {
    const all = list.all()
    const length = all.length

    const buffer = new ArrayBuffer(1 + 4 + (4 * length))
    const view = new DataView(buffer)

    view.setUint8(0, 'l'.charCodeAt(0))
    view.setUint32(1, length, false)

    for (let index = 0; index < length; index++) {
        view.setUint32(5 + (4 * index), all[index], false)
    }
    return buffer
}