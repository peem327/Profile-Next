import React from 'react';
import Layout from "../components/Layout";
import Form from "../containers/Form";



const Contact = ()=>{

        return (

                <Layout title="Contact">
                    <div className=" jumbotron jumbotron-fluid bg-header wheat bg-header mt-5">
                        <div className="container">
                            <h1 className="display-4 ">Contact me</h1>
                            <br></br>
                            <h5>Anytime you want</h5>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6-sm text-center mt-5 ">
                                <Form />
                            </div>
                            <div className="col-6-sm text-center mt-5 text-center">
                                <div className = "my">
                                <ul className="list-group list-group-flush shadow-sm p-3 mb-5 bg-white rounded">
                                    <li className="list-group-item">
                                        <h2>Contact information</h2>
                                    </li>
                                    <li className="list-group-item title">
                                        <img src="/static/Icons/icons8-user-location-90.png" alt="" width="35" height="35" title="..." /><br></br>
                                        <p>Nonthaburi Province</p>
                                    </li>
                                    <li className="list-group-item title">
                                        <img src="/static/Icons/icons8-call-90.png" alt="" width="35" height="35" title="..." /><br></br>
                                        <p>099-0129636</p>
                                    </li>
                                    <li className="list-group-item title">
                                        <img src="/static/Icons/icons8-important-mail-90.png" alt="" width="35" height="35" title="..." /><br></br>
                                        <p>phanat.buaban27@gmail.com</p>
                                    </li>
                                    <div className="row my-3">
                                        <div className="col">
                                            <a href="https://web.facebook.com/peem27">
                                                <img src="/static/Icons/logo-facebook.svg" alt="" width="35" height="35" title="..." />
                                            </a>
                                        </div>
                                        <hr/>
                                        <div className="col">
                                            <a href="https://line.me/ti/p/_F2Vdy5C4k title">
                                                <img src="/static/Icons/icons8-line.svg" alt="" width="35" height="35" title="..." />
                                            </a>
                                        </div>
                                        <hr/>
                                        <div className="col">
                                            <a href="https://web.facebook.com/peem27">
                                                <img src="/static/Icons/icons8-twitter.svg" alt="" width="35" height="35" title="..." />
                                            </a>
                                        </div>
                                        <hr/>
                                    </div>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
 
        );
}

export default Contact;


