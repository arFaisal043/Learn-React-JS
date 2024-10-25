import React from 'react';
import './assets/css/style.css'

const App = () => {

  let age = 20;
  let cities = ["Dhaka" , "Khulna" , "Rajshahi"];
  let isLogin = true;
  let haveAccount = false;

    return (
        <div>

            

            <h1>{2+2}</h1>
            {3 * 3}
            <h1>{new Date().getDay()}</h1>


            <h1>
              {
                ( () => {
                let age = 10;
                if(age >= 18) return "Adult";
                else return "Not Adult";
                } )()
              }
            </h1>

            
          <ul>
            {
              cities.map((item , index) => {
                return <li> {item} </li>
              })
            }
          </ul>

          
          <h1>
            {
              isLogin && <button>Logout</button>
            }
          </h1>

          <h1 className='my-text'>This is blue text</h1>

        </div>
    );
};

export default App;