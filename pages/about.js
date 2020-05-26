import React from "react";
import Layout from "../components/Layout";
import Resume from "../containers/Resume";



const About = () => {
    return (
        <Layout title="Profile">
            <div className=" jumbotron jumbotron-fluid bg-header wheat bg-header mt-5">
                <div className="container">
                    <h1 className="display-4 ">My Profile</h1>
                </div>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-md-4 my-5 ">
                        <img src="/static/images/profile/20645820_1885924418090692_486441601_n.jpg" className="card-img " alt="profile " style={{ width: "15rem" }} />
                    </div>
                    <div className="col-md-8">
                        <div className="...">
                            <h2 className="card-title my-3 text-uppercase">My Profile</h2>
                            <p className="card-text title ">ชื่อ: นายพนัส บัวบาล <br /> Name: Mr. Phanat Buaban</p>
                            <p className="card-text title ">ชื่อเล่น: ภีม <br /> Nickname: Peem </p>
                            <p className="card-text title ">อายุ: 27  ปี <br /> Age: 27 years old </p>
                            <p className="card-text title ">เกิดวันที่ : 11 มีนาคม พ.ศ 2536 <br /> Date of birth: March 11, 1993 </p>
                            <p className="card-text title " >ที่อยู่ตามสำเนาทะเบียนบ้าน :  บ้านเลขที่ 65 หมู่ 6 ตำบลหนองบ่อ อำเภอเมือง จังหวัดอุบลราชธานี 34000 <br /> Address, according to the house registration copy: House No. 65, Moo 6, Nong Bo Subdistrict, Mueang District, Ubon Ratchathani Province 34000  </p>
                            <br></br>
                        </div>
                        <div>
                            <a href="\static\Download\Resume.pdf" class="btn btn-info btn-rounded waves-effect waves-light" download>Download Resume
                              <i class="fas fa-download ml-2 d-none d-xl-inline-block"></i>
                            </a>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="jumbotron jumbotron-fluid mt-5 bg-header">
                <Resume />
            </div>
        </Layout>
    )
}

export default About;

