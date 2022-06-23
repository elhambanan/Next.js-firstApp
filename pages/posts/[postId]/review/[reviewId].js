import { useRouter } from "next/router";

const Review = () => {
    const router = useRouter();
    const { reviewId, postId} = router.query; 
    return ( 
        <h1>
            Review {reviewId} for Post {postId}
        </h1>
     );
}
 
export default Review;