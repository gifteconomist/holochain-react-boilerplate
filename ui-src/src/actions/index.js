// Holochain actions
export const GET_ANCHORS = 'anchors'

export function getAnchors(userHash, isMe = false, then) {
  return {
    type: GET_ANCHORS,
    meta: {
      isHc: true,
      namespace: 'HoloAnchors',
      data: userHash,
      isMe,
      then
    }
  }
}
