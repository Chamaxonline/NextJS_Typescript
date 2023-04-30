import { PropsWithChildren } from "react";
import AdminNavbar from "./adminnavbar";

const AdminLayout = (props:PropsWithChildren) => {
    return(
        <>
        <AdminNavbar />
      {props.children}
        </>
    )

};
 export default AdminLayout;