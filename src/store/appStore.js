import { create } from "zustand";
import { produce } from "immer";
export const useAppStore = create((set) => {
  return {
    count: 10,
    username: "john",
    show: true,
    student: ["john", "rahul", "sudharshan"],
    actors: [
      { id: "001", name: "Brad Pitt", votes: 24 },
      { id: "002", name: "Jennifer Lawrence", votes: 18 },
      { id: "003", name: "Tom Hanks", votes: 30 },
      { id: "004", name: "Scarlett Johansson", votes: 22 },
      { id: "005", name: "Leonardo DiCaprio", votes: 28 },
    ],
    users: [],
    loading: false,
    error: null,
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
    addStudent: (student) => {
      // set((state) => ({
      //   student: [...state.student, student],
      // }));
      set(
        produce((state) => {
          state.student.push(student);
        })
      );
    },
    voteHandle: (id) => {
      // set((state) => ({
      //   actors: state.actors.map((actor) => {
      //     return id === actor.id ? { ...actor, votes: actor.votes + 1 } : actor;
      //   }),
      // }));
      set(
        produce((state) => {
          let clickedActor = state.actors.find((actor) => actor.id === id);
          if (clickedActor) {
            clickedActor.votes += 1;
          }
        })
      );
    },
    fetchUsers: async () => {
      set(() => ({ loading: true }));
      try {
        let res = await fetch("https://reqres.in/api/users?delay=3");
        let { data } = await res.json();
        set(() => ({ users: data, loading: false }));
      } catch (error) {
        set(() => ({ error: error.message, loading: false }));
      }
    },
  };
});
