import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container footer-container">
                <div className="row divide">
                    <div className="col-md-4 mb-4">
                        <h5>About Us</h5>
                        <p>
                            Welcome to Random Movies, your hub for the latest blockbusters, timeless classics, and hidden gems.
                            We are dedicated to delivering a seamless, enjoyable, and personalized movie-watching experience.
                            Explore the magic of cinema with us!
                        </p><br />
                        <p>Contact us for more information on how we can assist you today!</p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5>Quick Links</h5>
                        <section className="d-flex flex-column">
                            <a href="/" className="btn btn-outline-light btn-floating m-1 p-2 mx-5" role="button">
                                <p>Home</p>
                            </a>
                            <a href="/movies" className="btn btn-outline-light btn-floating m-1 p-2 mx-5" role="button">
                                <p>Movies</p>
                            </a>
                            <a href="/tvshows" className="btn btn-outline-light btn-floating m-1 p-2 mx-5" role="button">
                                <p>TV Shows</p>
                            </a>
                        </section>
                    </div>


                    <div className="col-md-4 mb-4">
                        <h5>Follow Us</h5>
                        <section className="d-flex flex-column">
                            <a href="#!" className="btn btn-outline-light btn-floating m-1 p-2 mx-5" role="button">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="#!" className="btn btn-outline-light btn-floating m-1 p-2 mx-5" role="button">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#!" className="btn btn-outline-light btn-floating m-1 p-2 mx-5" role="button">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </section>
                    </div>

                </div>


                <div className="text-center mt-4">
                    <p>&copy; 2024 Random Movies. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
