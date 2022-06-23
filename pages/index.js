import Link from 'next/link';
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/blogs")
  }

  return ( 
    <div>
      <h1>This is Home Page !</h1>
      <Link href="/posts">
        <a>go to posts page ...</a>
      </Link>
      <br/>
      <button onClick={clickHandler}>push to blogs ...</button>
    </div>
   );
}
 
export default HomePage;

// Routing : 
// ? React.js => RRD => component => <Route element = {<HomePage>}
// * Next.js  => pages => files or folder
// 1. Routes with pages :
// 2. nested pages : domain.ir/about , ...
// 3. dynamic pages : post/1, post/2 , ...
// 3*. dynamic nested route : post/6/review/8 , ...
// 4. catch-all-routes 
