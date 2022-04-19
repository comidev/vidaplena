import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "pages/Home";
import About from "pages/About";
import Contact from "pages/Contact";

import Productos from "pages/Productos";
import ProductosIndex from "pages/Productos/ProductosIndex";
import ProductosDetalles from "pages/Productos/ProductosDetalles";

import Negocio from "pages/Negocio";

import Testimonios from "pages/Testimonios";
import TestimonioCaso from "pages/Testimonios/TestimonioCaso";
import TestimoniosIndex from "pages/Testimonios/TestimoniosIndex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="" element={<Navigate to="/home" replace />} />
            <Route path="/" element={<App />}>
                <Route index path="home" element={<Home />} />
                <Route path="products" element={<Productos />}>
                    <Route index path="" element={<ProductosIndex />} />
                    <Route path=":productoId" element={<ProductosDetalles />} />
                </Route>
                <Route path="business" element={<Negocio />} />
                <Route path="testimonials" element={<Testimonios />}>
                    <Route index path="" element={<TestimoniosIndex />} />
                    <Route path=":casoId" element={<TestimonioCaso />} />
                </Route>
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="home" replace />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
