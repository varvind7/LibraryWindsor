import React, { Component } from 'react';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

/**
 * Higher order component.
 *
 * @param      {Function}  importComponent  
 * @return     {Component}    
 */
export default function asyncComponent(importComponent) {
  class AsyncFunc extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }
    UNSAFE_componentWillMount() {
      Nprogress.start();
    }
    componentWillUnmount() {
      this.mounted = false;
    }
    async componentDidMount() {
      this.mounted = true;
      const { default: Component } = await importComponent();
      Nprogress.done();
      if (this.mounted) {
        this.setState({
          component: <Component {...this.props} />,
        });
      }
    }

    render() {
      const Component = this.state.component || <div />;
      return <div>{Component}</div>;
    }
  }
  return AsyncFunc;
}
