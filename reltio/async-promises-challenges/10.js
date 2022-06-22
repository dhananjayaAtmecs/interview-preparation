const happy = (v, ms) => new Promise((resolve) => setTimeout(() => resolve(v), ms))
const sad = (v, ms) => new Promise((_, reject) => setTimeout(() => reject(v), ms))

Promise.all([happy('happy', 100), sad('sad', 50)])
  .then(console.log).catch(console.log) // 'sad'
