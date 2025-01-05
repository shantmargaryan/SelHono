import { create } from "zustand"

export const useRenges = create((set) => ({
    values: [65],
    setValues: (value) => set({ values: value }),
    secondValues: [95],
    setSecondValues: (secondValue) => set({ secondValues: secondValue }),
    thirdValues: [75],
    setThirdValues: (thirdValue) => set({ thirdValues: thirdValue }),
}));