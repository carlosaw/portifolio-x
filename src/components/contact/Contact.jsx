import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useRef, useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      'service_fat1oqs', 
      'template_gin8lqv', 
      formRef.current, 
      'WrdBekIiKEcPadM_r')
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
      }, 
      (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper" style={{backgroundColor: darkMode && "rgb(34 , 34, 34"}}>
        <div className="c-left">
          <h1 className="c-title">Vamos discutir seu projeto.</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img
                  src={Phone}
                  alt=""
                  className="c-icon"
                />
                +55 (65) 9 9981-3879
              </div>
              <div className="c-info-item">
                <img
                  src={Email}
                  alt=""
                  className="c-icon"
                />
                carlosfreevg@gmail.com
              </div>
              <div className="c-info-item">
                <img
                  src={Address}
                  alt=""
                  className="c-icon"
                />
                Rua Mem de Sá, 61, Várzea Grande, Mato Grosso, Brazil
              </div>
            </div>
        </div>
        
        <div className="c-right">
          <p className="c-desc">
            <b>Qual é a sua história?</b> Entre em contato. Sempre disponível para
            freelancer se o projeto certo aparecer.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nome" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Assunto" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Mensagem" name="message" />
            <button>Enviar</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;