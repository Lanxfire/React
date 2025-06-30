import { Outlet } from "react-router-dom";

const Products = () => 
    {
        return ( 
        <div>
            <h2>Productos</h2>
            <Outlet/>
        </div>
        )
    }

export default Products;
