
import styles from '/styles/login_form.module.css';
import {useState} from "react";
import unsplash from "/public/unsplash.jpg";
import Image from 'next/image'
import eye from '/public/vector.jpg'
import logo1 from '/public/Group 19794.png'
import axios from "axios"
interface Values {
    email: string;
    password: string;
}

export default function LoginForm() {
 


    return (
      <>
     
      <div className={styles.login_box + ' p-3'}>
        <h1 className={styles.login}>Log In</h1>
        
          <form className={styles.form1}>
           
            <div className={styles.relative}>
               <Image className={styles.logo} src={logo1} alt=""/></div> 
            <div>
              <Image className={styles.image} src={unsplash} alt=""/>
            </div>

              
            <div>
              <label className={styles.email}>Email</label>
              <input type="email" id="email" name="email" className={styles.input1} alt=""/>
            </div>
            
            <div>
            <label className={styles.password}>Password</label>
            <Image id="togglePassWord" className={styles.eyepic} src={eye}/>
            <input type="password" id="password" name="password" className={styles.input2}/>
            </div>
            
            <p className={styles.paragraph1}>Minimum 8 characters with atleast 1 number</p>
            <div>
            <button className={styles.login1}>Log in</button>
            </div>
            <div>
            <p className={styles.agree}>By signing in you agree to Helath<a href="https://r.search.yahoo.com/_ylt=AwrKBF29kgxjLQkVO7K7HAx.;_ylu=Y29sbwNzZzMEcG9zAzIEdnRpZAMEc2VjA3Ny/RV=2/RE=1661797181/RO=10/RU=https%3a%2f%2fwww2.gov.bc.ca%2fgov%2fcontent%2fhealth%2fmanaging-your-health%2fhealth-gateway%2fmobile-app-terms-of-service/RK=2/RS=72iDuMWMnUeshJxVuhFo0wHDDgY-"> Terms of service</a> and 
            <a href="https://www.apple.com/legal/privacy/data/en/health-app/"> Privacy policy</a>
            <a className={styles.forgot} href="">Forgot your password?</a></p>
            </div>
          </form>
        
      </div>
       
      </>
    );
  };