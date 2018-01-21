import React from 'react';import {connect} from 'react-redux';import PropTypes from 'prop-types';import AceEditor from 'react-ace';import 'brace/mode/json';import 'brace/theme/textmate';import {setJson} from '../redux/actions/editor';const Editor = ({json, setJsonToStore}) => {  return (      <div className="layout">        <div className="layout--setting">          <button className="layout--text">Format</button>          <button className="layout--text">Process</button>        </div>        <AceEditor            width="99%"            height="600px"            fontSize="13px"            mode="json"            theme="textmate"            value={json}            onchange={setJsonToStore}            showPrintMargin={false}            focus            wrapEnable            highlightActiveLine        />      </div>  );};Editor.propTypes = {  json: PropTypes.string,  saveJsonToStore: PropTypes.func,};const mapStateToProps = (state) => ({  json: state.json,});const mapDispatchToProp = (dispatch) => ({  setJsonToStore: (json) => dispatch(setJson(json)),});export default connect(mapStateToProps, mapDispatchToProp)(Editor);