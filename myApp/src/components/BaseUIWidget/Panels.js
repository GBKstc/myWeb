import React from 'react';
import {isEmpty,cpy} from "../../utils/variable"
import {Row, Col} from 'antd';
import SDataEntry from '../../components/BaseUIWidget/SDataEntry';

class Panels extends React.Component{

  constructor(props){
    super(props);
    this.bePanels = this.bePanels.bind(this);
  }

  bePanels(){
    let props = cpy(this.props);
    if(!isEmpty(props.dataSource)){
      let length = props.dataSource.length;
      let source = props.dataSource;
      let renders = [];
      for(let i=0;i<length;i++){
        renders.push(
          <Row key={i}>
            <Col span={8}>
              {source[i].title}
            </Col>
            <Col span={16}>
              <SDataEntry
                {...source[i].entryProps}
              >
              </SDataEntry>
            </Col>

          </Row>
        );
      }
      return renders;
    }
    return null;
  }

  render(){
    return(
      <div>
        {this.bePanels()}
      </div>
    )

  }

}

export default Panels
