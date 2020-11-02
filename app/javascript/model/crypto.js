export async function loadPGP() {
  await import("../lib/openpgp");
}

export async function generateKey() {
  await loadPGP();
  const name = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  const email = Date.now() + "@example.com";
  return await openpgp.generateKey({
    curve: "curve25519",
    userIds: [{ name: name, email: email }],
  });
}

export async function encryptText(text, key) {
  await loadPGP();
  const message = openpgp.message.fromText(text);
  const publicKeyArmored = key;

  const { data: encrypted } = await openpgp.encrypt({
    message: message,
    publicKeys: (await openpgp.key.readArmored(publicKeyArmored)).keys
  });

  return encrypted;
}

export async function decryptText(text, key) {
  await loadPGP();
  const privateKeyArmored = key;
  const { keys: [privateKey] } = await openpgp.key.readArmored(privateKeyArmored);

  const { data: decrypted } = await openpgp.decrypt({
      message: await openpgp.message.readArmored(text),
      privateKeys: [privateKey]
  });

  return decrypted;
}
