import React, { Component } from "react";
import Axios from "axios";

// this makes the call to the Advice API to get the Wise Mist's wisdom
class WisdomAPICall extends Component {

  componentDidMount() {
    this.fetchQuery();
  }

  // wrapper function for API calls
  // if the API returns no result for given keyword, then get a random wisdom
  fetchQuery = () => {
    this.getWisdom().then(response => {
      if (response !== undefined) {
        this.props.getWisdom(response);
      } else {
        this.randomWisdom();
      }
    });
  };

  randomWisdom = async () => {
    try {
      const wiseMistAnswer = await Axios.get(
        `https://api.adviceslip.com/advice`
      );
      this.props.getWisdom(wiseMistAnswer.data.slip.advice);
    } catch (error) {
      console.log(error.message);
    }
  };

  getWisdom = async () => {
    try {
      const wiseMistAnswer = await Axios.get(
        `https://api.adviceslip.com/advice/search/${this.props.userQuery}`
      );
      // if multiple returns come back, pick one at random
      const randomIndex = Math.floor(Math.random() * wiseMistAnswer.data.slips.length);
      return wiseMistAnswer.data.slips[randomIndex].advice;
    } catch (error) {
      console.log(error.message);
    }
  };
  render() {
    return <div />;
  }
}
export default WisdomAPICall;
