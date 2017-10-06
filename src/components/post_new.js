import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchPosts } from '../actions';

class PostsNew extends Component {
  render() {
    return (
      <form>
        <Field
          name="title"
          component={}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
