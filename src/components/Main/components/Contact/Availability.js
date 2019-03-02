import React from "react"

function Availability(props) {
  return (
    <div className="availability">
      <h3>
        Current availability
      </h3>
      <div className="availability__wrapper">
        <div className="availability__card">
          Full Time
        </div>
        <div className="availability__card">
          Part Time
        </div>
        <div className="availability__card">
          Unavailable
        </div>
      </div>
    </div>
  )
}

export default Availability
