import { Outlet, Navigate } from "react-router-dom";
import { SideNavAdmin } from "../../components";
import { Container } from "./style";

export function AdminLayout(){

    // const isAdmin = true;

    const {admin: isAdmin} = JSON.parse( //Esse : faz com a variavel admin transforme para isAdmin.
        localStorage.getItem('devburger:userData'),
    );

    return isAdmin ?(
        <Container>
            <SideNavAdmin/>
            <main>
                <section>
                    <Outlet/> 
                </section>
            </main>       
        </Container>
    ):(
    <Navigate to="/login"/>
    );
}