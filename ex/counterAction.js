export function inc() {
  return { tpe: 'INC' }
}

export function dec() {
  return { type: 'DEC' }
}

export function stepChanged(e) {
  return {
    type: 'STEP_CHANGED',
    paylod: e.target.value
  }
}
