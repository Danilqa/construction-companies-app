type Function = (...args: unknown[]) => unknown;

export const debounce = <F extends Function>(
    func: F,
    delay: number
): (...args: Parameters<typeof func>) => void => {
    let timeoutId: number | undefined;

    return function (this: ThisType<F>, ...args: Parameters<F>) {
        clearTimeout(timeoutId);

        const context = this;
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
};
