import {GET_NODE_BLOCKS_START, GET_NODE_BLOCKS_SUCCESS, GET_NODE_BLOCKS_FAILURE} from '../constants/actionTypes';
import initialState from './initialState';

export default function nodesReducer(state = initialState().blocks, action) {
  switch (action.type) {
    case GET_NODE_BLOCKS_START:
      return {
        ...state,
        [action.node.url] : { loading: true, error: false, list: []}
      };
    case GET_NODE_BLOCKS_SUCCESS:
      return {
        ...state,
        [action.node.url] : { loading: false, error: false, list: action.res.data}
      };
    case GET_NODE_BLOCKS_FAILURE:

      return {
        ...state,
        [action.node.url] : { loading: false, error: action.res, list: []}
      };
    default:
      return state;
  }
}
