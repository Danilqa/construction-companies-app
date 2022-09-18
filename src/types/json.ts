export type JsonData =
    | string
    | number
    | boolean
    | { [x: string]: JsonData }
    | Array<JsonData>;
