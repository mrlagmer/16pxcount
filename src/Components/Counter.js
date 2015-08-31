import React from 'react';

export default class Counter extends React.Component {
    render(){
      const { count, increase, decrease } = this.props;
      return (
        <div>
          <h3>{count}</h3>
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
        </div>
      );
    }
}
