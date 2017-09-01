export const SET_MODEL = 'SET_MODEL'
export const SET_WIREFRAME = 'SET_WIREFRAME'

export const setModel = (name,model) => {return {type:SET_MODEL,payload:{name:name,model:model}}}
export const setWireframe = (state) => {return {type:SET_WIREFRAME,payload:state}}
