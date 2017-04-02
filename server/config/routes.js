var controller = require('./../controllers/controller.js')

module.exports = function(app){
  app.post('/register', controller.register);
  app.post('/login', controller.login);
  app.get('/getUser', controller.getUser);
  app.get('/logout', controller.logout);
  app.post('/addQuestion', controller.addQuestion);
  app.get('/getQuestions', controller.getQuestions);
  app.get('/show/:id', controller.show);
  app.post('/addAnswer', controller.addAnswer);
  app.get('/addLike/:id', controller.addLike);
  app.get('/addLike2/:id', controller.addLike2);
  app.get('/addLike3/:id', controller.addLike3);
  app.get('/addLike4/:id', controller.addLike4);
  app.delete('/delete/:id', controller.deleteQuestion);
}
