import {render} from 'react-dom'

var React = require('react'),
    NameAdder = require('./name-adder.jsx'),
    NamesList = require('./names-list.jsx');

class NameManager extends React.Component {
    handleNameAdded() {
        this.refs.namesList.update()
    }

    render() {
        return (
            <div>
                <br/>
                <NameAdder url="/name" onAdded={this.handleNameAdded.bind(this)}/>
                <br/>
                <NamesList url="/names" ref="namesList"/>
            </div>
        )
    }
}

render(<NameManager/>, document.querySelector('#demo'))

