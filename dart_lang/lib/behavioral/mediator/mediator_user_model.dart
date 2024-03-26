import 'package:Strategy_design/behavioral/mediator/chat_mediator.dart';
import 'package:Strategy_design/behavioral/mediator/mediator_group_model.dart';

class MediatorUserModel {
  String name;
  ChatMediator chatMediator;
  MediatorUserModel(this.name, this.chatMediator);
  void sendDirectMessage(String message, MediatorUserModel user) {
    chatMediator.sendDirectMessage(message, user, this);
  }

  void reciveDirectMessage(String message, MediatorUserModel user) {
    print('User ${user.name} recived message: $message');
  }

  void sendMessageeGroup(String message, String groupName) {
    print('User ${name} send message: $message to group ${groupName}');
    // groupModel.reciveMessage(message, this);
    chatMediator.sendGroupMessage(message, groupName, this);
  }

  void reciveMessageeGroup(
      String message, String groupName, MediatorUserModel user) {
    print(
        ' in group ${groupName} User ${name} recived message: $message from user ${user.name}');
    chatMediator.sendGroupMessage(message, groupName, this);
  }
}
