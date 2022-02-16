import React, { useRef } from 'react'
import styles from './ContactForm.module.css'
import { ToastProvider, useToasts } from 'react-toast-notifications';
import emailjs from '@emailjs/browser';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsmobile from "../aws-exports";
import {createSupportRequestForm} from '../graphql/mutations';

Amplify.configure(awsmobile);

const SupportRequestForm = () => {
  const { addToast } = useToasts();
  const form = useRef();

  const submitContactForm = async (e) => {
    e.preventDefault();
    const formData = {
      lname: formState.lname,
      fname: formState.fname,
      email: formState.email,
      phone: formState.phone,
      message: formState.message,
      attachment: formState.attachment
    };
    
    try {
      await API.graphql(graphqlOperation(createSupportRequestForm, {input: formData}))
      addToast('Your submission has been received!', { appearance: 'success', autoDismiss: true });
    } catch (error) {
      addToast('An error occurred while submitting form.', { appearance: 'error', autoDismiss: true });
    }

    //send email
    emailjs.sendForm('service_ucd1ykw', 'template_19sgiob', form.current, 'user_USoUrsABYu5keCo1hONjJ')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  }
  
  const formState = {lname: "", fname: "", email: "", phone: "", message: "", attachment: ""};
  const updateFormState = (key, value) => {
    formState[key] = value;
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.contactImage}>
        <img src="/Assets/svg/contact.svg" alt="" className={styles.imgCenter} />
      </div>
      <div className={styles.contactForm}>
        <div className={styles.formHeader}><h1>Contact Us</h1></div>
        <form ref={form} className={styles.addForm} onSubmit={submitContactForm}>
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
            <input type="submit" value="Send Support Request" />
          </div>
        </form>
      </div>
    </div>
  )
}

const ContactForm = () => (
  <ToastProvider>
    <SupportRequestForm />
  </ToastProvider>
)

export default ContactForm;
