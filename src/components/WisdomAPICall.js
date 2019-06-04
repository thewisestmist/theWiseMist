import React, { Component } from "react";
import Axios from "axios";

class WisdomAPICall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.fetchQuery();
  }

  fetchQuery = () => {
    console.log(this);
    this.getWisdom().then(response => {
      if (response !== undefined) {
        this.setState({
          wiseMistAnswer: response
        });
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
      this.setState({
        wiseMistAnswer: wiseMistAnswer.data.slip.advice
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  getWisdom = async () => {
    try {
      const wiseMistAnswer = await Axios.get(
        `https://api.adviceslip.com/advice/search/${this.props.userQuery}`
      );
      return wiseMistAnswer.data.slips[0].advice;
    } catch (error) {
      console.log(error.message);
    }
  };
  render() {
    return <div />;
  }
}
export default WisdomAPICall;
