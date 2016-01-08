import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.css';

import Counter from './Counter';

//function Name(props) {
//  return <em>{props.name}</em>;
//}
//Name.propTypes = {
//  name: React.PropTypes.string.isRequired
//};
//
//
//function Title(props) {
//  return <h1>Hello <Name name={props.name} /></h1>;
//}
//Title.propTypes = {
//  name: React.PropTypes.string.isRequired
//};

function Application() {
  return <div className='ApplicationView'>
    <Counter startAt={123} onOkHandler={r=>console.dir(r)} />
    </div>;
}

ReactDOM.render(<Application />, document.getElementById('mount'));
