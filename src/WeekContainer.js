import React, { Component } from 'react'

class WeekContainer extends Component {
    render() {
             
    const apiKey = "bb92bc497a64f5f4cdcd15d73f3e55ee"

    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=10022&units=imperial&APPID=${apiKey}`;
    
    return (
      <div>
        <h1>hello weather!</h1>
      </div>
    );
  }
}

export default WeekContainer

// this component will render 5 weather cards