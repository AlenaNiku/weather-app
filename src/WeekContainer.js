import React, { Component } from 'react'

class WeekContainer extends Component {

  componentDidMount = () => {

    const apiKey = "bb92bc497a64f5f4cdcd15d73f3e55ee";

    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=10022&units=imperial&APPID=${apiKey}`;
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => console.log(data.list));
  };

  render() {

    return (
      <div>
        <h1>hello weather!</h1>
      </div>
    );
  }
}

export default WeekContainer

// this component will fetch the data and render 5 weather cards