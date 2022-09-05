import { Formik, Field, Form, FormikHelpers } from 'formik';
import styles from "/styles/forgot-password.module.css";
interface Values {
    email: string;
   
}

export default function ForgotPassword() {
    return (
      <><div className={styles.login_box + ' p-3'}>
        <h1 className={styles.Forgotpassword}>Forgot your Password</h1>
        <Formik
          initialValues={{
            email: ''
            
          }}

          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          } }

        >
          <Form>
           <p className ={styles.Paragraph}>Enter your email address, and we willl send you an <br></br>email with all the instructions</p>
           
            <div>
              <label className={styles.Email}>Email</label>
              <input type="email" id="email" name="email" className={styles.input}/>
            </div>
          
            <br></br>
            
            <button type="submit" className={styles.button} >Send me instructions</button>
            <br></br>
            <br></br>
            <h4 className={styles.cancel}>Cancel</h4>
           


          </Form>
        </Formik>
      </div> 
      </>
    );
  };