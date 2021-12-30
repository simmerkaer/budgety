import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "./entity/User";

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "hi!";
  }

  @Query(() => [User])
  users() {
    return User.find();
  }

  @Mutation(() => Boolean)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    try {
      await User.insert({
        email,
        password,
      });
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  }
}
