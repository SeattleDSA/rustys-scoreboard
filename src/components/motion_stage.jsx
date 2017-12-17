import React from 'react';

export default class MotionStage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMotion: ""
    };

    this.renderStageActions = this.renderStageActions.bind(this);
    this.renderAmendments = this.renderAmendments.bind(this);
    this.changeCurrentMotion = this.changeCurrentMotion.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Discuss:</h1> <input onChange={this.changeCurrentMotion} value={this.state.currentMotion} />
        {this.renderAmendments()}
        {this.renderStageActions()}
      </div>
    );
  }

  changeCurrentMotion(e) {
    this.setState({ currentMotion: e.target.value });
  }

  renderAmendments() {
    return null;
  }

  renderStageActions() {
    return (
      <div className="button-group">
        <button type="button">Speak in favor</button>
        <button type="button">Speak against</button>
        <button type="button" onClick={this.props.onAmend}>Amend</button>
        <button type="button">Vote</button>
        <button type="button">Table</button>
      </div>
    );
  }
}
