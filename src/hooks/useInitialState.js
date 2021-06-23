import { useState, useEffect } from "react";

const useInitialState = (API) => {
    const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;