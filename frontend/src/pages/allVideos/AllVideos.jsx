import SearchInput from "./components/searchInput/SearchInput";
import Header from "../../componets/header/header";
import style from "./style.module.scss";
import BlockWithAllVideos from "./components/blockWithAllVideos/BlockWithAllVideos";
import SettingsBlock from "./components/settingsBlock/SettingsBlock";
import Footer from "../../componets/footer/Footer";
import { useEffect, useState, useCallback } from "react";
import { API_URL } from "../../constants";
import Loading from "../../componets/loading/Loading";
import NotFoundBlock from "../../componets/notFoundBlock/NotFoundBlock";

function AllVideos() {
  const [videoList, setVideoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchRequest, setSearchRequest] = useState("");
  const [filterRequerst, setFilterRequest] = useState([]);
  const [sortRequest, setSortRequest] = useState("");
  const [error, setError] = useState(false);

  const fetchAllVideos = useCallback(async (page = 1) => {
    setIsLoading(true);
    setError(false);

    const getFilterString = (filterRequerst) => {
      if (!filterRequerst.length) return "";
      return filterRequerst.length === 1
        ? filterRequerst[0]
        : filterRequerst.join("||");
    };

    const filter = getFilterString(filterRequerst);
    const sort = sortRequest[0];

    const request = `${API_URL}?title=${searchRequest}&limit=12&page=${page}&type=${filter}&sortBy=${sort}`;

    try {
      const response = await fetch(request);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setVideoList((prev) => {
        const existingIds = new Set(prev.map((video) => video.id));
        const newVideos = data.filter((video) => !existingIds.has(video.id));
        return [...prev, ...newVideos];
      });
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    fetchAllVideos();
  }, [searchRequest, filterRequerst, sortRequest]);

  useEffect(() => {
    setVideoList([]);
    fetchAllVideos();
  }, [filterRequerst, searchRequest, sortRequest]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      const nextPage = Math.ceil(videoList.length / 12) + 1;
      fetchAllVideos(nextPage);
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [videoList]);

  return (
    <main>
      <Header />
      <section className={style.all__video}>
        <SearchInput setSearchRequest={setSearchRequest} />
        {error ? (
          <NotFoundBlock />
        ) : (
          <BlockWithAllVideos videoList={videoList} />
        )}
        <SettingsBlock
          setFilterRequest={setFilterRequest}
          setSortRequest={setSortRequest}
        />
      </section>
      <Loading isLoading={isLoading} />
      <Footer />
    </main>
  );
}

export default AllVideos;
