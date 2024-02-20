package ultimate;

public class ThirdPartyMessageHandlerApi {

    public String processMessage(String message) {
        System.out.println("proceeding the message");
        return message + " is answer successfully";
    }
}
