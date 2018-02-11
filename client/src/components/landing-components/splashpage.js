import React from 'react';
import '../App.css';
const Splash = () => {
  return (<div className="container-fluid">
    <div className="row">
      <div className="jumbophoto">
        <div className="col-sm-8 col-md-8 col-lg-8">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <img src={require('../img/mysLogo00.png')} alt="xxxx"/>

            </div>
          </div>
          <div className="row">
            <div className="jumboImg2 col-sm-12 col-md-12 col-lg-12"></div>
          </div>
        </div>

        <div className="col-sm-4 col-md-4 col-lg-4">

          <div id="row1" className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <img src={require('../img/mystYolo.png')} alt="xxxx"/>

            </div>
          </div>

          <form className="formPad">

            <fieldset>

              <div id="row10" className="row">
                <div className="col-sm-9 col-md-9 col-lg-9">
                  <button className="loginBtn loginBtn--facebook"><a href="/auth/facebook">Login with Facebook</a></button>
                </div>
              </div>
              <br/>

              <div id="row4" className="row">
                <div className="col-sm-9 col-md-9 col-lg-9">
                  <input className="form-control input-sm" type="text" placeholder="Username"/>
                </div>
              </div>

              <div id="row5" className="row">
                <div className="col-sm-9 col-md-9 col-lg-9">
                  <input className="form-control input-sm" type="text" placeholder="Email"/>
                </div>
              </div>

              <div id="row6" className="row">
                <div className="col-sm-9 col-md-9 col-lg-9">
                  <input className="form-control input-sm" type="text" placeholder="Password"/>
                </div>
              </div>

              <div id="row7" className="row">
                <div className="col-sm-9 col-md-9 col-lg-9">
                  <input className="form-control input-sm" type="text" placeholder="Confirm Password"/>
                </div>
              </div>

              <div id="row8" className="row">
                <div class="col-sm-9 col-md-9 col-lg-9">
                  <button type="submit" class="signUpBtn btn">S I G N U P</button>

                </div>
              </div>

            </fieldset>
          </form>

        </div>

      </div>

    </div>
  </div>);
};

export default Splash;
