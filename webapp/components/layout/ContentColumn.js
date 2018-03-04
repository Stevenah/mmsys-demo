import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import 'style/layout/GridLayout.scss';

class ContentColumn extends Component {
    render() {
        return (
            <Grid.Column className='grid-column'>
                {this.props.children}
            </Grid.Column>
        )
    }
}

export default ContentColumn;