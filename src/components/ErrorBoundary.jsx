import React from "react";
import { Link } from "react-router-dom";
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1 className="text-gray-500 text-center text-3xl mt-40">Something went wrong. <br /> Reload page and try again. <br /> <Link to="/" className="text-white hover:text-gray-300">Go Back Home</Link></h1>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;