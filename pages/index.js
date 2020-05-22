import React, { Component } from "react";
import Layout from "../components/Layout";
import Skill from "../containers/Skill";
import ProjectsPage from "../containers/Projects";



class Index extends Component {



    render() {
        return (
            <div>
                <Layout>
                    <div className="jumbotron jumbotron-fluid bg-header wheat bg-header mt-5">
                        <div className="container">
                            <p className="lead wheat mt-5">Hello, My Name Is</p>
                            <h1 className="display-4 ">Phanat Buaban</h1>   
                        </div>
                    </div>
                    <div>
                        <Skill />
                        <ProjectsPage />
                    </div>
                </Layout>
            </div>
        )
    }
}


export default Index;