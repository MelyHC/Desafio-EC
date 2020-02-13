import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Suscription from './views/Suscription';
import CreditCard from './views/CreditCard';
import Confirmation from './views/Confirmation';

import dataPlan from './data/plan.json';
import dataPackPlan from './data/packPlan.json';

class App extends Component {
  state = {
    user: {},
    currentPlan: {
      name: 'Premium'
    },
    otherPlan: {},
    dataAllPlan: []
  }

  componentDidMount() {
    const plan = dataPlan;
    const packPlan = dataPackPlan;
    let { currentPlan, otherPlan } = this.state;

    const allData = plan.map(objPlan => {

      if (currentPlan.name.toLowerCase() === objPlan.type.toLowerCase()) {

        currentPlan = objPlan;

      } else {

        otherPlan = objPlan;
      }

      objPlan.pack.forEach((numPlan, i) => {

        packPlan.forEach(descriptionPlan => {

          if (parseInt(numPlan) === parseInt(descriptionPlan.num)) {
            // numPlan = descriptionPlan;
            objPlan.pack[i] = descriptionPlan;
          }
        })
      });

      return objPlan;
    })

    this.setState({ dataAllPlan: allData, currentPlan, otherPlan });
  }

  changePlan = (e) => {

    const { currentPlan, otherPlan } = this.state;

    if (e.target.value.toLowerCase() !== currentPlan.type.toLowerCase()) {

      this.setState({ currentPlan: otherPlan, otherPlan: currentPlan })
    }
  }

  clickSuscriber =(e)=>{}

  render() {
    const {currentPlan, otherPlan} = this.state;
    return (
      <Router>
        <Switch>
          {/* <Route path='/' exac render={} /> */}
          <Route path='/' exac render={() => <Suscription changeTypePlan={this.changePlan} plan={currentPlan} />} />
          <Route path='/datos' exac render={CreditCard} />
          <Route path='/confirmacion' exac render={Confirmation} />
        </Switch>
      </Router>
    );
  }
}

export default App;
