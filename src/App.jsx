import { useEffect } from "react";
import { counterStore } from "./store/counterStore";

const App = () => {
    const { count, title, posts } = counterStore((state) => ({
        count: state.count,
        title: state.title,
        posts: state.posts,
    }));

    const { increment, setTitle, getPosts } = counterStore();

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <h1>
                {title}: {count}
            </h1>
            <button onClick={() => increment(2)}>+</button>
            <input onChange={(e) => setTitle(e.target.value)} type="text" />

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
};

export default App;
