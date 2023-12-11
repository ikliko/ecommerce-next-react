export const rnd = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)
export const toss = () => rnd(1, 100) >= 50