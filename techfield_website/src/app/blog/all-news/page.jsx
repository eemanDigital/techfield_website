import AllNews from "@/app/component/allPosts";
import { getAllPosts } from "@/lib/allPost";

const blogPosts = getAllPosts();

console.log(blogPosts);

const AllNewsPage = () => {
  return (
    <>
      <AllNews blogPosts={blogPosts} />
    </>
  );
};

export default AllNewsPage;
