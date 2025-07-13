import React from "react";
import { useForm } from "react-hook-form"
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";
import { toast } from "react-hot-toast"

import Navbar from "../Navbar";
import Footer from "../Footer";
import { useState,useEffect } from "react";
import './Support.css';
//import mailSender from "../../utils/mailsender";

function SupportPage() {
 
 const [loading, setLoading] = useState(false)

  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

 const submitContactForm = async (data) => {
    
    try {
      console.log("Form Data - ", data)
       setLoading(true);
      //   	await mailSender(
		  //    	data.email,
			// "Feedback Submission");

      toast.success("Feedback submiited successfully");
       setLoading(false);
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
      toast.error("Feedback not submiited ");
    }
  }



 


  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",

        // if i want to make it false again after submitting the form
         // keepIsSubmitSuccessful: false,
      })
    }
  }, [reset,isSubmitSuccessful])




  return (
    <>
    <Navbar></Navbar>
<form
      className="supportcontainer"
      onSubmit={handleSubmit(submitContactForm)}
    >
      <div className="outerdiv">

        {/* first name ki div */}
        <div className="elementdiv">




          {/* html for-->label is connected to input tag */}
          {/* label-style -->specifying color and size */}
          <label htmlFor="firstname" className="lable-style">
            First Name
          </label>

          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            className="form-style"

          


            {...register("firstname", { required: true })}
          />

          {/* this is done for error handling */}
          {

          


            errors.firstname && (
            <span className="errorsfield">
              Please enter your name.
            </span>
          )
        }
        </div>

         
        <div className="elementdiv">
          <label htmlFor="lastname" className="lable-style">
            Last Name
          </label>

          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter last name"
            className="form-style"

            {...register("lastname")}
          />
        </div>



      </div>

         {/* email */}
      <div className="outerdiv">
        <label htmlFor="email" className="lable-style">
          Email Address
        </label>
        
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className="form-style"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="errorsfield">
            Please enter your Email address.
          </span>
        )}
      </div>

   
      <div className="outerdiv">

        <label htmlFor="phonenumber" className="lable-style">
          Phone Number
        </label>

       {/* for dropdown field and phone number field */}
        <div className="flex gap-5">

          {/* this div is for dropdown menu */}

       

         
      
      

          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890"
              className="form-style"
              {...register("phoneNo", {
                required: {
                  value: true,
                  message: "Please enter your Phone Number.",
                },
                maxLength: { value: 12, message: "Invalid Phone Number" },
                minLength: { value: 10, message: "Invalid Phone Number" },
                pattern: {
              value: /^[0-9]{10,12}$/,
            message: "Phone number must be 10 to 12 digits",
                  }
              }
            )
          }
            />
          </div>

        </div>

        {errors.phoneNo && (
          <span className="errorsfield">
            {errors.phoneNo.message}
          </span>
        )}
      </div>


 
       {/* message box */}
      <div className="outerdiv">

        <label htmlFor="message" className="lable-style">
          Message
        </label>

        <textarea 
          name="message"
          id="message"
          cols="30"
          rows="4"
          placeholder="Enter your message here"
          className="form-style"
          {...register("message", { required: true })}
        />

        {
          errors.message && (
          <span className="errorsfield">
            Please enter your Message.
          </span>
        )}
      </div>


  

      <button                                             
        disabled={loading}         
        type="submit"
        className="formbutton"
      >
        Send Message
      </button>

    </form>
    </>
    
  )
}

export default SupportPage;
