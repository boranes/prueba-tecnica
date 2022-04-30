import AuthService from "./auth.service";

const mockedToken = "QpwL5tke4Pnpja7X4";
const mockedEmail = "eve.holt@reqres.in";

const fakeLocalStorage = (function () {
  let store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

describe("Testing Auth Service", () => {
  test("Register OK -> Should return id and token", async () => {
    return AuthService.register(mockedEmail, "xxx").then((data) => {
      expect(data).toEqual({ id: 4, token: mockedToken });
    });
  });

  test("Register KO -> Should return error message when email and pasword are empty", async () => {
    return AuthService.register("", "").then((data) => {
      expect(data).toEqual({ error: "Missing email or username" });
    });
  });

  test("Register KO -> Should return error message when password is empty", async () => {
    return AuthService.register(mockedEmail, "").then((data) => {
      expect(data).toEqual({ error: "Missing password" });
    });
  });

  test("Register KO -> Should return error message when email is wrong format", async () => {
    return AuthService.register("xxxx", "xxxx").then((data) => {
      expect(data).toEqual({
        error: "Note: Only defined users succeed registration",
      });
    });
  });

  test("Login OK -> Should return id and token", async () => {
    return AuthService.login(mockedEmail, "xxx").then((data) => {
      expect(data).toEqual({ token: mockedToken });
    });
  });

  test("Login KO -> Should return error message when password is empty", async () => {
    return AuthService.login(mockedEmail, "").then((data) => {
      expect(data).toEqual({ error: "Missing password" });
    });
  });

  test("Login KO -> Should return error message when email and pasword are empty", async () => {
    return AuthService.login("", "").then((data) => {
      expect(data).toEqual({ error: "Missing email or username" });
    });
  });

  test("Login KO -> Should return error message when email is wrong format", async () => {
    return AuthService.login("xxxx", "xxxx").then((data) => {
      expect(data).toEqual({
        error: "user not found",
      });
    });
  });

  test("Logout -> Should remove 'currentUser' after logout action", async () => {
    Object.defineProperty(window, "localStorage", {
      value: fakeLocalStorage,
    });

    window.localStorage.setItem("currentUser", "123456789");
    expect(window.localStorage.getItem("currentUser")).toEqual("123456789");
    AuthService.logout();
    expect(window.localStorage.getItem("currentUser")).toBeNull();
  });
});
