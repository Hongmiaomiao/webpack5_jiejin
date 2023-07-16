

(async () => {
    const { sayHello } = await import("RemoteApp/utils");
    sayHello();
  })();