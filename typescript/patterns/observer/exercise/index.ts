import { Blog } from "./blog";
import { BlogManagement } from "./blog-management";
import { Newsletter } from "./newsletter";
import { User } from "./user";

const blogManagement = new BlogManagement();
const ahmed = new User("Ahmed");
const ali = new User("Ali");
const hussein = new User("Hussein");

blogManagement.subscribe("NEW_BLOGS", ahmed);
blogManagement.subscribe("NEWSLETTER", ahmed);

blogManagement.subscribe("NEW_BLOGS", ali);

blogManagement.subscribe("NEWSLETTER", hussein);

blogManagement.writeNewBlog(new Blog("Design Patterns"));
blogManagement.writeNewsletter(new Newsletter("Weekly Newsletter 1"));
