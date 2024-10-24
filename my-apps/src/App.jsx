import React from 'react';

const App = () => {

  let age = 20;
  let cities = ["Dhaka" , "Khulna" , "Rajshahi"];
  let isLogin = true;

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




        </div>
    );
};

export default App;