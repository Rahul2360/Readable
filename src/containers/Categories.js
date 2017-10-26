import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {getPosts} from '../actions/postAction';
import {getCategories} from '../actions/categoryAction';


class categories extends Component {
  render() {
    let {category,post} = this.props;
    return (
      <div>
        Hello world
      </div>
    )
  }
}

export default categories
