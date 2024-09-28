from abc import ABC, abstractmethod


class UserManagement(ABC):

    @abstractmethod
    def update_user_profile(self, user):
        pass

    @abstractmethod
    def change_password(self, user, new_password):
        pass