import React, { PropTypes as T } from 'react';
import classnames from 'classnames';

import Item from './Item';
import styles from './styles.module.css';

export const Listing = (props) => {
  return (
    <div className={classnames(styles.container)}>
    {props.places.map(place => {
      return (
        <Item place={place}
              onClick={props.onClick}
              key={place.id} />
      )
    })}
    </div>
  )
}

export default Listing
