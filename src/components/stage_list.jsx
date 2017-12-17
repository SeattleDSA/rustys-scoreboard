import React from 'react';

const stages = [
  "Order",
  "Secretary",
  "Announcements",
  "Committee Updates",
  "Motions"
];

export default class StageList extends React.Component {
  constructor(props) {
    super(props);

    this.renderStage = this.renderStage.bind(this);

    this.state = {
      currentStage: "Order"
    };
  }

  render() {
    return (
      <ul>
        {stages.map(this.renderStage)}
      </ul>
    );
  }

  renderStage(stage) {
    let activeMaybe = (stage == this.state.currentStage) ? "active" : null;

    return (
      <li className={activeMaybe} key={stage}>{stage}</li>
    );
  }
}
