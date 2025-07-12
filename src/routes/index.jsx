// import { Routes, Route } from "react-router-dom";
// import { Header } from "../components/Header";
// import { Footer } from "../components/Footer";
// import { Cart, Checkout, CompletePayment, Home, Login, Menu, Register } from "../containers";
// import { UserLayout } from "../layouts/UserLayout";

// export function Router() {
//     return (
//         // <Routes>
//         //     <Route path="/" element={<UserLayout />}>
//         //         <Route path="/" element={<Home />} />
//         //         <Route path="/cardapio" element={<Menu />} />
//         //         <Route path="/carrinho" element={<Cart />} />
//         //         <Route path="/checkout" element={<Checkout />} />
//         //         <Route path="/complete" element={<CompletePayment />} />
//         //     </Route>

//         //     <Route path="/login" element={<Login />} />
//         //     <Route path="/cadastro" element={<Register />} />
//         // </Routes>

//         <Routes>
//             <Route path="/" element={<UserLayout />}>
//                 <Route index element={<Home />} />
//                 <Route path="cardapio" element={<Menu />} />
//                 <Route path="carrinho" element={<Cart />} />
//                 <Route path="checkout" element={<Checkout />} />
//                 <Route path="complete" element={<CompletePayment />} />
//             </Route>

//             <Route path="/login" element={<Login />} />
//             <Route path="/cadastro" element={<Register />} />
//         </Routes>
//     )
// }

import { Routes, Route } from "react-router-dom";
import { Cart, Checkout, CompletePayment, EditProduct, Home, Login, Menu, NewProduct, Orders, Products, Register } from "../containers";
import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="cardapio" element={<Menu />} />
        <Route path="carrinho" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="complete" element={<CompletePayment />} />
      </Route>

      <Route path="/admin" element={<AdminLayout/>}>
        <Route path="/admin/pedidos" element={<Orders/>}/>
        <Route path="/admin/novo-produto" element={<NewProduct/>}/>
        <Route path="/admin/editar-produto" element={<EditProduct/>}/>
        <Route path="/admin/produtos" element={<Products/>}/>
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}


// export const router = createBrowserRouter([
//     {
//         path: '/',
//         element: (
//             <>
//                 <Header/>
//                 <Home/>
//                 <Footer/>
//             </>
//         ),
//     },
//     {
//         path: '/login',
//         element: <Login/>
//     },
//     {
//         path:'/cadastro',
//         element: <Register/>
//     },
//     {
//         path: '/cardapio',
//         element:  (
//             <>
//                 <Header/>
//                 <Menu/>
//             </>
//         ),
//     },
//     {
//         path: '/carrinho',
//         element:<Cart/>
//     },
//     {
//         path: '/checkout',
//         element:<Checkout/>
//     },
//     {
//         path: '/complete',
//         element:<CompletePayment/>
//     },
// ]);