import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
    const req = axios.get(baseUrl)
    const fakeNoteForTest = {
        id:9999,
        content:"THIS NOTE DOES NOT EXIST",
        date:"2070-01-01T00:30:31.098Z",
        important:true
    }
    return req.then(res => res.data.concat(fakeNoteForTest))
}

const create = (newObject) => {
    const req = axios.post(baseUrl, newObject)
    return req.then(res => res.data)
}

const update = (id, newObject) => {
    const req = axios.put(baseUrl+"/"+id, newObject)
    return req.then(res => res.data)
}

export default {
    getAll: getAll,
    create: create,
    update: update
}
/* koska exportataan samalla nimellä kuin ne täällä esitellään niin voi myös

export default {
    getAll,
    create,
    update
}

*/