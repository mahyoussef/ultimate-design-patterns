namespace Solid
{
    public class Payment
    {
        private string type;

        public Payment(string type)
        {
            this.type = type;
        }

        public string GetType()
        {
            return type;
        }
    }
}
