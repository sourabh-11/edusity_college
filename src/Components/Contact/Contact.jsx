import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3afe9cc2-bb2f-4635-b712-8bc0c45b53be");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }

    }














  return (
    <div className='Contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero nulla vero doloribus optio beatae neque repellendus. Dolor ipsam nisi doloremque id at iusto fuga, porro sapiente, rem, molestiae non fugiat ducimus corporis pariatur?</p>
            <ul>
                <li> <img src={mail_icon} alt="" /> Sourabhjangid@2002@gmail.com </li>
                <li>  <img src={phone_icon} alt="" />+91 742695907</li>
                <li> <img src={location_icon} alt="" />33,heeramandi, vaishali nagar, jaipur</li>
            </ul>
        </div>
        <div className="contact-col">
           <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your Name' required />
            <label > Phone Number</label>
            <input type="tel" name="phone" placeholder='Enter your mob. number' required />
            <label> Write your Message here</label>
            <textarea name="message" rows="6"   placeholder='Enter you text' required></textarea>
            <button type='submit' className='btn dark-btn'> Submit Now <img src={white_arrow} alt="" /></button>
           </form>
           <span>{result}</span>
        </div>
        
    </div>
  )
}

export default Contact