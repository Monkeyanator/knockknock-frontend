import React from 'react';
import MacTableContent from './MacTableContent';
import './MacTable.css';
import M from 'materialize-css';

class MacTable extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      mappings: [],
    };

    this.ws = new WebSocket('ws://localhost:8080');
    this.ws.onopen = function() {
      console.log("open");
    };
    this.ws.onmessage = function(message) {
      console.log("received");
      M.toast({html: message.data});
    };
  }

  render() {
    return (
      <div>
          <table className="striped centered">
              <thead>
              <tr>
                  <th> Name </th>
                  <th> MAC </th>
                  <th> Last Online </th>
              </tr>
              </thead>
              <MacTableContent userMappings={getMappings()}/>
          </table>
      </div>
    );
  }
}

function getMappings(){
  return [
    {name: "John", mac: "AB:CD:EF:GH", online: "5 minutes ago"},
    {name: "Jacob", mac: "AB:CD:EF:GH", online: "1 hour ago"},
    {name: "Jingleheimer", mac: "AB:CD:EF:GH", online: "10 minutes"}
  ];
}

export default MacTable;
