import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { useEffect } from "react";
import { auth } from "./Components/firebase";
import { useStateValue } from "./Components/StateProvider";
import Payment from "./Backend/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// import Orders from "./Backend/Orders/Orders";

const promise = loadStripe(`pk_test_51MLikDLSypmNtsLPfkKmbofxA73koGDYfqRev6esjfeoBWCNOSeNdX05YsPXRAuWliCCrvNLTu6WyQqsELaJvDXj00MkD2GMSu`);


//const promise = loadStripe(
  // 'process.env.REACT_APP_PRIMARY_KEY'

  // `pk_test_51MLikDLSypmNtsLPfkKmbofxA73koGDYfqRev6esjfeoBWCNOSeNdX05YsPXRAuWliCCrvNLTu6WyQqsELaJvDXj00MkD2GMSu`
// 
// );
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

    return (
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="/orders" element={<Orders/>} /> */}

            <Route
              path="/payment"
              element={
                <Elements stripe={promise}>
                  <Payment />
                // </Elements>
              }
            />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    );
}

export default App
