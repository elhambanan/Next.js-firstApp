import Link from "next/link";

const PostList = () => {
    return ( 
        <div>
            <h1>This is blog post list !</h1>
            <ul>
                <li>
                    <Link href="/posts/1">
                    <a>Post  1-10</a>
                    </Link>
                </li>
                <li>
                    <Link href="/posts/10">
                    <a>Post  11-20</a>
                    </Link>
                </li>
                <li>
                    <Link href="/posts/20" replace>
                    <a>Post  21-30</a>
                    </Link>
                </li>
            </ul>
            <Link href="/">
                <a>back to Home Page !</a>
            </Link>
        </div>
     );
}
 
export default PostList;