let noteId = 0

export function addNote(payload) {
    return {
        type: "AddNote", 
        payload: { ...payload, id: ++noteId }
    }
}

export function removeNote(id) {
    return {
        type: "RemoveNote", 
        payload: id
    }
}

export function editNote(payload) {
    return {
        type: "EditNote", 
        payload,
    }
}
