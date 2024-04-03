import HomePage from "../pages/Homepage/Homepage";
import OrderPage from "../pages/Order/Order";
import ProductPage from "../pages/Product/Product";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
 export const routes =[
    {
        path:'/',
        page:HomePage,
        isShowHeader:true
        
        
    },
    {
        path:'/order',
        page:OrderPage,
        isShowHeader:true
        

    },
     {
        path:'/product',
        page:ProductPage,
        isShowHeader:true
       

    },
    {
        path:'*',
        page:NotFoundPage
    },
]