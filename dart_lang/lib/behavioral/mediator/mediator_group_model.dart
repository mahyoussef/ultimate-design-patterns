// import 'package:dart_lang/behavioral/mediator/mediator_user_model.dart';

// class GroupModel {
//   final String name;
//   List<MediatorUserModel> users;
//   GroupModel(this.users, this.name);
//   void addUser(MediatorUserModel user) {
//     users.add(user);
//   }

//   void sendMessage(String message, MediatorUserModel user) {
//     users.forEach((element) {
//       if (element != user) {
//         element.reciveDirectMessage(message, user);
//       }
//     });
//   }

//   void reciveMessage(String message, MediatorUserModel fromUser) {
//     print(' in group $name User ${fromUser.name} recived message: $message ');
//     users.forEach((user) {
//       if (user != fromUser) {
//         user.reciveMessageeGroup(message, this, fromUser);
//       }
//     });
//   }
// }
