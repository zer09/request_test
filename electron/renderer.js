// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {
  ipcRenderer
} = require('electron')
const request = require('request')
const root = 'http://localhost:3000';
const rp = require('request-promise');

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  triggerCall();
})

ipcRenderer.on('asynchronous-reply2', (event, args) => {
  triggerCall2();
});

ipcRenderer.on('asynchronous-reply3', (event, args) => {
  triggerCall3();
})

function triggerCall() {
  request({
    url: root + '/routes/get1',
    method: 'GET'
  }, (err, req, body) => {
    if (err) {
      console.log(err);
    } else {
      console.log({
        request: 'First Request',
        body: body,
        type: 'GET',
        time: new Date()
      });

      request({
        url: root + '/routes/get2',
        method: 'GET'
      }, (err, req, body) => {
        if (err) {
          console.log(err);
        } else {
          console.log({
            request: 'First Request',
            body: body,
            type: 'GET',
            time: new Date()
          });
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
      console.log(err);
    } else {
      console.log({
        request: 'First Request',
        body: body,
        type: 'POST',
        time: new Date()
      });

      request({
        url: root + '/routes/post2',
        method: 'POST',
        body: 'no data'
      }, (err, req, body) => {
        if (err) {
          console.log(err);
        } else {
          console.log({
            request: 'Second Request',
            body: body,
            type: 'POST',
            time: new Date()
          });
        }
      })
    }
  });
};

function triggerCall3() {
  rp({
    url: root + '/routes/post1',
    method: 'POST',
    body: 'no data'
  }).then(data => {
    console.log({
      request: 'First Request',
      body: data,
      type: 'POST',
      time: new Date()
    });

    return rp({
      url: root + '/routes/post2',
      method: 'POST',
      body: 'no data'
    });
  }).then(data => {
    console.log({
      request: 'Second Request',
      body: data,
      type: 'POST',
      time: new Date()
    });
  }).catch(err => {
    console.log(err);
  })
}
