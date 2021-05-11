import React ,{ Component } from "react";
import ReactDOM from 'react-dom';


 //conversion 
const Convert = sec => {
    
  
    let hours = Math.floor(sec / (3600));

    let hourRest = sec % (3600);
    let minutes = Math.floor(hourRest / 60);

    let minutesRest = hourRest % 60;
    let seconds = Math.ceil(minutesRest);
    
    return String(hours).padStart(2, '0') +
        ':' + String(minutes).padStart(2, '0') +
        ':' + String(seconds).padStart(2, '0')  
}

class Newtimer extends Component {
   
constructor(props){
super (props)
   this.state = {
        sec: "",
      }

      this.incrementation = this.incrementation.bind(this)
      this.stop = this.stop.bind(this)
    }


    incrementation () {
        if(this.state.interval) {
            return
        }
        const interval = setInterval(
            ()=> {
                this.setState({
                    sec:document.getElementById("valeur").value ++
                })
            },1000
        )
        this.setState({
            interval: interval
        })

        }
      Reset =() =>{ 
       this.setState({sec : 0} ) } 

       change = ()=>{
        this.setState(
        {sec:document.getElementById("valeur").value }
        )
       }
       stop () {
        if(!this.state.interval) {
            return
        }
        clearInterval(this.state.interval)
        this.setState({
            interval: undefined
        })
    }



     render() {
         return (
             <div>
        
   <div className="style"> 
   <h1> Timer</h1>
{/* récupération de la valeur de l'input */}
<input type="number" id="valeur"  onChange={this.change}
 placeholder="Entrer le nombre de seconde"/>
 {/* <button className="btn" > Convertir</button> */}

<div className="time-container">
        <div className="time-inner-container">
            <div className="time-digits">
            {Convert(this.state.sec)}
            </div>
            <div className="time-text">
                <div className="time-text-item">Hours </div>
                <div className="time-text-item">Minutes</div>
                <div className="time-text-item">Seconds</div>
            </div>
        </div>
    </div>
{/* 
<div className="conv">  <Convertisseur sec={this.state.InputValue }/> </div> */}
<div className="flex">
     <button className="btn start" onClick={this.incrementation}> Start </button>
     <button className="btn start" onClick={this.Reset}> Reset </button>
     <button className="btn start" onClick={this.stop}> Pause </button>

     </div> 
           
             </div>
        </div>
        
         )
     }
 }
 
 export default Newtimer
 ReactDOM.render(<Newtimer/>, document.getElementById('root'));
 