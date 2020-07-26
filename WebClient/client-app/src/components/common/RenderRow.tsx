import React from "react";

interface IRenderRow {
  keys: Array<any>;
  data: any;
}

export default class RenderRow extends React.Component<IRenderRow> {
  constructor(props: IRenderRow) {
    super(props);
  }

  public render() {
    return this.props.keys.map((key, index) => {
      return <td key={this.props.data[key]}>{this.props.data[key]}</td>;
    });
  }
}
