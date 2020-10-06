import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Suscription from './views/Suscription';
import CreditCard from './views/CreditCard';
import Confirmation from './views/Confirmation';

import dataPlan from './data/plan.json';
import dataPackPlan from './data/packPlan.json';

class App extends Component {

  state = {
    user: {
      name: 'Nombre'
    },
    currentPlan: {
      name: 'Premium'
    },
    otherPlan: {
      type: 'Estándar'
    },
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

      objPlan.descriptionPlan = packPlan;

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

  confirmData = (history, e) => {
    e.preventDefault();

    const { name } = e.target;

    this.setState({
      user: {
        name: name.value
      }
    });

    history.push('/confirmacion')
  }

  render() {
    const { currentPlan, otherPlan, user } = this.state;

    return (
      <Router basename='/Desafio-EC'>
        <Switch>
          <Route path='/' exact render={() => <Suscription changeTypePlan={this.changePlan} plan={currentPlan} />} />
          <Route path='/datos' render={(props) => <CreditCard {...props} changeTypePlan={this.changePlan} confirmData={this.confirmData} plan={currentPlan} otherPlan={otherPlan.type} />} />
          <Route path='/confirmacion' render={() => <Confirmation name={user.name} plan={currentPlan} />} />
        </Switch>
      </Router>
    );
  }
}

export default (App);
