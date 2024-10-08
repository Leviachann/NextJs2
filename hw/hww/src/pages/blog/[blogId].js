import { useRouter } from "next/router";

const BlogDetails = () => {
    const router = useRouter();
    return (
      <div>
        <h1>BlogDetails- {router.query.blogId}</h1>
      </div>
    );
  }
  
  export default BlogDetails;
  