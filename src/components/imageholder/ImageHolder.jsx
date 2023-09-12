import React from 'react'
import macbook from "../images/macbook.jpg"
import "./ImageHolder.css"

export const ImageHolder = () => {
  return (
      <div className='imageholder' >
          <img src={macbook} alt="" />

          <div className="product-title">
              <h3>Apple MacBook Pro (2023)</h3>
          </div>
          <div className="product-overview">
              <span>Product Overview:</span>
              <p>
                  The Apple MacBook Pro (2023) is the latest addition to Apple's renowned line of premium laptops. Packed with cutting-edge technology, sleek design, and powerful performance, the MacBook Pro continues to be a top choice for professionals, creatives, and tech enthusiasts alike. With enhancements to its display, performance, and connectivity, the MacBook Pro offers an unparalleled user experience for work, creativity, and entertainment.
              </p>
          </div>

         
    </div>
  )
}
