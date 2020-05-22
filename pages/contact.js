import React from 'react';
import Layout from "../components/Layout";
import Form from "../containers/Form";



const Contact = () => {
    return (
        <Layout title="Contact">
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 text-center mt-5 ">
                            <Form />
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;


