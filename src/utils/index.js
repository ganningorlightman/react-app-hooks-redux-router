export const shuffle = (array) => (
    array
        .map(elementArray => [Math.random(), elementArray])
        .sort()
        .map(elem => elem[1])
);