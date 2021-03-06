import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Button,
    Table,
    Icon,
  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function ListTableRow({ list, onClick, onDelete, activeListId }) {
  return (
    <Table.Row active={activeListId === list._id} onClick={() => onClick(list._id)}>
      <Table.Cell verticalAlgin='middle' selectable>
        <Link to={`/list/${list._id}`} style={{ display: "block" }}>
          {list.name}
          <Button onClick={() => onDelete(list._id)} size='mini' compact floated='right' icon="trash" />
        </Link>
        </Table.Cell>
    </Table.Row>
  )
};

ListTableRow.propTypes = {
  list: PropTypes.shape({
    _id: PropTypes.number,
    name: PropTypes.string,
  }),
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  activeListId: PropTypes.number,
}

ListTableRow.defaultProps = {
  onClick: null,
  onDelete: null,
  activeListId: null,
}

const mapStateToProps = (state) => ({
  activeListId: state.list.listSelected._id,
});

export default connect(mapStateToProps)(ListTableRow);
