import { create } from "zustand";
import { persist } from "zustand/middleware";

const counterStore = create(
    persist(
        (set) => ({
            count: 10,
            title: "Counter",
            posts: [],
            increment: (value) =>
                set((state) => ({ count: state.count + value })),
            decrement: () => set((state) => ({ count: state.count - 1 })),
            reset: () => set({ count: 0 }),
            setTitle: (title) => set({ title }),
            getPosts: async () => {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                const posts = await response.json();
                set({ posts });
            },
        }),
        {
            name: "counter-storage",
        }
    )
);

export { counterStore };
