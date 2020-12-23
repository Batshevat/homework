import React, {Component} from 'react';

export default class weatherDetails extends Component{
    render(){
        return(
            <>
              <div class="row">
        <div className="mx-auto">The weather in {this.props.weather.location}</div>
      </div>
      <div className="row">
        <img id="weatherIcon" className="mx-auto" src={this.props.weather.icon} />
      </div>
      <div className="row">
        <div id="description" className="row mx-auto" {this.props.weather.description} ></div>
        </div>
      </>  
           
        )
    }
}