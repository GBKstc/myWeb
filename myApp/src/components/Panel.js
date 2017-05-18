/**
 * Created by Administrator on 2017/5/17.
 */
import React from 'react'
import styles from "./panel.less";

class Panel extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    const title_div = (
      <div className={styles["rct-panel-header"]} style={{height:'auto',color:"black"}}>
        {this.props.title}
      </div>
    );

    const foot = (
      <div className={styles["rct-panel-header"]} style={{color:"black"}}>
        {this.props.foot}
      </div>
    );

    return (
      <div className={styles["rct-panel"]}>
        {this.props.title ? title_div : ""}
        <div className={styles["rct-panel-content"]}  style={{height:this.props.height ? this.props.height + "px" : "auto"}}>
          {this.props.children}
        </div>
        {this.props.foot ? foot : ""}
      </div>
    )
  }
}

export default Panel
