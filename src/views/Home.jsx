import { useEffect, useState } from "react";
import Pcard from "../components/PackageCard";
import { fetchpackages } from "../APIs/PackageApi";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [pack, setpack] = useState([]);
  const [error, setError] = useState(null);

  const loadPackages = async () => {
    try {
      const Pdata = await fetchpackages();
      setpack(Pdata);
    } catch (error) {
      setError("Failed to Fetch Any Data");
      console.error(error);
    }
  };

  useEffect(() => {
    loadPackages();
  }, []);

  return (
    <div className="flex-col h-screen bg-[#edf3f7] justify-items-center">
      <h1 className="font-['Pacifico'] text-3xl">Travel packages</h1>
      <SearchBar onResults={setpack} onClear={loadPackages} />
      <div className="w-[97%] grid grid-cols-2 grid-rows-2 gap-2">
        {pack.length > 0 ? (
          pack.map((item) => <Pcard key={item.id} data={item} />)
        ) : (
          <p>No Data available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
