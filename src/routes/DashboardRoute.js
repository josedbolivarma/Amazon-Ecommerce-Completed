import { Navigate, Route, Routes } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Checkout from "../pages/Checkout"
import Home from "../pages/Home"
import Payment from "../pages/Payment"

//Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from "../pages/Order"
import Products from "../pages/Products"
import MapView from "../pages/MapView"

const promise = loadStripe(
    "pk_test_51KnArTJaDltuSn9Nj7gxjtVoXGarC9RzF3sPvQh0BLPKgXhgSCgX5syMsdIXtPOZnrnVI6LvI5Dt4KtvdpeH6mo900O0OA7PWH"
)

const DashboardRoute = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment" element={
                    <div>
                        <Elements stripe={promise}>
                        <Payment />
                        </Elements>
                    </div>
                } />
                <Route path="/order" element={<Order />} />
                <Route path="/products" element={<Products />} />
                <Route path="/map" element={<MapView />} />
                <Route path="*" element={<Navigate to='/' />} />
            </Routes>
            <Footer />
        </>
    )
}

export default DashboardRoute;