import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/layout";
import Home from "./pages/Home/home";
import Error from "./pages/Error/error";
import Tests from "./pages/Tests/tests";
import Maps from "./pages/Maps/maps";
import Contact from "./pages/Contact/contact";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="tests" element={<Tests />} />
                    <Route path="maps" element={<Maps />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
