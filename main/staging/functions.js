const waitForElementToExist = async (element, waitTime) => {
  await browser.waitUntil(
    async () => await element.isExisting(),
    {
      timeout: waitTime,
      timeoutMsg: `Element ${element} did not exist after ${waitTime}ms`,
    }
  );
};

const isDisplayedArray = async (elements, waitTime) => {
  for (const element of elements) {
    await element.waitForDisplayed({ timeout: waitTime });
  }
};

const isDisplayed = async (elements, waitTime) => {
    await element.waitForDisplayed({ timeout: waitTime });
  }

const isClickable = async (element, waitTime) => {
  await element.waitForClickable({ timeout: waitTime });
};

const waitUntilLimitIsChanged = async (element, text) => {
  await browser.waitUntil(
    async () => (await element.getText()) === text, {
      timeout: 20000,
      timeoutMsg: `Expected text to be different after 20s`,
    }
  );
};

const checkTextsInArray = async (elements, texts) => {
  for (const element of elements) {
    const text = await element.getText();
    expect(text).toBe(texts[elements.indexOf(element)]);
  }
};

const containsTextsInArray = async (elements, texts) => {
  for (const element of elements) {
    const text = await element.getText();
    expect(text).toContain(texts[elements.indexOf(element)]);
  }
};

const containsText = async (element, text) => {
  const elementText = await element.getText();
  expect(elementText).toContain(text);
};

const textEquals = async (element, text) => {
  const elementText = await element.getText();
  expect(elementText).toBe(text);
};

const generateString = async (length) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    result += alphabet[randomIndex];
  }
  return result;
};

const checkUrl = async (expectedUrl) => {
  const currentUrl = await browser.getUrl();
  expect(currentUrl).toBe(expectedUrl);
};

// Export all functions
export {
  isDisplayed,
  isDisplayedArray,
  isClickable,
  waitUntilLimitIsChanged,
  checkTextsInArray,
  containsTextsInArray,
  containsText,
  textEquals,
  generateString,
  waitForElementToExist,
  checkUrl,
};
