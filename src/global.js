// //semantic-ui-css
// import("semantic-ui-css/components/menu.min.css");
// import("semantic-ui-css/components/grid.min.css");
// import("semantic-ui-css/components/segment.min.css");
// import("semantic-ui-css/components/button.min.css");
// import("semantic-ui-css/components/label.min.css");
// import("semantic-ui-css/components/header.min.css");
// import("semantic-ui-css/components/image.min.css");
// import("semantic-ui-css/components/card.min.css");
// import("semantic-ui-css/components/modal.min.css");
// import("semantic-ui-css/components/message.min.css");
// import("semantic-ui-css/components/form.min.css");
// import("semantic-ui-css/components/input.min.css");

// imports from react
import React, { useState, Component, useEffect } from "react";

// imports from react router
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
  useHistory,
} from "react-router-dom";

// imports from semantic-ui-react
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Input from "semantic-ui-react/dist/commonjs/elements/Input";
import Message from "semantic-ui-react/dist/commonjs/collections/Message";
import Card from "semantic-ui-react/dist/commonjs/views/Card";
import Button from "semantic-ui-react/dist/commonjs/elements/Button";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
import Modal from "semantic-ui-react/dist/commonjs/modules/Modal";
import Header from "semantic-ui-react/dist/commonjs/elements/Header";
import Form from "semantic-ui-react/dist/commonjs/collections/Form";
import Label from "semantic-ui-react/dist/commonjs/elements/Label";

//imports from redux-form
import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/reduxForm";

//imports from redux
import { useDispatch, connect } from "react-redux";

//import ismobilejs
import { isMobile } from "react-device-detect";

export {
  React,
  useState,
  Component,
  Segment,
  Router,
  Switch,
  Route,
  NavLink,
  Input,
  Grid,
  Message,
  Card,
  Button,
  Image,
  Link,
  Modal,
  Header,
  Field,
  reduxForm,
  Form,
  useDispatch,
  connect,
  useHistory,
  Label,
  useEffect,
  isMobile,
};
