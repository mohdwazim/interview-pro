const NavBar = (prop) => {
  return (
    <div className="text-center">
      <div className="row mt-4">
        <div className="col-6 col-md-4 col-sm-6">
          <a
            className={`top-logo ${prop.logocolor}`}
            href="https://waseem.bio/"
          >
            Logo
          </a>
        </div>
        <div className="col-6 col-md-4 col-sm-6 ms-auto">
          {prop.discover && (
            <a className="disc-btn" href="https://waseem.bio/">
              Discover More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
