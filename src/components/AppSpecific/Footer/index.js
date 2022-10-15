import React from 'react';
import './Footer.css';
export default function Footer() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="main">
      <section id="ContactMe">
            <h2>Contact Me</h2>
            <article className="contactinfo nav">
                    <ul>
                        <li><a href="tel:18606390255">860.639.0255</a></li>
                        <li><a href="mailto:dmmerchant@gmail.com">dmmerchant@gmail.com</a></li>
                        <li><a href="https://github.com/dmmerchant" target="_blank">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/devon-merchant-04b85062/" target="_blank">LinkedIn</a></li>
                    </ul>
            </article>
        </section>
    </div>
  );
}
