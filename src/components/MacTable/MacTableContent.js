import React from 'react';

class MacTableContent extends React.Component {

    constructor(props) {
        super(props);
        console.log("cons")
        this.state = {
            mappings: props.userMappings,
        }
    }

    render() {
        console.log(this.props);
        return (
            <tbody>
                { this.generateItems() }
            </tbody>
        );
    }

    generateItems() {
        console.log("here is the state")
        console.log(this.state);
        var components = this.state.mappings.map(mapping => {
            return (
                <tr>
                    <td> {mapping.name} </td>
                    <td> {mapping.mac} </td>
                    <td> {mapping.online} </td>
                </tr>
            );
        });

        return components;
    }
}

export default MacTableContent;
