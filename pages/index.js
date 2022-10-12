import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Link from 'next/link'
import Recipe from "./Details/recipe";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
	  <h1>Homepage</h1>
	  <p>SDASDASDASFSDFS</p>
	  <Link href="/recipe"><a>See full recipe</a></Link>
	  <Footer></Footer>
    </div>
  );
}
