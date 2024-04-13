import 'package:dart_lang/behavioral/mediator/chat_mediator.dart';
import 'package:dart_lang/behavioral/mediator/mediator_user_model.dart';

class ChatManagmenet implements ChatMediator {
  Map<String, List<MediatorUserModel>> groups;
  ChatManagmenet(this.groups);

  @override
  void registerUserToGroup(String groupName, MediatorUserModel user) {
    if (groups.containsKey(groupName)) {
      groups[groupName]!.add(user);
      return;
    } else {
      groups[groupName] = [user];
      return;
    }
  }

  @override
  void sendDirectMessage(
      String message, MediatorUserModel toUser, MediatorUserModel fromUser) {
    print(
        'from user ${fromUser.name} Sending Message ${message} to user${toUser.name} ');
    toUser.reciveDirectMessage(message, fromUser);
  }

  @override
  void sendGroupMessage(
      String message, String groupName, MediatorUserModel fromUser) {
    print(
        'from  ${fromUser.name} Sending Message ${message} to group${groupName}');
    if (groups.containsKey(groupName)) {
      groups[groupName]!.forEach((element) {
        if (element != fromUser) {
          element.reciveMessageeGroup(message, groupName, fromUser);
          return;
        }
      });
      return;
    }
  }
}
