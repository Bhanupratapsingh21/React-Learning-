import React from 'react'
import { Route , Routes} from 'react-router-dom'
import AllProducts from '../Pages/AllProducts'
import ProductDetails from '../Pages/ProductDetails'
export default function AllRoutes({ products }) {
    console.log(products)
    console.log("allrout")

    return (
        <>
            <Routes>
                <Route path="/" element={<AllProducts products={products} />} />
                <Route path="/products/:id" element={<ProductDetails products={products} />} />
            </Routes>
        </>
    )
}
