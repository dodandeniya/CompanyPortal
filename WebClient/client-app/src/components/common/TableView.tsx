import * as React from "react";
import RenderRow from "./RenderRow";

export interface ITableViewProps {
  data: Array<any>;
}

export default class TableView extends React.Component<ITableViewProps> {
  constructor(props: ITableViewProps) {
    super(props);

    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  getKeys = () => {
    return Object.keys(this.props.data[0]);
  };

  getHeader = () => {
    var keys = this.getKeys();
    return keys.map((key, index) => {
      return (
        <th scope="col" key={key}>
          {key.toUpperCase()}
        </th>
      );
    });
  };

  getRowsData = () => {
    var items = this.props.data;
    var keys = this.getKeys();
    return items.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };

  public render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody>{this.getRowsData()}</tbody>
        </table>
      </div>
    );
  }
}
