import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
  return _.round(_.sum(data)/data.length);
}

export default (props) =>{
  //console.log (props.data)  // For Debug
  return(
    <div>
      <Sparklines height={props.height} width={props.width} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div text-align="center">{average(props.data)} {props.units}</div>
    </div>
  );
}
