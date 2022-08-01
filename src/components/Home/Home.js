
import React from 'react'

// import DemoPgm from '../SamplePgm/SamplePgm';
class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {
            currentprgm: 1
        }
    }


    // _renderLeftBox = () => {
    //     const {currentprgm} = this.state ;
    //          switch(currentprgm){
    //              case 1:
    //              return;
    //          }
           
    // }

    render() {

        return (
            <div className='col-12 container '
                style={{
                    width: "100%",
                    border: "1px solid black",
                    height: "100%",
                    marginTop: "108px",
                    display: "flex",
                    position: "relative"

                }}>

                <div
                    style={{
                        border: "1px solid black",
                        margin: "20px",
                        flex: "1"
                    }}>
                    {this._renderLeftBox}
                </div>
                <div style={{
                    border: "1px solid black",
                    margin: "20px",
                    width: "25%",
                    overflow: "hidden"
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "10px"
                    }}>
                        <h3>FunCom</h3>
                        <h3>ClsCom</h3>
                    </div>
                    <div>
                        {this._renderRightBox}
                    </div>
                </div>


            </div>
        )
    }
}
export default HomePage;