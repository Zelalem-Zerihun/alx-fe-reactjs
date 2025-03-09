// src/components/PostsComponent.jsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 60000, // Cache data for 60 seconds
    cacheTime: 300000, // Keep cache for 5 minutes
    refetchOnWindowFocus: false, // Prevent refetching when window gains focus
    keepPreviousData: true, // Keep previous data while fetching new
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refresh Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
