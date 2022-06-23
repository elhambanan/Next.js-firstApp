import Link from "next/link";

const NotFound = () => {
    return ( 
        <div>
            <h1>this is not found</h1>
            <Link href="/">
                <a>go to home page ?</a>
            </Link>
        </div>
     );
}
 
export default NotFound;