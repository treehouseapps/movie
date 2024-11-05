const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="align">
                    <i className="bi bi-view-stacked"></i>
                    <div className="search">
                        <i className="bi bi-search"></i>
                        <input type="text" placeholder="search..." />
                        <button className="btn btn-primary">GO</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;