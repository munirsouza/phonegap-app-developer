import { h, Component } from 'preact';
import { connect } from 'preact-redux';

class CloudTab extends Component {
  // There _will_ be a button here at some point...
  // @TODO revove the lint disable when this method actually does something
  handleButtonClick(button) { // eslint-disable-line class-methods-use-this
    console.log(`${button} clicked`);
  }

  render() {
    return (
      <div>{ this.props.children }</div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(CloudTab);