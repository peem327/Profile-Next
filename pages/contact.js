import React from 'react';
import Layout from "../components/Layout";
import Form from "../containers/Form";



const Contact = () => {
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
                            <div className="col-6 text-center mt-5 ">
                                <Form />
                            </div>
                        </div>
                    </div>
                </Layout>
        );
}

export default Contact;


