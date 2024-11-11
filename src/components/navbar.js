const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                    <i className="bi bi-view-stacked"></i>
                    <div className="search">
                        <i className="bi bi-search"></i>
                        <input type="text" placeholder="search..." />
                        <button className="btn btn-primary">GO</button>
                    </div>
            </div>
        </div>
    );
}

export default Navbar;