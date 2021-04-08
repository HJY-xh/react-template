import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.scss";

class Index extends React.Component<{}, {}> {
    render() {
        return <div className={styles.container}>Hello</div>;
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));
