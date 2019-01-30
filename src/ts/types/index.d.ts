declare module "*.svg" {
    const content: string
    export default content
}

declare module '*.png'

interface Classes {
    preview?: string
}

interface Upload {
    imgPath: string
    max: number
    LinkToImgPath: string
}

interface MenuItem {
    name: string
    icon?: string
    tip?: string
    hotkey?: string
    suffix?: string
    prefix?: string
    tail?: string
}

interface Options {
    height?: number | string
    width?: number | string
    theme?: string
    placeholder?: string
    lang?: string
    draggable?: boolean
    previewShow?: boolean
    counter?: number
    upload?: Upload
    classes?: Classes
    staticServePath?: string
    atUserCallback?: object | string
    commonEmoji?: any
    toolbar?: Array<string | MenuItem>
    input?: InputFunction
    focus?: { (value: string): void }
    blur?: { (value: string): void }
    esc?: { (value: string): void }
    ctrlEnter?: { (value: string): void }
    select?: { (value: string): void }
}

interface InputFunction {
    (value: string, previewElement?: HTMLElement): void
}

interface Vditor {
    id: string
    options: Options
    timeId: number
    toolbar?: any
    markdown?: any
    editor?: any
    counter?: any
    drag?: any
}

declare function captureEvents(name: string): void