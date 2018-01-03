import React from "react";
import { string } from "prop-types";
import styles from "./styles.scss";

const displayName = "Product";

const defaultProps = {
	title: "Hello",
};

const propTypes = {
	title: string,
};

const component = ({ title }) => (
	<div className={styles.hello} >
		<h1>{title}</h1>
	</div>
);

component.displayName = displayName;
component.defaultProps = defaultProps;
component.propTypes = propTypes;
export default component;
