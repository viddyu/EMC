import React, {Component} from "react"
import "./Forms.js"

class Forms extends Component{
	render(){
		return <form class="container card">
          <label>
          <input type="text" name="name" placeholder="Name" class="label" />
          </label>
          <input class="btn" type="submit" value="Submit"/>
          <br/>
          <label>
          <input type="age" name="age" placeholder="Age" class="label" />
          </label>
          <input class="btn" type="submit" value="Submit" />
          <br/>
          <label>
          <input type="text" name="blood-type" placeholder="Blood Type" class="label" />
          </label>
          <input class="btn" type="submit" value="Submit" />
          <br/>
          <label>
          <input type="text" name="heart-rate" placeholder="Heart Rate" class="label" />
          </label>
          <input class="btn" type="submit" value="Submit" />
          <br/>
          <label>
          <input type="text" name="breath-rate" placeholder="Breath Rate" class="label" />
          </label>
          <input class="btn" type="submit" value="Submit" />
          <br/>
          <label>
          <input type="text" name="blood-pressure" placeholder="Blood Pressure" class="label" />
          </label>
          <input class="btn" type="submit" value="Submit" />
          </form>
	}
}

export default Forms;