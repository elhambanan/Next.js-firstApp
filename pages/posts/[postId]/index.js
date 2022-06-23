import { useRouter } from "next/router"

const Post = () => {
    const router = useRouter();
    console.log(router.query)

    return ( 
        <>
          Post Page  -  {router.query.postId}
        </>
     );
}
 
export default Post;