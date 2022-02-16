import React from 'react'
import styles from './ContactForm.module.css'
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsmobile from "../aws-exports";
import {createSupportRequestForm} from '../graphql/mutations';

Amplify.configure(awsmobile);

const submitContactForm = async () => {
  const formData = {
    lname: formState.lname,
    fname: formState.fname,
    email: formState.email,
    phone: formState.phone,
    message: formState.message,
    attachment: formState.attachment
  };

  await API.graphql(graphqlOperation(createSupportRequestForm, {input: formData}))
  alert('Mail Sent');
}

const formState = {lname: "", fname: "", email: "", phone: "", message: "", attachment: ""};
const updateFormState = (key, value) => {
  formState[key] = value;
  console.log(key, value)
}

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactImage}>
        <img src="/Assets/svg/contact.svg" alt="" className={styles.imgCenter} />
      </div>
      <div className={styles.contactForm}>
        <div className={styles.formHeader}><h1>Contact Us</h1></div>
        <form className={styles.addForm}>
          <input type="hidden" name="form-name" value="supportRequestForm" />
          <div className={styles.nameLabel}>
            <div>
              <label htmlFor="lname">Last Name:</label>
              <input type='text' name="lname" id="lname" placeholder='Last Name' className={styles.lname} onChange={e => updateFormState('lname', e.target.value)} required />
            </div>
            <div>
              <label htmlFor="fname">First Name:</label>
              <input type='text' name="fname" id="fname" placeholder='First Name' className={styles.lname} onChange={e => updateFormState('fname', e.target.value)} required />
            </div>  
          </div>
          <div className={styles.otherLabel}>
            <label htmlFor="email">Email:</label>
            <input type='text' name="email" id="email" placeholder='Email' onChange={e => updateFormState('email', e.target.value)} required/>
            <label htmlFor="phone">Phone:</label>
            <input type='text' name="phone" id="phone" placeholder='Phone' onChange={e => updateFormState('phone', e.target.value)} />
            <label htmlFor="message">Message:</label>
            <textarea type='text' name="message" id="message" placeholder='Message' onChange={e => updateFormState('message', e.target.value)} required></textarea>
            <label htmlFor="attachment">Attachment:</label>
            <input type="file" name="attachment" id="attachment" onChange={e => updateFormState('attachment', e.target.value)} />
            <input type="submit" value="Send Support Request" onClick={submitContactForm} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
