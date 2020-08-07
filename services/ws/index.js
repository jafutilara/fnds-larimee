const colors = require('colors');

var cloudflare = require('cloudflare-express');
const today = new Date().toLocaleDateString();
const remote = `[REMOTE]: `;
const date = `[${today}]`;
const _today = colors.bold.grey.black.blue(remote);
const _remote = colors.bold.grey.black.gray(date);


class WebSocket {
  constructor(io) {
    this._io = io;
  }


  onNewConnection(socket) {
    console.log(`${_remote}${_today} Client request performed!`);

    socket.on('message', message => this._io.emit('message', message))
  }
}

module.exports = io => new WebSocket(io);
