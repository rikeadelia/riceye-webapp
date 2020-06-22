import React from 'react'
import * as tf from '@tensorflow/tfjs';

export class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            images: "",
            message: ""
        }
        this.predicting = this.predicting.bind(this)
        this.model = undefined
      }

      async componentDidMount() {
        //   localStorage.setItem("model", JSON.stringify(require("./model/model.json")))
        // const handler = tfn.io.fileSystem([require("./model/model.json"), require("./model/weights.bin")]);
        this.model = await tf.loadLayersModel("https://calm-harbor-72858.herokuapp.com/model/model.json")
        // this.model = await tf.loadLayersModel(require("../../assets/model/model.json"))
      }

    imageHandler = (e) => {
        e.preventDefault();
        var file = window.document.querySelector("#rice").files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            this.setState({
                images: reader.result
            })
            }.bind(this);
    }

    handleWait = () =>{
        this.setState({message: "Please Wait"})
    }

    handleResult = (data) => {
        var max = 0
        var idx = 0
        const labels = {
            0: "healthy",
            1: "brown spot",
            2: "hispa",
            3: "leaf blast"
        }
        var result = ""
        for(var i = 0; i < data.length; i++) {
            if(data[i] > max) {
                max = data[i]
                idx = [i]
            }
        }
        max = max.toFixed(4)
        if (idx == 0){
            result = "Your rice is " + labels[idx] + " (" + max*100 + "%)"
        }else{
            result = "Your rice is having " + labels[idx] + " (" + max*100 + "%)"
        }


        this.setState({message: result})
    }

    async predicting(){
        this.handleWait()

        const image = window.document.getElementsByTagName('img')[1]
        const img = tf.browser.fromPixels(image).resizeBilinear([224,224], false).mul(1./255.).expandDims(0)
        const prediction = this.model.predict(img);
        const result = await prediction.data()

        this.handleResult(result)
    }
    
    render(){
        return (
            <div className="content">
                <div className="item">
                    <img className="icon" src={require("../../assets/icon.png")} />
                </div>
                <div className="item">
                    <h2>RicEye</h2>
                    <h5>Know your rice plant better</h5>
                    <div>Created by Hansel Susanto, Brizky Ramadhani, Rike Adelia</div>
                </div>
                <input ref="file" type="file" name="images" accept="image/*" className="item upload" id="rice" onChange={this.imageHandler}/>
                <div className="item btn" onClick={this.predicting}>Predict!</div>
                <div>{this.state.message}</div>
                <div>
                    <img src={this.state.images} className="item image"/>
                </div>
            </div>
        );
    }
}
// export default Main