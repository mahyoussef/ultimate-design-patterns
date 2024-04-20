import 'package:dart_lang/b_behavioral/i_mediator/mediator_user_model.dart';

abstract class ChatMediator {
  void sendDirectMessage(
      String message, MediatorUserModel toUser, MediatorUserModel fromUser);
  void sendGroupMessage(
      String message, String toGroup, MediatorUserModel fromUSer);
  void registerUserToGroup(String groupName, MediatorUserModel user);
}
