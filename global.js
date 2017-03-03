#!/usr/bin/env node

// var vert = ["Node.js Version:",
//             "V8 Version:"]

// for (let elem of vert){

// let [...args] = process.argv

// console.log(elem, process.versions.node)}

const { versions: {node, v8} } = process,
    output = `Node.js Version: ${node}\nV8 Version: ${v8}`

    console.log(output)