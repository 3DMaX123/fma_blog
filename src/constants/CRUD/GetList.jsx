import React from 'react'
import { variables } from '../../../constants/Variables';

function GetList(){
        fetch(variables.API_URL+'post')
        .then(response => response.json())
        .then(data => {
          this.setState({post: data});
        });
}

export default GetList