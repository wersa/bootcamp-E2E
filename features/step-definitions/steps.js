const { Given, When, Then } = require("@wdio/cucumber-framework");

// Background given

Given("Open the home page", async () => {
  await browser.url(`https://www.newegg.com`);
});

Given("Close the promo banner if it appears", async () => {
  const modal = $(".modal-content");
  const closeBtn = $(".modal-content > button");

  try {
    await modal.waitForDisplayed({
      timeoutMsg: "popup is not displayed",
    });

    await closeBtn.click();
  } catch (msg) {
    console.log(msg);
  }
});

// Search bar

When("Entry the word {string} in the search bar \\(top middle)", async (searchWord) => {
    await $('input[title="Search Site"]').setValue(searchWord);
  }
);

When("Click the search", async () => {
  await $("div.header2021-search-button > button").click();
});

Then("Check that at least one item appears", async () => {
  const itemCells = $(".list-tools-bar + .item-cells-wrap");

  await itemCells.waitForDisplayed({
    timeoutMsg: "container with items is not displayed",
  });

  await expect(itemCells).toHaveChildren({ gte: 1 });
});

// Internet shop logo button

When("Open {string} tab", async (tab) => {
  await $(`.swiper-wrapper  a[title="${tab}"]`).click();
});

When("Click on the Internet shop logo \\(top right corner)", async () => {
  await $(".header2021-logo > a > img").click();
});

Then("Check that the main page opened", async () => {
  const url = await browser.getUrl();
  await expect(url).toBe(`https://www.newegg.com/`);
});
