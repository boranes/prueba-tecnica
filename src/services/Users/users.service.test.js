import UserService from "./users.service";

describe("Testing User Service", () => {
  test("Should get a list of users with length equal or greater than zero", async () => {
    return UserService.getUsers().then((res) => {
      expect(res.data.length).toBeGreaterThanOrEqual(0);
    });
  });

  test("Should get a single user with correct type of data", async () => {
    return UserService.getUser(2).then((res) => {
      const { data } = res;
      expect(typeof data.id).toBe("number");
      expect(typeof data.email).toBe("string");
      expect(typeof data.first_name).toBe("string");
      expect(typeof data.last_name).toBe("string");
      expect(typeof data.avatar).toBe("string");
    });
  });

  test("Should update user correctly", async () => {
    const updatedUser = {
      id: 2,
      name: "morpheus",
      job: "zion resident",
    };
    return UserService.updateUser(updatedUser).then((data) => {
      expect(data.name).toBe(updatedUser.name);
      expect(data.job).toBe(updatedUser.job);
      expect(data.updatedAt).not.toBeUndefined();
      expect(data.updatedAt).not.toBeNull();
    });
  });

  test("Should delete user correctly", async () => {
    return UserService.deleteUser(1).then((data) => {
      expect(data).toBe("");
    });
  });
});
