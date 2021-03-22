import React from 'react';

class Son extends React.Component {
  constructor(props: any) {
    super(props);
    console.log('儿子的constructor');
  }
  componentDidMount() {
    console.log('儿子的componentDidMount');
  }

  componentDidUpdate() {
    console.log('儿子的componentDidMount');
  }

  render() {
    console.log('儿子的render');
    return <>儿子</>;
  }
}
class Brothers extends React.Component {
  constructor(props: any) {
    super(props);
    console.log('兄弟constructor');
  }
  componentDidMount() {
    console.log('兄弟componentDidMount');
  }

  componentDidUpdate() {
    console.log('兄弟componentDidMount');
  }

  render() {
    console.log('儿子render');
    return <>兄弟</>;
  }
}

class Father extends React.Component {
  constructor(props: any) {
    super(props);
    console.log('父亲的constructor');
  }
  componentDidMount() {
    console.log('父亲的componentDidMount');
  }

  componentDidUpdate() {
    console.log('父亲的componentDidMount');
  }

  render() {
    console.log('父亲的render');
    return (
      <>
        <Son />
        <Brothers />
      </>
    );
  }
}
class Mother extends React.Component {
  constructor(props: any) {
    super(props);
    console.log('母亲的constructor');
  }
  componentDidMount() {
    console.log('母亲的componentDidMount');
  }

  componentDidUpdate() {
    console.log('母亲的componentDidMount');
  }

  render() {
    console.log('母亲的render');
    return <Son />;
  }
}

class ClassLifeCycle extends React.Component {
  constructor(props: any) {
    super(props);
    console.log('爷爷的constructor');
  }

  componentDidMount() {
    console.log('爷爷的componentDidMount');
  }

  componentDidUpdate() {
    console.log('爷爷的componentDidMount');
  }

  render() {
    console.log('爷爷的render');
    return (
      <>
        <Father />
        <Mother />
      </>
    );
  }
}

export default ClassLifeCycle;
