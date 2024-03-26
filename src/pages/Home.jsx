import { useLoaderData } from "react-router-dom";
import Books from "../components/Books";
import Hero from "../components/Hero";

const Home = () => {
  const allBooks = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Books items={allBooks}></Books>
    </div>
  );
};

export default Home;
