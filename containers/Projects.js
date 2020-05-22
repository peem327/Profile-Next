import React from "react";


const ProjectsPage = () => {
  return (
    <div className="container ">
      <div className="container text-center mb-5" >
        <h1>
          MY PROJECTS
        </h1>
        <br></br>
        <p>
          นี่คืองานที่ผมได้ลองสรา้งเว็บโดยใช้ Bootstrap ที่เป็น Frontend Framework ที่รวม HTML, CSS และ JS เข้าด้วยกันสำหรับพัฒนา Web ที่รองรับทุก Smart Device หรือ เรียกว่า Responsive Web
          และ React ที่เป็น JavaScript Library รวมถึง next.js เพื่อช่วยให้เว็บที่เราเขียนด้วย React ที่เป็น Single page application (SPA) ถูก Render ตั้งแต่ฝั่ง Server เมื่อ User เปิดใช้งานในครั้งแรก
          เพื่อให้เหมาะสมกับการทำ SEO  ครับ
        </p>
        <br></br>
      </div>
      <div className="row">
        <div className="col-md-4 my-3">
          <div className="" style={{ width: "22rem" }}>
            <img src="\static\images\demo\Responsive Design.png" className="card-img-top" alt="..." />
          <div className = "my-2">
            <h5 className="card-title">Responsive Design</h5>
            <p className="card-text">นี่คือ workshop แรกที่ผมทำตั้งแต่เริ่มเรียนรู้การสร้างเว็บไซต์ ผมได้ใช้ Bootstrap ในการทำครับ</p>
            <a href="https://github.com/peem327/Responsive-Design.git" className="btn btn-outline-dark title">Source Code</a>
            </div>
          </div>
          <hr/>
        </div>
        <div className="col-md-4 my-3">
          <div className="" style={{ width: "22rem" }}>
            <img src="\static\images\demo\E-commerce.png" className="card-img-top" alt="..." />
          <div className = "my-2">
            <h5 className="card-title">E-commerce</h5>
            <p className="card-text">workshop นี้เป็นการทดลองทำเว็บไซ์ e-commerce ที่สามารถกดสั่งซื้อ คำนวณราคา เพิ่มสินค้าหรือลบสินค้าได้ โดยใช้ React ในการทำครับ</p>
            <a href="https://github.com/peem327/E-commerce.git" className="btn btn-outline-dark title">Source Code</a>
            </div>
          </div>
          <hr/>
        </div>
        <div className="col-md-4 my-3">
          <div className="" style={{ width: "25rem" }}>
            <img src="\static\images\demo\Web Content.png" className="card-img-top" alt="..." />
          <div className = "my-2">
            <h5 className="card-title">Web Content</h5>
            <p className="card-text">ในส่วน workshop นี้ผมได้ทำเว็บ Web Content โดยใช้ React ร่วมกับ next เพื่อให้เหมาะสมกับการทำ SEO</p>
            <a href="https://github.com/peem327/Web-Content.git" className="btn btn-outline-dark title">Source Code</a>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
