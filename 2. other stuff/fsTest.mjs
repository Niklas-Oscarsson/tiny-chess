import { promises as fs } from 'fs'


fs.mkdir('./madeByNode/awesome', {recursive:true})
    .then()
    .then((res) => { console.log(res) })
    .then(rm)
    .catch( err => { return err })

function rm() {
    fs.rm('./madeByNode', {force: true, recursive: true})
        .then()
        .then(res => { console.log( `Deleted`) })
        .catch(err => {
            return err
        })
}