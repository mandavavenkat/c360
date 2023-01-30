import style from "./ServiceList.module.scss";
import SalesforceLogo from "../../Assets/SalesforceLogo.png";
import AILogo from "../../Assets/AILogo'.png";
import BlockchainLogo from "../../Assets/BlockchainLogo.png";
import DevopsLogo from "../../Assets/DevopsLogo.png";
import ServiceNow from "../../Assets/ServiceNow.png";
import ApplicationDevelopmentIcon from "../../Assets/ApplicationDevelopmentIcon.png";
import cloud from "../../Assets/cloud.png";
import web3 from "../../Assets/web3.png";
import ETLIcon from "../../Assets/ETLIcon.png";

const ServiceList = () => {
  return (
    <div>
      <div className={style.Services}>
        <div
          className={`d-flex flex-row justify-content-center ${style.services_heading}`}
        >
          <h1>Services</h1>
        </div>

        <div className={` justify-content-center  ${style.servicesBlock}`}>
          <div className={`col-md-4 col-sm-12  ${style.services_salesForce}`}>
            <div className={`${style.services_hoverel}`}></div>
            <div className={`${style.services_test_block}`}>
              <div className={`${style.services_salesForce_imgtext}`}>
                <img src={SalesforceLogo} />
              </div>
              <div className={`${style.services_salesForce_content_parent}`}>
              <div className={`${style.services_salesForce_content}`}>
                <p>Salesforce</p>
                <span className={`${style.services_salesForce_hoverText}`}>
                  Lorem ipsum dolor sit amet,consectetur. Pellentesque nec
                  tempor tortor.
                </span>
              </div>
              </div>
            </div>
          </div>
          <div className={`col-md-4 col-sm-12  ${style.services_salesForce}`}>
            <div className={`${style.services_hoverel}`}></div>
            <div className={`${style.services_test_block}`}>
              <div className={`${style.services_salesForce_imgtext}`}>
                <img src={BlockchainLogo} />
              </div>
              <div className={`${style.services_salesForce_content_parent}`}>
              <div className={`${style.services_salesForce_content}`}>
                <p>Blockchain</p>
                <span className={`${style.services_salesForce_hoverText}`}>
                  Lorem ipsum dolor sit amet,consectetur. Pellentesque nec
                  tempor tortor.
                </span>
              </div>
              </div>
            </div>
          </div>
          <div className={`col-md-4 col-sm-12  ${style.services_salesForce}`}>
            <div className={`${style.services_hoverel}`}></div>
            <div className={`${style.services_test_block}`}>
              <div className={`${style.services_salesForce_imgtext}`}>
                <img src={ServiceNow} />
              </div>
              <div className={`${style.services_salesForce_content_parent}`}>
              <div className={`${style.services_salesForce_content}`}>
                <p>Servicenow</p>
                <span className={`${style.services_salesForce_hoverText}`}>
                  Lorem ipsum dolor sit amet,consectetur. Pellentesque nec
                  tempor tortor.
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className={` justify-content-center  ${style.servicesBlock}`}>
          <div className={`col-md-4 col-sm-12  ${style.services_salesForce}`}>
            <div className={`${style.services_hoverel}`}></div>
            <div className={`${style.services_test_block}`}>
              <div className={`${style.services_salesForce_imgtext}`}>
                <img src={ApplicationDevelopmentIcon} />
              </div>
              <div className={`${style.services_test_blockApp}`}>
              <div className={`${style.services_salesForce_contentApp}`}>
                <p>Application<br></br>
                 Development
                </p>
               
                <span className={`${style.services_salesForce_hoverText}`}>
                  Lorem ipsum dolor sit amet,consectetur.Pellentesque nec tempor tortor.
                </span>
              </div>
              </div>
            </div>
          </div>
          <div className={`col-md-4 col-sm-12  ${style.services_salesForce}`}>
            <div className={`${style.services_hoverel}`}></div>
            <div className={`${style.services_test_block}`}>
              <div className={`${style.services_salesForce_imgtext}`}>
                <img src={DevopsLogo} />
              </div>
              <div className={`${style.services_salesForce_content_parent}`}>
              <div className={`${style.services_salesForce_content}`}>
                <p>Devops</p>
                <span className={`${style.services_salesForce_hoverText}`}>
                  Lorem ipsum dolor sit amet,consectetur. Pellentesque nec
                  tempor tortor.
                </span>
              </div>
              </div>
            </div>
          </div>
          <div className={`col-md-4 col-sm-12  ${style.services_salesForce}`}>
            <div className={`${style.services_hoverel}`}></div>
            <div className={`${style.services_test_block}`}>
              <div className={`${style.services_salesForce_imgtext}`}>
                <img src={cloud} />
              </div>
              <div className={`${style.services_salesForce_content_parent}`}>
              <div className={`${style.services_salesForce_content}`}>
                <p>Cloud</p>
                <span className={`${style.services_salesForce_hoverText}`}>
                  Lorem ipsum dolor sit amet,consectetur. Pellentesque nec
                  tempor tortor.
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className={` justify-content-center  ${style.servicesBlock}`}>
          <div className={`col-md-4 col-sm-12  ${style.services_salesForce}`}>
            <div className={`${style.services_hoverel}`}></div>
            <div className={`${style.services_test_block}`}>
              <div className={`${style.services_salesForce_imgtext}`}>
                <img src={web3} />
              </div>
              <div className={`${style.services_salesForce_content_parent}`}>
              <div className={`${style.services_salesForce_content}`}>
                <p>Web 3</p>
                <span className={`${style.services_salesForce_hoverText}`}>
                  Lorem ipsum dolor sit amet,consectetur. Pellentesque nec
                  tempor tortor.
                </span>
              </div>
              </div>
            </div>
          </div>
          <div className={`col-md-4 col-sm-12  ${style.services_salesForce}`}>
            <div className={`${style.services_hoverel}`}></div>
            <div className={`${style.services_test_block}`}>
              <div className={`${style.services_salesForce_imgtext}`}>
                <img src={ETLIcon} />
              </div>
              <div className={`${style.services_salesForce_content_parent}`}>
              <div className={`${style.services_salesForce_content}`}>
                <p>ETL</p>
                <span className={`${style.services_salesForce_hoverText}`}>
                  Lorem ipsum dolor sit amet,consectetur. Pellentesque nec
                  tempor tortor.
                </span>
              </div>
              </div>
            </div>
          </div>
          <div className={`col-md-4 col-sm-12  ${style.services_salesForce}`}>
            <div className={`${style.services_hoverel}`}></div>
            <div className={`${style.services_test_block}`}>
              <div className={`${style.services_salesForce_imgtext}`}>
                <img src={AILogo} />
              </div>
              <div className={`${style.services_salesForce_content_parent}`}>
              <div className={`${style.services_salesForce_content}`}>
                <p>AI & ML</p>
                <span className={`${style.services_salesForce_hoverText}`}>
                  Lorem ipsum dolor sit amet,consectetur. Pellentesque nec
                  tempor tortor.
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceList;
