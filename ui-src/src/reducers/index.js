import * as A from '../actions'

const initialState = {}

export default function AnchorApp (state = initialState, action) {
  const { type, meta, payload } = action
  console.log(type)
  switch (type) {
    case A.GET_ANCHORS:
      return {
        ...state,
        handles: {
          ...state.handles,
          [meta.data]: payload
        },
        handle: meta.isMe ? payload : state.handle
      }
    default:
      return state
  }
}
