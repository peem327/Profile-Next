import React from "react";

const Footer = (props) => {
  const { company, email } = props;

  return (
    <div>
      <div className="container-fluid">
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center col-md-10 ">
            <ul className=" text-center">
              <li className="list-inline-item">
                <a href="https://web.facebook.com/peem27">
                  <img
                    src="/static/Icons/logo-facebook.svg"
                    alt=""
                    width="35"
                    height="35"
                    title="..."
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/peem327/CV-next.git">
                  <img
                    src="/static/Icons/logo-github.svg"
                    alt=""
                    width="35"
                    height="35"
                    title="..."
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://line.me/ti/p/_F2Vdy5C4k">
                  <img
                    src="/static/Icons/icons8-line.svg"
                    alt=""
                    width="35"
                    height="35"
                    title="..."
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center ">
          <span className="text-danger"> Powered By {company}</span>|{" "}
          <span className="text-muted">Contact By Email: {email}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
