import React, { Component } from 'react'
import DailyCard from './DailyCard';

class WeekContainer extends Component {
  state = {
    fullData: [],
    dailyData: [],
  };

  componentDidMount = () => {
    const apiKey = "bb92bc497a64f5f4cdcd15d73f3e55ee";

    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=10022&units=imperial&APPID=${apiKey}`;

    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        const dailyData = data.list.filter((reading) =>
          reading.dt_txt.includes("18:00:00")
        );
        this.setState(
          {
            fullData: data.list,
            dailyData: dailyData,
          },
          () => console.log(this.state)
        );
      });
  };

  // map through an array of objects and create a card component for each obj
  renderDailyCards = () => {
    return this.state.dailyData.map((reading, index) => (
      <DailyCard reading={reading} key={index} />
    ));
  };

  render() {
    return (
      <div>
        {this.renderDailyCards()}
      </div>
    );
  }
}

export default WeekContainer

// this component will fetch the data and render 5 weather cards