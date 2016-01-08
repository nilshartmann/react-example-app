// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------
import React from 'react';

export default class Counter extends React.Component {

  static propTypes = {
    startAt: React.PropTypes.number,
    onOkHandler: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      zahl: props.startAt,
      nachname: 'Mueller'
    };
  }

  componentDidMount() {
    console.log('compdidmount');
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('scu');
    console.dir(newState);

    return true;
  }

  onOkPressed() {
    //
    const result = {
      count: this.state.zahl,
      name: this.state.nachname
    };

    this.props.onOkHandler(result);
  }

  increment() {
    const neueZahl = this.state.zahl + 1;
    this.setState({
      zahl: neueZahl
    });
  }

  updateNachname(e) {
//    const source = e.target.name; // nachname
    const neuerNachname = e.target.value;
    this.setState({
      nachname: neuerNachname
    });
  }

  render() {
    const { zahl, nachname } = this.state;

    const farbe = zahl < 140 ? 'yellow' : 'red';
    const okEnabled = nachname.length > 0;
    return <div>
      <div style={{color: farbe}}>Hallo {nachname}, deine Zahl: {zahl}</div>
      <div id='reactBeispiel'>React Beispiel</div>

      <p>
        Name: <input
        ref={x => { if (x) x.focus(); } }
        type='text'
        name='nachname'
        value={nachname}
        onChange={e=>this.updateNachname(e)} />
      </p>
      <button onClick={() => this.increment() }>Hochzählen</button>
      <button onClick={() => this.setState({nachname: ''})}>Reset</button>
      <button disabled={!okEnabled} onClick={() => this.onOkPressed()}>OK</button>
    </div>;
  }
}

//
//const AlteKlasse = React.createClass({
//  componentName: 'AlteKlasse',
//
//  getInitialState() {
//    return {
//      zahl: 1
//    }
//
//  },
//
//  increment() { },
//
//  render() {
//
//  }
//});

// e => machWas(e); return machWas(e)
// (e) => machWas(e);
// e =>  {console.log(e); return machWas; }
// () => machWas(...);
// (a,b) => machWas(...);
