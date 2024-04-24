import "../LoginBox/LoginBox.css";

function LoginBox() {
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "hsl(0, 0%, 96%)", height: '100vh' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid" alt="Phone image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>

                <div className="form-outline mb-4">
                  <input type="email" id="form1Example13" className="form-control form-control-lg" />
                  <label className="form-label" >Email address</label>
                </div>


                <div className="form-outline mb-4">
                  <input type="password" id="form1Example23" className="form-control form-control-lg" />
                  <label className="form-label" >Password</label>
                </div>

                <button type="submit" className="btn btn-primary btn-lg btn-block ">Sign in</button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default LoginBox;