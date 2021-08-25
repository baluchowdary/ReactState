import React, {Component} from 'react';


class App extends Component {
    constructor(){
        super();
        this.state={ displayBio: false };

        console.log('readMore this', this);

        this.readMore = this.readMore.bind(this)
    }
    readMore(){
        console.log('readMore this', this);

        //this.setState({displayBio : true});
    }
    render(){
        return (
            <div>
                <h1>Iam kollu</h1>
                <p>Hello kollu1</p>
                <p>bhardwaja</p>
                {
                this.state.displayBio ? (
                    <div>
                        <p>I am from block1</p>
                        <p>i am kollu from block1</p>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.readMore}>Read More</button>
                            </div>
                    )
                }
            </div>
        ) //return
    } //render end

} //class end

export default App;