export type JsonData =
    | string
    | number
    | boolean
    | { [property: string]: JsonData }
    | Array<JsonData>;
