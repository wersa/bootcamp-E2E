const { Given, When, Then } = require("@wdio/cucumber-framework");

Given("the user has opened the home page", async () => {
  await browser.url(`https://www.newegg.com`);
});

Given("the user closed the promo banner if it was displayed", async () => {
  const closeBtn = $(".modal-content > button");
  
  try {
    await closeBtn.waitForDisplayed();
  } catch (msg) {
    console.log(msg);
  }

  await closeBtn.isDisplayed() && await closeBtn.click();
});


When("the user enters the word {string} in the search bar", async (searchWord) => {
    await $('input[title="Search Site"]').setValue(searchWord);
  }
);

When("the user clicks the search button icon", async () => {
  await $("div.header2021-search-button > button").click();
});

Then("at least one item is shown on the results page", async () => {
  const itemCells = $(".list-tools-bar + .item-cells-wrap");

  await itemCells.waitForDisplayed({
    timeoutMsg: "container with items is not displayed",
  });

  await expect(itemCells).toHaveChildren({ gte: 1 });
});


When("the user opens {string} tab", async (tab) => {
  await $(`.swiper-wrapper  a[title="${tab}"]`).click();
});

When("the user clicks on the Internet shop logo", async () => {
  await $(".header2021-logo > a > img").click();
});

Then("the user should be redirected to the home page", async () => {
  const url = await browser.getUrl();
  await expect(url).toBe(`https://www.newegg.com/`);
});
