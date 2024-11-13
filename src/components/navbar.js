const Navbar = () => {
    return (
        
            <div className="navbar">
                <p className="brand">Random <span className="theme-color">Movies</span></p>
                <div className="search">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Search..." />
                    <button className="btn btn-primary">GO</button>
                </div>
            </div>
        
    );
}

export default Navbar;