import SlideList from "./SlideList";
import useFetch from "../Hooks/useFetch";

const FullPageScroll = () => {
  let {
    data: slider,
    isPending,
    error,
  } = useFetch("http://localhost:8000/slider");

  return (
    <div className="container fullp">
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">Loading</div>}
      {slider && <SlideList slider={slider} />}
    </div>
  );
};

export default FullPageScroll;
