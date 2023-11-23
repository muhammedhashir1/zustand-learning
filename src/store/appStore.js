import { create } from "zustand";

export const useAppStore = create((set) => {
  return {
    count: 10,
    username: "john",
    show: true,
    increaseCount: () => {
      set((state) => ({
        count: state.count + 1,
      }));
    },
    decreaseCount: () => {
      set((state) => ({
        count: state.count - 1,
      }));
    },
    increaseCountByValue: (val) => {
      set((state) => ({
        count: state.count + val,
      }));
    },
  };
});
