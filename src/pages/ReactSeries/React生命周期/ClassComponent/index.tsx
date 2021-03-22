import React from 'react';

class TheLifeCycle extends React.Component<{ title: string }> {
  constructor(props: any) {
    super(props);
    console.log(props.title, 'constructor');
  }

  componentDidMount() {
    console.log(this.props.title, 'componentDidMount');
  }

  componentDidUpdate() {
    console.log(this.props.title, 'componentDidMount');
  }

  render() {
    console.log(this.props.title, 'render');
    return <>Class组件生命周期</>;
  }
}

const injectionProps = (ReactCom: any) => {
  return class extends React.Component {
    render() {
      return <ReactCom {...this.props} title="有值了" />;
    }
  };
};

export default injectionProps(TheLifeCycle);
