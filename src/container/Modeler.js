import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';


class Modeler extends PureComponent {


  render() {
    return (
        <div className="layout">
          <div className="layout--setting">
            <button className="layout--text">
              Collapse All
            </button>
          </div>

          <div className="layout--container">
            <table>
              <tbody>

              </tbody>
            </table>
          </div>
        </div>
    )
  }
}

export default Modeler;

