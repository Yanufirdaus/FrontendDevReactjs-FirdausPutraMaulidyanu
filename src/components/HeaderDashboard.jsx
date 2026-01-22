const HeaderDashboard = () => {
  return (
    <nav className="navbar has-background-white" role="navigation" aria-label="main navigation">
        <div className="navbar-brand hero is-fullwidth">
            <div className="navbar-item ml-5">
                <div className="is-flex is-flex-direction-column">
                    <span className="has-text-weight-semibold is-size-2 is-size-5-mobile has-text-dark">
                        Restaurants
                    </span>
                     <div className="columns is-mobile">
                        <div className="column is-9-desktop is-12-mobile ml-1">
                            <span className="is-size-5 is-size-7-mobile has-text-grey">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default HeaderDashboard;