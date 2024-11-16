const RegistrationForm = () => {

    const onRegSubmit = async (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        let email = formData.get('email');
        let password = formData.get('password');
        let city = formData.get('city');
        let message = formData.get('message');
        let gender = formData.get('gender');
        let firstName = formData.get('firstName');
        let lastName = formData.get('lastName');
        let checkbox = formData.get('checkbox');
        let range = formData.get('range');

        let postBody = {
            email: email,
            password: password,
            city: city,
            message: message,
            gender: gender,
            firstName: firstName,
            lastName: lastName,
            checkbox: checkbox,
            range: range,
        }
        console.log(postBody);
    }

    return (
        <div className="container m-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-sm-12 col-12">
                    <div className="card p-5">
                        <h2>Registration</h2>
                        <hr />

                        <form onSubmit={onRegSubmit}>

                           <div className="mb-3 d-flex justify-content-start ">
                                <div className="first-name col-md-4 col-sm-12 col-12">
                                    <label className="form-label">First Name</label>
                                    <input name="firstName" type="text" className="form-control" placeholder="Enter Your First Name" required={true} />
                                </div> 
                                <div className="last-name col-md-4 col-sm-12 col-12">
                                    <label className="form-label">Last Name</label>
                                    <input name="lastName" type="text" className="form-control" placeholder="Enter Your Last Name" required={true} />
                                </div>
                           </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input name="email" type="email" className="form-control" placeholder="Enter Your Email Address" required={true} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input name="password" type="Password" className="form-control" placeholder="Enter Your Password" required={true} />
                            </div>

                            <div className="mb-3 ">
                                <label className="form-label">Gender</label>
                                <div className="d-flex">
                                   <input name="gender" value="male" type="radio" className="form-check" required={true} /> Male 
                                   <input name="gender" value="female" type="radio" className="form-check" required={true} />Female
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="from-label mb-2">City</label>
                                <select name="city" className="form-select form-control" required={true} >
                                  <option value="Dhaka">Dhaka</option>
                                  <option value="Rajshahi">Rajshahi</option>
                                  <option value="Barisal">Barisal</option>
                                  <option value="Khulna">Khulna</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="">Accept terms and conditions</label> <br />
                                <input name="checkbox" value="Accept" type="checkbox" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="">Your skill range</label> <br />
                                <input name="range"  type="range" className="form-range" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Your message</label>
                                <textarea name="message" className="form-control" rows={4} placeholder="Enter Your Comment" required={true} />
                            </div>

                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;