import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import apiCall from "../../services/index";
import appUtils from "../../services/appUtils";
import { HomepageContainer } from "./Home.styled";

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBanners = async () => {
      setLoading(true);
      try {
        const response = await apiCall(appUtils.api.getBanners);
        if (!response) {
          throw new Error("No response from server");
        }
        setBanners(response.data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setLoading(false);
    };

    fetchBanners();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (!isLoading && !error && banners?.length === 0) {
    return <h2>No records available</h2>;
  }

  return (
    <HomepageContainer>
      {banners?.length > 0 && <Carousel banners={banners} />}
    </HomepageContainer>
  );
};

export default React.memo(Home);
