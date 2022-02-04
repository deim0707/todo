import React from "react";
import ErrorComponent from "./ErrorComponent";

interface ErrorBoundaryProps {
    children: JSX.Element | JSX.Element [],
}

interface ErrorBoundaryState {
    isError: boolean,
    errorMessage: Error,
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = {
        isError: false,
        errorMessage: new Error(),
    }

    static getDerivedStateFromError(error: Error) {
        console.error(error);
        return {isError: true, errorMessage: error};
    }


    //Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    // componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    //     console.log("componentDidCatch",{error, errorInfo});
    // }

    render() {
        if (this.state.isError) return <ErrorComponent message={this.state.errorMessage}/>
        return <div>{this.props.children}</div>
    }
}

export default ErrorBoundary;