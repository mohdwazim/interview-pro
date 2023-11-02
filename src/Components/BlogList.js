import useFetch from "../Hooks/useFetch";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BlogList = (name) => {
  let {
    data: blogs,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/${name.name}`);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bloglist-main">
      {error && <div className="error">{error}</div>}
      {isPending && <div className="loading">Loading</div>}
      {blogs && (
        <div className="slidercont">
          <div className="myClzz">
            <Carousel
              responsive={responsive}
              infinite={true}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {blogs.map((blog, i) => (
                <div className="blog-item" key={blog.id}>
                  <h3 className="blog-title h5">{`${blog.title} #${i + 1}`}</h3>
                  <p className="blog-body">{blog.body}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;
