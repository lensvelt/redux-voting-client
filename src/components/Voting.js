import React from 'react';

const Voting = () => {
  const getPair = () => {
    return this.props.pair || [];
  };

  return (
    <div className="voting">
      {this.getPair().map(entry =>
        <button key={entry}>
          <h1>{entry}</h1>
        </button>
      )}
    </div>
  );
};

export default Voting;