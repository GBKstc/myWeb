import React from 'react';
import SInput from './SInput';
import SSelect from './SSelect';
import {cpy} from '../../utils/variable';

const TYPE_INPUT = "Input";
const TYPE_SELECT = "Select";
const TYPE_DATEPICKER = 2;
const TYPE_TIMEPICKER=3;
const TYPE_MONTHPICKER = 4;
const TYPE_RANGEPICKER = 5;
const TYPE_LABEL = 6;
const TYPE_CHECKBOX = 7;
const TYPE_USERSELECT = 8;
const TYPE_INPUTNUMBER = 9;
const TYPE_TIMERECORDER = 10;

class SDataEntry extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let props = cpy(this.props);
    delete props["stype"];
    switch (this.props.stype){
      case TYPE_INPUT:
        return (
          <SInput
            {...props}
          />
        );
      case TYPE_SELECT:
        return (
          <SSelect
            {...props}
          />
        );
      //case TYPE_DATEPICKER:
      //  return (
      //    <SDatePicker
      //      {...props}
      //    />
      //  );
      //case TYPE_TIMEPICKER:
      //  return(
      //    <STimePicker
      //      {...props}
      //    />
      //  );
      //case TYPE_MONTHPICKER:
      //  return (
      //    <SMonthPicker
      //      {...props}
      //    />
      //  );
      //case TYPE_RANGEPICKER:
      //  return (
      //    <SRangePicker
      //      {...props}
      //    />
      //  );
      //case TYPE_LABEL:
      //  return (
      //    <SLabel
      //      {...props}
      //    />
      //  );
      //case TYPE_CHECKBOX:
      //  return (
      //    <SCheckbox
      //      {...props}
      //    />
      //  );
      //case TYPE_USERSELECT:
      //  return (
      //    <SUserSelect
      //      {...props}
      //    />
      //  );
      //case TYPE_INPUTNUMBER:
      //  return (
      //    <SInputNumber
      //      {...props}
      //    />
      //  );
      //case TYPE_TIMERECORDER:
      //  return (
      //    <STimeRecorder
      //      {...props}
      //    />
      //  );
      default:
        return null;
    }
  }
}

export default SDataEntry
