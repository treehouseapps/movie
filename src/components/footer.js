import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container footer-container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5>About Us</h5>
                        <p>
                            We are a company committed to delivering top-notch services to our customers.
                            With a focus on quality, innovation, and customer satisfaction, we strive to exceed expectations and meet the diverse needs of those we serve.
                            Whether you're looking for expert solutions, support, or guidance, we are here to help.
                        </p>
                        <p>Contact us for more information on how we can assist you today!</p>
                    </div>

                    <div className="col-md-3 mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <button type="button" className="btn btn-outline-light p-2 mx-1 m-2 w-100">
                                    Home <span className="badge badge-light"></span>
                                </button>
                            </li>
                            <li>
                                <button type="button" className="btn btn-outline-light p-2 mx-1 m-2 w-100">
                                    Movies <span className="badge badge-light"></span>
                                </button>
                            </li>
                            <li>
                                <button type="button" className="btn btn-outline-light p-2 mx-1 m-2 w-100">
                                    Series <span className="badge badge-light"></span>
                                </button>
                            </li>
                            <li>
                                <button type="button" className="btn btn-outline-light p-2 mx-1 m-2 w-100">
                                    Contact <span className="badge badge-light"></span>
                                </button>
                            </li>
                        </ul>
                    </div>


                    <div className="col-md-3 mb-4">
                        <h5>Follow Us</h5>
                        <section className="d-flex flex-column">
                            <a href="#!" className="btn btn-outline-light btn-floating m-1 p-2 mx-5" role="button">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#!" className="btn btn-outline-light btn-floating m-1 p-2 mx-5" role="button">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#!" className="btn btn-outline-light btn-floating m-1 p-2 mx-5" role="button">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#!" className="btn btn-outline-light btn-floating m-1 p-2 mx-5" role="button">
                                <i className="fab fa-github"></i>
                            </a>
                        </section>
                    </div>

                </div>


                <div className="text-center mt-4">
                    <p>&copy; 2024 Your Company. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
