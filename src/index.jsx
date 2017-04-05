import React, { Component, PropTypes } from 'react';

var colorMap = {
  red: '#e05d44',
  orange: '#fe7d37',
  green: '#97CA00',
  brightgreen: '#4c1',
  yellowgreen: '#a4a61d',
  yellow: '#dfb317',
  lightgrey: '#9f9f9f',
  blue: '#007ec6'
};

export default class Shields extends Component {
  static displayName = 'react-shields';

  static propTypes = {
    color: PropTypes.string,
    status: PropTypes.string,
    subject: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    const color = this.props.color || 'yellow';
    const styles = {
      shields: {
        fontSize: '11px',
        fontFamily: "'Lucida Console', Monaco, monospace, sans-serif",
        lineHeight: '20px',
        color: '#fff',
        borderRadius: '3px',
        marginLeft: '4px'
      },
      subject: {
        backgroundColor: '#555',
        padding: '3px 6px',
        borderRadius: '3px 0 0 3px',
        textShadow: '0 1px 0 rgba(1, 1, 1, 0.3)'
      },
      status: {
        borderRadius: '0 3px 3px 0',
        padding: '3px 6px',
        textShadow: '0 1px 0 rgba(1, 1, 1, 0.3)',
        backgroundColor: colorMap[color] || colorMap.yellow
      }
    };

    return (
      <span style={styles.shields}>
        <span style={styles.subject}>{this.props.subject}</span>
        <span style={styles.status}>{this.props.status}</span>
      </span>
    );
  }
}
