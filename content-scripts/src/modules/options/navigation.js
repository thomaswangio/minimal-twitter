import selectors from "../../selectors";
import svgAssets from "../svgAssets";
import addStyles, { removeStyles } from "../utilities/addStyles";
import { addSidebarButton } from "../utilities/sidebar";

// Utilities

export const changeSidebarSetting = (sidebarSelector, state, onAdd) => {
  switch (state) {
    case "off":
      addStyles(
        sidebarSelector,
        `${selectors.sidebarLinks[sidebarSelector]} {
          display: none;
        }`
      );
      break;

    case "on":
      removeStyles(sidebarSelector);
      onAdd?.();
      break;
  }
};

// Functions

export const changeSidebarLogo = (state) => changeSidebarSetting("logo", state);
export const changeHomeButton = (state) => changeSidebarSetting("home", state);
export const changeExploreButton = (state) => changeSidebarSetting("explore", state);
export const changeNotificationsButton = (state) => changeSidebarSetting("notifications", state);
export const changeMessagesButton = (state) => changeSidebarSetting("messages", state);
export const changeBookmarksButton = (state) => changeSidebarSetting("bookmarks", state);
export const changeTopArticlesButton = (state) => changeSidebarSetting("articles", state);
export const changeVerifiedOrgsButton = (state) => changeSidebarSetting("verifiedOrgs", state);
export const changeProfileButton = (state) => changeSidebarSetting("profile", state);
export const changeXPremiumButton = (state) => changeSidebarSetting("xPremium", state, addXPremiumButton);
export const changeTopicsButton = (state) => changeSidebarSetting("topics", state, addTopicsButton);
export const changeCommunitiesButton = (state) => changeSidebarSetting("communities", state, addCommunitiesButton);
export const changeListsButton = (state) => changeSidebarSetting("lists", state, addListsButton);
export const changeAnalyticsButton = (state) => changeSidebarSetting("analytics", state, addAnalyticsButton);

let tm1;
export const addXPremiumButton = (forced) => {
  clearTimeout(tm1);
  tm1 = setTimeout(() => {
    addSidebarButton({
      name: "Twitter Blue",
      href: "/settings/twitter_blue",
      svgAsset: svgAssets.xPremium.normal,
      forced,
    });
  }, 1);
};

let tm2;
export const addAnalyticsButton = (forced) => {
  clearTimeout(tm2);
  tm2 = setTimeout(() => {
    addSidebarButton({
      name: "Analytics",
      forced,
      svgAsset: svgAssets.grow.normal,
      onClick: () => {
        const screenName = document.querySelector(`a[role="link"][data-testid="AppTabBar_Profile_Link"]`)?.getAttribute("href").replace("/", "");
        if (screenName) window.open(`https://typefully.com/grow?ref=minimal-twitter&mt-screen-name=${screenName}`, "_blank");
      },
    });
  }, 2);
};

export const addTopicsButton = (forced) => {
  addSidebarButton({
    name: "Topics",
    userHref: "/topics",
    svgAsset: svgAssets.topics.normal,
    forced,
  });
};

export const addCommunitiesButton = (forced) => {
  addSidebarButton({
    name: "Communities",
    userHref: "/communities",
    svgAsset: svgAssets.communities.normal,
    forced,
  });
};

export const addListsButton = (forced) => {
  addSidebarButton({
    name: "Lists",
    userHref: "/lists",
    svgAsset: svgAssets.lists.normal,
    forced,
  });
};

export const changeUnreadCountBadge = (unreadCountBadge) => {
  switch (unreadCountBadge) {
    case "on":
      removeStyles("unreadCountBadge");
      break;
    case "off":
      addStyles(
        "unreadCountBadge",
        `${selectors.leftSidebarUnreadBadge} {
          display: none;
        }
        ${selectors.accountSwitcherButton} > div > svg+div[aria-label] {
          display: none;
        }`
      );
      break;
  }
};

const removeLabelsShownOnHover = () => {
  addStyles(
    "navigationButtonsLabelsHover",
    `
    ${selectors.leftSidebarLinks} div + div[dir] {
      display: none;
    }
    ${selectors.leftSidebarLinks} * div[dir]:not([aria-label]) > span {
      display: none;
    }
    ${selectors.leftSidebar} > div > div > div > div:last-child {
      width: fit-content;
    }
    ${selectors.accountSwitcherButton} {
      bottom: 12px;
      width: fit-content;
    }
    ${selectors.accountSwitcherButton} > div:not(:first-child) {
      display: none;
    }
    `
  );
};

export const changeNavigationButtonsLabelsHover = async (setting) => {
  switch (setting) {
    case "off":
      removeLabelsShownOnHover();
      break;

    case "on":
      removeStyles("navigationButtonsLabelsHover");
      break;
  }
};

export const changeNavigationButtonsLabels = async (setting) => {
  switch (setting) {
    case "on":
      removeStyles("navigationButtonsLabelsHover");
      addStyles(
        "navigationButtonsLabels",
        `
        ${selectors.leftSidebarLinks} * div[dir]:not([aria-label]) > span,
        ${selectors.accountSwitcherButton} > div:not(:first-child) {
          opacity: 1;
        }
        `
      );
      break;

    case "off":
      removeLabelsShownOnHover();
      removeStyles("navigationButtonsLabels");

      break;
  }
};

export const changeNavigationCenter = (navigationCenter) => {
  switch (navigationCenter) {
    case "on":
      addStyles(
        "navigationCenter",
        `
        ${selectors.leftSidebar} > div > div > div {
          justify-content: center;
          padding-top: 0;
        }
        `
      );
      break;

    case "off":
      removeStyles("navigationCenter");
      break;
  }
};
