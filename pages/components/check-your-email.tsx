import { Formik, Field, Form, FormikHelpers } from 'formik';
import styles from "/styles/check-email.module.css";
interface Values {
    email: string;
    password:string;
   
}

export default function CheckYourEmail() {
    return (
      <><div className={styles.login_box + ' p-3'}>
        <h1 className={styles.check}>Check your email</h1>
         
         
           <p className={styles.reset}>We sent a password reset link to<br></br>
           <b>bing@hotmail.com</b></p>
           <br></br>

           <p className={styles.resend}>Did not receive the email?<a href="" > Click to resend</a></p>
          
         
        
      </div> 
      </>
    );
  };