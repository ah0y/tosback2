'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_tasks = function (req, res) {
  Task.find({}, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_a_task = function (req, res) {
  function getCommitResponse() {
    var TOSURL = require('../index.js');
    TOSURL.setPath('../crawl_reviewed/' + req.body.name);
    var commit = TOSURL.getCommit();
    return commit
  }

  getCommitResponse().then(function (commitInfo) {
    var new_task = new Task(req.body);
    new_task.commit = commitInfo.valueOf('value')[0]
    console.log(new_task.commit)
    new_task.commitDate = commitInfo.valueOf('value')[1]
    console.log(new_task.commitDate)
    new_task.save(function (err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  })
};


exports.read_a_task = function (req, res) {
  Task.findById(req.params.taskId, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function (req, res) {
  Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function (req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function (err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
