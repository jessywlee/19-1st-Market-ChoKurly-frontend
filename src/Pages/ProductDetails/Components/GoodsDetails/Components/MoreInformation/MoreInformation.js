import React, { Component } from 'react';
import { MoreInfoData } from './MoreInfoData';
import Taps from '../../../Taps/Taps';
import './MoreInformation.scss';

class MoreInformation extends Component {
  render() {
    return (
      <article className="more-info-wrapper">
        <Taps />
        <table className="extra-info">
          {MoreInfoData.map(ele => {
            return (
              <dl key={ele.id}>
                <dt>{ele.index}</dt>
                <dd>{ele.content}</dd>
              </dl>
            );
          })}
        </table>
      </article>
    );
  }
}

export default MoreInformation;
