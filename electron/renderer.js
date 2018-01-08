// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {
  ipcRenderer
} = require('electron')
const request = require('request')
const root = 'http://localhost:3000';

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(new Date());
  triggerCall();
})

ipcRenderer.on('asynchronous-reply2', (event, args) => {
  console.log(new Date());
  triggerCall2();
});

function triggerCall() {
  request({
    url: root + '/routes/get1',
    method: 'GET'
  }, (err, req, body) => {
    if (err) {
      console.log(err);
    } else {
      console.log(new Date());
      console.log(body);

      request({
        url: root + '/routes/get2',
        method: 'GET'
      }, (err, req, body) => {
        if (err) {
          console.log(err);
        } else {
          console.log(new Date());
          console.log(body);
        }
      });
    }
  });
};

function triggerCall2() {
  request({
    url: root + '/routes/post1',
    method: 'POST',
    body: 'no data'
  }, (err, req, body) => {
    if (err) {
      console.log(err)
    } else {
      console.log(new Date());
      console.log(body);

      request({
        url: root + '/routes/post2',
        method: 'POST',
        body: 'no data'
      }, (err, req, body) => {
        if (err) {
          console.log(err);
        } else {
          console.log(new Date());
          console.log(body);
        }
      })
    }
  });
};
