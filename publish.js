const config = require('./config.js')
const path = require('path')
const fs = require('fs')
const exec = require('child_process').exec
const tmpDir = require('os').tmpdir()

async function publish () {
  function createFolder (folder) {
    return new Promise((resolve, reject) => {
      fs.mkdir(folder, async err => {
        if (err) {
          switch (err.code) {
            case 'EEXIST':
              break
            case 'ENOENT':
              try {
                await createFolder(path.dirname(folder))
              } catch (err) {
                return reject(err)
              }
              break
            default:
              return reject(err)
          }
        }
        console.log(`Folder ${folder} creado`)
        return resolve(folder)
      })
    })
  }
  function copyFolder (srcFolder, destFolder) {
    return new Promise((resolve, reject) => {
      console.log(`Entrando en folder ${srcFolder}.`)
      fs.readdir(srcFolder, async (err, files) => {
        if (err) return reject(err)
        if (files.length > 0) {
          try {
            await createFolder(destFolder)
            await Promise.all(files.map(file => {
              return new Promise((resolve, reject) => {
                fs.copyFile(path.join(srcFolder, file), path.join(destFolder, file), err => {
                  if (err) return reject(err)
                  console.log(`Copiado archivo ${file}`)
                  return resolve(file)
                })
              })
            }))
          } catch (err) { return reject(err) }
        }
        return resolve(destFolder)
      })
    })
  }
  function renameFolder (currentName, newName) {
    return new Promise((resolve, reject) => {
      fs.rename(currentName, newName, function (err) {
        if (err) return reject(err)
        return resolve()
      })
    })
  }
  function moveFolderToTmp (folder) {
    return new Promise((resolve, reject) => {
      const hash = Date.now()
      // Linux:
      exec(`mv ${folder} ${path.join(tmpDir, `${path.basename(folder)}_${hash}`)}`, function (err) {
        if (err) return reject(err)
        return resolve()
      })
    })
  }
  console.log('\x1b[33m%s\x1b[0m', 'Copia de archivos estáticos')
  await Promise.all(config.folders.map(async folder => {
    await copyFolder(path.join(__dirname, 'src', folder), path.join(__dirname, 'public', folder)).catch(err => { throw err })
  })).catch(err => { throw err })
  await moveFolderToTmp(config.buildPaths.oldPath).catch(err => { throw err })
  await renameFolder(config.buildPaths.publicPath, config.buildPaths.oldPath).catch(err => { throw err })
  await renameFolder(path.join(__dirname, 'public'), config.buildPaths.publicPath).catch(err => { throw err })
}

publish()
