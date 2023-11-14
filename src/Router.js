import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/layout";
import Home from "./pages/Home/home";
import Error from "./pages/Error/error";
import Tests from "./pages/Tests/tests";
import Contact from "./pages/Contact/contact";
import Corp from "./pages/Corp/corp";
import Address from "./pages/Address/address";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="corp" element={<Corp />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="tests" element={<Tests />} />
                    <Route path="address" element={<Address />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
