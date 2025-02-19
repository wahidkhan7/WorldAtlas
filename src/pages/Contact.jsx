import React from 'react'

const Contact = () => {
   function handleFormInput(formData){
    // console.log(formData.entries());
    const formInputData= Object.fromEntries( formData.entries())
    console.log(formInputData);
              
    

   }
  return (
       <section className='section-contact'>
        <h2 className='container-title'>Contact us</h2>

        <div className='contact-wrapper container'>

          <form action={handleFormInput} >
            <input type="text" autoComplete='off' name="username" id="" placeholder='Enter your name' className='form-control' required />
            <input type="email" autoComplete='off' name="email" id="" placeholder='Enter your Email' className='form-control' required />
            <textarea type="text" rows="10" autoComplete='off' name="message" id="" placeholder='Enter your message' className='form-control' required></textarea>
            <button type='submit' style={{"width" : "70%"}}  >Send</button>
          </form>

        </div>
       </section>
  )
}

export default Contact