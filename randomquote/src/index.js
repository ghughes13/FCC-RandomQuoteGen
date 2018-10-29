import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './normalize.css';
import morwStyles from './styles.css';

let quoteArray = [
  {
    quote: "\"It isn't sufficient just to want - you've got to ask yourself what you are going to do to get the things you want.\"",
    source:"- Richard D. Rosen",
  },
  {
    quote:   "\"Doing what you like is freedom. Liking what you do is happiness.\"",
    source: "- Frank Tyger",
  },
  {
    quote:   "\"Failure cannot cope with persistence.\"",
    source: "- Napoleon Hill",
  },
  {
    quote: "\"Success is not counted by how high you have climbed but by how many people you brought with you.\"",
    source:   "- Wil Rose",
  },
  {
    quote:  "\"If a book about failures doesn’t sell, is it a success?\"",
    source:   "- Jerry Seinfeld",
  },
  {
    quote: "\"A lie gets halfway around the world before the truth has a chance to get its pants on.\"",
    source: "- Winston S. Churchill",
  },
];

let backgroundColors = [
  "#72C9A9",
  "#F25D30",
  "#b6c917",
  "#48eb34",
  "#94C5E8",
  "#FF3DA4",
  "#FF0C10",
  "#10f2eb",
  "#514fbd",
  "#59D689"
];

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Every strike brings me closer to the next home run.",
      attribute: "-Babe Ruth"
    };
      this.getNewQuote = this.getNewQuote.bind(this);
  }

    getNewQuote() {
      let newstuff = quoteArray[Math.floor(Math.random()*quoteArray.length)];
      let newQuote = newstuff.quote;
      let newattribute = newstuff.source;
      document.body.style.backgroundColor = backgroundColors[Math.floor(Math.random()*backgroundColors.length)];

      this.setState({
        quote: newQuote,
        attribute: newattribute
      });
    }

    render() {
      return (
          <div>
            <div id="quote-box">
              <h1 id="quote"> {this.state.quote} </h1>
              <div className="text">
                <h5 id="author"> {this.state.attribute}</h5>
              </div>
            </div>
            <button onClick={this.getNewQuote} id="new-quote"> New Quote </button>
          </div>
      )
    }
  };


ReactDOM.render(<Quotes />, document.getElementById('root'));
