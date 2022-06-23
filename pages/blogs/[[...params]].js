import { useRouter } from "next/router";

const Blog = () => {
    const router = useRouter();
    const { params } = router.query ;
    console.log(params)
    return ( 
        <div>
            catch all routes of Blogs {JSON.stringify(params)}

        </div>
     );
}
 
export default Blog;