import React from "react";
import Navbar from "../../pages/Navbar";
import Footer from "../footer";

const Layout = ({ childern }) => {
    return (
        <>
            <Navbar />
            {childern}
            <Footer />
        </>
    );
};

export default Layout;
