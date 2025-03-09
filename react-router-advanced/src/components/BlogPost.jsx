import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Access the dynamic `id` parameter
  return <h2>Blog Post ID: {id}</h2>;
};

export default BlogPost;
