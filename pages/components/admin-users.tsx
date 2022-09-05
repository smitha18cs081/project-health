import { Formik, Field, Form, FormikHelpers } from 'formik';
import {useState} from "react"
import styles from '/styles/admin-users.module.css'
interface Values {
    email: string;
    password:string;
   
}

export default function AdminUsers() {
  const [name,setName]=useState("");
    return (
      <><div className={styles.login_box + ' p-3'}>
        <h1 className={styles.main}>Admin User</h1>
        <input className={styles.search} value={name} onChange={(event)=>setName(event.target.value)} placeholder="Search"/>
        <button className={styles.add}>Add User</button> 
        <ul>
          <li>User ID</li>
          <li>Name</li>
          <li>Email</li>
          <li>Phone</li>
          <li>Role(s)</li>
          <li>Status</li>
          <li>Options</li>
        </ul>
      </div> 
      </>
    );
  };