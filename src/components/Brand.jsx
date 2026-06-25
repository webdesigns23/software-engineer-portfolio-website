import React from 'react'
import { Astroid, ArrowUpRight } from 'lucide-react'
import sew from '../assets/images/sew.png'
import "../styles/sections.css"

export default function Brand() {
  return (
	<>
    <div id='brand' className="section-divider">
      <span className='marker'><Astroid size={16}/></span>
      <span className='num'>02</span>
      <div className='line-divider'></div>
      <span className='section-label'>Brand</span>
    </div>

    <section  className='portfolio-section'>
      <div className='section-info'>
        <p>
          What started in 2012 as making my own leotards for class at San Diego Ballet, grew into a full costume design business. Through trial and error, iteration, and a lot of seam ripping, I design, create patterns, grade sizes, sew, and ship every piece myself. Running every aspect solo taught me that what I love most isn't just the finished product, it's the problem-solving and process behind it.
        </p>
        <a 
          href="https://etsy.com/shop/charmsdancewear"           
          target="_blank"
          className="section-link">
            visit charms dancewear 
            <ArrowUpRight/>
          </a>
      </div>

      <div className='section-statement'>
        <p >Founder of Charms Dancewear <br/>
          <span>Custom hand crafted dancewear</span>
        </p>
        <img src={sew} alt='sewing machine'/>
      </div>
      
    </section>
    </>
  )
}
