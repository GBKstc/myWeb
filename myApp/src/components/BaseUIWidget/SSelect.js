import React from 'react';
import {Select} from 'antd';
import {cpy,getVal} from '../../utils/variable';

const Option = Select.Option;
/**
 * 这是一个可以设置受控属性的值,并且不会影响默认方法的组件
 */
class SSelect extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onKeySpaceDown = this.onKeySpaceDown.bind(this);

    let value = this.props.value;

    for(let i in this.props.options){
      if(this.props.value == this.props.options[i].key || this.props.value == this.props.options[i].key){
        value = this.props.options[i].title;
        break;
      }
    }
    this.state = {
      value: value
    }

    //是否是focus状态
    this.isFoucs = false;
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.value !== this.props.value){
      let value = nextProps.value;
      for(let i in this.props.options){
        if(nextProps.value == this.props.options[i].key || nextProps.value == this.props.options[i].key){
          value = this.props.options[i].title;
          break;
        }
      }
      this.setState({
        value: value
      });
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }


  onFocus(e){
    this.isFoucs = true;
    if(this.props.onFocus)
      this.props.onFocus(e);
  }

  onBlur(e){
    this.isFoucs = false;
    if(this.props.onBlur)
      this.props.onBlur(e);
  }

  onKeySpaceDown(name, keyCode){
    if(this.isFoucs && keyCode == 32){
      this.onChange("");
    }
  }

  onChange(value){
    value = getVal(value);
    this.setState({
      value: value
    });
    if(this.props.onChange)
      this.props.onChange(value);
    if(this.props.onInputEnd)
      this.props.onInputEnd(value);
  }

  onSelect(value, option){
    if(this.props.checkOnEnd && !this.props.checkOnEnd(value)){
      message.error(this.props.checkOnEndMsg ? this.props.checkOnEndMsg : errorMsg);
      return;
    }
    this.setState({
      value: value
    });
    if(this.props.onSelect)
      this.props.onSelect(value, option);
    if(this.props.onInputEnd)
      this.props.onInputEnd(value);
  }

  render() {
    let props = cpy(this.props);
    //受控属性
    props.onChange = this.onChange;
    props.onSelect = this.onSelect;
    props.onBlur = this.onBlur;
    props.onFocus = this.onFocus;
    if(props.hasOwnProperty("value")){
      props.value = this.state.value;
    }
    let options = getVal(this.props.children, []);
    if(!props.size)
      props.size = "small";
    if(props.options){
      for (let i in props.options){
        options.push(
          <Option {...props.options[i]}>
            {props.options[i].title}
          </Option>
        )
      }
    }
    delete props["options"];
    props.allowClear=true;
    return (
      <Select
        {...props}
        style={{width:"100%"}}
      >
        {options}
      </Select>
    )
  }
}

export default SSelect


