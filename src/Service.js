import React, { useEffect, useState } from "react";
import "./App.css";
import "./styles.scss";
import Icon from './Icon';

const Service = ({ name, size = '48px' }) => {
  return <section>
  <Icon name="windows-11-48"/>
  <h3>Software Development</h3>
  <p>Design, build, and refine digital solutions and systems to meet your specific business needs and goals</p>
</section>;
};

export default Service;

