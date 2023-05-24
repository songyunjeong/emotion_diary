import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [serchParams, setSerchParams] = useSearchParams();
  console.log(serchParams.get("sort"));

  return <div>Home page</div>;
};

export default Home;
