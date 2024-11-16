const LoginForm = () => {

    const onLoginSubmit = async (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        let email = formData.get('email');
        let password = formData.get('password');

        let postBody = {
            email:email,
            password:password
        }
        console.log(postBody);
    }

    return (
        <div className="container m-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-12 col-12">
                    <div className="card p-5">
                        <h2>Login</h2>
                        <hr />

                        <form onSubmit={onLoginSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input name="email" type="email" className="form-control" placeholder="Enter Your Email Address" required={true} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input name="password" type="Password" className="form-control" placeholder="Enter Your Password" required={true} />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};


export default LoginForm;